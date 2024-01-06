<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" v-if="title">
    <div class="pt-10 pb-12">
      <div class="flex flex-wrap justify-between items-center sticky">
        <div>
          <h1 class="text-3xl font-semibold">{{ title }}</h1>
          <p class="text-sm text-gray-500">
            {{ subtitle }}
          </p>
          <p class="text-sm">{{ featureText }}</p>
        </div>
        <div v-if="startingPrice">
          <p class="text-sm text-gray-500">STARTING FROM</p>
          <p class="text-2xl font-semibold">AED {{ startingPrice }}</p>
        </div>
      </div>
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
      <div
        class="flex flex-wrap md:flex-nowrap space-y-12 md:space-y-0 md:space-x-24"
      >
        <div class="flex flex-col space-y-10 md:w-[70%]">
          <div class="">
            <h2 class="text-xl font-semibold mb-4">Property Descriptions</h2>
            <p class="text-justify">
              {{ shortDescription }}
            </p>
            <Button class="mt-3" variant="outline"> {{ `More >` }} </Button>
          </div>

          <div class="md:w-[70%]">
            <h2 class="text-lg font-semibold mb-4 mt-2">Amenities</h2>
            <div class="grid grid-cols-3 gap-4">
              <div
                class="bg-gray-200 p-2 text-left text-xs"
                :key="i"
                v-for="(item, i) in amenities"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col space-y-5 md:space-y-10 w-full md:w-[30%] md:items-end"
        >
          <div class="flex items-center justify-start gap-8" v-if="agent">
            <div class="rounded-full bg-gray-200 w-24 h-24 mb-4">
              <img
                alt="Agent"
                class="w-full h-full rounded-full"
                height="96"
                :src="agent.img"
                :style="{
                  aspectRatio: '96/96',
                  objectFit: 'cover',
                }"
                width="96"
              />
            </div>
            <div>
              <h3 class="text-lg font-semibold">LISTING AGENT</h3>
              <p class="font-semibold">{{ agent.name }}</p>
              <a :href="`mailto:${agent.email}`" class="text-sm">
                {{ agent.email }}
              </a>
              <br />
              <a :href="`tel:${agent.phone}`" class="text-sm">
                {{ agent.phone }}
              </a>
              <br />
              <Button
                @click="goToWhatsapp(agent.phone)"
                class="mt-2"
                variant="outline"
              >
                WhatsApp
              </Button>
              <Button
                @click="goToCall(agent.phone)"
                class="mt-2 ml-0 md:ml-2"
                variant="outline"
              >
                Call Now
              </Button>
            </div>
          </div>
          <div class="w-[92%]">
            <h2 class="text-xl font-semibold mb-4">Contact form</h2>
            <div class="space-y-4">
              <Input v-model="name" placeholder="Full Name" />
              <Input v-model="email" placeholder="Email" />
              <Input v-model="phone" placeholder="+971 | Mobile" />
              <Textarea
                v-model="moreInfo"
                placeholder="Tell us more about what you want to know"
              />
              <Button @click="submitContactForm">Submit</Button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-xl font-semibold mb-4 mt-12">Location Map</h2>
        <!-- <img
          alt="Location Map"
          class="w-full h-auto"
          height="200"
          src="/placeholder.svg"
          :style="{ aspectRatio: '300/200', objectFit: 'cover' }"
          width="300"
        /> -->
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              src="https://maps.google.com/maps?q=dubai&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              frameborder="0"
              scrolling="no"
              class="w-[96vw] h-[50vh] md:h-[400px]"
            ></iframe>
          </div>
        </div>
      </div>

      <div class="my-8">
        <h2 class="text-xl font-semibold mb-4">Similar Properties</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-20">
          <div
            @click="goToProperty(property)"
            class="relative cursor-pointer"
            v-for="(property, i) in similarProperties"
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
              <p class="text-lg font-bold">{{ property.priceText }}</p>
              <p class="text-sm">{{ property.featuresText }}</p>
              <p class="text-sm">{{ property.locationText }}</p>
              <p
                class="text-sm font-semibold mt-4 text-blue-600 hover:text-blue-800 cursor-pointer"
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
      agent: {},
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
  },
  mounted() {
    console.log("mounted getValues");
    this.getValues();
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
    getValues(newVal = null) {
      const title = this.$route.params.titleSlug.replace(/-/g, " ");
      let properties = newVal
        ? newVal
        : JSON.parse(JSON.stringify(this.properties));
      if (properties && properties.length) {
        this.similarProperties = properties
          .map((property) => {
            property.priceText = `AED ${property.price}`;
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
          this.subtitle = property.address;

          this.featureText = `${property.homeType} | ${property.bed} Beds | ${property.bath} Baths | ${property.sqFt} Sq Ft`;
          this.startingPrice = property.price;
          this.propertyImage = property.img1;
          this.description = property.description;
          this.shortDescription = property.description.slice(0, 170) + "...";
          this.amenities = property.amenities;

          this.agent = property.agent;

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
