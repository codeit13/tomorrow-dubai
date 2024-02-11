import { _ as __nuxt_component_0 } from './Input-gB3r_rcC.mjs';
import { d as __nuxt_component_1, a as __nuxt_component_2, _ as __nuxt_component_3, c as __nuxt_component_4, b as __nuxt_component_5 } from './SelectScrollDownButton-9flwTiCk.mjs';
import { _ as __nuxt_component_6 } from './index-WlqPNlti.mjs';
import { u as useAsyncData } from './asyncData-pgFrpjRa.mjs';
import { m as mapState, _ as _export_sfc, a as useRoute, n as neighbourhoodProperties, e as useServerSeoMeta } from '../server.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import '@vueuse/core';
import 'radix-vue';
import '@radix-icons/vue';
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

const _sfc_main = {
  components: {
    // Input,
    // SelectValue,
    // SelectTrigger,
    // SelectItem,
    // SelectContent,
    // Select,
    // Button,
    // Pagination,
    // PaginationEllipsis,
    // PaginationFirst,
    // PaginationLast,
    // PaginationList,
    // PaginationListItem,
    // PaginationNext,
    // PaginationPrev,
  },
  data() {
    return {
      propertyOptions: [
        "Property Type",
        "Apartment",
        "Penthouse",
        "Townhouse",
        "Plot"
      ],
      minPriceOptions: [
        "Min Price",
        "1000000",
        "2000000",
        "5000000",
        "10000000",
        "20000000",
        "50000000",
        "100000000"
      ],
      maxPriceOptions: [
        "Max Price",
        "1000000",
        "2000000",
        "5000000",
        "10000000",
        "20000000",
        "50000000",
        "100000000",
        "200000000",
        "300000000",
        "500000000",
        "1000000000"
      ],
      isOffPlanOptions: ["Yes", "No"],
      property: null,
      minPrice: null,
      maxPrice: null,
      isOffPlan: null,
      searchText: null,
      displaySearchText: null,
      filteredProperties: [],
      similarProperties: [],
      isMetaTagsAdded: false,
      filteredLocations: []
    };
  },
  computed: {
    ...mapState(["listings", "neighbourhoodProperties", "searchableLocations"])
  },
  watch: {
    listings: {
      // eslint-disable-next-line
      handler(newVal) {
        this.getValues(newVal);
      },
      deep: true
    },
    // searchText() {
    //   // this.getValues();
    // },
    property() {
      this.getValues();
    },
    minPrice() {
      this.getValues();
    },
    maxPrice() {
      this.getValues();
    },
    isOffPlan() {
      this.getValues();
    }
  },
  setup() {
    useAsyncData(() => {
      const route = useRoute();
      const searchText = route.params.query.replaceAll("-", " ") || "dubai";
      let neighbourhoodProperty = neighbourhoodProperties.find((item) => {
        return item.title.trim().toLowerCase() == searchText.trim().replaceAll("-", " ").toLowerCase();
      });
      if (neighbourhoodProperty) {
        useServerSeoMeta({
          title: `Properties for sale in ${neighbourhoodProperty.title} | Tomorrow Luxury Property`,
          description: neighbourhoodProperty.description
        });
      } else {
        useServerSeoMeta({
          title: `Properties for sale in ${searchText.trim()} | Tomorrow Luxury Property`,
          description: "Discover Premium Villas and Residences for Sale in Dubai prestigeous Societies. Experience the pinnacle of luxury living in our fully authenticated 3 to 10 bedroom properties. Contact us today to find your dream mansion"
        });
      }
    }, "$sS1bXk8cEl");
  },
  mounted() {
    this.property = this.propertyOptions[0];
    this.minPrice = this.minPriceOptions[0];
    this.maxPrice = this.maxPriceOptions[0];
    this.isOffPlan = this.isOffPlanOptions[0];
    this.searchText = this.$route.params.query.replaceAll("-", " ") || "dubai";
    this.getValues();
  },
  methods: {
    searchTextChange() {
      if (this.searchText) {
        this.filteredLocations = [];
        this.searchableLocations.map((location) => {
          var _a, _b, _c;
          if (((_a = location.address) == null ? void 0 : _a.toLowerCase().trim().includes(this.searchText.toLowerCase().trim())) || ((_b = location.title) == null ? void 0 : _b.toLowerCase().trim().includes(this.searchText.toLowerCase().trim())) || ((_c = location.name) == null ? void 0 : _c.toLowerCase().trim().includes(this.searchText.toLowerCase().trim()))) {
            this.filteredLocations.push(location);
          }
          return location;
        });
      } else {
        this.filteredLocations = [];
      }
    },
    updateClick() {
      this.filteredLocations = [];
      this.getValues();
    },
    searchClick(entry = null) {
      this.filteredLocations = [];
      if (entry != null && entry.name) {
        if (entry.type == "LISTING") {
          this.$router.push(
            `/search/${entry == null ? void 0 : entry.name.trim().replaceAll(" ", "-").toLowerCase()}`
          );
          this.goToProperty(entry);
        } else {
          this.$router.push(
            `/search/${entry == null ? void 0 : entry.name.trim().replaceAll(" ", "-").toLowerCase()}`
          );
        }
      } else if (this.query) {
        this.$router.push(`/search/${this.query}`);
      } else {
        this.$router.push(`/search/dubai`);
      }
    },
    /* eslint-disable */
    getValues(newVal = null) {
      this.displaySearchText = this.searchText || "dubai";
      let searchQuery = this.searchText.toLowerCase().trim() || "dubai";
      let minPrice = this.minPrice == this.minPriceOptions[0] ? false : parseInt(this.minPrice);
      let maxPrice = this.maxPrice == this.maxPriceOptions[0] ? false : parseInt(this.maxPrice);
      let offPlan = this.isOffPlan == this.isOffPlanOptions[0] ? false : true;
      let selectedProperty = this.property == this.propertyOptions[0] ? false : this.property;
      let properties = newVal ? newVal : this.listings;
      if (properties) {
        this.similarProperties = properties.map((property) => {
          var _a;
          property.priceText = `AED ${(_a = property.price) == null ? void 0 : _a.toLocaleString(
            "en-us"
          )}`;
          property.locationText = property.address;
          property.image = property.img1 || property.images[0];
          property.buttonText = `${property.homeType.toUpperCase()} FOR SALE`;
          property.tag = property.isOffPlan ? "Off Plan" : "Exclusive";
          property.featureText = `${property.bed} BEDS | ${property.bath} BATHS | ${property.sqFt} SQ FT`;
          return property;
        }).slice(0, 3);
        properties = properties.filter((property) => {
          return (property.title.toLowerCase().includes(searchQuery) || property.address.toLowerCase().includes(searchQuery) || property.homeType.toLowerCase().includes(searchQuery)) && (minPrice ? property.price >= minPrice : true) && (maxPrice ? property.price <= maxPrice : true) && (offPlan ? property.isOffPlan == offPlan : true) && (selectedProperty ? property.homeType == selectedProperty : true);
        });
        this.filteredProperties = properties.map((property) => {
          var _a;
          return {
            ...property,
            title: property.title,
            location: property.address,
            featureText: `${property.bed} Beds | ${property.bath} Baths | ${property.sqFt} Sq Ft`,
            price: property.price,
            propertyImage: property.img1 || property.images[0],
            description: property.description,
            amenities: property.amenities,
            buttonText: `${(_a = property.homeType) == null ? void 0 : _a.toUpperCase()} FOR SALE`,
            tag: property.isOffPlan ? "Off Plan" : "Exclusive"
          };
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
  const _component_Input = __nuxt_component_0;
  const _component_Select = __nuxt_component_1;
  const _component_SelectTrigger = __nuxt_component_2;
  const _component_SelectValue = __nuxt_component_3;
  const _component_SelectContent = __nuxt_component_4;
  const _component_SelectItem = __nuxt_component_5;
  const _component_Button = __nuxt_component_6;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><div class="mx-auto mt-6 px-6 md:px-28"><div class="flex flex-wrap -mx-2"><div class="w-[40%] px-2 mb-4"><div class="relative"><div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"><svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path></svg></div>`);
  _push(ssrRenderComponent(_component_Input, {
    modelValue: $data.searchText,
    "onUpdate:modelValue": ($event) => $data.searchText = $event,
    onInput: $options.searchTextChange,
    class: "block p-4 ps-10",
    placeholder: "Search By Title, Location,"
  }, null, _parent));
  _push(`</div>`);
  if ($data.filteredLocations && $data.filteredLocations.length) {
    _push(`<ul class="absolute md:max-w-[30vw] bg-white border border-gray-100 w-full mt-2"><!--[-->`);
    ssrRenderList($data.filteredLocations.slice(0, 6), (entry, i) => {
      _push(`<li class="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-gray-50 hover:text-gray-900">`);
      if (entry.type == "PROPERTY") {
        _push(`<svg class="stroke-current absolute w-4 h-4 left-2 top-2" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"></path></svg>`);
      } else if (entry.type == "LISTING") {
        _push(`<svg class="stroke-current absolute w-4 h-4 left-2 top-2" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      if (entry.name) {
        _push(`<span>${ssrInterpolate(entry.name)}, ${ssrInterpolate(entry.location)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    });
    _push(`<!--]--></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="w-fit px-2 mb-4">`);
  _push(ssrRenderComponent(_component_Select, {
    modelValue: $data.property,
    "onUpdate:modelValue": ($event) => $data.property = $event
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SelectTrigger, { id: "property-type" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_SelectValue, { placeholder: "Property Type" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_SelectValue, { placeholder: "Property Type" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SelectContent, { position: "popper" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($data.propertyOptions, (option, i) => {
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
                (openBlock(true), createBlock(Fragment, null, renderList($data.propertyOptions, (option, i) => {
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
          createVNode(_component_SelectTrigger, { id: "property-type" }, {
            default: withCtx(() => [
              createVNode(_component_SelectValue, { placeholder: "Property Type" })
            ]),
            _: 1
          }),
          createVNode(_component_SelectContent, { position: "popper" }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList($data.propertyOptions, (option, i) => {
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
  _push(`</div><div class="w-fit px-2 mb-4">`);
  _push(ssrRenderComponent(_component_Select, {
    modelValue: $data.minPrice,
    "onUpdate:modelValue": ($event) => $data.minPrice = $event
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SelectTrigger, { id: "min-price" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_SelectValue, { placeholder: "Min Price" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_SelectValue, { placeholder: "Min Price" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SelectContent, { position: "popper" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($data.minPriceOptions, (option, i) => {
                _push3(ssrRenderComponent(_component_SelectItem, {
                  value: option,
                  key: i
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`${ssrInterpolate(parseInt(option) ? "AED" : null)} ${ssrInterpolate(parseInt(option) ? parseInt(option).toLocaleString("en-us") : option)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(parseInt(option) ? "AED" : null) + " " + toDisplayString(parseInt(option) ? parseInt(option).toLocaleString("en-us") : option), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList($data.minPriceOptions, (option, i) => {
                  return openBlock(), createBlock(_component_SelectItem, {
                    value: option,
                    key: i
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(parseInt(option) ? "AED" : null) + " " + toDisplayString(parseInt(option) ? parseInt(option).toLocaleString("en-us") : option), 1)
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
          createVNode(_component_SelectTrigger, { id: "min-price" }, {
            default: withCtx(() => [
              createVNode(_component_SelectValue, { placeholder: "Min Price" })
            ]),
            _: 1
          }),
          createVNode(_component_SelectContent, { position: "popper" }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList($data.minPriceOptions, (option, i) => {
                return openBlock(), createBlock(_component_SelectItem, {
                  value: option,
                  key: i
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(parseInt(option) ? "AED" : null) + " " + toDisplayString(parseInt(option) ? parseInt(option).toLocaleString("en-us") : option), 1)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ]),
            _: 2
          }, 1024)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="w-fit px-2 mb-4">`);
  _push(ssrRenderComponent(_component_Select, {
    modelValue: $data.maxPrice,
    "onUpdate:modelValue": ($event) => $data.maxPrice = $event
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SelectTrigger, { id: "max-price" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_SelectValue, { placeholder: "Max Price" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_SelectValue, { placeholder: "Max Price" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SelectContent, { position: "popper" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($data.maxPriceOptions, (option, i) => {
                _push3(ssrRenderComponent(_component_SelectItem, {
                  value: option,
                  key: i
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`${ssrInterpolate(parseInt(option) ? "AED" : null)} ${ssrInterpolate(parseInt(option) ? parseInt(option).toLocaleString("en-us") : option)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(parseInt(option) ? "AED" : null) + " " + toDisplayString(parseInt(option) ? parseInt(option).toLocaleString("en-us") : option), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList($data.maxPriceOptions, (option, i) => {
                  return openBlock(), createBlock(_component_SelectItem, {
                    value: option,
                    key: i
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(parseInt(option) ? "AED" : null) + " " + toDisplayString(parseInt(option) ? parseInt(option).toLocaleString("en-us") : option), 1)
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
          createVNode(_component_SelectTrigger, { id: "max-price" }, {
            default: withCtx(() => [
              createVNode(_component_SelectValue, { placeholder: "Max Price" })
            ]),
            _: 1
          }),
          createVNode(_component_SelectContent, { position: "popper" }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList($data.maxPriceOptions, (option, i) => {
                return openBlock(), createBlock(_component_SelectItem, {
                  value: option,
                  key: i
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(parseInt(option) ? "AED" : null) + " " + toDisplayString(parseInt(option) ? parseInt(option).toLocaleString("en-us") : option), 1)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ]),
            _: 2
          }, 1024)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="w-fit px-2 mb-4">`);
  _push(ssrRenderComponent(_component_Select, {
    modelValue: $data.isOffPlan,
    "onUpdate:modelValue": ($event) => $data.isOffPlan = $event
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SelectTrigger, { id: "off-plan" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_SelectValue, { placeholder: "Off-Plan" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_SelectValue, { placeholder: "Off-Plan" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SelectContent, { position: "popper" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($data.isOffPlanOptions, (option, i) => {
                _push3(ssrRenderComponent(_component_SelectItem, {
                  value: option,
                  key: i
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`${ssrInterpolate(option == "Yes" ? "Ready" : "Off-Plan")}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(option == "Yes" ? "Ready" : "Off-Plan"), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList($data.isOffPlanOptions, (option, i) => {
                  return openBlock(), createBlock(_component_SelectItem, {
                    value: option,
                    key: i
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(option == "Yes" ? "Ready" : "Off-Plan"), 1)
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
          createVNode(_component_SelectTrigger, { id: "off-plan" }, {
            default: withCtx(() => [
              createVNode(_component_SelectValue, { placeholder: "Off-Plan" })
            ]),
            _: 1
          }),
          createVNode(_component_SelectContent, { position: "popper" }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList($data.isOffPlanOptions, (option, i) => {
                return openBlock(), createBlock(_component_SelectItem, {
                  value: option,
                  key: i
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(option == "Yes" ? "Ready" : "Off-Plan"), 1)
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
  _push(`</div><div class="w-fit px-2 mb-4">`);
  _push(ssrRenderComponent(_component_Button, {
    class: "w-full bg-blue-600 text-[1rem] rounded-none px-6 text-white",
    onClick: $options.updateClick
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Update `);
      } else {
        return [
          createTextVNode(" Update ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><hr class="bg-black h-[2px] w-full"><div class="mx-auto mt-24 px-6 md:px-28"><div class="text-center mb-28"><h2 class="text-lg mb-2">Search Results</h2>`);
  if ($data.displaySearchText) {
    _push(`<p class="text-2xl font-semibold"><span>Properties for Sale in </span><span class="capitalize font-semibold">${ssrInterpolate($data.displaySearchText)}</span></p>`);
  } else {
    _push(`<p class="text-2xl font-semibold"><span>Properties for Sale in </span><span class="capitalize font-semibold">${ssrInterpolate("dubai")}</span></p>`);
  }
  _push(`</div>`);
  if (!($data.filteredProperties && $data.filteredProperties.length)) {
    _push(`<div class="text-center mb-28"><h2 class="text-lg mb-2">No matching result</h2><p class="text-2xl font-semibold">Try changing your Search...</p></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.filteredProperties && $data.filteredProperties.length) {
    _push(`<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-20"><!--[-->`);
    ssrRenderList($data.filteredProperties, (property, i) => {
      var _a;
      _push(`<div class="relative cursor-pointer hover:bg-gray-100 rounded-sm border-[1px] border-[#00000062]"><img${ssrRenderAttr("src", property.propertyImage)} alt="Property" class="w-full h-auto" style="${ssrRenderStyle({ "aspect-ratio": "300 / 200", "object-fit": "cover" })}"><div class="inline-flex items-center border px-2.5 py-0.5 w-fit text-xl josefin-slab font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white hover:text-black bg-black/20 text-secondary-foreground hover:bg-white/80 absolute top-4 right-4">${ssrInterpolate(property.tag)}</div><div class="p-4"><p class="text-lg md:text-2xl font-bold"> AED ${ssrInterpolate((_a = property.price) == null ? void 0 : _a.toLocaleString("en-us"))}</p><p class="text-sm">${ssrInterpolate(property.featureText)}</p><div class="flex items-start gap-1 mt-2"><svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" fill="#000" width="18"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"></path></svg><p class="text-sm">${ssrInterpolate(property.location)}</p></div><p class="text-sm mt-4 text-blue-600 hover:text-blue-800 cursor-pointer">${ssrInterpolate(property.buttonText)}</p></div></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<div class="mt-16"><h2 class="text-3xl font-semibold mt-32 mb-20">Similar Properties</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><!--[-->`);
    ssrRenderList($data.similarProperties, (property, i) => {
      _push(`<div class="relative cursor-pointer hover:bg-gray-100 rounded-sm border-[1px] border-[#00000062]"><img${ssrRenderAttr("src", property.image)} alt="Property" class="w-full h-auto" width="300" height="200" style="${ssrRenderStyle({ "aspect-ratio": "300 / 200", "object-fit": "cover" })}"><div class="inline-flex items-center border px-2.5 py-0.5 w-fit josefin-slab text-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white bg-black/10 absolute top-4 right-4">${ssrInterpolate(property.tag)}</div><div class="p-4"><p class="text-lg font-bold">${ssrInterpolate(property.priceText)}</p><p class="text-sm">${ssrInterpolate(property.featureText)}</p><div class="flex items-start gap-1 mt-2"><svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" fill="#000" width="18"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"></path></svg><p class="text-sm">${ssrInterpolate(property.locationText)}</p></div><p class="text-sm mt-4 text-blue-600 hover:text-blue-800 cursor-pointer">${ssrInterpolate(property.buttonText)}</p></div></div>`);
    });
    _push(`<!--]--></div></div>`);
  }
  _push(`<div class="flex justify-center mb-40">`);
  {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Search/[:query].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __query_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __query_ as default };
//# sourceMappingURL=_query_-5_9nreYr.mjs.map
