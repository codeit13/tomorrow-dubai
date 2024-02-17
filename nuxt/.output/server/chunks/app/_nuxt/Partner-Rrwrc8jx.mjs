import { _ as __nuxt_component_6 } from './index-nmGifQsW.mjs';
import { _ as __nuxt_component_0 } from './Input-n6PmoyAk.mjs';
import { d as __nuxt_component_1, a as __nuxt_component_2, _ as __nuxt_component_3, c as __nuxt_component_4, b as __nuxt_component_5 } from './SelectScrollDownButton-ZjB0VeaR.mjs';
import { _ as _export_sfc, u as useSeoMeta } from '../server.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import 'radix-vue';
import 'class-variance-authority';
import '@vueuse/core';
import '@radix-icons/vue';
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

const _sfc_main = {
  components: {
    // Button,
    // Input,
    // SelectValue,
    // SelectTrigger,
    // SelectItem,
    // SelectContent,
    // Select,
  },
  setup() {
    useSeoMeta({
      title: "Join the Future of Real Estate - Partner with Tomorrow Luxury Property",
      description: "Join Tomorrow Luxury Property and pioneer a new era in real estate. Our vision is simple: empower your growth and redefine partnership. Opt for our Full-Time offer with benefits like high commission splits and comprehensive support, or the Remote/Referral route for flexible, commitment-free earnings. Let's build success together."
    });
  },
  data() {
    return {
      fullName: null,
      email: null,
      phone: null,
      salesVolume: null,
      salesVolumeOptions: [
        "50K AED - 100K AED",
        "100K AED - 200K AED",
        "200K AED - 300K AED",
        "300K AED - 400K AED",
        "400K AED - 500K AED",
        "Above 500K AED"
      ]
    };
  },
  mounted() {
    this.salesVolume = this.salesVolumeOptions[0];
  },
  methods: {
    async submitForm() {
      if (this.fullName && this.email && this.phone && this.salesVolume) {
        const resp = await this.$store.dispatch("joinAsAgent", {
          fullName: this.fullName,
          email: this.email,
          phone: this.phone,
          salesVolume: this.salesVolume,
          status: "DRAFT"
        });
        if (resp.message) {
          this.$store.commit("SET_TOASTER_MSG", {
            title: "\u2705 Success",
            description: resp.message
          });
        }
      } else {
        this.$store.commit("SET_TOASTER_MSG", {
          title: "Please fill all the fields first.",
          variant: "destructive"
        });
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = __nuxt_component_6;
  const _component_Input = __nuxt_component_0;
  const _component_Select = __nuxt_component_1;
  const _component_SelectTrigger = __nuxt_component_2;
  const _component_SelectValue = __nuxt_component_3;
  const _component_SelectContent = __nuxt_component_4;
  const _component_SelectItem = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white text-gray-900 px-4" }, _attrs))}><header class="pt-48 md:pt-64 md:px-28 md:pl-40 pb-32 text-left bg-gray-100 bg-opacity-50"><div class="flex flex-col gap-32 items-center md:items-end w-fit"><div class="w-fit"><div class="w-fit"><p class="text-2xl md:text-4xl font-bold w-fit">We&#39;re Looking</p><p class="text-5xl md:text-7xl font-bold w-fit mt-2 md:mt-4"> For Partners </p></div><p class="mt-6 text-xl md:text-4xl w-fit font-semibold"> We Made Real Estate <span class="text-2xl md:text-5xl w-fit font-extrabold">Brokerage</span> Simple, Plug And Play </p></div><div class="w-fit mt-2 md:mt-8 relative"><svg width="40" height="40" viewBox="0 0 66 58" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-right"><path d="M19.664 0.240001L33.104 22.896L46.544 0.240001L65.872 0.240001L33.104 57.2L0.208 0.240001L19.664 0.240001Z" fill="#302CFF"></path></svg></div></div></header><section class="py-12"><h2 class="text-2xl md:text-3xl font-bold text-center"> Join the Future of Real Estate </h2><p class="mt-3 text-center text-gray-600 text-lg md:text-xl josefin-slab"> Partner with Tomorrow Luxury property. Simplifying Success in Real Estate </p><p class="md:w-[47%] text-justify mt-8 text-lg mx-auto"> At Tomorrow Luxury Property, we redefine the essence of real estate partnership. Our mission is to empower your entrepreneurial spirit by providing a seamless, efficient, and rewarding real estate brokerage experience. With us, you are not just an agent; you become an integral partner in a journey of mutual growth and success. </p><div class="mt-8 mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8"><div class="border-2 border-[#00000090] p-6 text-center bg-[#302CFF0D]"><h3 class="text-xl text-center text-[#302CFF] font-semibold border-2 border-[#302CFF50] w-fit px-8 py-3 mx-auto"> Full-Time </h3><p class="mt-4 text-lg font-bold"> AED 2,500 <span class="text-sm font-normal">/billed annually</span></p><div class="w-[98%] mx-auto text-center"><p class="mt-8 text-lg text-left"> Company <span class="font-bold">Visa &amp; Medical</span></p><p class="text-lg mt-2 text-left"> Commission Split <span class="font-bold">Agent: 90% | Company: 10%</span></p><p class="text-lg mt-2 text-left"><span class="font-bold">Flexible Work</span> Arrangements &amp; <span class="font-bold">Office space</span></p><p class="text-lg mt-2 text-left"> Comprehensive <span class="font-bold">Training and Development</span></p><p class="text-lg mt-2 text-left"><span class="font-bold">Unlimited</span> Property Listings </p><p class="text-lg mt-2 text-left"> Marketing and Advertising Support </p><p class="text-lg mt-2 text-left">Recognition and Rewards</p></div></div><div class="border-2 border-[#00000090] p-6 text-center"><h3 class="text-xl text-center font-semibold border w-fit px-8 py-3 mx-auto"> Remote/Referral </h3><p class="mt-4 text-lg font-bold"> AED 30,000 <span class="text-lg font-normal">/one time</span></p><div class="w-[98%] mx-auto"><p class="mt-8 text-lg text-left"> Enjoy the flexibility of working remotely with a one-time fee of AED 30,000 and a favorable commission split, without the need for a full-time commitment. </p><p class="mt-4 text-lg text-center"> Commission Split <br><span class="font-bold">Agent: 80% - 20% Company</span></p></div></div></div><div class="mt-8 text-center">`);
  _push(ssrRenderComponent(_component_Button, { class: "bg-blue-600 text-lg font-semibold rounded-none px-6 py-8 text-white mt-4" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Subscribe Now`);
      } else {
        return [
          createTextVNode("Subscribe Now")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section><section class="px-4 md:px-28 py-24 bg-gray-100/50 md:bg-gray-100"><div class="flex flex-wrap justify-between"><div class="flex flex-col justify-between"><div><h2 class="text-3xl font-bold text-left">LETS CHAT</h2><div class="mt-8 mx-auto text-left"><p class="text-xl font-bold"> Launch Your Dubai Real Estate Career In Just 10 Minutes! </p><p class="mt-5 text-xl font-bold"> Experience Our Hassle-Free, Plug-And-Play Model. </p><p class="mt-5 text-xl font-bold"> Enjoy An Unmatched Commission Split: 90% For Agents, 10% For The Company. </p><p class="mt-5 text-xl font-bold"> Join Us And Elevate Your Real Estate Success Today! </p></div></div><svg width="40" height="40" viewBox="0 0 66 58" fill="none" xmlns="http://www.w3.org/2000/svg" class="relative mt-28 left-[0%] -rotate-90"><path d="M19.664 0.240001L33.104 22.896L46.544 0.240001L65.872 0.240001L33.104 57.2L0.208 0.240001L19.664 0.240001Z" fill="#302CFF"></path></svg></div><div class="mt-8 md:mt-0 grid grid-cols-1 gap-4 w-[100%] md:w-[25%]">`);
  _push(ssrRenderComponent(_component_Input, {
    modelValue: $data.fullName,
    "onUpdate:modelValue": ($event) => $data.fullName = $event,
    placeholder: "Full Name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Input, {
    modelValue: $data.email,
    "onUpdate:modelValue": ($event) => $data.email = $event,
    placeholder: "Email Id",
    type: "email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Input, {
    modelValue: $data.phone,
    "onUpdate:modelValue": ($event) => $data.phone = $event,
    placeholder: "Mobile No"
  }, null, _parent));
  _push(`<span>What is your individual yearly commission volume!</span>`);
  _push(ssrRenderComponent(_component_Select, {
    class: "pt-0",
    modelValue: $data.salesVolume,
    "onUpdate:modelValue": ($event) => $data.salesVolume = $event
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SelectTrigger, {
          class: "w-[100%]",
          id: "commission"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_SelectValue, { placeholder: "What Is Your Individual Yearly Commission Value?" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_SelectValue, { placeholder: "What Is Your Individual Yearly Commission Value?" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SelectContent, {
          class: "w-[100%]",
          position: "popper"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($data.salesVolumeOptions, (option, i) => {
                _push3(ssrRenderComponent(_component_SelectItem, {
                  class: "w-[100%]",
                  key: i,
                  value: option
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`${ssrInterpolate(option)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(option), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList($data.salesVolumeOptions, (option, i) => {
                  return openBlock(), createBlock(_component_SelectItem, {
                    class: "w-[100%]",
                    key: i,
                    value: option
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(option), 1)
                    ]),
                    _: 2
                  }, 1032, ["value"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_SelectTrigger, {
            class: "w-[100%]",
            id: "commission"
          }, {
            default: withCtx(() => [
              createVNode(_component_SelectValue, { placeholder: "What Is Your Individual Yearly Commission Value?" })
            ]),
            _: 1
          }),
          createVNode(_component_SelectContent, {
            class: "w-[100%]",
            position: "popper"
          }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList($data.salesVolumeOptions, (option, i) => {
                return openBlock(), createBlock(_component_SelectItem, {
                  class: "w-[100%]",
                  key: i,
                  value: option
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(option), 1)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-sm"> By submitting this form I accept the Privacy Policy and Terms of Service. </span>`);
  _push(ssrRenderComponent(_component_Button, {
    class: "mt-4 w-fit rounded-none font-semibold px-8 py-6",
    onClick: $options.submitForm
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Submit`);
      } else {
        return [
          createTextVNode("Submit")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Partner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Partner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Partner as default };
//# sourceMappingURL=Partner-Rrwrc8jx.mjs.map
