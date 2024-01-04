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
        <p class="text-lg">PALM JEBEL ALI, DUBAI, UAE</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-20">
        <div
          class="relative cursor-pointer"
          v-for="(property, i) in searchedProperties"
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
      <div class="flex justify-center mb-40">
        <Pagination
          v-slot="{ page }"
          :total="searchedProperties.length"
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
      propertyOptions: ["Apartment", "House", "Villa"],
      minPriceOptions: ["$100,000", "$200,000", "$300,000"],
      maxPriceOptions: ["$500,000", "$1,000,000", "$1,500,000"],
      isOffPlanOptions: ["Yes", "No"],
      property: null,
      minPrice: null,
      maxPrice: null,
      isOffPlan: null,
      searchText: null,
      searchedProperties: [
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
  mounted() {
    this.property = this.propertyOptions[0];
    this.minPrice = this.minPriceOptions[0];
    this.maxPrice = this.maxPriceOptions[0];
    this.isOffPlan = this.isOffPlanOptions[1];

    this.searchText = this.$route.query.q;
  },
};
</script>
