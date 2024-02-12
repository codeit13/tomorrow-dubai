<template>
  <div class="bg-white px-6 md:px-28 md:p-8">
    <div class="text-center my-20">
      <h1 class="text-3xl josefin-slab font-extrabold">
        All neighborhood DUBAI , UAE
      </h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
      <div
        v-for="(property, i) in neighbourhoodProperties"
        @click="goToNeighborhoodProperty(property)"
        :key="i"
        class="rounded-lg border bg-card shadow-sm relative w-full cursor-pointer"
        data-v0-t="card"
      >
        <div class="absolute inset-0 bg-black opacity-30"></div>
        <img
          :src="`/assets/images/neighbourhood/${i + 1}.png`"
          alt="DUBAILAND"
          class="w-full h-36 object-cover"
          width="350"
          height="150"
          style="aspect-ratio: 350 / 150; object-fit: cover"
        />
        <h3
          class="absolute bottom-0 w-full text-center font-bold text-2xl md:text-xl text-white p-4 pb-3 montserrat-font"
        >
          {{ property.title }}
        </h3>
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
    ...mapState(["neighbourhoodProperties"]),
  },
  setup() {
    useSeoMeta({
      title: "Neighborhoods | Tomorrow Luxury Property",
      description:
        "Find your luxury haven in Dubai's most sought-after areas with tomorrow luxury property. Palm Jumeirah's exclusive waterfront, Palm Jebel Ali's pioneering spirit, Jumeira Bay's island luxury, and Downtown Dubai's urban prestige await. Choose your dream home where comfort meets elegance.",
    });
  },
  methods: {
    goToNeighborhoodProperty(property) {
      if (property && property.title) {
        this.$router.push(
          `/search/${property.title.trim().replaceAll(" ", "-").toLowerCase()}`
        );
      } else {
        alert(property);
      }
    },
  },
};
</script>
