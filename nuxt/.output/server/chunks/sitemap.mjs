import { d as defineEventHandler, s as setResponseHeaders, a as send } from './nitro/node-server.mjs';
import fs from 'fs';
import { create } from 'xmlbuilder2';
import 'node:http';
import 'node:https';
import 'path';
import 'node:fs';
import 'node:url';

const neighbourhoodProperties = [
  {
    title: "DUBAI ISLAND",
    description: "Explore luxury homes for sale on Dubai Islands. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today."
  },
  {
    title: "PALM JEBEL ALI",
    description: "Explore luxury homes for sale in Palm Jebel Ali, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today."
  },
  {
    title: "PALM JUMEIRAH",
    description: "Explore luxury homes for sale in Palm Jumeirah, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today."
  },
  {
    title: "DOWNTOWN DUBAI",
    description: "Explore luxury homes for sale in Downtown Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today."
  },
  {
    title: "EMIRATES HILL",
    description: "Explore luxury homes for sale in Emirates Hills, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today."
  },
  {
    title: "DUBAI HILLS",
    description: "Explore luxury homes for sale in Dubai Hills, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today."
  },
  {
    title: "JUMERIAH",
    description: " luxury homes for sale in Jumeirah Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today."
  },
  {
    title: "JUMERIAH PARK",
    description: "Explore luxury homes for sale in Jumeirah Park, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today"
  },
  {
    title: "DUBAI CREEK HARBOUR",
    description: "Explore luxury homes for sale in Jumeirah Park, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today"
  },
  {
    title: "CITY WALK",
    description: "Explore luxury homes for sale in City Walk, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today."
  },
  {
    title: "MOHAMMED BIN RASHID CITY",
    description: "Explore luxury homes for sale in Mohammed Bin Rashid City, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today."
  },
  {
    title: "EMAAR BEACHFRONT",
    description: "Explore luxury homes for sale in Emaar Beachfront, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today."
  },
  {
    title: "DUBAI MARINA",
    description: "Explore luxury homes for sale in Dubai Marina. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today."
  },
  {
    title: "DUBAI SOUTH",
    description: "Explore luxury homes for sale in Dubai South. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today."
  },
  {
    title: "AL BARARI",
    description: "Explore luxury homes for sale in Al Barari, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today."
  },
  {
    title: "TILAL AL GHAF",
    description: "Explore luxury homes for sale in Tilal Al Ghaf, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today."
  },
  {
    title: " JUMERIAH LAKE TOWER",
    description: "Explore luxury homes for sale in Jumeirah Lake Tower, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today."
  },
  {
    title: "BUSINESS BAY",
    description: "Explore luxury homes for sale in Business Bay, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today."
  },
  {
    title: "ZABEEL",
    description: "Explore luxury homes for sale in Zabeel Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today."
  },
  {
    title: "JUMEIRIAH BEACH RESIDENCES",
    description: "Explore luxury homes for sale in Jumeirah Beach Residences, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today."
  },
  {
    title: "JUMERIA BAY ISLAND",
    description: "Explore luxury homes for sale on Jumeira Bay Island, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today."
  },
  {
    title: "PEARL JUMERIAH",
    description: "Explore luxury homes for sale in Pearl Jumeirah, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today."
  },
  {
    title: "UMM SUQEIM",
    description: "Explore luxury homes for sale in Umm Suqeim, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today."
  },
  {
    title: "THE WORLD ISLANDS",
    description: "Explore luxury homes for sale on The World Islands, Dubai. Browse our listings for high-end properties, featuring photos and virtual tours. Connect with our agents at Tomorrow Luxury Property to discover your perfect home in a prestigious location. Start your journey with us today."
  }
];

const sitemap = defineEventHandler((event) => {
  const BASE_URL = "https://tomorrowluxuryproperty.com";
  let xmlContent;
  try {
    const routesArray = [
      "/",
      "/buy",
      "/sell",
      "/contact",
      "/neighborhood",
      "/offplan",
      "/partner",
      "/agents",
      "/blogs"
    ];
    const root = create().ele("urlset", {
      xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9"
    });
    routesArray.forEach((route) => {
      root.ele("url").ele("loc").txt(BASE_URL + route);
    });
    neighbourhoodProperties.forEach((neighbourhood) => {
      const slug = neighbourhood == null ? void 0 : neighbourhood.title.trim().replaceAll(" ", "-").toLowerCase();
      root.ele("url").ele("loc").txt(BASE_URL + `/search/${slug}`);
    });
    xmlContent = root.end({ prettyPrint: true });
    fs.writeFileSync("./public/sitemap.xml", xmlContent);
  } catch (error) {
    console.error("Error parsing the routes array:", error);
  }
  setResponseHeaders(event, {
    "Content-Type": "application/xml"
  });
  return send(event, xmlContent);
});

export { sitemap as default };
//# sourceMappingURL=sitemap.mjs.map
