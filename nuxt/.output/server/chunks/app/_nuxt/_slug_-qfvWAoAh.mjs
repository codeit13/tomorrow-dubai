import { u as useAsyncData } from './asyncData-w5FXC52Z.mjs';
import { m as mapState, _ as _export_sfc, a as useRoute, u as useSeoMeta } from '../server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
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
  computed: {
    ...mapState(["blogs", "selectedBlog"])
  },
  data() {
    return {
      blogId: null,
      title: null,
      content: null,
      similarBlogs: []
    };
  },
  mounted() {
    this.getValues();
  },
  setup() {
    useAsyncData(() => {
      const route = useRoute();
      const slug = route.params.slug;
      const capitalizeFirstLetterOfEveryWord = (str) => {
        return str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
      };
      const blogTitle = capitalizeFirstLetterOfEveryWord(
        slug.replaceAll("-", " ")
      );
      useSeoMeta({
        title: blogTitle
      });
    }, "$vGU6kLhg7Z");
  },
  watch: {
    blogs: {
      handler(newVal) {
        this.getValues(newVal);
      },
      deep: true
    }
  },
  methods: {
    getValues(newVal = null) {
      const slug = this.$route.params.slug;
      let blogs = newVal ? newVal : JSON.parse(JSON.stringify(this.blogs));
      if (blogs && blogs.length) {
        this.similarBlogs = blogs.length > 1 ? blogs.slice(0, 3) : [];
        let blog = blogs.filter((blog2) => {
          var _a;
          return (slug == null ? void 0 : slug.toLowerCase().trim()) == ((_a = blog2.slug) == null ? void 0 : _a.toLowerCase().trim());
        })[0];
        if (blog) {
          this.$store.commit("SET_SELECTED_BLOG", {
            id: blog.id,
            title: blog.title,
            content: blog.content
          });
        } else {
          console.log("No blog found: ", slug);
        }
      }
    },
    goToBlog(blog) {
      if (blog && blog.slug) {
        this.$store.commit("SET_SELECTED_BLOG", null);
        this.$router.push(`/blog/${blog.slug}`);
      } else {
        console.log("No blog found");
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (_ctx.selectedBlog) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto px-6 md:px-28 pt-10" }, _attrs))}><div class="flex flex-wrap justify-between items-start md:items-end sticky"><span class="text-xl font-extrabold josefin-slab mb-20 cursor-pointer uppercase"></span><div class="text-center"><h1 class="text-2xl md:text-4xl montserrat-font mb-20">${ssrInterpolate(_ctx.selectedBlog.title)}</h1></div><span></span></div><div class="px-1 md:px-4 min-h-[60vh]"><p class="text-lg text-justify">${_ctx.selectedBlog.content}</p></div><div class="my-16"><h2 class="text-2xl font-extrabold my-12 mt-20 josefin-slab"> Similar Blogs </h2><div class="grid grid-cols-1 md:grid-cols-3 gap-16"><!--[-->`);
    ssrRenderList($data.similarBlogs, (blog, i) => {
      _push(`<div class="relative cursor-pointer w-fit hover:bg-gray-100 rounded-sm border-[1px] border-[#00000062]"><img${ssrRenderAttr("src", blog.imageUrl || `/assets/images/blogs/01.png`)} alt="Blog" class="w-auto h-auto" style="${ssrRenderStyle({ "aspect-ratio": "1 / 1", "object-fit": "cover" })}"><div class="p-4 pl-6 pb-8 w-full"><p class="text-sm font-semibold josefin-slab"> Dubai Market Insights </p><p class="text-xl md:text-3xl font-extrabold josefin-slab mt-3">${ssrInterpolate(blog.title.replaceAll('"', ""))}</p></div></div>`);
    });
    _push(`<!--]--></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Blog/[:slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __slug_ as default };
//# sourceMappingURL=_slug_-qfvWAoAh.mjs.map
