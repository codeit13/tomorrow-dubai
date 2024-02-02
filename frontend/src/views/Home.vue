<template>
  <div class="bg-white">
    <div class="relative">
      <img
        :src="require('../assets/images/hero-bg.png')"
        alt="Luxury Home"
        class="w-full h-auto aspect-[1/1.5] md:aspect-[16/7]"
        style="object-fit: cover"
      />
      <div class="absolute top-0 left-0 right-0 bottom-0">
        <Header />
        <div
          class="absolute top-[58px] md:top-[64px] left-0 right-0 bottom-0 flex flex-col justify-center items-start text-left text-white bg-black bg-opacity-50 px-6 md:px-28"
        >
          <h2
            class="text-xl md:text-2xl font-bold uppercase tracking-wide montserrat-font"
          >
            Find Your Next
          </h2>
          <h2
            class="text-4xl md:text-6xl font-bold uppercase tracking-wide montserrat-font mt-1"
          >
            Dream Home
          </h2>

          <div class="mt-3">
            <div
              class="inline-flex flex-col justify-center relative text-gray-500"
            >
              <div class="relative">
                <!-- <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  v-model="query"
                  class="flex w-[62vw] md:w-[20vw] border border-input bg-background px-3 py-2 text-sm text-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Search Community, Building, or City"
                  @keyup.enter="searchClick"
                /> -->

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
                      class="block p-4 ps-10 focus:outline-none rounded-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white w-[62vw] md:w-[25vw] h-10 bg-background px-3 py text-sm text-black placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Search Community, Building, or City"
                      @keyup.enter="searchClick"
                      @change="searchInputChange"
                    />
                  </div>

                  <button
                    @click="searchClick"
                    class="rounded-sm dark:bg-blue-500 dark:hover:bg-blue-500 dark:focus:ring-blue-800 inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    Search
                  </button>
                </div>
              </div>
              <!-- <h3 class="mt-2 text-sm">Gevonden:</h3> -->
              <ul
                class="bg-white border border-gray-100 w-full mt-2"
                v-if="filteredLocations && filteredLocations.length"
              >
                <li
                  v-for="(entry, i) in filteredLocations.slice(0, 6)"
                  :key="i"
                  @click="searchClick(entry)"
                  class="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-gray-50 hover:text-gray-900"
                >
                  <svg
                    v-if="entry.type == 'PROPERTY'"
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

                  <span v-if="entry.name">
                    {{ entry.name }}, {{ entry.location }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-6 md:px-28 py-24 md:py-40">
      <div class="flex justify-between items-baseline mb-12">
        <h2 class="text-2xl md:text-4xl font-extrabold josefin-slab">
          Neighborhood For You
        </h2>
        <span
          class="text-sm md:text-lg font-semibold cursor-pointer"
          @click="$router.push('/neighbourhood')"
          >More ></span
        >
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="(property, i) in neighbourhoodProperties.slice(0, 6)"
          @click="goToNeighborhoodProperty(property)"
          :key="i"
          class="rounded-lg border bg-card shadow-sm relative w-full cursor-pointer"
          data-v0-t="card"
        >
          <div class="absolute inset-0 bg-black opacity-30"></div>
          <img
            :src="property.image"
            alt="DUBAILAND"
            class="w-full h-36 object-cover border-0 border-r-4 border-b-1 border-[#00000020]"
            width="350"
            height="150"
            style="aspect-ratio: 350 / 150; object-fit: cover"
          />
          <h3
            class="absolute bottom-0 w-full text-center font-bold text-2xl text-white p-4 pb-3 montserrat-font"
          >
            {{ property.title }}
          </h3>
        </div>
      </div>
    </div>
    <div
      class="px-6 md:px-28 pb-40"
      v-if="exclusiveProperties && exclusiveProperties.length"
    >
      <div class="flex justify-between items-baseline mb-0">
        <h2
          class="text-2xl md:text-4xl font-extrabold josefin-slab mb-8 md:mb-12"
        >
          Exclusive Properties
        </h2>
        <!-- <span
          class="text-sm font-semibold cursor-pointer"
          @click="$router.push('/offplan')"
          >More ></span
        > -->
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          class="relative cursor-pointer hover:bg-gray-100 rounded-sm border-[1px] border-[#00000062]"
          @click="goToProperty(property)"
          v-for="(property, i) in exclusiveProperties"
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

              <p class="text-sm">{{ property.address }}</p>
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
      class="px-6 md:px-28 py-4"
      v-if="offPlanProperties && offPlanProperties.length"
    >
      <div class="flex justify-between items-baseline mb-0">
        <h2
          class="text-2xl md:text-4xl font-extrabold josefin-slab mb-12 md:mb-12"
        >
          Off Plan
        </h2>
        <span
          class="text-sm md:text-lg font-semibold cursor-pointer mr-8"
          @click="$router.push('/offplan')"
          >More ></span
        >
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              class="w-[613px] h-auto"
              style="aspect-ratio: 3/4; object-fit: cover"
            />
            <div
              class="items-center gap-6 border px-4 w-full text-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white bg-black/50 absolute bottom-0 overflow-hidden text-ellipsis py-6 montserrat-font"
            >
              <p
                class="text-sm md:text-2xl font-extrabold montserrat-font mr-10 text-[1rem]"
              >
                {{ property.name }}
              </p>
              <div class="flex items-start gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 md:w-6 md:h-6"
                  viewBox="0 -960 960 960"
                  fill="#fff"
                >
                  <path
                    d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
                  />
                </svg>

                <span class="text-sm md:text-lg">{{ property.address }}</span>
              </div>

              <!-- <p v-if="property.pinLocation">
                {{
                  `📍 ${property.pinLocation.road}, ${property.pinLocation.state}`
                }}
              </p> -->
            </div>
          </div>

          <div class="p-4 pb-8 w-full bg-gray-100">
            <p class="text-sm md:text-lg font-semibold">
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
      class="px-6 md:px-28 py-4 mt-24"
      v-if="filteredBlogs && filteredBlogs.length"
    >
      <div class="flex justify-between items-baseline mb-12">
        <h2 class="text-2xl md:text-4xl font-extrabold josefin-slab">
          News & Updates
        </h2>
        <span
          class="text-sm md:text-lg font-semibold cursor-pointer"
          @click="$router.push('/blogs')"
          >More ></span
        >
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div
          class="relative cursor-pointer w-fit hover:bg-gray-100 rounded-sm border-[1px] border-[#00000062]"
          v-for="(blog, i) in filteredBlogs"
          :key="i"
          @click="goToBlog(blog)"
        >
          <img
            :src="
              blog.imageUrl ||
              `https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/Mercedes-Benz-Places-Binghatti.webp?alt=media&token=8e6cb0bb-e057-418e-8c1e-8cf677a09b8f`
            "
            alt="News"
            class="w-auto h-auto"
            style="aspect-ratio: 1/1; object-fit: cover"
          />

          <div class="p-4 pl-6 pb-8 w-full">
            <p class="text-sm font-semibold josefin-slab">
              Dubai Market Insights
            </p>
            <p class="text-xl md:text-3xl font-extrabold josefin-slab mt-3">
              {{ blog.title.replaceAll('"', "") }}
            </p>
            <!-- <p class="text-[1rem] josefin-slab mt-2">
              {{ blog.completionText }}
            </p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { mapState } from "vuex";

import { cn } from "@/lib/utils";

export default {
  components: {
    Header,
  },
  head: {
    meta: [
      {
        name: "title",
        content: "Tomorrow Luxury Property Dubai | Buy and Sell Real Estate",
      },
      {
        name: "description",
        content:
          "Enhance your property journey with Tomorrow Luxury Property. Collaborate with our expert real estate agents to discover the perfect luxury home or apartment for you.",
      },
    ],
  },
  data() {
    return {
      open: false,
      value: "next.js",
      query: null,
      filteredLocations: [],
    };
  },
  watch: {
    query(query) {
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
    exclusiveProperties() {
      let listings = JSON.parse(JSON.stringify(this.listings));
      return listings
        ? listings
            .map((property) => {
              property.image = property.img1 || property.images[0];
              property.buttonText = `${property.homeType.toUpperCase()} FOR SALE`;
              property.tag = "Exclusive";
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
                property.name = property.title;
                property.heading = property.price
                  ? `STARTING PRICE - AED ${property.details["Price Range"]}`
                  : "Exclusive Prices";
                property.image = property.img1 || property.images[0];
                property.completionText = property.yearBuilt
                  ? `Completion ${property.yearBuilt}`
                  : "Completed";
              }
              return property;
            })
            .filter((property) => {
              console.log(property.isOffPlan);
              return property.isOffPlan;
            });
          // .slice(0, 3);
        } catch (error) {
          console.log(error);
          return [];
        }
      } else {
        return [];
      }
    },
  },
  async mounted() {},
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
          this.$router.push(
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
