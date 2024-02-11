import { m as mapState, u as useHead, _ as _export_sfc, d as __nuxt_component_0 } from '../server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './hero-bg-iLh3Xg_W.mjs';
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
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = {
  data() {
    return {
      open: false,
      houseAddress: null
    };
  },
  computed: {
    ...mapState(["listings", "blogs"]),
    exclusiveProperties() {
      let listings = JSON.parse(JSON.stringify(this.listings));
      return listings ? listings.map((property) => {
        var _a;
        property.image = property.img1 || property.images[0];
        property.buttonText = `${(_a = property.homeType) == null ? void 0 : _a.toUpperCase()} FOR SALE`;
        property.tag = "Exclusive";
        property.features = `${property.bed} BEDS | ${property.bath} BATHS | ${property.sqFt} SQ FT`;
        return property;
      }).slice(0, 3) : [];
    }
  },
  setup() {
    useHead({
      title: "Sell Your Home With Tomorrow Luxury Property",
      meta: [
        {
          name: "description",
          content: "Whether you're preparing to sell or seeking guidance, we offer data-driven insights and expert advice tailored to your local area."
        }
      ]
    });
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
    searchClick() {
      if (this.houseAddress) {
        this.$router.push(`/house-worth/${this.houseAddress}`);
      } else {
        this.$store.commit("SET_TOASTER_MSG", {
          title: "Please type your house address first."
        });
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
  const _component_Header = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><div class="relative"><img${ssrRenderAttr("src", _imports_0)} alt="Luxury Home" class="w-full h-auto aspect-[1/1] md:aspect-[16/7]" style="${ssrRenderStyle({ "object-fit": "cover" })}"><div class="absolute top-0 left-0 right-0 bottom-0">`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<div class="absolute top-[58px] md:top-[68px] left-0 right-0 bottom-0 flex flex-col justify-center items-start text-left text-white bg-black bg-opacity-50 px-6 md:px-28"><h2 class="text-2xl font-bold uppercase tracking-wide montserrat-font"> How Much is My </h2><h2 class="text-6xl font-bold uppercase tracking-wide montserrat-font mt-1"> House Worth? </h2><div class="flex space-x-2 mt-8"><input${ssrRenderAttr("value", $data.houseAddress)} class="flex w-[62vw] md:w-[30vw] border border-input bg-background px-3 py-2 text-sm text-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Enter your Full Address"><button class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white"> Search </button></div></div></div></div>`);
  if ($options.exclusiveProperties && $options.exclusiveProperties.length) {
    _push(`<div class="px-6 md:px-28 pb-40 mt-40"><h2 class="text-3xl font-extrabold josefin-slab mb-12"> Our Exclusive Homes </h2><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><!--[-->`);
    ssrRenderList($options.exclusiveProperties, (property, i) => {
      _push(`<div class="relative cursor-pointer hover:bg-gray-100 rounded-sm border-[1px] border-[#00000062]"><img${ssrRenderAttr("src", property.image)} alt="Property" class="w-full h-auto" style="${ssrRenderStyle({ "aspect-ratio": "300 / 200", "object-fit": "cover" })}"><div class="inline-flex items-center border px-2.5 py-0.5 w-fit josefin-slab text-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white bg-black/10 absolute top-4 right-4">${ssrInterpolate(property.tag)}</div><div class="p-4"><p class="text-lg font-bold">AED ${ssrInterpolate(property.price)}</p><p class="text-sm">${ssrInterpolate(property.features)}</p><p class="text-sm mt-2">${ssrInterpolate(property.address)}</p><p class="text-sm mt-4 text-blue-600 hover:text-blue-800 cursor-pointer">${ssrInterpolate(property.buttonText)}</p></div></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Sell.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Sell = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Sell as default };
//# sourceMappingURL=Sell-_3MFqyq1.mjs.map
