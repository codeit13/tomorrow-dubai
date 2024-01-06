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
            <Button class="bg-blue-600 text-white">
              Work With {{ agentName }}
            </Button>
          </div>

          <div>
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

export default {
  components: {
    Button,
  },
  data() {
    return {
      agentName: "Manish Kumar",
      agentTitle: "LICENSED REAL ESTATE AGENT",
      agentEmail: "CEO@TOMORROWDUBAI.COM",
      agnetPhone: "+971 581677220",
      agentImage: null,
      lastSoldProperties: [
        {
          location: "Burj Khalifa, Downtown, Dubai UAE",
          price: "AED 5,245,000",
          soldAt: "JAN/ 2023",
        },
        {
          location: "Burj Khalifa, Downtown, Dubai UAE",
          price: "AED 5,245,000",
          soldAt: "JAN/ 2023",
        },
        {
          location: "Burj Khalifa, Downtown, Dubai UAE",
          price: "AED 5,245,000",
          soldAt: "JAN/ 2023",
        },
        {
          location: "Burj Khalifa, Downtown, Dubai UAE",
          price: "AED 5,245,000",
          soldAt: "JAN/ 2023",
        },
      ],
    };
  },
  mounted() {
    this.agentImage = require("../assets/images/agents/default.png");
  },
};
</script>

<style></style>
