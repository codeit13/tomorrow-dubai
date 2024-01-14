<template>
  <div class="bg-white">
    <div class="mx-auto mt-6 px-6 md:px-28">
      <div class="flex flex-wrap -mx-2">
        <div
          class="w-full sm:w-1/2 md:w-1/1.5 px-2 mb-4"
          :style="{
            width: 'revert-layer',
          }"
        >
          <Input
            v-model="searchText"
            placeholder="Search By Title, Location,"
          />
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
                {{ option }}
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
                {{ option }}
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
                {{ option }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div class="w-fit px-2 mb-4">
          <Button
            class="w-full bg-blue-600 text-[1rem] rounded-none px-6 text-white"
            >Update</Button
          >
        </div>
      </div>
    </div>
    <hr class="bg-black h-[2px] w-full" />
    <div class="mx-auto mt-24 px-6 md:px-28">
      <div class="text-center mb-28">
        <h2 class="text-lg mb-2">Search Results</h2>
        <p class="text-2xl font-semibold" v-if="searchText">
          {{ searchText.toUpperCase() }}
        </p>
      </div>

      <div
        class="text-center mb-28"
        v-if="!(filteredProperties && filteredProperties.length)"
      >
        <h2 class="text-lg mb-2">No matching result</h2>
        <p class="text-2xl font-semibold">Try changing your Search...</p>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-12 my-20"
        v-if="filteredProperties && filteredProperties.length"
      >
        <div
          @click="goToProperty(property)"
          class="relative cursor-pointer hover:bg-gray-100 rounded-sm border-[1px] border-[#00000062]"
          v-for="(property, i) in filteredProperties"
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
            <!-- <div class="flex align-center justify-between"> -->
            <p class="text-lg font-bold">AED {{ property.price }}</p>
            <p class="text-sm">{{ property.featureText }}</p>
            <!-- </div> -->
            <p class="text-sm mt-2">{{ property.location }}</p>
            <p
              class="text-sm mt-4 text-blue-600 hover:text-blue-800 cursor-pointer"
            >
              {{ property.buttonText }}
            </p>
          </div>
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

              <p class="text-sm mt-2">{{ property.locationText }}</p>
              <p
                class="text-sm mt-4 text-blue-600 hover:text-blue-800 cursor-pointer"
              >
                {{ property.buttonText }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center mb-40">
        <Pagination
          v-if="false"
          v-slot="{ page }"
          :total="filteredProperties.length"
          :sibling-count="1"
          show-edges
          :default-page="1"
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
      </div>
    </div>
  </div>
</template>

<script>
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
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
    Input,
    SelectValue,
    SelectTrigger,
    SelectItem,
    SelectContent,
    Select,
    Button,
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
      propertyOptions: ["Property Type", "Apartment", "House", "Villa"],
      minPriceOptions: [
        "Min Price",
        "0",
        "5000000",
        "10000000",
        "20000000",
        "30000000",
      ],
      maxPriceOptions: [
        "Max Price",
        "40000000",
        "50000000",
        "60000000",
        "150000000",
      ],
      isOffPlanOptions: ["Off Plan", "Yes", "No"],
      property: null,
      minPrice: null,
      maxPrice: null,
      isOffPlan: null,
      searchText: null,
      filteredProperties: [],
      similarProperties: [],
    };
  },
  computed: {
    ...mapState(["properties"]),
  },
  watch: {
    properties: {
      // eslint-disable-next-line
      handler(newVal) {
        this.getValues(newVal);
      },
      deep: true,
    },
    searchText() {
      this.getValues();
    },
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
  },
  mounted() {
    this.property = this.propertyOptions[0];
    this.minPrice = this.minPriceOptions[0];
    this.maxPrice = this.maxPriceOptions[0];
    this.isOffPlan = this.isOffPlanOptions[0];

    this.searchText = this.$route.params.query;

    this.getValues();
  },
  methods: {
    /* eslint-disable */
    getValues(newVal = null) {
      let searchQuery = this.searchText.toLowerCase().trim().split(",");

      searchQuery = searchQuery[1]
        ? searchQuery[1].trim()
        : this.searchText.toLowerCase().trim();
      let minPrice =
        this.minPrice == this.minPriceOptions[0] ? false : this.minPrice;
      let maxPrice =
        this.maxPrice == this.maxPriceOptions[0] ? false : this.maxPrice;
      let offPlan =
        this.isOffPlan == this.isOffPlanOptions[0] ? false : this.isOffPlan;
      let selectedProperty =
        this.property == this.propertyOptions[0] ? false : this.property;

      console.log(
        `${searchQuery} ${minPrice} ${maxPrice} ${offPlan} ${selectedProperty}`
      );
      let properties = newVal ? newVal : this.properties;
      if (properties) {
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

        properties = properties.filter((property) => {
          return (
            (property.title.toLowerCase().includes(searchQuery) ||
              property.address.toLowerCase().includes(searchQuery) ||
              property.homeType.toLowerCase().includes(searchQuery)) &&
            (minPrice ? property.price >= minPrice : true) &&
            (maxPrice ? property.price <= maxPrice : true) &&
            (offPlan ? property.isOffPlan == offPlan : true) &&
            (selectedProperty ? property.homeType == selectedProperty : true)
          );
        });
        this.filteredProperties = properties.map((property) => {
          return {
            ...property,
            title: property.title,
            location: property.address,
            featureText: `${property.homeType} | ${property.bed} Beds | ${property.bath} Baths | ${property.sqFt} Sq Ft`,
            price: property.price,
            propertyImage: property.img1,
            description: property.description,
            amenities: property.amenities,
            buttonText: `${property.homeType?.toUpperCase()} FOR SALE`,
            tag: "New",
          };
        });
      }
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
  },
};
</script>
