<template>
  <div class="flex h-screen overflow-hidden">
    <Loader />
    <Sidebar />
    <div
      class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"
    >
      <Header />
      <router-view v-slot="{ Component }">
        <transition name="slide-fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Loader from "@/components/Loader.vue";
import { mapState } from "vuex";

import Alpine from "alpinejs";
import persist from "@alpinejs/persist";
import flatpickr from "flatpickr";

export default {
  name: "App",
  components: { Header, Sidebar, Loader },
  data() {
    return {};
  },
  computed: {
    ...mapState(["toasterData"]),
  },

  watch: {
    toasterData: {
      deep: true,
      handler(toasterData) {
        if (this.toasterData) {
          this.$toast.open(toasterData);
          setTimeout(() => {
            this.$store.commit("SET_TOASTER_MSG", null);
          }, 500);
        }
      },
    },
  },
  beforeCreate() {
    Alpine.plugin(persist);
    window.Alpine = Alpine;
    Alpine.start();
  },
  async mounted() {
    await this.$store.dispatch("fetchProperties");
    await this.$store.dispatch("fetchBlogs");
    await this.$store.dispatch("fetchAgents");

    // Init flatpickr
    flatpickr(".datepicker", {
      mode: "range",
      static: true,
      monthSelectorType: "static",
      dateFormat: "M j, Y",
      defaultDate: [new Date().setDate(new Date().getDate() - 6), new Date()],
      prevArrow:
        '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
      nextArrow:
        '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
      onReady: (selectedDates, dateStr, instance) => {
        // eslint-disable-next-line no-param-reassign
        instance.element.value = dateStr.replace("to", "-");
        const customClass = instance.element.getAttribute("data-class");
        instance.calendarContainer.classList.add(customClass);
      },
      onChange: (selectedDates, dateStr, instance) => {
        // eslint-disable-next-line no-param-reassign
        instance.element.value = dateStr.replace("to", "-");
      },
    });
  },
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
