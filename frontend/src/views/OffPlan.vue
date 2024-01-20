<template>
  <div class="bg-white px-6 md:px-28 py-6 md:py-8">
    <div class="mt-6">
      <!-- <span
        class="text-xl font-extrabold josefin-slab mb-20 cursor-pointer"
        @click="$router.go(-1)"
        >{{ `< Back` }}</span
      > -->

      <h1 class="text-2xl md:text-4xl font-extrabold josefin-slab mb-20">
        OFF PLAN
      </h1>
      <!-- <h1></h1> -->
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mx-auto">
      <div
        @click="goToProperty(property)"
        class="relative cursor-pointer w-fit"
        v-for="(property, i) in offPlanProperties"
        :key="i"
      >
        <div class="relative">
          <img
            :src="property.image"
            alt="Property"
            class="w-[513px] h-auto"
            style="aspect-ratio: 3/4; object-fit: cover"
          />
          <div
            class="items-center gap-6 border px-4 w-full text-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white bg-black/50 py-6 montserrat-font absolute bottom-0 overflow-hidden text-ellipsis"
          >
            <p class="text-sm md:text-2xl font-extrabold">
              {{ property.name }}
            </p>
            <div class="flex items-start gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 md:w-6 md:h-6"
                viewBox="0 -960 960 960"
                fill="#fff"
              >
                <path
                  d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
                />
              </svg>

              <span class="text-sm md:text-lg">{{ property.address }}</span>
            </div>
          </div>
        </div>
        <div class="p-4 pb-8 w-full bg-gray-100">
          <p class="text-sm md:text-lg font-semibold">
            {{ property.subtitle }}
          </p>
          <p class="text-[0.85rem] md:text-[1rem] josefin-slab mt-2">
            {{ property.completionText }}
          </p>
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
      // offPlanProperties: [
      //   {
      //     name: "RIXOS HOTELS & RESIDENCES, DUBAI ISLAND",
      //     title: "STARTING PRICE - AED 8M",
      //     subtitle: "3 BEDS | 4 BATHS | 1,200 SQ FT",
      //     image: require("../assets/images/offPlan/01.png"),
      //   },
      //   {
      //     name: "RIXOS HOTELS & RESIDENCES, DUBAI ISLAND",
      //     title: "STARTING PRICE - AED 8M",
      //     subtitle: "3 BEDS | 4 BATHS | 1,200 SQ FT",
      //     image: require("../assets/images/offPlan/01.png"),
      //   },
      //   {
      //     name: "RIXOS HOTELS & RESIDENCES, DUBAI ISLAND",
      //     title: "STARTING PRICE - AED 8M",
      //     subtitle: "3 BEDS | 4 BATHS | 1,200 SQ FT",
      //     image: require("../assets/images/offPlan/01.png"),
      //   },
      //   {
      //     name: "RIXOS HOTELS & RESIDENCES, DUBAI ISLAND",
      //     title: "STARTING PRICE - AED 8M",
      //     subtitle: "3 BEDS | 4 BATHS | 1,200 SQ FT",
      //     image: require("../assets/images/offPlan/01.png"),
      //   },
      //   {
      //     name: "RIXOS HOTELS & RESIDENCES, DUBAI ISLAND",
      //     title: "STARTING PRICE - AED 8M",
      //     subtitle: "3 BEDS | 4 BATHS | 1,200 SQ FT",
      //     image: require("../assets/images/offPlan/01.png"),
      //   },
      //   {
      //     name: "RIXOS HOTELS & RESIDENCES, DUBAI ISLAND",
      //     title: "STARTING PRICE - AED 8M",
      //     subtitle: "3 BEDS | 4 BATHS | 1,200 SQ FT",
      //     image: require("../assets/images/offPlan/01.png"),
      //   },
      //   {
      //     name: "RIXOS HOTELS & RESIDENCES, DUBAI ISLAND",
      //     title: "STARTING PRICE - AED 8M",
      //     subtitle: "3 BEDS | 4 BATHS | 1,200 SQ FT",
      //     image: require("../assets/images/offPlan/01.png"),
      //   },
      //   {
      //     name: "RIXOS HOTELS & RESIDENCES, DUBAI ISLAND",
      //     title: "STARTING PRICE - AED 8M",
      //     subtitle: "3 BEDS | 4 BATHS | 1,200 SQ FT",
      //     image: require("../assets/images/offPlan/01.png"),
      //   },
      //   {
      //     name: "RIXOS HOTELS & RESIDENCES, DUBAI ISLAND",
      //     title: "STARTING PRICE - AED 8M",
      //     subtitle: "3 BEDS | 4 BATHS | 1,200 SQ FT",
      //     image: require("../assets/images/offPlan/01.png"),
      //   },
      // ],
    };
  },
  computed: {
    ...mapState(["properties"]),
    offPlanProperties() {
      let properties = JSON.parse(JSON.stringify(this.properties));
      return properties
        ? properties
            .map((property) => {
              property.name = property.address
                .toUpperCase()
                .replaceAll("-", " ")
                .replaceAll(".", " ");
              property.subtitle = property.price
                ? `STARTING PRICE - AED ${property.price.toLocaleString(
                    "en-US"
                  )}`
                : `AMAZING STARTING PRICES`;
              property.image =
                property.img1 || require("../assets/images/exclusive/02.png");
              property.completionText = property.yearBuilt
                ? `Completed in ${property.yearBuilt}`
                : `Completed`;
              // property.features = `${property.bed} BEDS | ${property.bath} BATHS | ${property.sqFt} SQ FT`;
              return property;
            })
            .filter((property) => property.isOffPlan)
        : [];
    },
  },
  methods: {
    goToProperty(property) {
      if (property && property.title) {
        const titleSlug = property.title
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/-$/g, "");

        this.$router.push(`/property/${titleSlug}`);
      } else {
        console.log("No property found");
      }
    },
  },
};
</script>
