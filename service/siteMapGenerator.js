const fs = require("fs");

const {
  neighbourhoodProperties,
} = require("../nuxt/plugins/store/neighbourhood");

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
