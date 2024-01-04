<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="pt-10 pb-12">
      <div class="flex flex-wrap justify-between items-center">
        <div>
          <h1 class="text-3xl font-semibold">{{ title }}</h1>
          <p class="text-sm text-gray-500">
            {{ subtitle }}
          </p>
          <p class="text-sm">{{ featureText }}</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">STARTING FROM</p>
          <p class="text-2xl font-semibold">{{ startingPrice }}</p>
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
              {{ description }}
            </p>
            <Button class="mt-3" variant="outline"> {{ `More >` }} </Button>
          </div>

          <div class="md:w-[70%]">
            <h2 class="text-lg font-semibold mb-4">Amenities</h2>
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
        <div class="flex flex-col md:space-y-10 md:w-[30%]">
          <div class="flex items-center justify-center gap-8" v-if="agent">
            <div class="rounded-full bg-gray-200 w-24 h-24 mb-4">
              <img
                alt="Agent"
                class="w-full h-full rounded-full"
                height="96"
                :src="agent.profile_photo"
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
              <p class="text-sm">{{ agent.email }}</p>
              <p class="text-sm">{{ agent.phone }}</p>
              <Button class="mt-2" variant="outline"> WhatsApp </Button>
              <Button class="mt-2 ml-0 md:ml-2" variant="outline">
                Call Now
              </Button>
            </div>
          </div>
          <div>
            <h2 class="text-xl font-semibold mb-4">Contact form</h2>
            <form class="space-y-4">
              <Input class="w-fit" placeholder="Full Name" />
              <Input class="w-fit" placeholder="Email" />
              <Input class="w-fit" placeholder="+971 | Mobile" />
              <Button>Submit</Button>
            </form>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-xl font-semibold mb-4">Location Map</h2>
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
              class="w-[90vw] h-[100vh] md:h-[400px]"
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
              <p class="text-lg font-bold">{{ property.price }}</p>
              <p class="text-sm">{{ property.features }}</p>
              <p class="text-sm">{{ property.location }}</p>
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
export default {
  components: {
    Button,
    Input,
  },
  data() {
    return {
      title: "COMO RESIDENCES BY NAKHEEL",
      subtitle: "COMO RESIDENCES, PALM JUMEIRAH, DUBAI UAE.",
      featureText: "Villa | 3 Beds | 4 Baths | BUA - 1,900 Sq Ft",
      startingPrice: "AED 18,000,000",
      propertyImage: require("../assets/images/listing.png"),
      description: `A Rare Opportunity To Acquire A Truly Exceptional Home Which Is The
        Epitome Of Stylish Modern Living On The Palm Jumeirah. Located On
        The Highly Sought After Frond N. The Property Offers Over 8100 Sq Ft
        Of Accommodation Arranged Over Three Levels Comprising Of 5
        Bedrooms...`,
      amenities: [
        "Walking Wardrobe",
        "Walking Wardrobe",
        "Walking Wardrobe",
        "Walking Wardrobe",
        "Walking Wardrobe",
      ],
      agent: {
        name: "Manish Kumar",
        email: "ccordinator@como.ae",
        phone: "+971 581672220",
        profile_photo: "https://via.placeholder.com/96x96",
      },
      similarProperties: [
        {
          price: "AED 20,000,000",
          image: require("../assets/images/exclusive/03.png"),
          features: "3 BEDS | 4 BATHS | 1,200 SQ FT",
          location: "BURJ KHALIFA, DOWNTOWN, DUBAI UAE",
          buttonText: "VILLA FOR SALE",
          tag: "Exclusive",
        },
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
