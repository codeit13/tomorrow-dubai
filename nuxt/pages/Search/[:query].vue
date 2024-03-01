<template>
  <div class="bg-white">
    <div class="mx-auto mt-6 px-6 md:px-28">
      <div class="flex flex-wrap -mx-2">
        <div class="w-[40%] px-2 mb-4">
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
            <Input
              v-model="searchText"
              @input="searchTextChange"
              class="block p-4 ps-10"
              placeholder="Search Community, Building or City"
            />
          </div>
          <ul
            class="absolute md:max-w-[30vw] bg-white border border-gray-100 w-full mt-2 h-[35vh] z-20 overflow-hidden overflow-y-scroll"
            v-if="filteredLocations && filteredLocations.length"
          >
            <li
              v-for="(entry, i) in filteredLocations"
              :key="i"
              @click="searchClick(entry)"
              class="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-gray-50 hover:text-gray-900"
            >
              <svg
                v-if="entry.type == 'PROPERTY' || entry.type == 'NEIGHBORHOOD'"
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
        <div class="w-fit px-2 mb-4">
          <Select v-model="property">
            <SelectTrigger id="property-type">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem
                :value="option"
                :key="i"
                v-for="(option, i) in propertyOptions"
              >
                {{ option }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div class="w-fit px-2 mb-4">
          <Select v-model="minPrice">
            <SelectTrigger id="min-price">
              <SelectValue placeholder="Min Price" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem
                :value="option"
                :key="i"
                v-for="(option, i) in minPriceOptions"
              >
                {{ parseInt(option) ? "AED" : null }}
                {{
                  parseInt(option)
                    ? parseInt(option).toLocaleString("en-us")
                    : option
                }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div class="w-fit px-2 mb-4">
          <Select v-model="maxPrice">
            <SelectTrigger id="max-price">
              <SelectValue placeholder="Max Price" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem
                :value="option"
                :key="i"
                v-for="(option, i) in maxPriceOptions"
              >
                {{ parseInt(option) ? "AED" : null }}
                {{
                  parseInt(option)
                    ? parseInt(option).toLocaleString("en-us")
                    : option
                }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div class="w-fit px-2 mb-4">
          <Select v-model="isOffPlan">
            <SelectTrigger id="off-plan">
              <SelectValue placeholder="Off-Plan" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem
                :value="option"
                :key="i"
                v-for="(option, i) in isOffPlanOptions"
              >
                {{
                  option == "Yes"
                    ? "Ready"
                    : option == "No"
                    ? "Off-Plan"
                    : option
                }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div class="w-fit px-2 mb-4">
          <Button
            class="w-full bg-blue-600 text-[1rem] rounded-none px-6 text-white"
            @click="updateClick"
          >
            Update
          </Button>
        </div>
      </div>
    </div>
    <hr class="bg-black h-[2px] w-full" />
    <div class="mx-auto mt-24 px-6 md:px-28">
      <div class="text-center mb-28">
        <h2 class="text-lg mb-2">Search Results</h2>
        <p class="text-2xl font-semibold" v-if="displaySearchText">
          <span>Properties for Sale in </span>
          <span class="capitalize font-semibold">{{ displaySearchText }}</span>
        </p>
        <p class="text-2xl font-semibold" v-else>
          <span>Properties for Sale in </span>
          <span class="capitalize font-semibold">{{ "dubai" }}</span>
        </p>
      </div>

      <div
        class="text-center mb-28"
        v-if="!(paginatedProperties && paginatedProperties.length)"
      >
        <h2 class="text-lg mb-2">No matching result</h2>
        <p class="text-2xl font-semibold">Try changing your Search...</p>
      </div>

      <div v-if="paginatedProperties && paginatedProperties.length">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-20">
          <div
            @click="goToProperty(property)"
            class="relative cursor-pointer hover:bg-gray-100 rounded-sm border-[1px] border-[#00000062]"
            v-for="(property, i) in paginatedProperties"
            :key="i"
          >
            <img
              :src="property.propertyImage"
              alt="Property"
              class="w-full h-auto"
              style="aspect-ratio: 300 / 200; object-fit: cover"
            />
            <div
              class="inline-flex items-center border px-2.5 py-0.5 w-fit text-xl josefin-slab font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white hover:text-black bg-black/20 text-secondary-foreground hover:bg-white/80 absolute top-4 right-4"
            >
              {{ property.tag }}
            </div>
            <div class="p-4">
              <p class="text-lg md:text-2xl font-bold">
                AED {{ property.price?.toLocaleString("en-us") }}
              </p>
              <p class="text-sm">{{ property.featureText }}</p>

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
                  {{ property.propertyName }}, {{ property.location }}
                </p>
              </div>

              <p
                class="text-sm mt-4 text-blue-600 hover:text-blue-800 cursor-pointer"
              >
                {{ property.buttonText }}
              </p>
            </div>
          </div>
        </div>

        <div class="w-full text-center">
          <vue-awesome-paginate
            :total-items="filteredProperties.length"
            :items-per-page="9"
            :max-pages-shown="20"
            v-model="currentPage"
            :on-click="onPaginationClick"
          />
        </div>
      </div>

      <div class="mt-16" v-else>
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
              width="300"
              height="200"
              style="aspect-ratio: 300 / 200; object-fit: cover"
            />
            <div
              class="inline-flex items-center border px-2.5 py-0.5 w-fit josefin-slab text-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white bg-black/10 absolute top-4 right-4"
            >
              {{ property.tag }}
            </div>
            <div class="p-4">
              <!-- <div class="flex align-center justify-between"> -->
              <p class="text-lg font-bold">{{ property.priceText }}</p>
              <p class="text-sm">{{ property.featureText }}</p>
              <!-- </div> -->
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
                class="text-sm mt-4 text-blue-600 hover:text-blue-800 cursor-pointer"
              >
                {{ property.buttonText }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="flex justify-center mb-40">
        <Pagination
          v-slot="{ page }"
          :total="100"
          :sibling-count="1"
          show-edges
          :default-page="2"
        >
          <PaginationList v-slot="{ items }" class="flex items-center gap-1">
            <PaginationFirst />
            <PaginationPrev />

            <template v-for="(item, index) in items">
              <PaginationListItem
                v-if="item.type === 'page'"
                :key="index"
                :value="item.value"
                as-child
              >
                <Button
                  class="w-10 h-10 p-0"
                  :variant="item.value === page ? 'default' : 'outline'"
                >
                  {{ item.value }}
                </Button>
              </PaginationListItem>
              <PaginationEllipsis v-else :key="item.type" :index="index" />
            </template>

            <PaginationNext />
            <PaginationLast />
          </PaginationList>
        </Pagination>
      </div> -->
    </div>
  </div>
</template>

<script>
import { neighbourhoodProperties } from "../../plugins/store/neighbourhood";
// import { Input } from "@/components/ui/input";
// import {
//   SelectValue,
//   SelectTrigger,
//   SelectItem,
//   SelectContent,
//   Select,
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from "@/components/ui/pagination";
import { mapState } from "vuex";

export default {
  components: {
    // Input,
    // SelectValue,
    // SelectTrigger,
    // SelectItem,
    // SelectContent,
    // Select,
    // Button,
    Pagination,
    PaginationEllipsis,
    PaginationFirst,
    PaginationLast,
    PaginationList,
    PaginationListItem,
    PaginationNext,
    PaginationPrev,
  },

  data() {
    return {
      propertyOptions: [
        "Property Type",
        "Apartment",
        "Penthouse",
        "Townhouse",
        "Plot",
      ],
      minPriceOptions: [
        "Min Price",
        "1000000",
        "2000000",
        "5000000",
        "10000000",
        "20000000",
        "50000000",
        "100000000",
      ],
      maxPriceOptions: [
        "Max Price",
        "1000000",
        "2000000",
        "5000000",
        "10000000",
        "20000000",
        "50000000",
        "100000000",
        "200000000",
        "300000000",
        "500000000",
        "1000000000",
      ],
      isOffPlanOptions: ["Property Status", "Yes", "No"],
      property: null,
      minPrice: null,
      maxPrice: null,
      isOffPlan: null,
      searchText: null,
      displaySearchText: null,
      filteredProperties: [],
      similarProperties: [],
      isMetaTagsAdded: false,
      filteredLocations: [],
      paginatedProperties: [],
      currentPage: 1,
    };
  },
  computed: {
    ...mapState(["listings", "neighbourhoodProperties", "searchableLocations"]),
  },
  watch: {
    listings: {
      // eslint-disable-next-line
      handler(newVal) {
        this.getValues(newVal);
      },
      deep: true,
    },
    // searchText() {
    //   // this.getValues();
    // },
    property() {
      this.getValues();
    },
    minPrice() {
      this.getValues();
    },
    maxPrice() {
      this.getValues();
    },
    isOffPlan() {
      this.getValues();
    },
    // currentPage(newValue, prevValue) {
    //   console.log(prevValue, newValue);
    //   this.paginatedProperties = this.filteredProperties.slice(
    //     (newValue - 1) * 3,
    //     newValue * 3
    //   );

    // },
  },
  setup() {
    useAsyncData(() => {
      const route = useRoute();
      const searchText = route.params.query.replaceAll("-", " ") || "dubai";

      let neighbourhoodProperty = neighbourhoodProperties.find((item) => {
        return (
          item.title.trim().toLowerCase() ==
          searchText.trim().replaceAll("-", " ").toLowerCase()
        );
      });

      if (neighbourhoodProperty) {
        useHead({
          title: `Properties for sale in ${neighbourhoodProperty.title} | Tomorrow Luxury Property`,
          description: neighbourhoodProperty.description,
        });
      } else {
        useHead({
          title: `Properties for sale in ${searchText.trim()} | Tomorrow Luxury Property`,
          description:
            "Discover Premium Villas and Residences for Sale in Dubai prestigeous Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion",
        });
      }
    });
  },
  mounted() {
    this.property = this.propertyOptions[0];
    this.minPrice = this.minPriceOptions[0];
    this.maxPrice = this.maxPriceOptions[0];
    this.isOffPlan = this.isOffPlanOptions[0];

    this.searchText = this.$route.params.query.replaceAll("-", " ") || "dubai";

    this.getValues();
  },
  methods: {
    onPaginationClick(page) {
      this.paginatedProperties = this.filteredProperties.slice(
        (page - 1) * 9,
        page * 9
      );
    },
    searchTextChange() {
      if (this.searchText) {
        this.filteredLocations = [];

        this.neighbourhoodProperties.forEach((p) => {
          if (
            p.title
              .toLowerCase()
              .trim()
              .includes(this.searchText.toLowerCase().trim())
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
              .includes(this.searchText.toLowerCase().trim()) ||
            location.title
              ?.toLowerCase()
              .trim()
              .includes(this.searchText.toLowerCase().trim()) ||
            location.name
              ?.toLowerCase()
              .trim()
              .includes(this.searchText.toLowerCase().trim())
          ) {
            this.filteredLocations.push(location);
          }
          return location;
        });
      } else {
        this.filteredLocations = [];
      }
    },
    updateClick() {
      this.filteredLocations = [];
      this.getValues();
    },
    searchClick(entry = null) {
      this.filteredLocations = [];
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
    /* eslint-disable */
    getValues(newVal = null) {
      this.displaySearchText = this.searchText || "dubai";
      let searchQuery = this.searchText.toLowerCase().trim() || "dubai";

      let minPrice =
        this.minPrice == this.minPriceOptions[0]
          ? false
          : parseInt(this.minPrice);
      let maxPrice =
        this.maxPrice == this.maxPriceOptions[0]
          ? false
          : parseInt(this.maxPrice);
      let offPlan =
        this.isOffPlan == this.isOffPlanOptions[0]
          ? "DEFAULT"
          : this.isOffPlan == "Yes"
          ? true
          : false;
      let selectedProperty =
        this.property == this.propertyOptions[0] ? false : this.property;

      console.log({
        searchQuery,
        minPrice,
        maxPrice,
        offPlan,
        selectedProperty,
      });

      let properties = newVal ? newVal : this.listings;
      if (properties) {
        this.similarProperties = properties
          .map((property) => {
            property.priceText = `AED ${property.price?.toLocaleString(
              "en-us"
            )}`;
            property.locationText = `${property.propertyName}, ${property.address}`;
            property.image = property.img1 || property.images[0];
            property.buttonText = `${property.homeType.toUpperCase()} FOR SALE`;
            property.tag = property.isOffPlan ? "Off Plan" : "Exclusive";
            property.featureText = `${property.bed} BEDS | ${property.bath} BATHS | ${property.sqFt} SQ FT`;
            return property;
          })
          .slice(0, 3);

        properties = properties.filter((property) => {
          return (
            (property.title.toLowerCase().includes(searchQuery) ||
              property.address.toLowerCase().includes(searchQuery) ||
              property.propertyName.toLowerCase().includes(searchQuery) ||
              "dubai".includes(searchQuery) ||
              property.homeType.toLowerCase().includes(searchQuery)) &&
            (minPrice ? property.price >= minPrice : true) &&
            (maxPrice ? property.price <= maxPrice : true) &&
            (offPlan == "DEFAULT" ? true : property.isOffPlan == offPlan) &&
            (selectedProperty ? property.homeType == selectedProperty : true)
          );
        });
        this.filteredProperties = properties.map((property) => {
          return {
            ...property,
            title: property.title,
            location: property.address,
            featureText: `${property.bed} Beds | ${property.bath} Baths | ${property.sqFt} Sq Ft`,
            price: property.price,
            propertyImage: property.img1 || property.images[0],
            description: property.description,
            amenities: property.amenities,
            buttonText: `${property.homeType?.toUpperCase()} FOR SALE`,
            tag: property.isOffPlan ? "Off Plan" : "Exclusive",
          };
        });

        this.paginatedProperties = this.filteredProperties.slice(0, 9);
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

<style>
.pagination-container {
  display: flex;
  column-gap: 15px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 5px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #0d0d0d;
  border: 1px solid #0d0d0d;
  color: white;
}
.active-page:hover {
  background-color: #2d2d2d;
}
</style>
