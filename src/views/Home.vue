<template>
  <div class="bg-white">
    <div class="relative">
      <img
        :src="require('../assets/images/hero-bg.png')"
        alt="Luxury Home"
        class="w-full h-auto aspect-[1/1] md:aspect-[16/6]"
        style="object-fit: cover"
      />
      <div class="absolute top-0 left-0 right-0 bottom-0">
        <Header />
        <div
          class="absolute top-[61px] left-0 right-0 bottom-0 flex flex-col justify-center items-start text-left text-white bg-black bg-opacity-50 px-6 md:px-24"
        >
          <h2
            class="text-2xl font-bold uppercase tracking-wide montserrat-font"
          >
            Find Your Next
          </h2>
          <h2
            class="text-6xl font-bold uppercase tracking-wide montserrat-font mt-1"
          >
            Dream Home
          </h2>
          <div class="flex space-x-2 mt-8">
            <input
              v-model="searchText"
              class="flex h-10 w-[62vw] md:w-[20vw] rounded-md border border-input bg-background px-3 py-2 text-sm text-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Search Community, Building, or City"
            />
            <button
              @click="searchClick"
              class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="px-6 md:px-24 py-4">
      <div class="flex justify-between items-baseline">
        <h2 class="text-xl font-semibold my-20">Neighborhood For You</h2>
        <span
          class="text-sm font-semibold my-20 cursor-pointer"
          @click="$router.push('/neighbourhood')"
          >More ></span
        >
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
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
    <div class="px-6 md:px-24 py-4">
      <h2 class="text-3xl font-semibold my-20">Exclusive Properties</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          class="relative cursor-pointer"
          @click="goToProperty(property)"
          v-for="(property, i) in exclusiveProperties"
          :key="i"
        >
          <img
            :src="property.image"
            alt="Property"
            class="w-full h-auto"
            width="300"
            height="200"
            style="aspect-ratio: 300 / 200; object-fit: cover"
          />
          <div
            class="inline-flex items-center border px-2.5 py-0.5 w-fit text-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white hover:text-black bg-black/20 text-secondary-foreground hover:bg-white/80 absolute top-2 right-2"
          >
            {{ property.tag }}
          </div>
          <div class="p-4">
            <p class="text-lg font-bold">{{ property.price }}</p>
            <p class="text-sm">{{ property.features }}</p>
            <p class="text-sm">{{ property.location }}</p>
            <p
              @click="goToProperty(property)"
              class="text-sm font-semibold mt-4 text-blue-600 hover:text-blue-800 cursor-pointer"
            >
              {{ property.buttonText }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="px-6 md:px-24 py-4">
      <h2 class="text-3xl font-semibold my-20">Off Plan</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
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
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
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
      ],
      exclusiveProperties: [
        {
          price: "AED 20,000,000",
          image: require("../assets/images/exclusive/01.png"),
          features: "3 BEDS | 4 BATHS | 1,200 SQ FT",
          location: "BURJ KHALIFA, DOWNTOWN, DUBAI UAE",
          buttonText: "VILLA FOR SALE",
          tag: "New",
        },
        {
          price: "AED 20,000,000",
          image: require("../assets/images/exclusive/02.png"),
          features: "3 BEDS | 4 BATHS | 1,200 SQ FT",
          location: "BURJ KHALIFA, DOWNTOWN, DUBAI UAE",
          buttonText: "VILLA FOR SALE",
          tag: "Off-Plan",
        },
        {
          price: "AED 20,000,000",
          image: require("../assets/images/exclusive/03.png"),
          features: "3 BEDS | 4 BATHS | 1,200 SQ FT",
          location: "BURJ KHALIFA, DOWNTOWN, DUBAI UAE",
          buttonText: "VILLA FOR SALE",
          tag: "Exclusive",
        },
      ],
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
      ],
      searchText: null,
    };
  },
  methods: {
    searchClick() {
      this.$router.push({ path: "/search", query: { q: this.searchText } });
    },
    goToProperty(property) {
      this.$router.push("/listing", { query: property });
    },
  },
};
</script>
