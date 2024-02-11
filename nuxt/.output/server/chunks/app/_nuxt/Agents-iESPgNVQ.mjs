import { m as mapState, b as useSeoMeta, _ as _export_sfc } from '../server.mjs';
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
    ...mapState(["agents"])
  },
  async mounted() {
    await this.$store.dispatch("fetchAgents");
  },
  setup() {
    useSeoMeta({
      title: "Agents | Tomorrow Luxury Property",
      description: "Explore properties at amazing neighborhoods in Dubai."
    });
  },
  methods: {
    goToAgent(agent) {
      const agentNameSlug = agent.name.trim().replaceAll(" ", "-");
      this.$router.push(`/agent/${agentNameSlug}`);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white p-4 md:py-8" }, _attrs))}><div class="text-center"><h1 class="text-2xl font-semibold">AGENT/ PARTNER</h1><span class="text-gray-800">Our Diversity Makes Us Great</span></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 md:w-[75%] mx-auto"><!--[-->`);
  ssrRenderList(_ctx.agents, (agent, i) => {
    _push(`<div class="relative cursor-pointer"><img${ssrRenderAttr("src", agent.img)} alt="Agent Photo" class="h-auto" width="400" style="${ssrRenderStyle({ "aspect-ratio": "1/1", "object-fit": "cover" })}"><div class="px-0 pb-8 w-fit"><br><span class="text-xl font-bold uppercase">${ssrInterpolate(agent.name)}</span><br><span class="text-sm">${ssrInterpolate(agent.email)}</span><br><span class="text-sm">${ssrInterpolate(agent.phone)}</span></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Agents.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Agents = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Agents as default };
//# sourceMappingURL=Agents-iESPgNVQ.mjs.map
