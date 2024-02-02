import { createStore } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";

const store = createStore({
  state: {
    toasterData: null,
    listings: [],
    properties: null,
    blogs: null,
    selectedBlog: null,
    searchableLocations: [],
    searchPriority: null,
    neighbourhoodProperties: [
      {
        title: "DUBAI ISLAND",
        description:
          "Discover Premium Villas and Residences for Sale in Dubai's prestigious Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion",
        image: require("../assets/images/neighbourhood/02.png"),
      },
      {
        title: "PALM JEBEL ALI",
        description:
          "Discover Premium Villas and Residences for Sale in Dubai's prestigious Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion",
        image: require("../assets/images/neighbourhood/01.png"),
      },
      {
        title: "PALM JUMEIRAH",
        description:
          "Discover Premium Villas and Residences for Sale in Dubai's prestigious Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion",
        image: require("../assets/images/neighbourhood/06.png"),
      },
      {
        title: "DOWNTOWN DUBAI",
        description:
          "Discover Premium Villas and Residences for Sale in Dubai's prestigious Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion",
        image: require("../assets/images/neighbourhood/03.png"),
      },
      {
        title: "EMIRATES HILL",
        description:
          "Discover Premium Villas and Residences for Sale in Dubai's prestigious Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion",
        image: require("../assets/images/neighbourhood/04.png"),
      },
      {
        title: "DUBAI HILLS",
        description:
          "Discover Premium Villas and Residences for Sale in Dubai's prestigious Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion",
        image: require("../assets/images/neighbourhood/05.png"),
      },

      {
        title: "JUMERIAH",
        description:
          "Discover Premium Villas and Residences for Sale in Dubai's prestigious Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion",
        image: require("../assets/images/neighbourhood/02.png"),
      },
      {
        title: "JUMERIAH PARK",
        description:
          "Discover Premium Villas and Residences for Sale in Dubai's prestigious Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion",
        image: require("../assets/images/neighbourhood/01.png"),
      },
      {
        title: "DUBAI CREEK HARBOUR",
        description:
          "Discover Premium Villas and Residences for Sale in Dubai's prestigious Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion",
        image: require("../assets/images/neighbourhood/06.png"),
      },
      {
        title: "CITY WALK",
        description:
          "Discover Premium Villas and Residences for Sale in Dubai's prestigious Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion",
        image: require("../assets/images/neighbourhood/03.png"),
      },
      {
        title: "MBR CITY - MEYDAN",
        description:
          "Discover Premium Villas and Residences for Sale in Dubai's prestigious Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion",
        image: require("../assets/images/neighbourhood/04.png"),
      },
      {
        title: "EMAAR BEACHFRONT",
        description:
          "Discover Premium Villas and Residences for Sale in Dubai's prestigious Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion",
        image: require("../assets/images/neighbourhood/05.png"),
      },
      {
        title: "DUBAI MARINA",
        description:
          "Discover Premium Villas and Residences for Sale in Dubai's prestigious Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion",
        image: require("../assets/images/neighbourhood/02.png"),
      },
      {
        title: "DUBAI SOUTH",
        description:
          "Discover Premium Villas and Residences for Sale in Dubai's prestigious Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion",
        image: require("../assets/images/neighbourhood/01.png"),
      },
      {
        title: "AL BARARI",
        description:
          "Discover Premium Villas and Residences for Sale in Dubai's prestigious Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion",
        image: require("../assets/images/neighbourhood/06.png"),
      },
      {
        title: "TILAL AL GHAF",
        description:
          "Discover Premium Villas and Residences for Sale in Dubai's prestigious Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion",
        image: require("../assets/images/neighbourhood/03.png"),
      },
      {
        title: " JUMERIAH LAKE TOWER",
        description:
          "Discover Premium Villas and Residences for Sale in Dubai's prestigious Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion",
        image: require("../assets/images/neighbourhood/04.png"),
      },
      {
        title: "DISTRICT ONE",
        description:
          "Discover Premium Villas and Residences for Sale in Dubai's prestigious Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion",
        image: require("../assets/images/neighbourhood/05.png"),
      },
      {
        title: "DIFC",
        description:
          "Discover Premium Villas and Residences for Sale in Dubai's prestigious Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion",
        image: require("../assets/images/neighbourhood/02.png"),
      },
      {
        title: "JBR",
        description:
          "Discover Premium Villas and Residences for Sale in Dubai's prestigious Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion",
        image: require("../assets/images/neighbourhood/01.png"),
      },
      {
        title: "SPRINGS",
        description:
          "Discover Premium Villas and Residences for Sale in Dubai's prestigious Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion",
        image: require("../assets/images/neighbourhood/06.png"),
      },
      {
        title: "AL BARSHA",
        description:
          "Discover Premium Villas and Residences for Sale in Dubai's prestigious Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion",
        image: require("../assets/images/neighbourhood/03.png"),
      },
      {
        title: "UMM SUQEIM",
        description:
          "Discover Premium Villas and Residences for Sale in Dubai's prestigious Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion",
        image: require("../assets/images/neighbourhood/04.png"),
      },
      {
        title: "THE LAKES",
        description:
          "Discover Premium Villas and Residences for Sale in Dubai's prestigious Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion",
        image: require("../assets/images/neighbourhood/05.png"),
      },
    ],
  },
  mutations,
  actions,
});

export default store;
