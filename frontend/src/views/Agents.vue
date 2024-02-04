<template>
  <div class="bg-white p-4 md:py-8">
    <div class="text-center">
      <h1 class="text-2xl font-semibold">AGENT/ PARTNER</h1>
      <span class="text-gray-800">Our Diversity Makes Us Great</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 md:w-[75%] mx-auto">
      <div
        @click="goToAgent(agent)"
        class="relative cursor-pointer"
        v-for="(agent, i) in agents"
        :key="i"
      >
        <img
          :src="agent.img"
          alt="Property"
          class="h-auto"
          width="400"
          style="aspect-ratio: 1/1; object-fit: cover"
        />
        <!-- <div
          class="inline-flex items-center border px-2.5 w-fit text-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white bg-black/50 absolute bottom-[84px] py-6 montserrat-font"
        >
          {{ agent.name }}
        </div> -->
        <div class="px-0 pb-8 w-fit">
          <br />
          <span class="text-xl font-bold uppercase">{{ agent.name }}</span>
          <!-- <br />
          <span class="text-lg josefin-slab">{{ agent.title }}</span> -->
          <br />
          <span class="text-sm">{{ agent.email }}</span>
          <br />
          <span class="text-sm">{{ agent.phone }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      // agents: [
      //   {
      //     name: "ADEL MAKNERT",
      //     title: "Licensed real estate agent",
      //     email: "adel@tomorrowdubai.com",
      //     phone: "+971 581677220",
      //     image: require("../assets/images/agents/default.png"),
      //   }
      // ],
    };
  },
  computed: {
    ...mapState(["agents"]),
  },
  async mounted() {
    await this.$store.dispatch("fetchAgents");
  },
  methods: {
    goToAgent(agent) {
      this.$router.push(`/agent/${agent._id}`);
    },
  },
};
</script>
