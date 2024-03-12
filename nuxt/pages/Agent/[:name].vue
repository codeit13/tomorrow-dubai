<template>
  <div>
    <div class="max-w-7xl mx-auto my-10 p-6">
      <div class="flex flex-wrap gap-10">
        <div class="">
          <img
            alt="Profile"
            class="rounded-md"
            height="300"
            :src="agentImage"
            :style="{ aspectRatio: '1/1', objectFit: 'cover' }"
            width="300"
          />
        </div>
        <div class="flex flex-col gap-10 md:gap-48 md:w-[60%]">
          <div class="md:col-span-2 space-y-4 mt-4">
            <h1 class="text-3xl font-bold montserrat-font">{{ agentName }}</h1>
            <p class="text-lg">{{ agentTitle }}</p>
            <p class="text-sm">EMAIL ID : {{ agentEmail }}</p>
            <p class="text-sm">MOBILE : {{ agnetPhone }}</p>
            <Button
              @click="emailAgent(agentEmail)"
              class="bg-blue-600 text-lg rounded-none px-12 py-8 text-white"
            >
              Work With {{ agentName }}
            </Button>
          </div>

          <div v-if="lastSoldProperties.length != 0">
            <h2 class="text-2xl font-bold mb-4 montserrat-font">LAST SOLD</h2>
            <div class="list-disc space-y-2">
              <div
                class="flex flex-wrap justify-between"
                v-for="(sold, i) in lastSoldProperties"
                :key="i"
              >
                <span>{{ i + 1 }}. {{ sold.location }}</span>
                <span>{{ sold.price }}</span>
                <span>SOLD / {{ sold.soldAt }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from "@/components/ui/button";
import { mapState } from "vuex";

export default {
  components: {
    Button,
  },
  data() {
    return {
      agentName: "Manish Kumar",
      agentTitle: "LICENSED REAL ESTATE AGENT",
      agentEmail: "ceo@tomorrowluxuryproperty.com",
      agnetPhone: "+971 581677220",
      agentImage: null,
      lastSoldProperties: [],
    };
  },
  computed: {
    ...mapState(["agents"]),
  },
  setup() {
    useSeoMeta({
      title: "Agent | Tomorrow Luxury Property",
      description: "Contact us for your dubai property agent requirements.",
    });
  },
  async mounted() {
    if (this.agents.length == 0) {
      await this.$store.dispatch("fetchAgents");
    }
    this.getValues();
  },
  methods: {
    getValues() {
      const route = useRoute();
      let agentName = route.params.name
        ?.replaceAll("-", " ")
        .trim()
        .toLowerCase();
      let agent = this.agents.find(
        (agent) => agent.name.trim().toLowerCase() == agentName
      );

      console.log(agentName, this.agents, agent);

      if (agent) {
        this.agentName = agent.name;
        this.agentTitle = agent.title;
        this.agentEmail = agent.email;
        this.agentPhone = agent.phone;
        this.agentImage = agent.img;
      }
    },
    emailAgent(agentEmail) {
      window.open(`mailto:${agentEmail}`);
    },
  },
};
</script>

<style></style>
