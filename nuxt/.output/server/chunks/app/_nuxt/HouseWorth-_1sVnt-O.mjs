import { _ as __nuxt_component_6 } from './index-WlqPNlti.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, computed, unref, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { useForwardPropsEmits, RadioGroupRoot, useForwardProps, RadioGroupItem, RadioGroupIndicator, Label } from 'radix-vue';
import { _ as _export_sfc, c as cn } from '../server.mjs';
import { CheckIcon } from '@radix-icons/vue';
import { _ as __nuxt_component_3$1, a as __nuxt_component_2$1, b as __nuxt_component_5, c as __nuxt_component_4, d as __nuxt_component_1$1 } from './SelectScrollDownButton-9flwTiCk.mjs';
import { _ as __nuxt_component_0 } from './Input-gB3r_rcC.mjs';
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
import '@vueuse/core';

const _sfc_main$3 = {
  __name: "RadioGroup",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: String, required: false },
    defaultValue: { type: String, required: false },
    disabled: { type: Boolean, required: false },
    name: { type: String, required: false },
    required: { type: Boolean, required: false },
    orientation: { type: String, required: false },
    dir: { type: String, required: false },
    loop: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RadioGroupRoot), mergeProps({
        class: unref(cn)("grid gap-2", props.class)
      }, unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/radio-group/RadioGroup.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "RadioGroupItem",
  __ssrInlineRender: true,
  props: {
    id: { type: String, required: false },
    value: { type: String, required: false },
    disabled: { type: Boolean, required: false },
    required: { type: Boolean, required: false },
    name: { type: String, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RadioGroupItem), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "aspect-square h-4 w-4 rounded-full border border-zinc-200 border-zinc-900 text-zinc-900 shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:border-zinc-50 dark:text-zinc-50 dark:focus-visible:ring-zinc-300",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(RadioGroupIndicator), { class: "flex items-center justify-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(CheckIcon), { class: "h-3.5 w-3.5 fill-primary" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(CheckIcon), { class: "h-3.5 w-3.5 fill-primary" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(RadioGroupIndicator), { class: "flex items-center justify-center" }, {
                default: withCtx(() => [
                  createVNode(unref(CheckIcon), { class: "h-3.5 w-3.5 fill-primary" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/radio-group/RadioGroupItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Label",
  __ssrInlineRender: true,
  props: {
    for: { type: String, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Label), mergeProps(delegatedProps.value, {
        class: unref(cn)(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/label/Label.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$1;
const _sfc_main = {
  components: {
    Button: __nuxt_component_6,
    Input: __nuxt_component_0,
    SelectValue: __nuxt_component_3$1,
    SelectTrigger: __nuxt_component_2$1,
    SelectItem: __nuxt_component_5,
    SelectContent: __nuxt_component_4,
    Select: __nuxt_component_1$1,
    Label: __nuxt_component_3,
    RadioGroup: __nuxt_component_1,
    RadioGroupItem: __nuxt_component_2
  },
  watch: {
    stepOne(val) {
      if (val) {
        this.showButton = true;
      }
    },
    stepTwo(val) {
      if (val) {
        this.showButton = true;
      }
    },
    stepThree(val) {
      if (val) {
        this.showButton = true;
      }
    },
    noOfBeds() {
      if (this.noOfBeds != "0" && this.noOfBaths != "0" && this.propertySize && this.yearBuilt && this.askPrice) {
        this.showButton = true;
      } else
        this.showButton = false;
    },
    noOfBaths() {
      if (this.noOfBeds != "0" && this.noOfBaths != "0" && this.propertySize && this.yearBuilt && this.askPrice) {
        this.showButton = true;
      } else
        this.showButton = false;
    },
    propertySize() {
      if (this.noOfBeds != "0" && this.noOfBaths != "0" && this.propertySize && this.yearBuilt && this.askPrice) {
        this.showButton = true;
      } else
        this.showButton = false;
    },
    yearBuilt() {
      if (this.noOfBeds != "0" && this.noOfBaths != "0" && this.propertySize && this.yearBuilt && this.askPrice) {
        this.showButton = true;
      } else
        this.showButton = false;
    },
    askPrice() {
      if (this.noOfBeds != "0" && this.noOfBaths != "0" && this.propertySize && this.yearBuilt && this.askPrice) {
        this.showButton = true;
      } else
        this.showButton = false;
    }
  },
  data() {
    return {
      showButton: false,
      currentStep: 0,
      stepOne: null,
      stepTwo: null,
      stepThree: null,
      propertySize: null,
      yearBuilt: null,
      askPrice: null,
      stepOneOptions: [
        {
          label: "I am the owner of this home",
          value: "Owner"
        },
        { label: "I am a realtor or agent", value: "Realtor" },
        { label: "Other", value: "Other" }
      ],
      stepTwoOptions: [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" }
      ],
      stepThreeOptions: [
        { label: "ASAP", value: "ASAP" },
        { label: "2-4 Weeks", value: "2-4 Weeks" },
        { label: "4-6 Weeks", value: "4-6 Weeks" },
        { label: "Check Estimate Offer", value: "Check Estimate Offer" }
      ],
      propertyType: null,
      propertyTypeOptions: [
        "Type",
        "Villa",
        "Apartment",
        "Penthouse",
        "Townhouse",
        "Plot",
        "Other"
      ],
      noOfBeds: null,
      noOfBaths: null,
      fullName: null,
      email: null,
      phone: null,
      address: null
    };
  },
  computed: {
    // isLastStepCompleted() {
    //   if (
    //     this.noOfBeds != "0" &&
    //     this.noOfBaths != "0" &&
    //     this.propertySize &&
    //     this.yearBuilt &&
    //     this.askPrice
    //   ) {
    //     this.showButton = true;
    //     return true;
    //   } else return false;
    // },
  },
  mounted() {
    this.address = this.$route.params.address;
    this.propertyType = this.propertyTypeOptions[0];
    this.noOfBeds = "0";
    this.noOfBaths = "0";
  },
  methods: {
    async submitForm() {
      if (this.currentStep == 4) {
        await this.$store.dispatch("submitSellForm", {
          address: this.address,
          sellerType: this.stepOne,
          isListed: this.stepTwo,
          duration: this.stepThree,
          homeType: this.propertyType,
          bed: this.noOfBeds,
          bath: this.noOfBaths,
          sqFt: this.propertySize,
          yearBuilt: this.yearBuilt,
          price: this.askPrice,
          name: this.fullName,
          email: this.email,
          phone: this.phone,
          status: "DRAFT"
        });
        this.$store.commit("SET_TOASTER_MSG", {
          title: "We have successfully recieved your request. We'll contact you soon."
        });
        return;
      }
      if (this.stepOne == "Realtor") {
        this.currentStep = 4;
      } else {
        this.currentStep += 1;
      }
      this.showButton = false;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = __nuxt_component_6;
  const _component_RadioGroup = __nuxt_component_1;
  const _component_RadioGroupItem = __nuxt_component_2;
  const _component_Label = __nuxt_component_3;
  const _component_Select = __nuxt_component_1$1;
  const _component_SelectTrigger = __nuxt_component_2$1;
  const _component_SelectValue = __nuxt_component_3$1;
  const _component_SelectContent = __nuxt_component_4;
  const _component_SelectItem = __nuxt_component_5;
  const _component_Input = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white p-4 md:p-20" }, _attrs))}><div class="text-center"><div>`);
  if ($data.address) {
    _push(`<span class="text-2xl font-semibold">${ssrInterpolate($data.address)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><p class="text-lg text-black mt-1"> Is this the correct address? If not `);
  _push(ssrRenderComponent(_component_Button, {
    class: "p-0 font-inherit",
    variant: "link",
    onClick: ($event) => _ctx.$router.go(-1)
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`click here`);
      } else {
        return [
          createTextVNode("click here")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div><div class="mt-24 text-center mx-auto"><div class="w-fit mx-auto">`);
  if ($data.currentStep == 0) {
    _push(`<div class="flex flex-col space-y-4"><h2 class="text-4xl text-left font-semibold montserrat-font"> Who Are You? </h2>`);
    _push(ssrRenderComponent(_component_RadioGroup, {
      "default-value": "comfortable",
      modelValue: $data.stepOne,
      "onUpdate:modelValue": ($event) => $data.stepOne = $event
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($data.stepOneOptions, (option, i) => {
            _push2(`<div class="flex items-center space-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_RadioGroupItem, {
              id: `${i}`,
              value: option.value
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Label, {
              class: "text-lg",
              for: `${i}`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(option.label)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(option.label), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($data.stepOneOptions, (option, i) => {
              return openBlock(), createBlock("div", {
                class: "flex items-center space-x-2",
                key: i
              }, [
                createVNode(_component_RadioGroupItem, {
                  id: `${i}`,
                  value: option.value
                }, null, 8, ["id", "value"]),
                createVNode(_component_Label, {
                  class: "text-lg",
                  for: `${i}`
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(option.label), 1)
                  ]),
                  _: 2
                }, 1032, ["for"])
              ]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.currentStep == 1) {
    _push(`<div class="flex flex-col space-y-4"><h2 class="text-4xl text-left font-semibold montserrat-font"> This Home listed any of Listing Platform or with Brokers? </h2>`);
    _push(ssrRenderComponent(_component_RadioGroup, {
      "default-value": "comfortable",
      modelValue: $data.stepTwo,
      "onUpdate:modelValue": ($event) => $data.stepTwo = $event
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($data.stepTwoOptions, (option, i) => {
            _push2(`<div class="flex items-center space-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_RadioGroupItem, {
              id: `${i}`,
              value: option.value
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Label, {
              class: "text-lg",
              for: `${i}`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(option.label)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(option.label), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($data.stepTwoOptions, (option, i) => {
              return openBlock(), createBlock("div", {
                class: "flex items-center space-x-2",
                key: i
              }, [
                createVNode(_component_RadioGroupItem, {
                  id: `${i}`,
                  value: option.value
                }, null, 8, ["id", "value"]),
                createVNode(_component_Label, {
                  class: "text-lg",
                  for: `${i}`
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(option.label), 1)
                  ]),
                  _: 2
                }, 1032, ["for"])
              ]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.currentStep == 2) {
    _push(`<div class="flex flex-col space-y-4"><h2 class="text-4xl text-left font-semibold montserrat-font"> What&#39;s Your Sales Timeline? </h2>`);
    _push(ssrRenderComponent(_component_RadioGroup, {
      "default-value": "comfortable",
      modelValue: $data.stepThree,
      "onUpdate:modelValue": ($event) => $data.stepThree = $event
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($data.stepThreeOptions, (option, i) => {
            _push2(`<div class="flex items-center space-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_RadioGroupItem, {
              id: `${i}`,
              value: option.value
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Label, {
              class: "text-lg",
              for: `${i}`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(option.label)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(option.label), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($data.stepThreeOptions, (option, i) => {
              return openBlock(), createBlock("div", {
                class: "flex items-center space-x-2",
                key: i
              }, [
                createVNode(_component_RadioGroupItem, {
                  id: `${i}`,
                  value: option.value
                }, null, 8, ["id", "value"]),
                createVNode(_component_Label, {
                  class: "text-lg",
                  for: `${i}`
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(option.label), 1)
                  ]),
                  _: 2
                }, 1032, ["for"])
              ]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.currentStep == 3) {
    _push(`<div class="flex flex-col space-y-4"><h2 class="text-4xl text-left font-semibold montserrat-font"> Property Details </h2><div class="flex flex-col space-y-8"><div class="flex space-x-8">`);
    _push(ssrRenderComponent(_component_Select, {
      modelValue: $data.propertyType,
      "onUpdate:modelValue": ($event) => $data.propertyType = $event
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_SelectTrigger, { class: "w-[60%] text-lg" }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_SelectValue, { placeholder: "Type" }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_SelectValue, { placeholder: "Type" })
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_SelectContent, { position: "popper" }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<!--[-->`);
                ssrRenderList($data.propertyTypeOptions, (option, i) => {
                  _push3(ssrRenderComponent(_component_SelectItem, {
                    value: option,
                    key: i
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
                  (openBlock(true), createBlock(Fragment, null, renderList($data.propertyTypeOptions, (option, i) => {
                    return openBlock(), createBlock(_component_SelectItem, {
                      value: option,
                      key: i
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
            createVNode(_component_SelectTrigger, { class: "w-[60%] text-lg" }, {
              default: withCtx(() => [
                createVNode(_component_SelectValue, { placeholder: "Type" })
              ]),
              _: 1
            }),
            createVNode(_component_SelectContent, { position: "popper" }, {
              default: withCtx(() => [
                (openBlock(true), createBlock(Fragment, null, renderList($data.propertyTypeOptions, (option, i) => {
                  return openBlock(), createBlock(_component_SelectItem, {
                    value: option,
                    key: i
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
    _push(ssrRenderComponent(_component_Select, {
      modelValue: $data.noOfBeds,
      "onUpdate:modelValue": ($event) => $data.noOfBeds = $event
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_SelectTrigger, { class: "md:w-[60%] text-lg" }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_SelectValue, { placeholder: "No of Beds" }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_SelectValue, { placeholder: "No of Beds" })
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_SelectContent, { position: "popper" }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_SelectItem, { value: "0" }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Bedrooms `);
                    } else {
                      return [
                        createTextVNode(" Bedrooms ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
                _push3(`<!--[-->`);
                ssrRenderList(15, (i) => {
                  _push3(ssrRenderComponent(_component_SelectItem, {
                    value: `${i}`,
                    key: i
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(i)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(i), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                });
                _push3(`<!--]-->`);
              } else {
                return [
                  createVNode(_component_SelectItem, { value: "0" }, {
                    default: withCtx(() => [
                      createTextVNode(" Bedrooms ")
                    ]),
                    _: 1
                  }),
                  (openBlock(), createBlock(Fragment, null, renderList(15, (i) => {
                    return createVNode(_component_SelectItem, {
                      value: `${i}`,
                      key: i
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(i), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 64))
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_SelectTrigger, { class: "md:w-[60%] text-lg" }, {
              default: withCtx(() => [
                createVNode(_component_SelectValue, { placeholder: "No of Beds" })
              ]),
              _: 1
            }),
            createVNode(_component_SelectContent, { position: "popper" }, {
              default: withCtx(() => [
                createVNode(_component_SelectItem, { value: "0" }, {
                  default: withCtx(() => [
                    createTextVNode(" Bedrooms ")
                  ]),
                  _: 1
                }),
                (openBlock(), createBlock(Fragment, null, renderList(15, (i) => {
                  return createVNode(_component_SelectItem, {
                    value: `${i}`,
                    key: i
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(i), 1)
                    ]),
                    _: 2
                  }, 1032, ["value"]);
                }), 64))
              ]),
              _: 1
            })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div><div class="flex space-x-8">`);
    _push(ssrRenderComponent(_component_Select, {
      modelValue: $data.noOfBaths,
      "onUpdate:modelValue": ($event) => $data.noOfBaths = $event
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_SelectTrigger, { class: "md:w-[62%] text-lg" }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_SelectValue, { placeholder: "No. of Bathrooms" }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_SelectValue, { placeholder: "No. of Bathrooms" })
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_SelectContent, { position: "popper" }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_SelectItem, { value: "0" }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Bathrooms `);
                    } else {
                      return [
                        createTextVNode(" Bathrooms ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
                _push3(`<!--[-->`);
                ssrRenderList(15, (i) => {
                  _push3(ssrRenderComponent(_component_SelectItem, {
                    value: `${i}`,
                    key: i
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(i)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(i), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                });
                _push3(`<!--]-->`);
              } else {
                return [
                  createVNode(_component_SelectItem, { value: "0" }, {
                    default: withCtx(() => [
                      createTextVNode(" Bathrooms ")
                    ]),
                    _: 1
                  }),
                  (openBlock(), createBlock(Fragment, null, renderList(15, (i) => {
                    return createVNode(_component_SelectItem, {
                      value: `${i}`,
                      key: i
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(i), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 64))
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_SelectTrigger, { class: "md:w-[62%] text-lg" }, {
              default: withCtx(() => [
                createVNode(_component_SelectValue, { placeholder: "No. of Bathrooms" })
              ]),
              _: 1
            }),
            createVNode(_component_SelectContent, { position: "popper" }, {
              default: withCtx(() => [
                createVNode(_component_SelectItem, { value: "0" }, {
                  default: withCtx(() => [
                    createTextVNode(" Bathrooms ")
                  ]),
                  _: 1
                }),
                (openBlock(), createBlock(Fragment, null, renderList(15, (i) => {
                  return createVNode(_component_SelectItem, {
                    value: `${i}`,
                    key: i
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(i), 1)
                    ]),
                    _: 2
                  }, 1032, ["value"]);
                }), 64))
              ]),
              _: 1
            })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_Input, {
      class: "md:w-[60%] text-lg",
      modelValue: $data.propertySize,
      "onUpdate:modelValue": ($event) => $data.propertySize = $event,
      placeholder: "Property Size"
    }, null, _parent));
    _push(`</div><div class="flex space-x-8">`);
    _push(ssrRenderComponent(_component_Input, {
      class: "md:w-[60%] text-lg",
      modelValue: $data.yearBuilt,
      "onUpdate:modelValue": ($event) => $data.yearBuilt = $event,
      placeholder: "Year Built"
    }, null, _parent));
    _push(ssrRenderComponent(_component_Input, {
      class: "md:w-[60%] text-lg",
      modelValue: $data.askPrice,
      "onUpdate:modelValue": ($event) => $data.askPrice = $event,
      placeholder: "Ask Price"
    }, null, _parent));
    _push(`</div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.currentStep == 4) {
    _push(`<div class="flex flex-col space-y-4 text-center"><h2 class="text-4xl text-left font-semibold montserrat-font"> We&#39;d love to connect with you </h2>`);
    _push(ssrRenderComponent(_component_Input, {
      class: "w-[60%] text-lg",
      modelValue: $data.fullName,
      "onUpdate:modelValue": ($event) => $data.fullName = $event,
      placeholder: "Your Full Name"
    }, null, _parent));
    _push(ssrRenderComponent(_component_Input, {
      class: "w-[60%] text-lg",
      modelValue: $data.email,
      "onUpdate:modelValue": ($event) => $data.email = $event,
      placeholder: "email"
    }, null, _parent));
    _push(ssrRenderComponent(_component_Input, {
      class: "w-[60%] text-lg",
      modelValue: $data.phone,
      "onUpdate:modelValue": ($event) => $data.phone = $event,
      placeholder: "Phone"
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_Button, {
    class: "bg-white text-left text-[#302CFF] rounded-none border-[1px] border-[#302CFF] hover:text-white px-8 mt-4",
    onClick: $options.submitForm
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($data.currentStep == 4 ? "I'am interested" : "Next")}`);
      } else {
        return [
          createTextVNode(toDisplayString($data.currentStep == 4 ? "I'am interested" : "Next"), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/HouseWorth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HouseWorth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { HouseWorth as default };
//# sourceMappingURL=HouseWorth-_1sVnt-O.mjs.map
