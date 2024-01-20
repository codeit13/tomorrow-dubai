<template>
  <div v-if="title">
    <div class="mx-auto px-4 md:px-28 pt-10">
      <div
        class="flex flex-wrap justify-between items-start md:items-end sticky"
        v-if="isOffPlan"
      >
        <span
          class="text-sm md:text-xl font-extrabold josefin-slab mb-20 cursor-pointer uppercase"
          @click="$router.go(-1)"
          >{{ `< Off Plan` }}</span
        >
        <div class="text-center">
          <h1 class="text-2xl md:text-4xl montserrat-font mb-3">
            {{ title }}
          </h1>
          <p class="text-sm md:text-xl mb-3">
            {{ subtitle }}
          </p>
          <!-- <p class="text-lg">{{ featureText }}</p> -->

          <!-- <p class="text-lg text-gray-700 mt-4">STARTING FROM</p> -->
          <p class="text-sm md:text-xl" v-if="startingPrice">
            STARTING FROM AED {{ startingPrice.toLocaleString("en-US") }}
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
          <p class="text-sm md:text-lg mb-4">
            {{ subtitle }}
          </p>
          <p class="text-sm md:text-lg">{{ featureText }}</p>
        </div>
        <div v-if="startingPrice" class="md:text-right">
          <p class="text-lg text-gray-700">ASKING PRICE</p>
          <p class="text-3xl font-semibold">
            AED {{ startingPrice.toLocaleString("en-US") }}
          </p>
        </div>
      </div>
    </div>
    <div class="px-2">
      <div class="my-10">
        <img
          alt="Property"
          class="w-full h-auto"
          height="400"
          :src="propertyImage"
          :style="{
            aspectRatio: '640/400',
            objectFit: 'cover',
          }"
          width="640"
        />
      </div>
    </div>
    <div class="mx-auto px-6 md:px-28 py-12">
      <div
        class="flex flex-wrap md:flex-nowrap space-y-12 md:space-y-0 md:space-x-24"
      >
        <div
          class="flex flex-col space-y-20 w-[100%] md:w-[65%] md:min-w-[65%]"
        >
          <div v-if="isOffPlan && details">
            <h2 class="text-xl md:text-3xl font-semibold mb-6">Details</h2>
            <div class="grid grid-cols-3 gap-4">
              <div v-for="(item, i) in details" :key="i">
                <h1 class="text-md md:text-xl font-bold">{{ item }}</h1>
                <span class="text-xs">{{ i }}</span>
              </div>
            </div>
          </div>

          <div class="pt-6">
            <h2 class="text-xl md:text-3xl font-semibold mb-6">
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
            <h2 class="text-xl md:text-3xl font-semibold mb-8">Amenities</h2>
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

          <div v-if="isOffPlan && units" class="md:w-[50%] pt-4">
            <h2 class="text-xl md:text-3xl font-semibold mb-8">Units</h2>
            <div class="flex flex-col space-y-4">
              <div
                class="flex justify-between text-center"
                v-for="(unit, i) in units"
                :key="i"
              >
                <h1 v-if="unit.sqFt" class="font-bold text-sm md:text-md">
                  {{ i }}
                </h1>
                <span
                  v-if="unit.sqFt"
                  class="text-sm md:text-md josefin-slab font-[600]"
                >
                  {{ unit.sqFt }} Sq Ft
                </span>
                <span v-if="unit.price" class="text-sm md:text-md">
                  AED {{ unit.price.toLocaleString("en-US") }}
                </span>
              </div>
            </div>
          </div>

          <div v-if="isOffPlan && paymentPlans" class="md:w-[70%] pt-4">
            <h2 class="text-xl md:text-3xl font-semibold mb-8">Payment Plan</h2>
            <div class="flex justify-between">
              <div v-for="(plan, i) in paymentPlans" :key="i">
                <p class="text-xl md:text-xl font-bold">{{ plan }}</p>
                <h1 class="text-sm">{{ i }}</h1>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col flex-wrap space-y-5 md:space-y-10 w-full md:w-[40%] md:items-end"
        >
          <div
            class="flex items-center md:items-start flex-wrap md:flex-nowrap justify-start gap-8 md:p-8"
            v-if="agent"
          >
            <div class="rounded-full bg-gray-200 mb-4">
              <img
                alt="Agent"
                class="w-[200px] h-full rounded-full"
                :src="agent.img"
                :style="{
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                }"
              />
            </div>
            <div class="w-full">
              <h3 class="text-lg montserrat-font mb-3">LISTING AGENT</h3>
              <p class="font-semibold montserrat-font mb-3">{{ agent.name }}</p>
              <p class="mb-3">
                <a
                  :href="`mailto:${agent.email}`"
                  class="text-sm montserrat-font"
                >
                  {{ agent.email }}
                </a>
              </p>
              <p class="mb-3">
                <a :href="`tel:${agent.phone}`" class="text-sm montserrat-font">
                  {{ agent.phone }}
                </a>
              </p>

              <div class="flex mt-6">
                <Button
                  class="rounded-none border-2 transition-all border-[#000] bg-white text-sm font-semibold text-[#25D366] mt-2"
                  variant="outline"
                  @click="goToWhatsapp(agent.phone)"
                >
                  WhatsApp
                </Button>
                <Button
                  @click="goToCall(agent.phone)"
                  class="rounded-none border-2 transition-all border-[#000] bg-black text-sm font-semibold text-[#e3e3e3] mt-2 ml-0 md:ml-2"
                  variant="outline"
                  >Call Now</Button
                >
              </div>

              <!-- <Button
               
                class="mt-2"
                variant="outline"
              >
                WhatsApp
              </Button>
              <Button
                
                class="mt-2 ml-0 md:ml-2"
                variant="outline"
              >
                Call Now
              </Button> -->
            </div>
          </div>
          <div class="w-[92%] p-6 md:p-8 bg-gray-100 bg-opacity-50">
            <h2 class="text-xl font-semibold mb-4">Register your interest</h2>
            <div class="space-y-4 text-right">
              <Input v-model="name" placeholder="Full Name" />
              <Input v-model="email" placeholder="Email" />
              <Input v-model="phone" placeholder="+971 | Mobile" />
              <Textarea
                class="rounded-none border-[#000]"
                v-model="moreInfo"
                placeholder="Tell us more about what you want to know"
              />
              <Button
                class="rounded-none border-[1px] px-6 border-[#000] bg-white text-black hover:bg-black hover:text-white"
                @click="submitContactForm"
                >Submit</Button
              >
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-3xl font-semibold mb-8 mt-28">Location Map</h2>
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
        <h2 class="text-3xl font-semibold mt-32 mb-20">Similar Properties</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            @click="goToProperty(property)"
            class="relative cursor-pointer hover:bg-gray-100 rounded-sm border-[1px] border-[#00000062]"
            v-for="(property, i) in similarProperties"
            :key="i"
          >
            <img
              :src="property.image"
              alt="Property"
              class="w-full h-auto"
              style="aspect-ratio: 300 / 200; object-fit: cover"
            />
            <div
              class="inline-flex items-center border px-2.5 py-0.5 w-fit josefin-slab text-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white bg-black/10 absolute top-4 right-4"
            >
              {{ property.tag }}
            </div>
            <div class="p-4">
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

