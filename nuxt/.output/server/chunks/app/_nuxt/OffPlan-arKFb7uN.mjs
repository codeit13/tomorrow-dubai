import { u as useSeoMeta, m as mapState, _ as _export_sfc } from '../server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-devtools-stub';
import 'axios';
import 'radix-vue';
import 'clsx';
import 'tailwind-merge';
import 'class-variance-authority';
import '@radix-icons/vue';

const _sfc_main = {
  data() {
    return {};
  },
  setup() {
    useSeoMeta({
      title: "Exclusive Off-Plan Investment Opportunities in Dubai\u2019s Thriving Real Estate Market",
      description: "At Tomorrow Luxury Property, you will receive comprehensive information on the latest off-plan projects and developments in Palm Jebel Ali, Palm Jumeirah, Dubai Island, and Downtown Dubai, UAE."
    });
  },
  computed: {
    ...mapState(["listings"]),
    offPlanProperties() {
      let listings = JSON.parse(JSON.stringify(this.listings));
      return listings ? listings.map((property) => {
        property.name = property.title;
        property.subtitle = property.price ? `STARTING PRICE - AED ${property.price.toLocaleString(
          "en-US"
        )}` : `AMAZING STARTING PRICES`;
        property.image = property.img1 || property.images[0];
        property.completionText = property.yearBuilt ? `Completed in ${property.yearBuilt}` : `Completed`;
        return property;
      }).filter((property) => property.isOffPlan) : [];
    }
  },
  methods: {
    addMetaTags({ title, description }) {
      if (!this.isMetaTagsAdded) {
        (void 0).title = title;
        const titleMetaTag = (void 0).createElement("meta");
        titleMetaTag.setAttribute("name", "title");
        titleMetaTag.setAttribute("content", title);
        (void 0).querySelector("head").appendChild(titleMetaTag);
        const descrMetaTag = (void 0).createElement("meta");
        descrMetaTag.setAttribute("name", "description");
        descrMetaTag.setAttribute("content", description);
        (void 0).querySelector("head").appendChild(descrMetaTag);
      }
    },
    goToProperty(property) {
      if (property && property.propertyName && property.title && property.address) {
        const propertyName = property.propertyName.trim().replaceAll(" ", "-").replaceAll(",", "").replaceAll(".", "").toLowerCase();
        const listingName = property.title.trim().replaceAll(" ", "-").replaceAll(",", "").replaceAll(".", "").toLowerCase().trim();
        const address = property.address.trim().replaceAll(" ", "-").replaceAll(",", "").replaceAll(".", "").toLowerCase().trim();
        this.$router.push(`/listing/${address}/${propertyName}/${listingName}`);
      } else {
        console.log("No listing found");
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white px-6 md:px-28 py-6 md:py-8" }, _attrs))}><div class="mt-6"><h1 class="text-2xl md:text-2xl font-extrabold montserrat-font mb-20"> OFF PLAN </h1></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mx-auto"><!--[-->`);
  ssrRenderList($options.offPlanProperties, (property, i) => {
    _push(`<div class="relative cursor-pointer w-fit"><div class="relative"><img${ssrRenderAttr("src", property.image)} alt="Property" class="w-[613px] h-auto" style="${ssrRenderStyle({ "aspect-ratio": "3/4", "object-fit": "cover" })}"><div class="items-center gap-6 border px-4 w-full text-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white bg-black/50 py-6 montserrat-font absolute bottom-0 overflow-hidden text-ellipsis"><p class="text-sm md:text-2xl font-extrabold montserrat-font mr-10">${ssrInterpolate(property.name)}</p><div class="flex items-start gap-1"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 md:w-6 md:h-6" viewBox="0 -960 960 960" fill="#fff"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"></path></svg><span class="text-sm md:text-lg">${ssrInterpolate(property.address)}</span></div></div></div><div class="p-4 pb-8 w-full bg-gray-100"><p class="text-sm md:text-lg font-semibold">${ssrInterpolate(property.subtitle)}</p><p class="text-[0.85rem] md:text-[1rem] josefin-slab mt-2">${ssrInterpolate(property.completionText)}</p></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/OffPlan.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OffPlan = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { OffPlan as default };
//# sourceMappingURL=OffPlan-arKFb7uN.mjs.map
