<template>
  <div class="bg-white p-4">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-wrap -mx-2">
        <div class="w-full sm:w-1/2 md:w-1/6 px-2 mb-4">
          <Input
            v-model="searchText"
            placeholder="Search By Title, Location,"
          />
        </div>
        <div class="w-full sm:w-1/2 md:w-1/6 px-2 mb-4">
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
        <div class="w-full sm:w-1/2 md:w-1/6 px-2 mb-4">
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
        <div class="w-full sm:w-1/2 md:w-1/6 px-2 mb-4">
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
        <div class="w-full sm:w-1/2 md:w-1/6 px-2 mb-4">
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
        <div class="w-fit sm:w-1/2 md:w-1/6 px-2 mb-4">
          <Button class="w-full">Update</Button>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto mt-8">
      <div class="text-center">
        <h2 class="text-xl font-semibold mb-4">Search Results</h2>
        <p class="text-lg">{{ searchText }}</p>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-4 my-20"
        v-if="filteredProperties && filteredProperties.length"
      >
        <div
          @click="goToProperty(property)"
          class="relative cursor-pointer"
          v-for="(property, i) in filteredProperties"
          :key="i"
        >
          <img
            :src="property.propertyImage"
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
            <p class="text-lg font-bold">AED {{ property.price }}</p>
            <p class="text-sm">{{ property.featureText }}</p>
            <p class="text-sm">{{ property.location }}</p>
            <p
              class="text-sm font-semibold mt-4 text-blue-600 hover:text-blue-800 cursor-pointer"
            >
              {{ property.buttonText }}
            </p>
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
      propertyOptions: ["Select property type", "Apartment", "House", "Villa"],
      minPriceOptions: ["Select min price", "$100,000", "$200,000", "$300,000"],
      maxPriceOptions: [
        "Select max price",
        "$500,000",
        "$1,000,000",
        "$1,500,000",
      ],
      isOffPlanOptions: ["Is it Off Plan", "Yes", "No"],
      property: null,
      minPrice: null,
      maxPrice: null,
      isOffPlan: null,
      searchText: null,
      filteredProperties: [],
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
      const searchQuery = this.searchText.toLowerCase().trim();
      let properties = newVal ? newVal : this.properties;
      if (properties) {
        properties = properties.filter((property) => {
          return (
            property.homeType
              .toLowerCase()
              .includes(this.property.toLowerCase()) &&
            (property.title.toLowerCase().includes(searchQuery) ||
              property.address.toLowerCase().includes(searchQuery) ||
              property.homeType.toLowerCase().includes(searchQuery)) &&
            property.price >= this.minPrice &&
            property.price <= this.maxPrice &&
            property.isOffPlan === this.isOffPlan
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
            buttonText: "VILLA FOR SALE",
            tag: "New",
          };
        });
      }
    },
    goToProperty(property) {
      if (property && property.title) {
        const titleSlug = property.title.toLowerCase();
        this.$router.push(`/property/${titleSlug}`);
      } else {
        console.log("No property found");
      }
    },
  },
};
</script>
