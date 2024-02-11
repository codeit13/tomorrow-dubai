const fs = require("fs");

// const {
//   neighbourhoodProperties,
// } = require("../nuxt/plugins/store/neighbourhood");

const neighbourhoodProperties = [
  {
    title: "DUBAI ISLAND",
    description:
      "Explore luxury homes for sale on Dubai Islands. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today.",
  },
  {
    title: "PALM JEBEL ALI",
    description:
      "Explore luxury homes for sale in Palm Jebel Ali, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today.",
  },
  {
    title: "PALM JUMEIRAH",
    description:
      "Explore luxury homes for sale in Palm Jumeirah, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today.",
  },
  {
    title: "DOWNTOWN DUBAI",
    description:
      "Explore luxury homes for sale in Downtown Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today.",
  },
  {
    title: "EMIRATES HILL",
    description:
      "Explore luxury homes for sale in Emirates Hills, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today.",
  },
  {
    title: "DUBAI HILLS",
    description:
      "Explore luxury homes for sale in Dubai Hills, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today.",
  },
  {
    title: "JUMERIAH",
    description:
      " luxury homes for sale in Jumeirah Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today.",
  },
  {
    title: "JUMERIAH PARK",
    description:
      "Explore luxury homes for sale in Jumeirah Park, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today",
  },
  {
    title: "DUBAI CREEK HARBOUR",
    description:
      "Explore luxury homes for sale in Jumeirah Park, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today",
  },
  {
    title: "CITY WALK",
    description:
      "Explore luxury homes for sale in City Walk, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today.",
  },
  {
    title: "MOHAMMED BIN RASHID CITY",
    description:
      "Explore luxury homes for sale in Mohammed Bin Rashid City, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today.",
  },
  {
    title: "EMAAR BEACHFRONT",
    description:
      "Explore luxury homes for sale in Emaar Beachfront, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today.",
  },
  {
    title: "DUBAI MARINA",
    description:
      "Explore luxury homes for sale in Dubai Marina. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today.",
  },
  {
    title: "DUBAI SOUTH",
    description:
      "Explore luxury homes for sale in Dubai South. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today.",
  },
  {
    title: "AL BARARI",
    description:
      "Explore luxury homes for sale in Al Barari, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today.",
  },
  {
    title: "TILAL AL GHAF",
    description:
      "Explore luxury homes for sale in Tilal Al Ghaf, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today.",
  },
  {
    title: " JUMERIAH LAKE TOWER",
    description:
      "Explore luxury homes for sale in Jumeirah Lake Tower, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today.",
  },
  {
    title: "BUSINESS BAY",
    description:
      "Explore luxury homes for sale in Business Bay, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today.",
  },
  {
    title: "ZABEEL",
    description:
      "Explore luxury homes for sale in Zabeel Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today.",
  },
  {
    title: "JUMEIRIAH BEACH RESIDENCES",
    description:
      "Explore luxury homes for sale in Jumeirah Beach Residences, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today.",
  },
  {
    title: "JUMERIA BAY ISLAND",
    description:
      "Explore luxury homes for sale on Jumeira Bay Island, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today.",
  },
  {
    title: "PEARL JUMERIAH",
    description:
      "Explore luxury homes for sale in Pearl Jumeirah, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today.",
  },
  {
    title: "UMM SUQEIM",
    description:
      "Explore luxury homes for sale in Umm Suqeim, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today.",
  },
  {
    title: "THE WORLD ISLANDS",
    description:
      "Explore luxury homes for sale on The World Islands, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today.",
  },
];

async function generateSiteMap() {
  return new Promise((resolve, reject) => {
    // Read the content of the router.js file
    const fileContent = fs.readFileSync(
      "./frontend/src/router/index.js",
      "utf8"
    );

    // Use regular expression to extract the routes array
    const match = fileContent.match(/const routes = \[([\s\S]+?)\];/);
    if (match && match[1]) {
      let routesArrayString = match[1].trim();

      // Remove the 'component' key from all entries
      routesArrayString = routesArrayString
        .replace(/component:.*?,/g, "")
        .trim();

      // Add double quotes around key names
      routesArrayString = routesArrayString.replace(/(\w+):/g, '"$1":');

      // Remove trailing commas after keys in objects
      routesArrayString = routesArrayString.replace(/,\s*}/g, "}");

      // Remove trailing commas after elements in arrays
      routesArrayString = routesArrayString.replace(/,\s*]/g, "]");

      // Remove the last comma if it exists
      routesArrayString = routesArrayString.replace(/,(?=[^,]*$)/, "");

      try {
        // Parse the modified string into a JavaScript array
        const routesArray = JSON.parse(`[${routesArrayString}]`);

        const BASE_URL = "https://tomorrowluxuryproperty.com";

        // Generate the sitemap
        const { create } = require("xmlbuilder2");

        const root = create().ele("urlset", {
          xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
        });

        //for each path in the routes array, combine the base URL with the path
        //and wrap them in url and loc tags.
        for (let i = 0; i < routesArray.length; i++) {
          if (!routesArray[i].path.includes(":")) {
            var path = routesArray[i].path;
            root
              .ele("url")
              .ele("loc")
              .txt(BASE_URL + path);
          }
        }

        neighbourhoodProperties.forEach((neighbourhood) => {
          const slug = neighbourhood?.name
            .trim()
            .replaceAll(" ", "-")
            .toLowerCase();
          root
            .ele("url")
            .ele("loc")
            .txt(BASE_URL + `/search/${slug}`);
        });

        const xmlContent = root.end({ prettyPrint: true });
        // res.set("Content-Type", "text/xml");
        // console.log(typeof xmlContent);

        // res.send(xmlContent);

        fs.writeFileSync("./sitemap.xml", xmlContent);
        resolve("done");
      } catch (error) {
        console.error("Error parsing the routes array:", error);
        reject(error.message);
      }
    } else {
      console.error("Routes array not found in the file.");
      reject(error.message);
    }
  });
}

module.exports = { generateSiteMap };
