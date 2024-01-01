<template>
  <div class="bg-white p-4 md:p-8">
    <div class="text-center">
      <h1 class="text-2xl font-semibold">All neighborhood DUBAI , UAE</h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 md:w-[75%] mx-auto">
      <div
        v-for="(card, i) in neighbourhoodProperties"
        @click="goToProperty(property)"
        :key="i"
        class="rounded-lg border bg-card text-card-foreground shadow-sm relative w-full cursor-pointer"
        data-v0-t="card"
      >
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <img
          :src="card.image"
          alt="DUBAILAND"
          class="w-full h-36 object-cover"
          width="350"
          height="150"
          style="aspect-ratio: 350 / 150; object-fit: cover"
        />
        <h3
          class="absolute bottom-0 w-full text-center font-semibold text-lg text-white p-4"
        >
          {{ card.title }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      neighbourhoodProperties: [
        {
          title: "DUBAI ISLAND",
          image: require("../assets/images/neighbourhood/01.png"),
        },
        {
          title: "PALM JEBEL ALI",
          image: require("../assets/images/neighbourhood/02.png"),
        },
        {
          title: "PALM JUMEIRAH",
          image: require("../assets/images/neighbourhood/03.png"),
        },
        {
          title: "DOWNTOWN DUBAI",
          image: require("../assets/images/neighbourhood/04.png"),
        },
        {
          title: "EMIRATES HILL",
          image: require("../assets/images/neighbourhood/05.png"),
        },
        {
          title: "DUBAI HILLS",
          image: require("../assets/images/neighbourhood/06.png"),
        },
        {
          title: "DUBAI ISLAND",
          image: require("../assets/images/neighbourhood/01.png"),
        },
        {
          title: "PALM JEBEL ALI",
          image: require("../assets/images/neighbourhood/02.png"),
        },
        {
          title: "PALM JUMEIRAH",
          image: require("../assets/images/neighbourhood/03.png"),
        },
        {
          title: "DOWNTOWN DUBAI",
          image: require("../assets/images/neighbourhood/04.png"),
        },
        {
          title: "EMIRATES HILL",
          image: require("../assets/images/neighbourhood/05.png"),
        },
        {
          title: "DUBAI HILLS",
          image: require("../assets/images/neighbourhood/06.png"),
        },
        {
          title: "DUBAI ISLAND",
          image: require("../assets/images/neighbourhood/01.png"),
        },
        {
          title: "PALM JEBEL ALI",
          image: require("../assets/images/neighbourhood/02.png"),
        },
      ],
    };
  },
  methods: {
    goToProperty(property) {
      this.$router.push("/listing", { query: property });
    },
  },
};
</script>
