<template>
  <div class="bg-white px-6 md:px-28 py-6 md:py-8">
    <div class="mt-6">
      <!-- <span
        class="text-xl font-extrabold josefin-slab mb-20 cursor-pointer"
        @click="$router.go(-1)"
        >{{ `< Back` }}</span
      > -->

      <h1 class="text-2xl md:text-2xl font-extrabold montserrat-font mb-20">
        OFF PLAN
      </h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mx-auto">
      <div
        class="relative cursor-pointer w-fit"
        v-for="(property, i) in offPlanProperties"
        :key="i"
      >
        <div class="relative">
          <img
            @click="goToProperty(property)"
            :src="property.image"
            alt="Property"
            class="w-[613px] h-auto"
            style="aspect-ratio: 3/4; object-fit: cover"
          />
          <!-- <carousel :items-to-show="1" :wrapAround="true">
            <slide v-for="(url, i) in property.images" :key="i">
              <img
                alt="Property"
                :src="url"
                class="w-[613px] h-auto"
                style="aspect-ratio: 3/4; object-fit: cover"
              />
            </slide>

            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel> -->
          <div
            @click="goToProperty(property)"
            class="items-center gap-6 border px-4 w-full text-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white bg-black/50 absolute bottom-0 overflow-hidden text-ellipsis py-6 montserrat-font"
          >
            <p
              class="text-sm md:text-lg font-extrabold montserrat-font mr-10 text-[1rem]"
            >
              {{ property.propertyName }}
            </p>
            <div class="flex items-start gap-1 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 h-3 md:w-4 md:h-4"
                viewBox="0 -960 960 960"
                fill="#fff"
              >
                <path
                  d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
                />
              </svg>

              <span class="text-sm md:text-sm">{{ property.address }}</span>
            </div>
          </div>
        </div>
        <div
          class="p-4 pb-8 w-full bg-gray-100"
          @click="goToProperty(property)"
        >
          <p class="text-sm md:text-[1rem]] font-semibold">
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
    return {};
  },
  setup() {
    useSeoMeta({
      title:
        "Invest in Off Plan Properties in Dubai | Tomorrow Luxury Property",
      ogTitle:
        "Invest in Off Plan Properties in Dubai | Tomorrow Luxury Property",
      description:
        " Secure prime off plan properties in Dubai with Tomorrow Luxury Property. Access exclusive deals and top investment opportunities in burgeoning areas.",
      ogDescription:
        " Secure prime off plan properties in Dubai with Tomorrow Luxury Property. Access exclusive deals and top investment opportunities in burgeoning areas.",
      keywords:
        "Off plan properties Dubai, Dubai pre-launch real estate, prime property investments, off plan luxury homes, Tomorrow Luxury Property off plan",
    });
  },
  computed: {
    ...mapState(["listings"]),
    offPlanProperties() {
      let listings = JSON.parse(JSON.stringify(this.listings));
      return listings
        ? listings
            .map((property) => {
              property.name = property.title;
              property.subtitle = property.price
                ? `STARTING PRICE - AED ${property.details["Price Range"]}`
                : "Exclusive Prices";
              property.image = property.images[0];
              property.completionText = `Completion ${property.details["Completion Date"]}`;

              // property.features = `${property.bed} BEDS | ${property.bath} BATHS | ${property.sqFt} SQ FT`;
              return property;
            })
            .filter((property) => property.isOffPlan)
        : [];
    },
  },
  methods: {
    goToProperty(property) {
      if (
        property &&
        property.propertyName &&
        property.title &&
        property.address
      ) {
        const propertyName = property.propertyName
          .trim()
          .replaceAll(" ", "-")
          .replaceAll(",", "")
          .replaceAll(".", "")
          .toLowerCase();
        const listingName = property.title
          .trim()
          .replaceAll(" ", "-")
          .replaceAll(",", "")
          .replaceAll(".", "")
          .toLowerCase()
          .trim();
        const address = property.address
          .trim()
          .replaceAll(" ", "-")
          .replaceAll(",", "")
          .replaceAll(".", "")
          .toLowerCase()
          .trim();

        this.$router.push(`/listing/${address}/${propertyName}/${listingName}`);
      } else {
        console.log("No listing found");
      }
    },
  },
};
</script>
