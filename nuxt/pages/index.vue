<template>
  <div class="bg-white">
    <div class="relative overflow-hidden">
      <img
        src="/assets/images/hero-bg.png"
        alt="Luxury Home"
        class="w-full h-auto aspect-[1/1.5] md:aspect-[16/7]"
        style="object-fit: cover"
      />
      <div class="absolute top-0 left-0 right-0 bottom-0">
        <Header />
        <div
          class="h-full flex flex-col justify-center items-start text-left text-white bg-black bg-opacity-50 px-6 md:px-28"
        >
          <!-- <h1
            class="text-xl md:text-2xl font-bold uppercase tracking-wide montserrat-font"
          >
            Find Your Next
          </h1> -->
          <h1
            class="text-4xl md:text-5xl tracking-wide font-bold mt-1 mb-2 inline-block"
            id="hero-text"
          >
            View Listings in
            <span
              class="text-4xl md:text-5xl font-bold transition-opacity duration-700 !capitalize"
              id="hero-switch-text"
            >
              Dubai Island
            </span>
          </h1>

          <div class="mt-3">
            <div
              class="inline-flex flex-col justify-center relative text-gray-500"
            >
              <div class="relative">
                <div class="relative flex gap-4">
                  <div class="relative">
                    <div
                      class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
                    >
                      <svg
                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      v-model="query"
                      class="block p-4 ps-10 focus:outline-none rounded-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white w-[60vw] md:w-[33vw] h-10 bg-background px-3 py text-sm text-black placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Search Community, Building, or City"
                      @keyup.enter="searchClick"
                    />
                  </div>

                  <button
                    @click="searchClick"
                    class="rounded-sm dark:bg-blue-500 dark:hover:bg-blue-500 dark:focus:ring-blue-800 inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50 px-8 py-2 bg-blue-700 hover:bg-blue-600 text-white"
                  >
                    Search
                  </button>
                </div>
              </div>
              <ul
                class="bg-white border border-gray-100 w-full mt-2 max-h-[35vh] z-20 overflow-hidden overflow-y-scroll"
                v-if="filteredLocations && filteredLocations.length"
              >
                <li
                  v-for="(entry, i) in filteredLocations"
                  :key="i"
                  @click="searchClick(entry)"
                  class="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-gray-50 hover:text-gray-900"
                >
                  <svg
                    v-if="
                      entry.type == 'PROPERTY' || entry.type == 'NEIGHBORHOOD'
                    "
                    class="stroke-current absolute w-4 h-4 left-2 top-2"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path
                      d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
                    />
                  </svg>

                  <svg
                    v-else-if="entry.type == 'LISTING'"
                    class="stroke-current absolute w-4 h-4 left-2 top-2"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path
                      d="M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"
                    />
                  </svg>

                  <span
                    v-if="entry.name && entry.type == 'NEIGHBORHOOD'"
                    class="capitalize"
                  >
                    {{ entry.title }} (All)
                  </span>
                  <span v-else-if="entry.name && entry.type == 'PROPERTY'">
                    {{ entry.name }}, {{ entry.address }}
                  </span>
                  <span
                    v-else-if="entry.name && entry.type == 'LISTING'"
                    class="capitalize"
                  >
                    {{ entry.title }}, {{ entry.address }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-6 py-24 md:px-28 md:pt-38">
      <div class="flex justify-between items-baseline mb-12">
        <h2 class="text-2xl md:text-[1.75em] font-extrabold josefin-slab">
          Neighborhood For You
        </h2>
        <span
          class="text-sm md:text-lg font-semibold cursor-pointer"
          @click="$router.push('/neighborhood')"
          >More ></span
        >
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <NuxtLink
          v-for="(property, i) in neighbourProperties"
          :to="`/search/${property.title
            .trim()
            .replaceAll(' ', '-')
            .toLowerCase()}`"
          :key="i"
          class="rounded-lg border bg-card shadow-sm relative w-full cursor-pointer"
          data-v0-t="card"
        >
          <div class="absolute inset-0 bg-black opacity-30"></div>
          <img
            :src="property.imageUrl"
            alt="DUBAILAND"
            class="w-full h-36 object-cover"
            width="350"
            height="150"
            style="aspect-ratio: 350 / 150; object-fit: cover"
          />
          <h3
            class="absolute bottom-0 w-full text-center font-bold text-[1em] text-white p-4 pb-3 montserrat-font"
          >
            {{ property.title }}
          </h3>
        </NuxtLink>
      </div>
    </div>
    <div
      class="px-6 md:px-28 md:pt-38"
      v-if="exclusiveProperties && exclusiveProperties.length"
    >
      <div class="flex justify-between items-baseline mb-0">
        <h2
          class="text-2xl md:text-3xl font-extrabold josefin-slab mb-8 md:mb-12"
        >
          Exclusive Properties
        </h2>

        <span
          class="text-sm md:text-lg font-semibold cursor-pointer mr-8"
          @click="searchClick"
        >
          More >
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          class="relative cursor-pointer hover:bg-gray-100 rounded-sm border-[1px] border-[#00000062]"
          v-for="(property, i) in exclusiveProperties"
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
            class="inline-flex items-center border px-2.5 py-0.5 w-fit josefin-slab text-xl font-normal text-[0.95em] md:text-[0.85em] transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white bg-black/10 absolute top-4 right-4"
          >
            {{ property.tag }}
          </div>
          <div class="p-4" @click="goToProperty(property)">
            <p class="text-lg md:text-2xl font-bold">
              AED {{ property.price?.toLocaleString("en-us") }}
            </p>
            <p class="text-sm mt-2">{{ property.features }}</p>

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

              <p class="text-sm">
                {{ property.propertyName }}, {{ property.address }}
              </p>
            </div>

            <p
              @click="goToProperty(property)"
              class="text-sm mt-4 text-[#302CFF] hover:text-[#302CFF] cursor-pointer"
            >
              {{ property.buttonText }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="px-6 py-24 md:px-28 md:pt-38"
      v-if="offPlanProperties && offPlanProperties.length"
    >
      <div class="flex justify-between items-baseline mb-0">
        <h2
          class="text-2xl md:text-3xl font-extrabold josefin-slab mb-12 md:mb-12"
        >
          Off Plan
        </h2>
        <span
          class="text-sm md:text-lg font-semibold cursor-pointer mr-8"
          @click="$router.push('/offplan')"
        >
          More >
        </span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          class="relative cursor-pointer w-fit"
          v-for="(property, i) in offPlanProperties"
          :key="i"
          @click="goToProperty(property)"
        >
          <div class="relative">
            <img
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
              class="items-center gap-6 border px-4 w-full text-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white bg-black/50 absolute bottom-0 overflow-hidden text-ellipsis py-6 montserrat-font"
            >
              <p
                class="text-lg font-extrabold montserrat-font mr-10 text-[1rem]"
              >
                {{ property.name }}
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

                <span class="text-sm md:text-sm font-normal">{{
                  property.address
                }}</span>
              </div>
            </div>
          </div>

          <div
            class="p-4 pb-8 w-full bg-gray-100"
            @click="goToProperty(property)"
          >
            <p class="text-sm md:text-[1rem]] font-semibold">
              {{ property.heading }}
            </p>
            <p class="text-[0.85rem] md:text-[1rem] josefin-slab mt-2">
              {{ property.completionText }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="px-6 md:px-28 md:pt-38"
      v-if="filteredBlogs && filteredBlogs.length"
    >
      <div class="flex justify-between items-baseline mb-12">
        <h2 class="text-2xl md:text-3xl font-extrabold josefin-slab">
          News & Updates
        </h2>
        <span
          class="text-sm md:text-lg font-semibold cursor-pointer"
          @click="$router.push('/blogs')"
        >
          More >
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          class="relative cursor-pointer w-fit hover:bg-gray-100 rounded-sm border-[1px] border-[#00000062]"
          v-for="(blog, i) in filteredBlogs"
          :key="i"
          @click="goToBlog(blog)"
        >
          <img
            :src="blog.imageUrl"
            alt="News"
            class="w-full h-auto"
            style="aspect-ratio: 300 / 200; object-fit: cover"
          />

          <div class="p-4 pl-6 pb-8 w-full">
            <p class="text-sm font-semibold josefin-slab">
              Dubai Market Insights
            </p>
            <p class="text-xl md:text-3xl font-extrabold josefin-slab mt-3">
              {{ blog.title.replaceAll('"', "") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { mapState } from "vuex";

import { cn } from "../lib/utils";

export default {
  data() {
    return {
      open: false,
      value: "next.js",
      query: null,
      filteredLocations: [],
      router: null,
    };
  },
  watch: {
    query(query) {
      if (query) {
        this.filteredLocations = [];
        this.neighbourhoodProperties.forEach((p) => {
          if (
            p.title.toLowerCase().trim().includes(query.toLowerCase().trim())
          ) {
            ``;
            this.filteredLocations.push({
              address: "",
              name: p.title,
              title: p.title,
              type: "NEIGHBORHOOD",
            });
          }
        });

        this.searchableLocations.forEach((location) => {
          if (
            location.address
              ?.toLowerCase()
              .trim()
              .includes(query.toLowerCase().trim()) ||
            location.title
              ?.toLowerCase()
              .trim()
              .includes(query.toLowerCase().trim()) ||
            location.name
              ?.toLowerCase()
              .trim()
              .includes(query.toLowerCase().trim())
          ) {
            this.filteredLocations.push(location);
          }
        });
      } else {
        this.filteredLocations = [];
      }
    },
  },
  computed: {
    ...mapState([
      "neighbourhoodProperties",
      "listings",
      "blogs",
      "searchableLocations",
    ]),
    filteredBlogs() {
      return this.blogs?.slice(0, 3);
    },
    neighbourProperties() {
      return this.neighbourhoodProperties
        ? JSON.parse(JSON.stringify(this.neighbourhoodProperties))
            .map((property, i) => {
              property.imageUrl = `./assets/images/neighbourhood/${i + 1}.png`;
              return property;
            })
            .slice(0, 6)
        : [];
    },
    exclusiveProperties() {
      let listings = JSON.parse(JSON.stringify(this.listings));
      return listings
        ? listings
            .map((property) => {
              property.image = property.img1 || property.images[0];
              property.buttonText = `${property.homeType.toUpperCase()} FOR SALE`;
              // property.tag = "Exclusive";
              property.features = `${property.bed} BEDS | ${property.bath} BATHS | ${property.sqFt} SQ FT`;
              return property;
            })
            .filter((property) => !property.isOffPlan)
            .slice(0, 3)
        : [];
    },
    offPlanProperties() {
      let listings = JSON.parse(JSON.stringify(this.listings));

      if (listings) {
        try {
          return listings
            .map((property) => {
              if (property.isOffPlan) {
                property.name = property.propertyName;
                property.heading = property.price
                  ? `STARTING PRICE - AED ${property.details["Price Range"]}`
                  : "Exclusive Prices";
                property.image = property.img1 || property.images[0];
                property.completionText = `Completion ${property.details["Completion Date"]}`;
              }
              return property;
            })
            .filter((property) => {
              return property.isOffPlan;
            })
            .slice(0, 3);
        } catch (error) {
          console.log(error);
          return [];
        }
      } else {
        return [];
      }
    },
  },
  setup() {
    useSeoMeta({
      title: "Real Estate in Dubai, Homes for Sale | Tomorrow Luxury Property",
      ogTitle:
        "Real Estate in Dubai, Homes for Sale | Tomorrow Luxury Property",
      description:
        "Explore, buy, sell, or rent with Tomorrow Luxury Property. Collaborate with our expert real estate agents to discover the perfect luxury home or apartment for you.",
      ogDescription:
        "Explore, buy, sell, or rent with Tomorrow Luxury Property. Collaborate with our expert real estate agents to discover the perfect luxury home or apartment for you.",
    });
  },
  mounted() {
    this.router = useRouter();
    const changingText = document.getElementById("hero-switch-text");

    let textArray = JSON.parse(
      JSON.stringify(this.neighbourhoodProperties)
    ).slice(0, 7);
    textArray.shift();

    textArray = textArray.map((item) => {
      // capitalize item.title eg: "DUBAI ISLAND" to Dubai Island
      item.title = item.title
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");

      return item;
    });

    let currentIndex = 0;

    setInterval(() => {
      changingText.style.opacity = 0;

      setTimeout(() => {
        changingText.textContent = textArray[currentIndex].title;
        currentIndex = (currentIndex + 1) % textArray.length;
        changingText.style.opacity = 1;
      }, 1000);
    }, 4000); // Text change every 5 seconds
  },
  methods: {
    searchInputChange(e) {
      let query = e.target.value;
      if (query) {
        this.filteredLocations = [];
        this.searchableLocations.map((location) => {
          if (
            location.address
              ?.toLowerCase()
              .trim()
              .includes(query.toLowerCase().trim()) ||
            location.title
              ?.toLowerCase()
              .trim()
              .includes(query.toLowerCase().trim()) ||
            location.name
              ?.toLowerCase()
              .trim()
              .includes(query.toLowerCase().trim())
          ) {
            this.filteredLocations.push(location);
          }
          return location;
        });
      } else {
        this.filteredLocations = [];
      }
    },
    searchClick(entry = null) {
      if (entry != null && entry.name) {
        if (entry.type == "LISTING") {
          this.router.push(
            `/search/${entry?.name.trim().replaceAll(" ", "-").toLowerCase()}`
          );
          this.goToProperty(entry);
        } else {
          this.$router.push(
            `/search/${entry?.name.trim().replaceAll(" ", "-").toLowerCase()}`
          );
        }
      } else if (this.query) {
        this.$router.push(`/search/${this.query}`);
      } else {
        this.$router.push(`/search/dubai`);
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
    goToBlog(blog) {
      if (blog && blog.slug) {
        this.$router.push(`/blog/${blog.slug}`);
      } else {
        console.log("No blog found");
      }
    },
    goToNeighborhoodProperty(property) {
      if (property && property.title) {
        this.$router.push(
          `/search/${property.title.trim().replaceAll(" ", "-").toLowerCase()}`
        );
      } else {
        alert(property);
      }
    },
    cn(args) {
      return cn(args);
    },
  },
};
</script>

<style>
.carousel__prev,
.carousel__next,
.carousel__prev > svg,
.carousel__next > svg {
  width: 2rem !important;
  height: 2rem !important;
}
/* Hide SVG buttons by default */
.carousel__prev > svg,
.carousel__next > svg {
  fill: transparent;
}

/* Show SVG buttons when hovering over the carousel slide */
.carousel:hover .carousel__prev > svg,
.carousel:hover .carousel__next > svg {
  fill: #fff;
}

.carousel__next,
.carousel__prev {
  background: #ffffff00 !important;
  border-radius: 100% !important;
}
</style>