<script>
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { fromLonLat } from "ol/proj";

import { mapState } from "vuex";

export default {
  components: {
    Button,
    Input,
    Textarea,
  },
  data() {
    return {
      propertyId: null,
      title: null,
      subtitle: null,
      featureText: null,
      startingPrice: null,
      propertyImage: null,
      description: null,
      shortDescription: null,
      amenities: [],
      details: null,
      units: null,
      paymentPlans: null,
      agent: {},
      isOffPlan: false,
      similarProperties: [
        // {
        //   price: "AED 20,000,000",
        //   image: require("../assets/images/exclusive/03.png"),
        //   features: "3 BEDS | 4 BATHS | 1,200 SQ FT",
        //   location: "BURJ KHALIFA, DOWNTOWN, DUBAI UAE",
        //   buttonText: "VILLA FOR SALE",
        //   tag: "Exclusive",
        // },
        // {
        //   price: "AED 20,000,000",
        //   image: require("../assets/images/exclusive/01.png"),
        //   features: "3 BEDS | 4 BATHS | 1,200 SQ FT",
        //   location: "BURJ KHALIFA, DOWNTOWN, DUBAI UAE",
        //   buttonText: "VILLA FOR SALE",
        //   tag: "New",
        // },
        // {
        //   price: "AED 20,000,000",
        //   image: require("../assets/images/exclusive/02.png"),
        //   features: "3 BEDS | 4 BATHS | 1,200 SQ FT",
        //   location: "BURJ KHALIFA, DOWNTOWN, DUBAI UAE",
        //   buttonText: "VILLA FOR SALE",
        //   tag: "Off-Plan",
        // },
      ],
      name: null,
      email: null,
      phone: null,
      moreInfo: null,
      coordinates: [],
      center: [40, 40],
      projection: "EPSG:4326",
      zoom: 8,
      rotation: 0,
      radius: 15,
      strokeWidth: 5,
      strokeColor: "black",
      fillColor: "white",
      showMoreBtn: true,
    };
  },
  computed: {
    ...mapState(["properties"]),
  },
  watch: {
    properties: {
      handler(newVal) {
        console.log("watcher getValues: ", newVal);
        this.getValues(newVal);
      },
      deep: true,
    },
    async subtitle(address) {
      // address = "Bazpur, Uttarakhand, India";
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
  mounted() {
    console.log("mounted getValues");
    this.getValues();
  },
  methods: {
    fromLonLat(coordinates) {
      return fromLonLat(coordinates);
    },
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
    showMore() {
      this.shortDescription = this.description;
      this.showMoreBtn = false;
    },
    getValues(newVal = null) {
      const title = this.$route.params.titleSlug.replace(/-/g, " ");
      let properties = newVal
        ? newVal
        : JSON.parse(JSON.stringify(this.properties));
      if (properties && properties.length) {
        this.similarProperties = properties
          .map((property) => {
            property.priceText = property.price
              ? `AED ${property.price.toLocaleString("en-us")}`
              : "Amazing Prices";
            property.locationText = property.address;
            property.image = property.img1;
            property.buttonText = `${property.homeType.toUpperCase()} FOR SALE`;
            property.tag = property.isOffPlan ? "Off Plan" : "Exclusive";
            property.featureText = `${property.bed} BEDS | ${property.bath} BATHS | ${property.sqFt} SQ FT`;
            return property;
          })
          .slice(0, 3);

        let property = properties.filter((property) => {
          return (
            property.title.toLowerCase().trim() == title.toLowerCase().trim()
          );
        })[0];

        if (property) {
          this.propertyId = property.id;
          this.title = property.title;
          this.subtitle = `${property.propertyName}, ${property.address}`;

          this.featureText = `${property.homeType} | ${property.bed} Beds | ${property.bath} Baths | ${property.sqFt} Sq Ft`;
          this.startingPrice = property.price;
          this.propertyImage = property.img1;
          this.description = property.description;
          this.shortDescription = property.description.slice(0, 1000) + "...";
          this.amenities = property.amenities;

          this.details = property.details;
          this.units = property.units;
          this.paymentPlans = property.paymentPlans;

          this.agent = property.agent;

          this.isOffPlan = property.isOffPlan;

          this.moreInfo = `Hi, I found your property. Please contact me. Thank you`;
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
          propertyId: this.propertyId,
          name: this.name,
          email: this.email,
          phone: this.phone,
          moreInfo: this.moreInfo,
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
          title: "Please fill al the required fields first.",
        });
      }
    },
  },
};
</script>

<style>
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
</style>
