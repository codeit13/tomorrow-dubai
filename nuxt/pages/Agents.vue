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
          alt="Agent Photo"
          class="h-auto"
          width="400"
          style="aspect-ratio: 1/1; object-fit: cover"
        />
        <div class="px-0 pb-8 w-fit">
          <br />
          <span class="text-xl font-bold uppercase">{{ agent.name }}</span>
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
    return {};
  },
  computed: {
    ...mapState(["agents"]),
  },
  async mounted() {
    await this.$store.dispatch("fetchAgents");
  },
  setup() {
    useSeoMeta({
      title: "Agents | Tomorrow Luxury Property",
      description: "Explore properties at amazing neighborhoods in Dubai.",
    });
  },
  methods: {
    goToAgent(agent) {
      const agentNameSlug = agent.name.trim().replaceAll(" ", "-");
      this.$router.push(`/agent/${agentNameSlug}`);
    },
  },
};
</script>
