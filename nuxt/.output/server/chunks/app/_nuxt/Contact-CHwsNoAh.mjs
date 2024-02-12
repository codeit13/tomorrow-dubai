import { _ as __nuxt_component_6 } from './index-nmGifQsW.mjs';
import { _ as __nuxt_component_0 } from './Input-n6PmoyAk.mjs';
import { _ as _export_sfc, u as useSeoMeta } from '../server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'radix-vue';
import 'class-variance-authority';
import '@vueuse/core';
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
    Button: __nuxt_component_6,
    Input: __nuxt_component_0
  },
  data() {
    return { name: null, email: null, phone: null, moreInfo: null };
  },
  setup() {
    useSeoMeta({
      title: "Contact us | Tomorrow Luxury Property",
      description: "Get in contact with Tomorrow Luxury Property Real Estate today by filling in the form and a member of our team will get back to you shortly."
    });
  },
  methods: {
    async submitContactForm() {
      if (this.name && this.email && this.phone) {
        const payload = {
          listingId: this.propertyId,
          name: this.name,
          email: this.email,
          phone: this.phone,
          moreInfo: this.moreInfo
        };
        const resp = await this.$store.dispatch("submitContactForm", payload);
        if (resp.message) {
          this.$store.commit("SET_TOASTER_MSG", {
            title: resp.message
          });
        } else {
          this.$store.commit("SET_TOASTER_MSG", {
            title: "Something went wrong. Please try again later."
          });
        }
      } else {
        this.$store.commit("SET_TOASTER_MSG", {
          title: "Please fill al the required fields first."
        });
      }
    },
    openWhatsapp() {
      (void 0).open(
        `https://wa.me/+971581677220?text=Hi, I am interested in your property.`
      );
    },
    openCall() {
      (void 0).open(`tel:+971581677220`, "_blank");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = __nuxt_component_6;
  const _component_Input = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white p-4 pt-16 md:p-20" }, _attrs))}><div class="text-center"><div><span class="text-2xl">SAY HELLO TO </span><span class="text-2xl font-semibold">LUXURY PROPERTY DUBAI UAE.</span></div><p class="text-lg text-black font-bold mt-12 mb-4"> In Search Of Professional Guidance In Real Estate? </p><span class="inline-flex md:w-[500px]"> Our Tomorrow agents are ready to assist you with your property buying, renting, or selling needs. Embark on your real estate journey with a trusted expert by your side </span><div class="flex justify-center gap-10 my-12">`);
  _push(ssrRenderComponent(_component_Button, {
    onClick: $options.openWhatsapp,
    class: "rounded-none px-6 md:px-10 py-6 border-2 transition-all hover:text-xl border-[#000] bg-white text-sm md:text-lg font-semibold text-[#25D366]",
    variant: "outline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` WhatsApp `);
      } else {
        return [
          createTextVNode(" WhatsApp ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    onClick: $options.openCall,
    class: "rounded-none px-6 md:px-10 py-6 border-2 transition-all hover:text-xl border-[#000] bg-black text-nowrap text-sm md:text-lg font-semibold text-[#e3e3e3]",
    variant: "outline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Call Now`);
      } else {
        return [
          createTextVNode("Call Now")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><svg class="mx-auto mt-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg></div><div class="mt-20 text-center md:w-[50%] mx-auto"><h2 class="text-3xl mb-10 font-semibold montserrat-font">CONTACT FORM</h2><div class="mt-4"><div class="flex flex-col space-y-8">`);
  _push(ssrRenderComponent(_component_Input, {
    class: "placeholder-black",
    modelValue: $data.name,
    "onUpdate:modelValue": ($event) => $data.name = $event,
    placeholder: "FULL NAME"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Input, {
    class: "placeholder-black",
    modelValue: $data.email,
    "onUpdate:modelValue": ($event) => $data.email = $event,
    placeholder: "EMAIL"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Input, {
    class: "placeholder-black",
    modelValue: $data.phone,
    "onUpdate:modelValue": ($event) => $data.phone = $event,
    placeholder: "MOBILE"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Input, {
    class: "placeholder-black h-32",
    modelValue: $data.moreInfo,
    "onUpdate:modelValue": ($event) => $data.moreInfo = $event,
    placeholder: "MESSAGE"
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Button, {
    class: "bg-white text-[#302CFF] rounded-none border-[1px] border-[#302CFF] hover:text-white px-8 mt-4",
    onClick: $options.submitContactForm
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Send`);
      } else {
        return [
          createTextVNode("Send")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="mt-16 md:w-[70%] mx-auto bg-gray-200 px-4 md:px-20 py-6"><p class="text-2xl font-semibold">Head Office</p><p class="mt-10"> Downtown Dubai, UAE </p><p class="mt-6">CEO@TOMORROWDUBAI.COM</p><p class="mt-2">+971 581677220</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Contact as default };
//# sourceMappingURL=Contact-CHwsNoAh.mjs.map
