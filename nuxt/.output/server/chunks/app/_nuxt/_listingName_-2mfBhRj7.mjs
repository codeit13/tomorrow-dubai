import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel/dist/carousel.js';
import { _ as __nuxt_component_6$1 } from './index-nmGifQsW.mjs';
import { _ as __nuxt_component_0 } from './Input-n6PmoyAk.mjs';
import { resolveComponent, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode, useSSRContext, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { useVModel } from '@vueuse/core';
import { m as mapState, a as useRoute, u as useSeoMeta, c as cn } from '../server.mjs';
import { fromLonLat } from 'ol/proj.js';
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

const _sfc_main$1 = {
  __name: "Textarea",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false },
    defaultValue: { type: [String, Number], required: false },
    modelValue: { type: [String, Number], required: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const modelValue = useVModel(props, "modelValue", emits, {
      passive: true,
      defaultValue: props.defaultValue
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<textarea${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "flex min-h-[60px] w-full rounded-md border border-zinc-200 border-zinc-200 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:border-zinc-800 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300",
          props.class
        )
      }, _attrs), "textarea")}>${ssrInterpolate(unref(modelValue))}</textarea>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/textarea/Textarea.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$1;
const __default__ = {
  components: {},
  data() {
    return {
      propertyId: null,
      title: null,
      subtitle: null,
      featureText: null,
      startingPrice: null,
      propertyImages: [],
      description: null,
      shortDescription: null,
      address: null,
      amenities: [],
      details: null,
      units: null,
      paymentPlans: null,
      agent: {},
      isOffPlan: false,
      similarProperties: [],
      name: null,
      email: null,
      phone: null,
      moreInfo: null,
      coordinates: [],
      center: [40, 40],
      projection: "EPSG:4326",
      zoom: 16,
      rotation: 0,
      radius: 15,
      strokeWidth: 5,
      strokeColor: "black",
      fillColor: "white",
      showMoreBtn: true,
      isMetaTagsAdded: false
    };
  },
  computed: {
    ...mapState(["listings"])
  },
  watch: {
    listings: {
      handler(newVal) {
        this.getValues(newVal);
      },
      deep: true
    },
    async subtitle(address) {
      if (address) {
        const data = await this.$store.dispatch("fetchCordinatesFromAddress", {
          address
        });
        if (data && data.length > 0) {
          const [lon, lat] = [parseFloat(data[0].lon), parseFloat(data[0].lat)];
          this.coordinates.push(lon);
          this.coordinates.push(lat);
        }
      }
    }
  },
  //   useAsyncData(
  //     "searchData",
  //     async () => {
  //       const route = useRoute();
  //       const propertyName = route.params.propertyName;
  //       const listingName = route.params.listingName;
  //       const address = route.params.address;
  //       axios
  //         .get(
  //           `//tomorrowluxuryproperty.com/api/search/${address}/${propertyName}/${listingName}`
  //           // "http://localhost:3000/api/hello"
  //         )
  //         .then((response) => {
  //           useSeoMeta({
  //             title: `Search results for test` || "Search Results",
  //             meta: [
  //               {
  //                 name: "description",
  //                 content: "No description available",
  //               },
  //               // Add other relevant meta tags (e.g., Open Graph, Twitter)
  //             ],
  //           });
  //         });
  //     },
  //     {
  //       // Optional: fetch options or initial fetch params
  //       server: true,
  //     }
  //   );
  // },
  mounted() {
    this.getValues();
  },
  methods: {
    fromLonLat(coordinates) {
      return fromLonLat(coordinates);
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
    },
    showMore() {
      this.shortDescription = this.description;
      this.showMoreBtn = false;
    },
    getValues(newVal = null) {
      const propertyName = this.$route.params.propertyName.toLowerCase().replaceAll("-", " ").trim();
      const listingName = this.$route.params.listingName.toLowerCase().replaceAll("-", " ").trim();
      const address = this.$route.params.address.toLowerCase().replaceAll("-", " ").trim();
      let listings = newVal ? newVal : JSON.parse(JSON.stringify(this.listings));
      if (listings && listings.length) {
        this.similarProperties = listings.map((property2) => {
          var _a;
          property2.priceText = property2.price ? `AED ${(_a = property2.price) == null ? void 0 : _a.toLocaleString("en-us")}` : "Amazing Prices";
          property2.locationText = property2.address;
          property2.image = property2.img1 || property2.images[0];
          property2.buttonText = `${property2.homeType.toUpperCase()} FOR SALE`;
          property2.tag = property2.isOffPlan ? "Off Plan" : "Exclusive";
          property2.featureText = `${property2.bed} BEDS | ${property2.bath} BATHS | ${property2.sqFt} SQ FT`;
          return property2;
        }).slice(0, 3);
        let property = listings.filter((property2) => {
          var _a, _b, _c;
          return (
            // property.slug?.toLowerCase().trim() == slug.toLowerCase().trim()
            ((_a = property2.propertyName) == null ? void 0 : _a.trim().replaceAll(",", "").replaceAll(".", "").toLowerCase().trim()) == propertyName && ((_b = property2.title) == null ? void 0 : _b.trim().replaceAll(",", "").replaceAll(".", "").toLowerCase().trim()) == listingName && ((_c = property2.address) == null ? void 0 : _c.trim().replaceAll(",", "").replaceAll(".", "").toLowerCase().trim()) == address
          );
        })[0];
        if (property) {
          this.propertyId = property.id;
          this.title = property.title;
          this.subtitle = `${property.propertyName}, ${property.address}`;
          this.featureText = `${property.homeType} | ${property.bed} Beds | ${property.bath} Baths | ${property.sqFt} Sq Ft`;
          this.startingPrice = property.price;
          this.propertyImage = property.img1 || property.images[0];
          this.propertyImages = property.images;
          this.description = property.description;
          this.shortDescription = property.description.slice(0, 1e3) + "...";
          this.address = property.address;
          this.amenities = property.amenities;
          this.details = property.details;
          this.units = property.units;
          this.paymentPlans = property.paymentPlans;
          this.agent = property.agent;
          this.isOffPlan = property.isOffPlan;
          this.moreInfo = `Hi, I found your property. Please contact me. Thank you`;
          const descriptionDiv = (void 0).createElement("div");
          descriptionDiv.innerHTML = this.description;
          descriptionDiv.innerText;
        }
      }
    },
    goToWhatsapp(phone) {
      (void 0).open(`https://wa.me/${phone}`, "_blank");
    },
    goToCall(phone) {
      (void 0).open(`tel:${phone}`, "_blank");
    },
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
          title: "Please fill all the required fields first."
        });
      }
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "[:listingName]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const routePropertyName = route.params.propertyName;
    const routeListingName = route.params.listingName;
    const routeAddress = route.params.address;
    try {
      $fetch(
        `https://tomorrowluxuryproperty.com/api/search/${routeAddress}/${routePropertyName}/${routeListingName}`,
        {
          server: true,
          immediate: true
        }
      ).then((res) => {
        console.log(res);
        const listing = res.listing;
        function extractInnerText(htmlString) {
          const regex = /<[^>]*>([^<]+)<[^>]*>/g;
          const innerTextArray = [];
          let match;
          while ((match = regex.exec(htmlString)) !== null) {
            innerTextArray.push(match[1].trim());
          }
          const innerText = innerTextArray.join(" ");
          return innerText;
        }
        if (listing) {
          const descriptionText = extractInnerText(listing.description);
          const capitalizeFirstLetterOfEveryWord = (str) => {
            return str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
          };
          useSeoMeta({
            title: `${capitalizeFirstLetterOfEveryWord(
              listing.title
            )} | Tomorrow Luxury Property`,
            meta: [
              {
                name: "description",
                content: descriptionText
              }
            ]
          });
        } else {
          console.log("No listing found");
        }
      });
    } catch (e) {
      console.log(e);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_carousel = Carousel;
      const _component_slide = Slide;
      const _component_navigation = Navigation;
      const _component_pagination = Pagination;
      const _component_Button = __nuxt_component_6$1;
      const _component_Input = __nuxt_component_0;
      const _component_Textarea = __nuxt_component_6;
      const _component_ol_map = resolveComponent("ol-map");
      const _component_ol_view = resolveComponent("ol-view");
      const _component_ol_tile_layer = resolveComponent("ol-tile-layer");
      const _component_ol_source_osm = resolveComponent("ol-source-osm");
      const _component_ol_vector_layer = resolveComponent("ol-vector-layer");
      const _component_ol_source_vector = resolveComponent("ol-source-vector");
      const _component_ol_feature = resolveComponent("ol-feature");
      const _component_ol_geom_point = resolveComponent("ol-geom-point");
      const _component_ol_style = resolveComponent("ol-style");
      const _component_ol_style_circle = resolveComponent("ol-style-circle");
      const _component_ol_style_fill = resolveComponent("ol-style-fill");
      const _component_ol_style_stroke = resolveComponent("ol-style-stroke");
      if (_ctx.title) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="mx-auto px-4 md:px-28 pt-10">`);
        if (_ctx.isOffPlan) {
          _push(`<div class="flex flex-wrap justify-between items-start md:items-end sticky"><span class="text-sm md:text-xl font-extrabold josefin-slab mb-20 cursor-pointer uppercase">${ssrInterpolate(`< Off Plan`)}</span><div class="text-center"><h1 class="text-2xl md:text-4xl montserrat-font mb-3">${ssrInterpolate(_ctx.title)}</h1><p class="text-sm md:text-xl mb-3 josefin-slab font-[600] uppercase">${ssrInterpolate(_ctx.subtitle)}</p>`);
          if (_ctx.startingPrice) {
            _push(`<p class="text-sm md:text-xl"> STARTING FROM AED ${ssrInterpolate((_a = _ctx.startingPrice) == null ? void 0 : _a.toLocaleString("en-US"))}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><span></span></div>`);
        } else {
          _push(`<div class="flex flex-wrap justify-between items-start gap-10 md:items-end sticky"><div><h1 class="text-2xl md:text-3xl montserrat-font mb-4">${ssrInterpolate(_ctx.title)}</h1><p class="text-sm md:text-lg mb-4 josefin-slab font-[600] uppercase">${ssrInterpolate(_ctx.subtitle)}</p><p class="text-sm md:text-lg font-bold">${ssrInterpolate(_ctx.featureText)}</p></div>`);
          if (_ctx.startingPrice) {
            _push(`<div class="md:text-right"><p class="text-lg text-gray-700">ASKING PRICE</p><p class="text-3xl font-semibold"> AED ${ssrInterpolate((_b = _ctx.startingPrice) == null ? void 0 : _b.toLocaleString("en-US"))}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        }
        _push(`</div><div class="px-0.5"><div class="my-10">`);
        _push(ssrRenderComponent(_component_carousel, {
          "items-to-show": 1,
          wrapAround: true,
          autoplay: 3500
        }, {
          addons: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_navigation, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_pagination, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_navigation),
                createVNode(_component_pagination)
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(_ctx.propertyImages, (url, i) => {
                _push2(ssrRenderComponent(_component_slide, { key: i }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img alt="Property" class="w-full h-auto" height="400"${ssrRenderAttr("src", url)} style="${ssrRenderStyle({
                        aspectRatio: "840/400",
                        objectFit: "cover"
                      })}" width="640"${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          alt: "Property",
                          class: "w-full h-auto",
                          height: "400",
                          src: url,
                          style: {
                            aspectRatio: "840/400",
                            objectFit: "cover"
                          },
                          width: "640"
                        }, null, 8, ["src"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.propertyImages, (url, i) => {
                  return openBlock(), createBlock(_component_slide, { key: i }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        alt: "Property",
                        class: "w-full h-auto",
                        height: "400",
                        src: url,
                        style: {
                          aspectRatio: "840/400",
                          objectFit: "cover"
                        },
                        width: "640"
                      }, null, 8, ["src"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="mx-auto px-6 md:px-24 py-12"><div class="flex flex-wrap md:flex-nowrap space-y-12 md:space-y-0 md:space-x-24"><div class="flex flex-col space-y-20 w-[100%] md:w-[60%] md:min-w-[60%]">`);
        if (_ctx.isOffPlan && _ctx.details) {
          _push(`<div><h2 class="text-xl md:text-2xl font-semibold mb-6">Details</h2><div class="grid grid-cols-3 gap-4"><!--[-->`);
          ssrRenderList(_ctx.details, (item, i) => {
            _push(`<div><h1 class="text-md md:text-xl font-bold">${ssrInterpolate(item)}</h1><span class="text-xs">${ssrInterpolate(i)}</span></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="pt-6"><h2 class="text-xl md:text-2xl font-semibold mb-6"> Property Descriptions </h2><p class="text-sm md:text-lg text-justify">${_ctx.shortDescription}</p>`);
        if (_ctx.showMoreBtn) {
          _push(`<p class="mt-12 border-0 underline underline-offset-4 hover:bg-white cursor-pointer">${ssrInterpolate(`More >`)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="md:w-[70%] pt-4"><h2 class="text-xl md:text-2xl font-semibold mb-8">Amenities</h2><div class="grid grid-cols-3 gap-4"><!--[-->`);
        ssrRenderList(_ctx.amenities, (item, i) => {
          _push(`<div class="bg-gray-200 p-2 text-left text-xs md:text-[1rem]">${ssrInterpolate(item)}</div>`);
        });
        _push(`<!--]--></div></div>`);
        if (_ctx.isOffPlan && _ctx.units) {
          _push(`<div class="md:w-[50%] pt-4"><h2 class="text-xl md:text-2xl font-semibold mb-8">Units</h2><div class="flex flex-col space-y-4"><!--[-->`);
          ssrRenderList(_ctx.units, (unit, i) => {
            var _a2;
            _push(`<div class="flex justify-between text-center">`);
            if (unit.sqFt) {
              _push(`<h1 class="font-bold text-sm md:text-md">${ssrInterpolate(i)}</h1>`);
            } else {
              _push(`<!---->`);
            }
            if (unit.sqFt) {
              _push(`<span class="text-sm md:text-md josefin-slab font-[600]">${ssrInterpolate(unit.sqFt)} Sq Ft </span>`);
            } else {
              _push(`<!---->`);
            }
            if (unit.price) {
              _push(`<span class="text-sm md:text-md"> AED ${ssrInterpolate((_a2 = unit.price) == null ? void 0 : _a2.toLocaleString("en-US"))}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.isOffPlan && _ctx.paymentPlans) {
          _push(`<div class="md:w-[70%] pt-4"><h2 class="text-xl md:text-2xl font-semibold mb-8">Payment Plan</h2><div class="flex justify-between"><!--[-->`);
          ssrRenderList(_ctx.paymentPlans, (plan, i) => {
            _push(`<div><p class="text-xl md:text-xl font-bold">${ssrInterpolate(plan)}</p><h1 class="text-sm">${ssrInterpolate(i)}</h1></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex flex-col flex-wrap space-y-5 md:space-y-10 w-full md:w-[45%] md:items-end">`);
        if (_ctx.agent) {
          _push(`<div class="flex items-center md:items-start flex-wrap md:flex-nowrap justify-start gap-8 md:p-8"><div class="rounded-full bg-gray-200 mb-4"><img alt="Agent" class="w-[200px] h-full rounded-full"${ssrRenderAttr("src", _ctx.agent.img)} style="${ssrRenderStyle({
            aspectRatio: "1/1",
            objectFit: "cover"
          })}"></div><div class="w-full"><h3 class="text-lg montserrat-font mb-3">LISTING AGENT</h3><p class="font-semibold montserrat-font mb-3">${ssrInterpolate(_ctx.agent.name)}</p><p class="mb-3"><a${ssrRenderAttr("href", `mailto:${_ctx.agent.email}`)} class="text-sm montserrat-font">${ssrInterpolate(_ctx.agent.email)}</a></p><p class="mb-3"><a${ssrRenderAttr("href", `tel:${_ctx.agent.phone}`)} class="text-sm montserrat-font">${ssrInterpolate(_ctx.agent.phone)}</a></p><div class="flex mt-6">`);
          _push(ssrRenderComponent(_component_Button, {
            class: "rounded-none border-2 transition-all border-[#000] bg-white text-sm font-semibold text-[#25D366] mt-2",
            variant: "outline",
            onClick: ($event) => _ctx.goToWhatsapp(_ctx.agent.phone)
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
            onClick: ($event) => _ctx.goToCall(_ctx.agent.phone),
            class: "rounded-none border-2 transition-all border-[#000] bg-black text-sm font-semibold text-[#e3e3e3] mt-2 ml-0 md:ml-2",
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
          _push(`</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="w-[92%] p-6 md:py-6 md:px-4 bg-gray-100 bg-opacity-50"><h2 class="text-xl font-semibold mb-4">Register your interest</h2><div class="space-y-4 text-right">`);
        _push(ssrRenderComponent(_component_Input, {
          modelValue: _ctx.name,
          "onUpdate:modelValue": ($event) => _ctx.name = $event,
          placeholder: "Full Name"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Input, {
          modelValue: _ctx.email,
          "onUpdate:modelValue": ($event) => _ctx.email = $event,
          placeholder: "Email"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Input, {
          modelValue: _ctx.phone,
          "onUpdate:modelValue": ($event) => _ctx.phone = $event,
          placeholder: "+971 | Mobile"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Textarea, {
          class: "rounded-none border-[#000]",
          modelValue: _ctx.moreInfo,
          "onUpdate:modelValue": ($event) => _ctx.moreInfo = $event,
          placeholder: "Tell us more about what you want to know"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Button, {
          class: "rounded-none border-[1px] px-6 border-[#000] bg-white text-black hover:bg-black hover:text-white",
          onClick: _ctx.submitContactForm
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
        _push(`</div></div></div></div>`);
        if (_ctx.coordinates && _ctx.coordinates.length > 0) {
          _push(`<div><div class="mb-8 mt-28"><h2 class="text-xl md:text-2xl font-semibold mb-1.5">Location Map</h2>`);
          if (_ctx.address) {
            _push(`<span class="text-sm">${ssrInterpolate(_ctx.address)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (_ctx.coordinates && _ctx.coordinates.length > 0) {
            _push(`<div class="w-[100%] h-[50vh] md:w-[65%] md:h-[400px]">`);
            _push(ssrRenderComponent(_component_ol_map, {
              loadTilesWhileAnimating: true,
              loadTilesWhileInteracting: true,
              style: { "height": "400px" }
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_ol_view, {
                    ref: "view",
                    center: _ctx.coordinates,
                    rotation: _ctx.rotation,
                    zoom: _ctx.zoom,
                    projection: _ctx.projection
                  }, null, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_ol_tile_layer, null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_ol_source_osm, null, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_ol_source_osm)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_ol_vector_layer, null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_ol_source_vector, null, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_ol_feature, null, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(_component_ol_geom_point, { coordinates: _ctx.coordinates }, null, _parent5, _scopeId4));
                                    _push5(ssrRenderComponent(_component_ol_style, null, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(_component_ol_style_circle, { radius: _ctx.radius }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(_component_ol_style_fill, { color: _ctx.fillColor }, null, _parent7, _scopeId6));
                                                _push7(ssrRenderComponent(_component_ol_style_stroke, {
                                                  color: _ctx.strokeColor,
                                                  width: _ctx.strokeWidth
                                                }, null, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  createVNode(_component_ol_style_fill, { color: _ctx.fillColor }, null, 8, ["color"]),
                                                  createVNode(_component_ol_style_stroke, {
                                                    color: _ctx.strokeColor,
                                                    width: _ctx.strokeWidth
                                                  }, null, 8, ["color", "width"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(_component_ol_style_circle, { radius: _ctx.radius }, {
                                              default: withCtx(() => [
                                                createVNode(_component_ol_style_fill, { color: _ctx.fillColor }, null, 8, ["color"]),
                                                createVNode(_component_ol_style_stroke, {
                                                  color: _ctx.strokeColor,
                                                  width: _ctx.strokeWidth
                                                }, null, 8, ["color", "width"])
                                              ]),
                                              _: 1
                                            }, 8, ["radius"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(_component_ol_geom_point, { coordinates: _ctx.coordinates }, null, 8, ["coordinates"]),
                                      createVNode(_component_ol_style, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_ol_style_circle, { radius: _ctx.radius }, {
                                            default: withCtx(() => [
                                              createVNode(_component_ol_style_fill, { color: _ctx.fillColor }, null, 8, ["color"]),
                                              createVNode(_component_ol_style_stroke, {
                                                color: _ctx.strokeColor,
                                                width: _ctx.strokeWidth
                                              }, null, 8, ["color", "width"])
                                            ]),
                                            _: 1
                                          }, 8, ["radius"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_ol_feature, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_ol_geom_point, { coordinates: _ctx.coordinates }, null, 8, ["coordinates"]),
                                    createVNode(_component_ol_style, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_ol_style_circle, { radius: _ctx.radius }, {
                                          default: withCtx(() => [
                                            createVNode(_component_ol_style_fill, { color: _ctx.fillColor }, null, 8, ["color"]),
                                            createVNode(_component_ol_style_stroke, {
                                              color: _ctx.strokeColor,
                                              width: _ctx.strokeWidth
                                            }, null, 8, ["color", "width"])
                                          ]),
                                          _: 1
                                        }, 8, ["radius"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_ol_source_vector, null, {
                            default: withCtx(() => [
                              createVNode(_component_ol_feature, null, {
                                default: withCtx(() => [
                                  createVNode(_component_ol_geom_point, { coordinates: _ctx.coordinates }, null, 8, ["coordinates"]),
                                  createVNode(_component_ol_style, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_ol_style_circle, { radius: _ctx.radius }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ol_style_fill, { color: _ctx.fillColor }, null, 8, ["color"]),
                                          createVNode(_component_ol_style_stroke, {
                                            color: _ctx.strokeColor,
                                            width: _ctx.strokeWidth
                                          }, null, 8, ["color", "width"])
                                        ]),
                                        _: 1
                                      }, 8, ["radius"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_ol_view, {
                      ref: "view",
                      center: _ctx.coordinates,
                      rotation: _ctx.rotation,
                      zoom: _ctx.zoom,
                      projection: _ctx.projection
                    }, null, 8, ["center", "rotation", "zoom", "projection"]),
                    createVNode(_component_ol_tile_layer, null, {
                      default: withCtx(() => [
                        createVNode(_component_ol_source_osm)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ol_vector_layer, null, {
                      default: withCtx(() => [
                        createVNode(_component_ol_source_vector, null, {
                          default: withCtx(() => [
                            createVNode(_component_ol_feature, null, {
                              default: withCtx(() => [
                                createVNode(_component_ol_geom_point, { coordinates: _ctx.coordinates }, null, 8, ["coordinates"]),
                                createVNode(_component_ol_style, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_ol_style_circle, { radius: _ctx.radius }, {
                                      default: withCtx(() => [
                                        createVNode(_component_ol_style_fill, { color: _ctx.fillColor }, null, 8, ["color"]),
                                        createVNode(_component_ol_style_stroke, {
                                          color: _ctx.strokeColor,
                                          width: _ctx.strokeWidth
                                        }, null, 8, ["color", "width"])
                                      ]),
                                      _: 1
                                    }, 8, ["radius"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mt-16"><h2 class="text-3xl font-semibold mt-32 mb-20">Similar Properties</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><!--[-->`);
        ssrRenderList(_ctx.similarProperties, (property, i) => {
          _push(`<div class="relative cursor-pointer hover:bg-gray-100 rounded-sm border-[1px] border-[#00000062]"><img${ssrRenderAttr("src", property.image)} alt="Property" class="w-full h-auto" style="${ssrRenderStyle({ "aspect-ratio": "300 / 200", "object-fit": "cover" })}"><div class="inline-flex items-center border px-2.5 py-0.5 w-fit josefin-slab text-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white bg-black/10 absolute top-4 right-4">${ssrInterpolate(property.tag)}</div><div class="p-4"><p class="text-lg md:text-2xl font-bold">${ssrInterpolate(property.priceText)}</p><p class="text-sm mt-2">${ssrInterpolate(property.featureText)}</p><div class="flex items-start gap-1 mt-2"><svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" fill="#000" width="18"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"></path></svg><p class="text-sm">${ssrInterpolate(property.locationText)}</p></div><p class="text-sm mt-4 text-[#302CFF] hover:text-[#302CFF] cursor-pointer">${ssrInterpolate(property.buttonText)}</p></div></div>`);
        });
        _push(`<!--]--></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Listing/[:address]/[:propertyName]/[:listingName].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_listingName_-2mfBhRj7.mjs.map
