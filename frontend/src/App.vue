<template>
  <div>
    <Header v-if="!['/', '/buy', '/sell'].includes($route.path)" />
    <router-view v-slot="{ Component }">
      <transition name="slide-fade">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
    <Toaster />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Toaster from "@/components/ui/toast/Toaster.vue";
import { useToast } from "@/components/ui/toast/use-toast";
import { mapState } from "vuex";
const { toast } = useToast();

export default {
  name: "App",
  components: { Header, Footer, Toaster },
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
        toast(toasterData);
      },
    },
  },
  async mounted() {
    await this.$store.dispatch("fetchListings");
    await this.$store.dispatch("fetchBlogs");
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
