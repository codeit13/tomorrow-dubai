<template>
  <div class="bg-white">
    <div class="relative overflow-hidden">
      <img
        src="/assets/images/hero-bg.png"
        alt="Luxury Home"
        class="w-full h-auto aspect-[1/1] md:aspect-[16/7]"
        style="object-fit: cover"
      />
      <div class="absolute top-0 left-0 right-0 bottom-0">
        <Header />
        <div
          class="h-full flex flex-col justify-center items-start text-left text-white bg-black bg-opacity-50 px-4 md:px-28"
        >
          <span
            class="text-lg md:text-2xl font-bold uppercase tracking-wide montserrat-font"
          >
            How Much is My
          </span>
          <span
            class="text-2xl md:text-6xl font-bold uppercase tracking-wide montserrat-font mt-1"
          >
            House Worth?
          </span>
          <div class="flex space-x-2 mt-8">
            <input
              v-model="houseAddress"
              class="flex w-[60vw] md:w-[30vw] border border-input bg-background px-3 py-2 text-sm text-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Enter your Full Address"
              @keyup.enter="searchClick"
            />

            <button
              @click="searchClick"
              class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-6 md:px-8 py-5 bg-blue-700 text-white"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="px-6 md:px-28 pb-40 mt-24">
      <h1 class="text-3xl md:text-4xl font-semibold">
        Sell with a partner agent
      </h1>
      <div class="mt-4">
        <p class="text-lg">
          At Tomorrow Luxury Property, we represent the pinnacle of real estate
          expertise. Backed by unparalleled resources, we stand ready to craft a
          tailor-made strategy to showcase and sell your exquisite home. Trust
          us to utilize our expertise to your advantage.
        </p>
      </div>
      <div class="flex flex-row items-center gap-6 mt-12">
        <h2 class="text-2xl md:text-4xl font-bold">
          Trust. Transparency. Integrity.
        </h2>
        <div class="w-fit">
          <svg
            width="45"
            viewBox="0 0 66 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="text-right"
          >
            <path
              d="M19.664 0.240001L33.104 22.896L46.544 0.240001L65.872 0.240001L33.104 57.2L0.208 0.240001L19.664 0.240001Z"
              fill="#302CFF"
            />
          </svg>
        </div>
      </div>
      <div class="flex flex-col items-center gap-6 mt-24">
        <div class="flex flex-col items-center gap-6 md:w-[60vw]">
          <h2 class="text-4xl">Thinking of Selling ?</h2>

          <span class="text-lg">
            Complete the form below to connect with a Tomorrow Luxury Property
            advisor tailored to your market.
          </span>
          <div
            class="w-full md:w-[27vw] flex flex-col justify-center items-center gap-4 mt-12"
          >
            <Input
              class="border-black px-4 py-6 h-10 text-[0.95rem]"
              v-model="name"
              placeholder="FULL NAME"
            />
            <Input
              class="border-black px-4 py-6 h-10 text-[0.95rem]"
              v-model="email"
              placeholder="EMAIL"
            />
            <Input
              class="border-black px-4 py-6 h-10 text-[0.95rem]"
              v-model="phone"
              placeholder="MOBILE"
            />
            <Button
              class="bg-blue-700 text-lg font-semibold rounded-none px-8 py-7 text-white mt-4 w-fit"
              @click="submitContactForm"
            >
              We're here to help
            </Button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="px-6 md:px-28 mt-2"
      v-if="exclusiveProperties && exclusiveProperties.length"
    >
      <h2 class="text-3xl font-extrabold josefin-slab mb-12">
        Our Exclusive Homes
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          class="relative cursor-pointer hover:bg-gray-100 rounded-sm border-[1px] border-[#00000062]"
          v-for="(property, i) in exclusiveProperties"
          :key="i"
        >
          <img
            @click="goToProperty(property)"
            :src="property.image"
            alt="Property"
            class="w-full h-auto"
            style="aspect-ratio: 300 / 200; object-fit: cover"
          />
          <div
            class="inline-flex items-center border px-2.5 py-0.5 w-fit josefin-slab text-[0.95em] md:text-[0.85em] font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white bg-black/10 absolute top-4 right-4"
          >
            {{ property.tag }}
          </div>
          <div class="p-4" @click="goToProperty(property)">
            <!-- <div class="flex align-center justify-between"> -->
            <p class="text-lg font-bold">AED {{ property.price }}</p>
            <p class="text-sm">{{ property.features }}</p>
            <!-- </div> -->

            <p class="text-sm mt-2">{{ property.address }}</p>
            <p
              @click="goToProperty(property)"
              class="text-sm mt-4 text-blue-600 hover:text-blue-800 cursor-pointer"
            >
              {{ property.buttonText }}
            </p>
          </div>
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
      open: false,
      houseAddress: null,
      name: null,
      email: null,
      phone: null,
    };
  },
  computed: {
    ...mapState(["listings", "blogs"]),
    exclusiveProperties() {
      let listings = JSON.parse(JSON.stringify(this.listings));
      return listings
        ? listings
            .map((property) => {
              property.image = property.img1 || property.images[0];
              property.buttonText = `${property.homeType?.toUpperCase()} FOR SALE`;
              property.tag = "Exclusive";
              property.features = `${property.bed} BEDS | ${property.bath} BATHS | ${property.sqFt} SQ FT`;
              return property;
            })
            .slice(0, 3)
        : [];
    },
  },
  setup() {
    useSeoMeta({
      title: "Sell Your Home With Tomorrow Luxury Property",
      description:
        "Whether you're preparing to sell or seeking guidance, we offer data-driven insights and expert advice tailored to your local area.",
    });
  },
  methods: {
    addMetaTags({ title, description }) {
      if (!this.isMetaTagsAdded) {
        document.title = title;
        const titleMetaTag = document.createElement("meta");
        titleMetaTag.setAttribute("name", "title");
        titleMetaTag.setAttribute("content", title);
        document.querySelector("head").appendChild(titleMetaTag);

        const descrMetaTag = document.createElement("meta");
        descrMetaTag.setAttribute("name", "description");
        descrMetaTag.setAttribute("content", description);
        document.querySelector("head").appendChild(descrMetaTag);
      }
    },
    searchClick() {
      if (this.houseAddress) {
        this.$router.push(`/house-worth/${this.houseAddress}`);
      } else {
        this.$store.commit("SET_TOASTER_MSG", {
          title: "Please type your house address first.",
        });
      }
    },
    async submitContactForm() {
      if (this.name && this.email && this.phone) {
        const payload = {
          listingId: this.propertyId,
          name: this.name,
          email: this.email,
          phone: this.phone,
          from: "SELL",
        };

        const resp = await this.$store.dispatch("submitContactForm", payload);

        if (resp.message) {
          this.$store.commit("SET_TOASTER_MSG", {
            title: "We will get in touch with you shortly!",
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
