import { u as useAsyncData } from './asyncData-w5FXC52Z.mjs';
import { m as mapState, _ as _export_sfc, u as useSeoMeta } from '../server.mjs';
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
    return {
      // blogs
    };
  },
  computed: {
    ...mapState(["blogs"])
  },
  setup() {
    useAsyncData(() => {
      useSeoMeta({
        title: `News and Insights - Tomorrow Luxury Property Real Estate in Dubai UAE`,
        description: `Stay updated on the latest in Dubai property investments with Tomorrow Luxury Property. Visit our News and Insights page for more information.`
      });
    }, "$30ZYYRPGtm");
  },
  methods: {
    goToBlog(blog) {
      if (blog && blog.slug) {
        this.$store.commit("SET_SELECTED_BLOG", null);
        this.$router.push(`/blog/${blog.slug}`);
      } else {
        console.log("No Blog found");
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white px-6 md:px-28 py-6 md:py-8" }, _attrs))}><div class="mt-6"><h1 class="text-2xl md:text-4xl font-extrabold josefin-slab mb-20"> News and Updates </h1></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mx-auto"><!--[-->`);
  ssrRenderList(_ctx.blogs, (blog, i) => {
    _push(`<div class="relative cursor-pointer w-fit hover:bg-gray-100 rounded-sm border-[1px] border-[#00000062]"><img${ssrRenderAttr("src", blog.imageUrl)} alt="Property" class="w-full h-auto" style="${ssrRenderStyle({ "aspect-ratio": "1/1", "object-fit": "cover" })}"><div class="p-4 pl-6 pb-8 w-full"><p class="text-sm font-semibold josefin-slab"> Dubai Market Insights </p><p class="text-xl md:text-3xl font-extrabold josefin-slab mt-3">${ssrInterpolate(blog.title.replaceAll('"', ""))}</p></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Blogs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Blogs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Blogs as default };
//# sourceMappingURL=Blogs-m0u9isPG.mjs.map
