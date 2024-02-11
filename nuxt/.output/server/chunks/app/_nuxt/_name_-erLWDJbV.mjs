import { _ as __nuxt_component_6 } from './index-WlqPNlti.mjs';
import { m as mapState, u as useHead, a as useRoute, _ as _export_sfc } from '../server.mjs';
import { withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import 'radix-vue';
import 'class-variance-authority';
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
import 'clsx';
import 'tailwind-merge';
import '@radix-icons/vue';

const _sfc_main = {
  components: {
    Button: __nuxt_component_6
  },
  data() {
    return {
      agentName: "Manish Kumar",
      agentTitle: "LICENSED REAL ESTATE AGENT",
      agentEmail: "CEO@TOMORROWDUBAI.COM",
      agnetPhone: "+971 581677220",
      agentImage: null,
      lastSoldProperties: []
    };
  },
  computed: {
    ...mapState(["agents"])
  },
  setup() {
    useHead({
      title: "Agent | Tomorrow Luxury Property",
      meta: [
        {
          name: "description",
          content: "Contact us for your dubai property agent requirements."
        }
      ]
    });
  },
  async mounted() {
    if (this.agents.length == 0) {
      await this.$store.dispatch("fetchAgents");
    }
    this.getValues();
  },
  methods: {
    getValues() {
      var _a;
      const route = useRoute();
      let agentName = (_a = route.params.name) == null ? void 0 : _a.replaceAll("-", " ").trim();
      let agent = this.agents.find((agent2) => agent2.name == agentName);
      if (agent) {
        this.agentName = agent.name;
        this.agentTitle = agent.title;
        this.agentEmail = agent.email;
        this.agentPhone = agent.phone;
        this.agentImage = agent.img;
      }
    },
    emailAgent(agentEmail) {
      (void 0).open(`mailto:${agentEmail}`);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = __nuxt_component_6;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="max-w-7xl mx-auto my-10 p-6"><div class="flex flex-wrap gap-10"><div class=""><img alt="Profile" class="rounded-md" height="300"${ssrRenderAttr("src", $data.agentImage)} style="${ssrRenderStyle({ aspectRatio: "1/1", objectFit: "cover" })}" width="300"></div><div class="flex flex-col gap-10 md:gap-48 md:w-[60%]"><div class="md:col-span-2 space-y-4 mt-4"><h1 class="text-3xl font-bold montserrat-font">${ssrInterpolate($data.agentName)}</h1><p class="text-lg">${ssrInterpolate($data.agentTitle)}</p><p class="text-sm">EMAIL ID : ${ssrInterpolate($data.agentEmail)}</p><p class="text-sm">MOBILE : ${ssrInterpolate($data.agnetPhone)}</p>`);
  _push(ssrRenderComponent(_component_Button, {
    onClick: ($event) => $options.emailAgent($data.agentEmail),
    class: "bg-blue-600 text-lg rounded-none px-12 py-8 text-white"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Work With ${ssrInterpolate($data.agentName)}`);
      } else {
        return [
          createTextVNode(" Work With " + toDisplayString($data.agentName), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  if ($data.lastSoldProperties.length != 0) {
    _push(`<div><h2 class="text-2xl font-bold mb-4 montserrat-font">LAST SOLD</h2><div class="list-disc space-y-2"><!--[-->`);
    ssrRenderList($data.lastSoldProperties, (sold, i) => {
      _push(`<div class="flex flex-wrap justify-between"><span>${ssrInterpolate(i + 1)}. ${ssrInterpolate(sold.location)}</span><span>${ssrInterpolate(sold.price)}</span><span>SOLD / ${ssrInterpolate(sold.soldAt)}</span></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Agent/[:name].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __name_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __name_ as default };
//# sourceMappingURL=_name_-erLWDJbV.mjs.map
