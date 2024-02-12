import { m as mapState, u as useSeoMeta, _ as _export_sfc } from '../server.mjs';
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
  computed: {
    ...mapState(["neighbourhoodProperties"])
  },
  setup() {
    useSeoMeta({
      title: "Neighborhoods | Tomorrow Luxury Property",
      description: "Explore properties at amazing neighborhoods in Dubai."
    });
  },
  methods: {
    goToNeighborhoodProperty(property) {
      if (property && property.title) {
        this.$router.push(
          `/search/${property.title.trim().replaceAll(" ", "-").toLowerCase()}`
        );
      } else {
        alert(property);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white px-6 md:px-28 md:p-8" }, _attrs))}><div class="text-center my-20"><h1 class="text-3xl josefin-slab font-extrabold"> All neighborhood DUBAI , UAE </h1></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"><!--[-->`);
  ssrRenderList(_ctx.neighbourhoodProperties, (property, i) => {
    _push(`<div class="rounded-lg border bg-card shadow-sm relative w-full cursor-pointer" data-v0-t="card"><div class="absolute inset-0 bg-black opacity-30"></div><img${ssrRenderAttr("src", `/assets/images/neighbourhood/${i + 1}.png`)} alt="DUBAILAND" class="w-full h-36 object-cover" width="350" height="150" style="${ssrRenderStyle({ "aspect-ratio": "350 / 150", "object-fit": "cover" })}"><h3 class="absolute bottom-0 w-full text-center font-bold text-2xl md:text-xl text-white p-4 pb-3 montserrat-font">${ssrInterpolate(property.title)}</h3></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Neighborhood.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Neighborhood = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Neighborhood as default };
//# sourceMappingURL=Neighborhood-96CMAIAy.mjs.map
