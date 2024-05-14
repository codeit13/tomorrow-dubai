<template>
  <div v-if="title">
    <div class="mx-auto px-4 md:px-28 pt-10">
      <div
        class="flex flex-wrap justify-between items-start md:items-end sticky"
        v-if="isOffPlan"
      >
        <span
          class="text-sm md:text-[1rem] font-extrabold josefin-slab mb-20 cursor-pointer uppercase"
          @click="$router.push('/offplan')"
          >{{ `< Off Plan` }}</span
        >
        <div class="text-center">
          <h1
            class="text-2xl md:text-[2.75rem] montserrat-font font-extrabold mb-3"
          >
            {{ title }}
          </h1>
          <p
            class="text-sm md:text-xl mb-2 josefin-slab font-normal capitalize"
          >
            {{ subtitle }}
          </p>
          <!-- <p class="text-lg">{{ featureText }}</p> -->

          <!-- <p class="text-lg text-gray-700 mt-4">STARTING FROM</p> -->
          <p class="text-sm md:text-xl font-semibold" v-if="startingPrice">
            STARTING FROM AED {{ startingPrice?.toLocaleString("en-US") }}
          </p>
        </div>
        <span></span>
      </div>
      <div
        class="flex flex-wrap justify-between items-start gap-10 md:items-end sticky"
        v-else
      >
        <div>
          <h1 class="text-2xl md:text-3xl montserrat-font mb-4">
            {{ title }}
          </h1>
          <p class="text-sm md:text-lg mb-4 josefin-slab font-[600] uppercase">
            {{ subtitle }}
          </p>
          <p class="text-sm md:text-lg font-bold">{{ featureText }}</p>
        </div>
        <div v-if="startingPrice" class="md:text-right">
          <!-- <p class="text-lg text-gray-700">ASKING PRICE</p> -->
          <p class="text-3xl font-semibold">
            AED {{ startingPrice?.toLocaleString("en-US") }}
          </p>
        </div>
      </div>
    </div>
    <div class="px-0.5">
      <div class="my-10">
        <!--  -->
        <carousel :items-to-show="1" :wrapAround="true">
          <slide v-for="(url, i) in propertyImages" :key="i">
            <img
              alt="Property"
              class="w-full h-auto"
              height="400"
              :src="url"
              :style="{
                aspectRatio: '840/400',
                objectFit: 'cover',
              }"
              width="640"
            />
          </slide>

          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
    </div>
    <div class="mx-auto px-6 md:px-24 py-12">
      <div
        class="flex flex-wrap md:flex-nowrap space-y-12 md:space-y-0 md:space-x-28"
      >
        <div
          class="flex flex-col space-y-20 w-[100%] md:w-[60%] md:min-w-[60%]"
        >
          <div v-if="isOffPlan && details">
            <h2 class="text-xl md:text-2xl font-semibold mb-6">Details</h2>
            <div class="grid grid-cols-3 gap-4">
              <div v-for="(item, i) in details" :key="i">
                <h1 class="text-md md:text-xl font-bold">{{ item }}</h1>
                <span class="text-sm">{{ i }}</span>
              </div>
            </div>
          </div>

          <div class="pt-6">
            <h2 class="text-xl md:text-2xl font-semibold mb-6">
              Property Descriptions
            </h2>
            <p
              class="text-sm md:text-lg text-justify"
              v-html="shortDescription"
            ></p>
            <p
              v-if="showMoreBtn"
              class="mt-12 border-0 underline underline-offset-4 hover:bg-white cursor-pointer"
              @click="showMore"
            >
              {{ `More >` }}
            </p>
          </div>

          <div class="md:w-[70%] pt-4">
            <h2 class="text-xl md:text-2xl font-semibold mb-8">Amenities</h2>
            <div class="grid grid-cols-3 gap-4">
              <div
                class="bg-gray-200 p-2 text-left text-xs md:text-[1rem]"
                :key="i"
                v-for="(item, i) in amenities"
              >
                {{ item }}
              </div>
            </div>
          </div>

          <div v-if="isOffPlan && units" class="md:w-[70%] pt-4">
            <h2 class="text-xl md:text-2xl font-semibold mb-8">Units</h2>
            <!-- <div class="flex flex-col space-y-4">
              <div
                class="flex justify-between text-left"
                v-for="(unit, i) in units"
                :key="i"
              >
                <h1 v-if="unit.sqFt" class="font-bold text-sm md:text-md">
                  {{ i }}
                </h1>
                <span
                  v-if="unit.sqFt"
                  class="text-sm md:text-md josefin-slab font-[600] w-fit text-left"
                >
                  {{ unit.sqFt }} Sq Ft
                </span>
                <span v-if="unit.price" class="text-sm md:text-md text-left">
                  AED {{ unit.price?.toLocaleString("en-US") }}
                </span>
              </div>
            </div> -->
            <div class="flex justify-between">
              <div class="flex flex-col space-y-4">
                <h1
                  v-for="(key, i) in Object.keys(units).filter(
                    (e) => units[e].sqFt && units[e].price
                  )"
                  :key="i"
                  class="font-bold text-sm md:text-[1rem]"
                >
                  {{ key }}
                </h1>
              </div>
              <div class="flex flex-col space-y-4">
                <span
                  v-for="(key, i) in Object.keys(units).filter(
                    (e) => units[e].sqFt && units[e].price
                  )"
                  :key="i"
                  class="text-sm md:text-[1rem] josefin-slab font-[600] w-fit text-left"
                >
                  {{ units[key].sqFt }} Sq Ft
                </span>
              </div>
              <div class="flex flex-col space-y-4">
                <span
                  v-for="(key, i) in Object.keys(units).filter(
                    (e) => units[e].sqFt && units[e].price
                  )"
                  :key="i"
                  class="text-sm md:text-[1rem] text-left"
                >
                  AED {{ units[key].price?.toLocaleString("en-US") }}
                </span>
              </div>
            </div>
          </div>

          <div v-if="isOffPlan && paymentPlans" class="md:w-[70%] pt-4">
            <h2 class="text-xl md:text-2xl font-semibold mb-8">Payment Plan</h2>
            <div class="flex justify-between">
              <div v-for="(plan, i) in paymentPlans" :key="i">
                <p class="text-xl md:text-xl font-bold">{{ plan }}</p>
                <h1 class="text-sm">{{ i }}</h1>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col flex-wrap gap-5 md:gap-0 w-full md:w-[30%] md:items-start"
        >
          <div class="flex flex-col justify-center items-start w-full">
            <div
              class="flex items-start md:items-start flex-nowrap w-full gap-8 md:p-8"
              v-if="agent"
            >
              <img
                alt="Agent"
                class="w-[100px] rounded-full bg-gray-200 mb-4"
                :src="agent.img"
                :style="{
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                }"
              />
              <div class="">
                <h3 class="text-sm montserrat-font mb-6">LISTING AGENT</h3>
                <p class="font-semibold mb-0">{{ agent.name }}</p>
                <p class="text-sm italic mb-4">(Liscensed Real Estate Agent)</p>

                <a
                  :href="`mailto:${agent.email}`"
                  class="text-sm mb-0 block w-[50%] text-wrap"
                >
                  {{ agent.email }}
                </a>
                <a :href="`tel:${agent.phone}`" class="text-sm mb-3">
                  {{ agent.phone }}
                </a>
              </div>
            </div>
            <div class="px-0 py-6 md:py-2 md:px-4 mb-4 w-full">
              <span class="font-bold">need immediate assistance?</span>

              <div class="flex w-full mb-8">
                <Button
                  class="rounded-none w-full border-2 transition-all border-[#000] bg-white text-sm font-semibold text-[#25D366] mt-2 px-6 py-4 shadow-none"
                  variant="outline"
                  @click="goToWhatsapp(agent.phone)"
                >
                  WhatsApp
                </Button>
                <Button
                  @click="goToCall(agent.phone)"
                  class="rounded-none w-full border-2 transition-all border-[#000] bg-black text-sm font-semibold text-[#e3e3e3] mt-2 ml-0 md:ml-2 px-6 py-4 shadow-none"
                  variant="outline"
                >
                  Contact Agent
                </Button>
              </div>
              <div class="md:border-2 px-4 py-4">
                <h2 class="text-xl font-semibold mb-4 text-neutral-800">
                  Register your Interest
                </h2>
                <div class="space-y-4 text-right">
                  <Input
                    class="border-[#e3e3e3] rounded-none"
                    v-model="name"
                    placeholder="Full Name"
                  />
                  <Input
                    class="border-[#e3e3e3] rounded-none"
                    v-model="email"
                    placeholder="Email Address"
                  />
                  <Input
                    class="border-[#e3e3e3] rounded-none"
                    v-model="phone"
                    placeholder="+971 | Phone"
                  />
                  <Textarea
                    rows="8"
                    class="rounded-none border-[#e3e3e3] text-gray-600 focus:text-black"
                    v-model="moreInfo"
                    placeholder="Tell us more about what you want to know"
                  />
                  <Button
                    class="rounded-none w-full text-md font-bold border-[1px] px-6 py-5 border-[#000] bg-black text-white hover:bg-white hover:text-black"
                    @click="submitContactForm"
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="coordinates && coordinates.length > 0">
        <div class="mb-8 mt-28">
          <h2 class="text-xl md:text-2xl font-semibold mb-1.5">Location Map</h2>
          <span class="text-lg" v-if="address">{{ address }}</span>
        </div>

        <!-- <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              src="https://maps.google.com/maps?q=dubai&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              frameborder="0"
              scrolling="no"
              class="w-[100%] h-[50vh] md:w-[65%] md:h-[400px]"
            ></iframe>
          </div>
        </div> -->
        <div
          v-if="coordinates && coordinates.length > 0"
          class="w-[100%] h-[50vh] md:w-[65%] md:h-[400px]"
        >
          <ol-map
            :loadTilesWhileAnimating="true"
            :loadTilesWhileInteracting="true"
            style="height: 400px"
          >
            <ol-view
              ref="view"
              :center="coordinates"
              :rotation="rotation"
              :zoom="zoom"
              :projection="projection"
            />

            <ol-tile-layer>
              <ol-source-osm />
            </ol-tile-layer>

            <ol-vector-layer>
              <ol-source-vector>
                <ol-feature>
                  <ol-geom-point :coordinates="coordinates"></ol-geom-point>
                  <ol-style>
                    <ol-style-circle :radius="radius">
                      <ol-style-fill :color="fillColor"></ol-style-fill>
                      <ol-style-stroke
                        :color="strokeColor"
                        :width="strokeWidth"
                      ></ol-style-stroke>
                    </ol-style-circle>
                  </ol-style>
                </ol-feature>
              </ol-source-vector>
            </ol-vector-layer>
          </ol-map>
        </div>
      </div>

      <div class="mt-16">
        <h2 class="text-3xl font-semibold mt-32 mb-12">Similar Properties</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            class="relative cursor-pointer hover:bg-gray-100 rounded-sm border-[1px] border-[#00000062]"
            v-for="(property, i) in similarProperties"
            :key="i"
          >
            <!-- <img
              :src="property.image"
              alt="Property"
              class="w-full h-auto"
              style="aspect-ratio: 300 / 200; object-fit: cover"
            /> -->
            <carousel :items-to-show="1" :wrapAround="true">
              <slide v-for="(url, i) in property.images" :key="i">
                <img
                  @click="goToProperty(property)"
                  alt="Property"
                  :src="url"
                  class="w-full h-auto"
                  style="aspect-ratio: 300 / 200; object-fit: cover"
                />
              </slide>

              <template #addons>
                <navigation />
                <!-- <pagination /> -->
              </template>
            </carousel>
            <div
              class="inline-flex items-center border px-2.5 py-0.5 w-fit josefin-slab text-[0.85em] md:text-[0.95em] font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white bg-black/10 absolute top-4 right-4"
            >
              {{ property.tag }}
            </div>
            <div class="p-4" @click="goToProperty(property)">
              <p class="text-lg md:text-2xl font-bold">
                {{ property.priceText }}
              </p>
              <p class="text-sm mt-2">{{ property.featureText }}</p>
              <div class="flex items-start gap-1 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 -960 960 960"
                  fill="#000"
                  width="18"
                >
                  <path
                    d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
                  />
                </svg>
                <p class="text-sm">{{ property.locationText }}</p>
              </div>
              <p
                class="text-sm mt-4 text-[#302CFF] hover:text-[#302CFF] cursor-pointer"
              >
                {{ property.buttonText }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script setup>

</script> -->

<script>
import { fromLonLat } from "ol/proj";
import "vue3-carousel/dist/carousel.css";

import { mapState } from "vuex";
// import { useAsyncData } from "#app";
import axios from "axios";
import { useFetch } from "@vueuse/core";
// import { useFetch } from "@vueuse/core";

export default {
  components: {},
  data() {
    return {
      propertyId: null,
      title: null,
      subtitle: null,
      featureText: null,
      startingPrice: null,
      propertyImages: [],
      description: null,
      shortDescription: null,
      address: null,
      amenities: [],
      details: null,
      units: null,
      paymentPlans: null,
      agent: {},
      isOffPlan: false,
      similarProperties: [],
      name: null,
      email: null,
      phone: null,
      moreInfo: null,
      coordinates: [],
      center: [40, 40],
      projection: "EPSG:4326",
      zoom: 16,
      rotation: 0,
      radius: 15,
      strokeWidth: 5,
      strokeColor: "black",
      fillColor: "white",
      showMoreBtn: true,
      isMetaTagsAdded: false,
    };
  },
  setup() {
    const route = useRoute();

    const routePropertyName = route.params.propertyName;

    const routeListingName = route.params.listingName;

    const routeAddress = route.params.address;

    try {
      $fetch(
        `https://tomorrowluxuryproperty.com/api/search/${routeAddress}/${routePropertyName}/${routeListingName}`,
        {
          server: true,
          immediate: true,
        }
      ).then((res) => {
        console.log(res);

        const listing = res.listing;

        function extractInnerText(htmlString) {
          // Match everything between HTML tags
          const regex = /<[^>]*>([^<]+)<[^>]*>/g;

          // Store the extracted inner text
          const innerTextArray = [];
          let match;

          // Loop through matches and extract inner text
          while ((match = regex.exec(htmlString)) !== null) {
            innerTextArray.push(match[1].trim());
          }

          // Join the inner text array to form a single string
          const innerText = innerTextArray.join(" ");

          return innerText;
        }

        if (listing) {
          const descriptionText = extractInnerText(listing.description);

          const capitalizeFirstLetterOfEveryWord = (str) => {
            return str
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");
          };

          useSeoMeta({
            title: `${capitalizeFirstLetterOfEveryWord(
              listing.title
            )} | Tomorrow Luxury Property`,
            meta: [
              {
                name: "description",
                content: descriptionText,
              },
            ],
          });
        } else {
          console.log("No listing found");
        }
      });
    } catch (e) {
      console.log(e);
    }
  },
  computed: {
    ...mapState(["listings"]),
  },
  watch: {
    listings: {
      handler(newVal) {
        this.getValues(newVal);
      },
      deep: true,
    },
    async subtitle(address) {
      if (address) {
        const data = await this.$store.dispatch("fetchCordinatesFromAddress", {
          address: address,
        });

        if (data && data.length > 0) {
          const [lon, lat] = [parseFloat(data[0].lon), parseFloat(data[0].lat)];

          this.coordinates.push(lon);
          this.coordinates.push(lat);
        }
      }
    },
  },

  //   useAsyncData(
  //     "searchData",
  //     async () => {
  //       const route = useRoute();

  //       const propertyName = route.params.propertyName;

  //       const listingName = route.params.listingName;

  //       const address = route.params.address;

  //       axios
  //         .get(
  //           `//tomorrowluxuryproperty.com/api/search/${address}/${propertyName}/${listingName}`
  //           // "http://localhost:3000/api/hello"
  //         )
  //         .then((response) => {
  //           useSeoMeta({
  //             title: `Search results for test` || "Search Results",
  //             meta: [
  //               {
  //                 name: "description",
  //                 content: "No description available",
  //               },
  //               // Add other relevant meta tags (e.g., Open Graph, Twitter)
  //             ],
  //           });
  //         });
  //     },
  //     {
  //       // Optional: fetch options or initial fetch params
  //       server: true,
  //     }
  //   );
  // },
  mounted() {
    this.getValues();
  },
  methods: {
    fromLonLat(coordinates) {
      return fromLonLat(coordinates);
    },
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
    showMore() {
      this.shortDescription = this.description;
      this.showMoreBtn = false;
    },
    getValues(newVal = null) {
      // const slug = this.$route.params.slug;

      const propertyName = this.$route.params.propertyName
        .toLowerCase()
        .replaceAll("-", " ")
        .trim();
      const listingName = this.$route.params.listingName
        .toLowerCase()
        .replaceAll("-", " ")
        .trim();
      const address = this.$route.params.address
        .toLowerCase()
        .replaceAll("-", " ")
        .trim();

      let listings = newVal
        ? newVal
        : JSON.parse(JSON.stringify(this.listings));
      if (listings && listings.length) {
        this.similarProperties = listings
          .map((property) => {
            property.priceText = property.price
              ? `AED ${property.price?.toLocaleString("en-us")}`
              : "Amazing Prices";
            property.locationText = `${property.propertyName}, ${property.address}`;
            property.image = property.img1 || property.images[0];
            property.buttonText = `${property.homeType.toUpperCase()} FOR SALE`;
            property.tag = property.isOffPlan ? "Off Plan" : "Exclusive";
            property.featureText = `${property.bed} BEDS | ${property.bath} BATHS | ${property.sqFt} SQ FT`;
            return property;
          })
          .slice(0, 3);

        let property = listings.filter((property) => {
          return (
            // property.slug?.toLowerCase().trim() == slug.toLowerCase().trim()
            property.propertyName
              ?.trim()
              .replaceAll(",", "")
              .replaceAll(".", "")
              .toLowerCase()
              .trim() == propertyName &&
            property.title
              ?.trim()
              .replaceAll(",", "")
              .replaceAll(".", "")
              .toLowerCase()
              .trim() == listingName &&
            property.address
              ?.trim()
              .replaceAll(",", "")
              .replaceAll(".", "")
              .toLowerCase()
              .trim() == address
          );
        })[0];

        if (property) {
          this.propertyId = property.id;
          this.title = property.title;
          this.subtitle = `${property.propertyName}, ${property.address}`;

          this.featureText = `${property.homeType} | ${property.bed} Beds | ${property.bath} Baths | ${property.sqFt} Sq Ft`;
          this.startingPrice = property.price;
          this.propertyImage = property.img1 || property.images[0];
          this.propertyImages = property.images;
          this.description = property.description;
          this.shortDescription = property.description.slice(0, 1000) + "...";
          this.address = property.address;
          this.amenities = property.amenities;

          this.details = property.details;
          this.units = property.units;
          this.paymentPlans = property.paymentPlans;

          this.agent = property.agent;

          this.isOffPlan = property.isOffPlan;

          this.moreInfo = `I found your listing for ${this.title}, ${this.subtitle}.\n\nI am interested in learning more about it. Please contact me. Thank you.`;

          const descriptionDiv = document.createElement("div");
          descriptionDiv.innerHTML = this.description;
          const descriptionText = descriptionDiv.innerText;
        }
      }
    },
    goToWhatsapp(phone) {
      window.open(`https://wa.me/${phone}`, "_blank");
    },
    goToCall(phone) {
      window.open(`tel:${phone}`, "_blank");
    },
    async submitContactForm() {
      if (this.name && this.email && this.phone) {
        const payload = {
          listingId: this.propertyId,
          name: this.name,
          email: this.email,
          phone: this.phone,
          moreInfo: this.moreInfo,
          from: "LISTING",
        };

        const resp = await this.$store.dispatch("submitContactForm", payload);

        if (resp.message) {
          this.$store.commit("SET_TOASTER_MSG", {
            title: resp.message,
          });
        } else {
          this.$store.commit("SET_TOASTER_MSG", {
            title: "Something went wrong. Please try again later.",
          });
        }
      } else {
        this.$store.commit("SET_TOASTER_MSG", {
          title: "Please fill all the required fields first.",
        });
      }
    },
  },
};
</script>

<style scoped>
.mapouter {
  position: relative;
  /* height: 400px;
  width: 590px; */
  background: #fff;
}
.maprouter a {
  color: #fff !important;
  position: absolute !important;
  top: 0 !important;
  z-index: 0 !important;
}

.gmap_canvas {
  overflow: hidden;
  /* height: 400px;
  width: 590px; */
}
.gmap_canvas iframe {
  position: relative;
  z-index: 2;
}

.carousel__prev,
.carousel__next,
.carousel__prev > svg,
.carousel__next > svg {
  width: 4.5rem !important;
  height: 4.5rem !important;
}
</style>
