<template>
  <div class="bg-white p-4 md:py-8">
    <div class="text-center">
      <h1 class="text-2xl font-semibold">OFF PLAN</h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 md:w-[75%] mx-auto">
      <div
        @click="goToProperty(property)"
        class="relative cursor-pointer"
        v-for="(property, i) in offPlanProperties"
        :key="i"
      >
        <img
          :src="property.image"
          alt="Property"
          class="h-auto"
          style="aspect-ratio: 3/4; object-fit: cover"
        />
        <div
          class="inline-flex items-center border px-2.5 py-0.5 w-fit text-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white bg-black/50 absolute bottom-[84px] py-6 montserrat-font"
        >
          {{ property.name }}
        </div>
        <div class="p-4 w-fit">
          <span class="text-lg font-bold">{{ property.title }}</span>
          <br />
          <span class="text-sm">{{ property.subtitle }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offPlanProperties: [
        {
          name: "RIXOS HOTELS & RESIDENCES, DUBAI ISLAND",
          title: "STARTING PRICE - AED 8M",
          subtitle: "3 BEDS | 4 BATHS | 1,200 SQ FT",
          image: require("../assets/images/offPlan/01.png"),
        },
        {
          name: "RIXOS HOTELS & RESIDENCES, DUBAI ISLAND",
          title: "STARTING PRICE - AED 8M",
          subtitle: "3 BEDS | 4 BATHS | 1,200 SQ FT",
          image: require("../assets/images/offPlan/01.png"),
        },
        {
          name: "RIXOS HOTELS & RESIDENCES, DUBAI ISLAND",
          title: "STARTING PRICE - AED 8M",
          subtitle: "3 BEDS | 4 BATHS | 1,200 SQ FT",
          image: require("../assets/images/offPlan/01.png"),
        },
        {
          name: "RIXOS HOTELS & RESIDENCES, DUBAI ISLAND",
          title: "STARTING PRICE - AED 8M",
          subtitle: "3 BEDS | 4 BATHS | 1,200 SQ FT",
          image: require("../assets/images/offPlan/01.png"),
        },
        {
          name: "RIXOS HOTELS & RESIDENCES, DUBAI ISLAND",
          title: "STARTING PRICE - AED 8M",
          subtitle: "3 BEDS | 4 BATHS | 1,200 SQ FT",
          image: require("../assets/images/offPlan/01.png"),
        },
        {
          name: "RIXOS HOTELS & RESIDENCES, DUBAI ISLAND",
          title: "STARTING PRICE - AED 8M",
          subtitle: "3 BEDS | 4 BATHS | 1,200 SQ FT",
          image: require("../assets/images/offPlan/01.png"),
        },
        {
          name: "RIXOS HOTELS & RESIDENCES, DUBAI ISLAND",
          title: "STARTING PRICE - AED 8M",
          subtitle: "3 BEDS | 4 BATHS | 1,200 SQ FT",
          image: require("../assets/images/offPlan/01.png"),
        },
        {
          name: "RIXOS HOTELS & RESIDENCES, DUBAI ISLAND",
          title: "STARTING PRICE - AED 8M",
          subtitle: "3 BEDS | 4 BATHS | 1,200 SQ FT",
          image: require("../assets/images/offPlan/01.png"),
        },
        {
          name: "RIXOS HOTELS & RESIDENCES, DUBAI ISLAND",
          title: "STARTING PRICE - AED 8M",
          subtitle: "3 BEDS | 4 BATHS | 1,200 SQ FT",
          image: require("../assets/images/offPlan/01.png"),
        },
      ],
    };
  },
  methods: {
    goToProperty(property) {
      this.$router.push("/property", { query: property });
    },
  },
};
</script>
