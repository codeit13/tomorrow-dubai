<template>
  <div class="bg-white">
    <div class="relative">
      <img
        :src="require('../assets/images/hero-bg.png')"
        alt="Luxury Home"
        class="w-full h-auto aspect-[1/1] md:aspect-[16/6]"
        style="object-fit: cover"
      />
      <div class="absolute top-0 left-0 right-0 bottom-0">
        <Header />
        <div
          class="absolute top-[61px] left-0 right-0 bottom-0 flex flex-col justify-center items-start text-left text-white bg-black bg-opacity-50 px-6 md:px-24"
        >
          <h2
            class="text-2xl font-bold uppercase tracking-wide montserrat-font"
          >
            Find Your Next
          </h2>
          <h2
            class="text-6xl font-bold uppercase tracking-wide montserrat-font mt-1"
          >
            Dream Home
          </h2>
          <div class="flex space-x-2 mt-8">
            <input
              v-model="query"
              class="flex w-[62vw] md:w-[20vw] rounded-md border border-input bg-background px-3 py-2 text-sm text-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Search Community, Building, or City"
              @keyup.enter="searchClick"
            />

            <!-- <Popover v-model="open">
              <PopoverTrigger as-child>
                <Button
                  variant="input"
                  role="combobox"
                  :aria-expanded="open"
                  class="justify-between cursor-text flex h-10 w-[62vw] md:w-[20vw] rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {{
                    query
                      ? locations.find((location) => location.value === query)
                          ?.label
                      : "Select location..."
                  }}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                class="w-[60vw] md:w-[30vw] ml-20 p-0 relative md:bottom-[45px]"
              >
                <Command>
                  <CommandInput class="h-9" placeholder="Search location..." />
                  <CommandEmpty>No location found.</CommandEmpty>
                  <CommandList>
                    <CommandGroup>
                      <CommandItem
                        v-for="location in locations"
                        :key="location.i"
                        :value="location.value"
                        @select="
                          (ev) => {
                            console.log('select ev: ', ev);

                            if (typeof ev.detail.value === 'string') {
                              query = ev.detail.value;
                            }
                            open = false;
                          }
                        "
                      >
                        {{ location.label }}
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover> -->

            <Button
              @click="searchClick"
              variant="outline"
              :aria-expanded="open"
            >
              Search
            </Button>

            <!-- <button
             
              class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white"
            >
              Search
            </button> -->
          </div>
        </div>
      </div>
    </div>
    <div class="px-6 md:px-24 py-4">
      <div class="flex justify-between items-baseline">
        <h2 class="text-xl font-semibold my-20">Neighborhood For You</h2>
        <span
          class="text-sm font-semibold my-20 cursor-pointer"
          @click="$router.push('/neighbourhood')"
          >More ></span
        >
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="(property, i) in neighbourhoodProperties"
          @click="goToNeighborhoodProperty(property)"
          :key="i"
          class="rounded-lg border bg-card text-card-foreground shadow-sm relative w-full cursor-pointer"
          data-v0-t="card"
        >
          <div class="absolute inset-0 bg-black opacity-50"></div>
          <img
            :src="property.image"
            alt="DUBAILAND"
            class="w-full h-36 object-cover"
            width="350"
            height="150"
            style="aspect-ratio: 350 / 150; object-fit: cover"
          />
          <h3
            class="absolute bottom-0 w-full text-center font-semibold text-lg text-white p-4"
          >
            {{ property.title }}
          </h3>
        </div>
      </div>
    </div>
    <div
      class="px-6 md:px-24 py-4"
      v-if="exclusiveProperties && exclusiveProperties.length"
    >
      <h2 class="text-3xl font-semibold my-20">Exclusive Properties</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          class="relative cursor-pointer"
          @click="goToProperty(property)"
          v-for="(property, i) in exclusiveProperties"
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
            <p class="text-lg font-bold">AED {{ property.price }}</p>
            <p class="text-sm">{{ property.features }}</p>
            <p class="text-sm">{{ property.address }}</p>
            <p
              @click="goToProperty(property)"
              class="text-sm font-semibold mt-4 text-blue-600 hover:text-blue-800 cursor-pointer"
            >
              {{ property.buttonText }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="px-6 md:px-24 py-4"
      v-if="offPlanProperties && offPlanProperties.length"
    >
      <h2 class="text-3xl font-semibold my-20">Off Plan</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          @click="goToProperty(property)"
          class="relative cursor-pointer"
          v-for="(property, i) in offPlanProperties"
          :key="i"
        >
          <img
            :src="property.image"
            alt="Property"
            class="h-auto"
            style="aspect-ratio: 3/4; object-fit: cover"
          />
          <div
            class="inline-flex items-center border px-2.5 w-fit text-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white bg-black/50 absolute bottom-[84px] py-6 montserrat-font"
          >
            {{ property.name }}
          </div>
          <div class="p-4 w-fit">
            <span class="text-lg font-bold">{{ property.title }}</span>
            <br />
            <span class="text-sm">{{ property.features }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/Header.vue";

// import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

export default {
  components: {
    Header,
    Button,
    // Command,
    // CommandEmpty,
    // CommandGroup,
    // CommandInput,
    // CommandItem,
    // CommandList,
    // Popover,
    // PopoverContent,
    // PopoverTrigger,
  },
  data() {
    return {
      neighbourhoodProperties: [
        {
          title: "DUBAI ISLAND",
          image: require("../assets/images/neighbourhood/01.png"),
        },
        {
          title: "PALM JEBEL ALI",
          image: require("../assets/images/neighbourhood/02.png"),
        },
        {
          title: "PALM JUMEIRAH",
          image: require("../assets/images/neighbourhood/03.png"),
        },
        {
          title: "DOWNTOWN DUBAI",
          image: require("../assets/images/neighbourhood/04.png"),
        },
        {
          title: "EMIRATES HILL",
          image: require("../assets/images/neighbourhood/05.png"),
        },
        {
          title: "DUBAI HILLS",
          image: require("../assets/images/neighbourhood/06.png"),
        },
      ],
      // offPlanProperties: [
      //   {
      //     name: "RIXOS HOTELS & RESIDENCES, DUBAI ISLAND",
      //     title: "STARTING PRICE - AED 8M",
      //     features: "3 BEDS | 4 BATHS | 1,200 SQ FT",
      //     image: require("../assets/images/offPlan/01.png"),
      //   },
      //   {
      //     name: "RIXOS HOTELS & RESIDENCES, DUBAI ISLAND",
      //     title: "STARTING PRICE - AED 8M",
      //     features: "3 BEDS | 4 BATHS | 1,200 SQ FT",
      //     image: require("../assets/images/offPlan/01.png"),
      //   },
      //   {
      //     name: "RIXOS HOTELS & RESIDENCES, DUBAI ISLAND",
      //     title: "STARTING PRICE - AED 8M",
      //     features: "3 BEDS | 4 BATHS | 1,200 SQ FT",
      //     image: require("../assets/images/offPlan/01.png"),
      //   },
      // ],
      locations: [
        {
          i: 1,
          label: "BLVD Heights",
          value: "BLVD Heights",
        },
        {
          i: 2,
          label: "Burj Khalifa Area",
          value: "Burj Khalifa Area",
        },
        {
          i: 3,
          label: "The Address Sky View Towers",
          value: "The Address Sky View Towers",
        },
        {
          i: 4,
          label: "The Address Residence Fountain Views",
          value: "The Address Residence Fountain Views",
        },
        {
          i: 5,
          label: "The Address Residences Dubai Opera",
          value: "The Address Residences Dubai Opera",
        },
        {
          i: 6,
          label: "The Address The BLVD",
          value: "The Address The BLVD",
        },
        {
          i: 7,
          label: "The Residence | Burj Khalifa",
          value: "The Residence | Burj Khalifa",
        },
        {
          i: 8,
          label: "W Dubai Downtown Residences",
          value: "W Dubai Downtown Residences",
        },
        {
          i: 9,
          label: "29 Burj Boulevard",
          value: "29 Burj Boulevard",
        },
        {
          i: 10,
          label: "BLVD Crescent",
          value: "BLVD Crescent",
        },
        {
          i: 11,
          label: "St Regis Residences",
          value: "St Regis Residences",
        },
        {
          i: 12,
          label: "The Sterling",
          value: "The Sterling",
        },
        {
          i: 13,
          label: "Jumeirah Living Business Bay",
          value: "Jumeirah Living Business Bay",
        },
        {
          i: 14,
          label: "Bugatti Residences by Binghatti",
          value: "Bugatti Residences by Binghatti",
        },
        {
          i: 15,
          label: "The Edge",
          value: "The Edge",
        },
        {
          i: 16,
          label: "The Quayside by Ellington",
          value: "The Quayside by Ellington",
        },
        {
          i: 17,
          label: "Vela",
          value: "Vela",
        },
        {
          i: 18,
          label: "DG 1 Living",
          value: "DG 1 Living",
        },
        {
          i: 19,
          label: "Peninsula Three",
          value: "Peninsula Three",
        },
        {
          i: 20,
          label: "SLS Dubai Hotel & Residences",
          value: "SLS Dubai Hotel & Residences",
        },
        {
          i: 21,
          label: "The Paragon by IGO",
          value: "The Paragon by IGO",
        },
        {
          i: 22,
          label: "Dorchester Collection Dubai",
          value: "Dorchester Collection Dubai",
        },
        {
          i: 23,
          label: "Marriott Residences Dubai Business Bay",
          value: "Marriott Residences Dubai Business Bay",
        },
        {
          i: 24,
          label: "Safa Two",
          value: "Safa Two",
        },
        {
          i: 25,
          label: "UPSIDE",
          value: "UPSIDE",
        },
        {
          i: 26,
          label: "Volante",
          value: "Volante",
        },
        {
          i: 27,
          label: "Majestine",
          value: "Majestine",
        },
        {
          i: 28,
          label: "Marquise Square",
          value: "Marquise Square",
        },
        {
          i: 29,
          label: "Paramount Hotels & Resorts",
          value: "Paramount Hotels & Resorts",
        },
        {
          i: 30,
          label: "Peninsula Four",
          value: "Peninsula Four",
        },
        {
          i: 31,
          label: "Peninsula One",
          value: "Peninsula One",
        },
        {
          i: 32,
          label: "Peninsula Two",
          value: "Peninsula Two",
        },
        {
          i: 33,
          label: "Reva Residences",
          value: "Reva Residences",
        },
        {
          i: 34,
          label: "The Opus",
          value: "The Opus",
        },
        {
          i: 35,
          label: "The Pad",
          value: "The Pad",
        },
        {
          i: 36,
          label: "Vera Residences",
          value: "Vera Residences",
        },
        {
          i: 37,
          label: "Zada Residence",
          value: "Zada Residence",
        },
        {
          i: 38,
          label: "La Mer",
          value: "La Mer",
        },
        {
          i: 39,
          label: "Safa",
          value: "Safa",
        },
        {
          i: 40,
          label: "Jumeirah 2",
          value: "Jumeirah 2",
        },
        {
          i: 41,
          label: "Jumeirah Bay Island",
          value: "Jumeirah Bay Island",
        },
        {
          i: 42,
          label: "Jumeirah Villas",
          value: "Jumeirah Villas",
        },
        {
          i: 43,
          label: "Umm Al Sheif",
          value: "Umm Al Sheif",
        },
        {
          i: 44,
          label: "The Crescent",
          value: "The Crescent",
        },
        {
          i: 45,
          label: "Oceana",
          value: "Oceana",
        },
        {
          i: 46,
          label: "Garden Homes",
          value: "Garden Homes",
        },
        {
          i: 47,
          label: "Marina Residences",
          value: "Marina Residences",
        },
        {
          i: 48,
          label: "Kingdom of Sheba",
          value: "Kingdom of Sheba",
        },
        {
          i: 49,
          label: "Signature Villas",
          value: "Signature Villas",
        },
        {
          i: 50,
          label: "Como Residences",
          value: "Como Residences",
        },
        {
          i: 51,
          label: "Shoreline Apartments",
          value: "Shoreline Apartments",
        },
        {
          i: 52,
          label: "The Fairmont Palm Residences",
          value: "The Fairmont Palm Residences",
        },
        {
          i: 53,
          label: "Palm Beach Towers",
          value: "Palm Beach Towers",
        },
        {
          i: 54,
          label: "Serenia Living",
          value: "Serenia Living",
        },
        {
          i: 55,
          label: "Anantara Residences",
          value: "Anantara Residences",
        },
        {
          i: 56,
          label: "Ellington Beach House",
          value: "Ellington Beach House",
        },
        {
          i: 57,
          label: "Palma Residences",
          value: "Palma Residences",
        },
        {
          i: 58,
          label: "Atlantis The Royal Residences",
          value: "Atlantis The Royal Residences",
        },
        {
          i: 59,
          label: "Ava At Palm Jumeirah",
          value: "Ava At Palm Jumeirah",
        },
        {
          i: 60,
          label: "Canal Cove Villas",
          value: "Canal Cove Villas",
        },
        {
          i: 61,
          label: "Golden Mile",
          value: "Golden Mile",
        },
        {
          i: 62,
          label: "ORLA Dorchester Collection Dubai",
          value: "ORLA Dorchester Collection Dubai",
        },
        {
          i: 63,
          label: "Palm Flower",
          value: "Palm Flower",
        },
        {
          i: 64,
          label: "Serenia Residences The Palm",
          value: "Serenia Residences The Palm",
        },
        {
          i: 65,
          label: "Six Senses Residences The Palm",
          value: "Six Senses Residences The Palm",
        },
        {
          i: 66,
          label: "Th8",
          value: "Th8",
        },
        {
          i: 67,
          label: "Tiara Residences",
          value: "Tiara Residences",
        },
        {
          i: 68,
          label: "Custom Villas",
          value: "Custom Villas",
        },
        {
          i: 69,
          label: "FIVE Palm Jumeirah",
          value: "FIVE Palm Jumeirah",
        },
        {
          i: 70,
          label: "W Residences",
          value: "W Residences",
        },
        {
          i: 71,
          label: "Azure Residences",
          value: "Azure Residences",
        },
        {
          i: 72,
          label: "Dukes The Palm",
          value: "Dukes The Palm",
        },
        {
          i: 73,
          label: "Seven Palm",
          value: "Seven Palm",
        },
        {
          i: 74,
          label: "Sidra Villas",
          value: "Sidra Villas",
        },
        {
          i: 75,
          label: "Address Villas - Hillcrest",
          value: "Address Villas - Hillcrest",
        },
        {
          i: 76,
          label: "Dubai Hills",
          value: "Dubai Hills",
        },
        {
          i: 77,
          label: "Golf Place",
          value: "Golf Place",
        },
        {
          i: 78,
          label: "Maple At Dubai Hills Estate",
          value: "Maple At Dubai Hills Estate",
        },
        {
          i: 79,
          label: "Golf Grand",
          value: "Golf Grand",
        },
        {
          i: 80,
          label: "Majestic Vistas",
          value: "Majestic Vistas",
        },
        {
          i: 81,
          label: "Parkway Vistas",
          value: "Parkway Vistas",
        },
        {
          i: 82,
          label: "Club Villas at Dubai Hills",
          value: "Club Villas at Dubai Hills",
        },
        {
          i: 83,
          label: "Ellington House",
          value: "Ellington House",
        },
        {
          i: 84,
          label: "Executive Residences",
          value: "Executive Residences",
        },
        {
          i: 85,
          label: "Executive Residences II",
          value: "Executive Residences II",
        },
        {
          i: 86,
          label: "Hills Park",
          value: "Hills Park",
        },
        {
          i: 87,
          label: "Palm Hills",
          value: "Palm Hills",
        },
        {
          i: 88,
          label: "Park Heights",
          value: "Park Heights",
        },
        {
          i: 89,
          label: "Park Horizon",
          value: "Park Horizon",
        },
        {
          i: 90,
          label: "Pinnacle",
          value: "Pinnacle",
        },
        {
          i: 91,
          label: "Cavalli Tower",
          value: "Cavalli Tower",
        },
        {
          i: 92,
          label: "Marina Gate",
          value: "Marina Gate",
        },
        {
          i: 93,
          label: "Marina Shores",
          value: "Marina Shores",
        },
        {
          i: 94,
          label: "Emaar 6 Towers",
          value: "Emaar 6 Towers",
        },
        {
          i: 95,
          label: "Silverene Towers",
          value: "Silverene Towers",
        },
        {
          i: 96,
          label: "Emirates Crown",
          value: "Emirates Crown",
        },
        {
          i: 97,
          label: "Torch Tower",
          value: "Torch Tower",
        },
        {
          i: 98,
          label: "23 Marina",
          value: "23 Marina",
        },
        {
          i: 99,
          label: "5242",
          value: "5242",
        },
        {
          i: 100,
          label: "Ciel Tower",
          value: "Ciel Tower",
        },
        {
          i: 101,
          label: "Elite Residence",
          value: "Elite Residence",
        },
        {
          i: 102,
          label: "LIV Residence",
          value: "LIV Residence",
        },
        {
          i: 103,
          label: "La Riviera",
          value: "La Riviera",
        },
        {
          i: 104,
          label: "Le Reve",
          value: "Le Reve",
        },
        {
          i: 105,
          label: "Marina Promenade",
          value: "Marina Promenade",
        },
        {
          i: 106,
          label: "Marina Quays",
          value: "Marina Quays",
        },
        {
          i: 107,
          label: "Marinascape Avant",
          value: "Marinascape Avant",
        },
        {
          i: 108,
          label: "No. 9",
          value: "No. 9",
        },
        {
          i: 109,
          label: "Ocean Heights",
          value: "Ocean Heights",
        },
        {
          i: 110,
          label: "Orra Marina",
          value: "Orra Marina",
        },
        {
          i: 111,
          label: "Stella Maris",
          value: "Stella Maris",
        },
        {
          i: 112,
          label: "Trident Bayside",
          value: "Trident Bayside",
        },
        {
          i: 113,
          label: "Trident Grand Residence",
          value: "Trident Grand Residence",
        },
        {
          i: 114,
          label: "Meadows",
          value: "Meadows",
        },
        {
          i: 115,
          label: "Golf Heights",
          value: "Golf Heights",
        },
        {
          i: 116,
          label: "The Springs",
          value: "The Springs",
        },
        {
          i: 117,
          label: "Pearl Jumeirah Villas",
          value: "Pearl Jumeirah Villas",
        },
        {
          i: 118,
          label: "Sobha Hartland",
          value: "Sobha Hartland",
        },
        {
          i: 119,
          label: "District One West",
          value: "District One West",
        },
        {
          i: 120,
          label: "District 11",
          value: "District 11",
        },
        {
          i: 121,
          label: "District One",
          value: "District One",
        },
        {
          i: 122,
          label: "Sobha Hartland II",
          value: "Sobha Hartland II",
        },
        {
          i: 123,
          label: "The Residences at District One",
          value: "The Residences at District One",
        },
        {
          i: 124,
          label: "Wilton Park Residences",
          value: "Wilton Park Residences",
        },
      ],
      open: false,
      value: "next.js",
      query: null,
    };
  },
  computed: {
    ...mapState(["properties"]),
    exclusiveProperties() {
      let properties = JSON.parse(JSON.stringify(this.properties));
      return properties
        ? properties
            .map((property) => {
              property.image =
                property.img1 || require("../assets/images/exclusive/02.png");
              property.buttonText = "VILLA FOR SALE";
              property.tag = "Exclusive";
              property.features = `${property.bed} BEDS | ${property.bath} BATHS | ${property.sqFt} SQ FT`;
              return property;
            })
            .slice(0, 3)
        : [];
    },
    offPlanProperties() {
      let properties = JSON.parse(JSON.stringify(this.properties));
      return properties
        ? properties
            .map((property) => {
              property.title = `STARTING PRICE - AED ${property.price}`;
              property.image =
                property.img1 || require("../assets/images/exclusive/02.png");
              property.features = `${property.bed} BEDS | ${property.bath} BATHS | ${property.sqFt} SQ FT`;
              return property;
            })
            .filter((property) => property.isOffPlan)
            .slice(0, 3)
        : [];
    },
  },
  async mounted() {},
  methods: {
    searchClick() {
      if (this.query) {
        this.$router.push(`/search/${this.query}`);
      } else {
        this.$store.commit("SET_TOASTER_MSG", {
          title: "Please type your search location first.",
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
    goToNeighborhoodProperty(property) {
      if (property && property.title) {
        this.$router.push(`/search/${property.title}`);
      } else {
        alert(property);
      }
    },
    // cn(args) {
    //   return cn(args);
    // },
  },
};
</script>
