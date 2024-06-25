<template>
  <footer class="bg-black text-white mt-20">
    <div class="mx-auto w-full p-4 py-8 md:px-24 lg:py-12">
      <h3
        class="text-black-900 dark:text-gray-400 font-bold text-center lg:text-xl my-2"
      >
        Join our community! <br />
        Get the latest market updates straight to your inbox.
      </h3>
      <div
        class="flex flex-col justify-center mx-auto mt-6 md:flex-row pt-2 pb-20 md:pb-28 md:space-y-0"
      >
        <input
          type="email"
          v-model="emailId"
          class="md:pr-48 pl-3 py-2 text-black bg-white text-[1.2rem] josefin-slab font-bold rounded-none dark:bg-gray-800 dark:text-gray-800 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
          placeholder="name@example.com"
        />

        <button
          @click="subscribeNewsLetter"
          class="w-full josefin-slab px-8 py-2 text-lg font-bold tracking-widest mt-1 text-black transition-colors duration-300 transform md:w-auto md:ml-1 focus:outline-none bg-[#fff] rounded-none hover:bg-[#e3e3e3] focus:ring focus:ring-gray-300 focus:ring-opacity-80"
        >
          <div class="flex justify-center gap-2">
            <span class="uppercase font-normal tracking-wider">Subscribe</span>

            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path
                d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"
              />
            </svg> -->
          </div>
        </button>
      </div>
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <NuxtLink to="/" class="flex items-center mb-8 md:mb-10">
            <!-- <span
              class="self-center text-xl font-semibold whitespace-nowrap dark:text-white uppercase"
            >
              Tomorrow Luxury Property
            </span> -->
            <img src="/assets/images/logo-dark.png" class="h-16" alt="logo" />
          </NuxtLink>
          <div class="flex flex-col gap-3 mt-2">
            <p class="text-gray-100 font-bold text-lg tracking-wider">
              Head Office
            </p>
            <p
              class="text-gray-100 font-bold underline underline-offset-4 text-lg tracking-wider"
            >
              Downtown, Dubai UAE
            </p>
            <p
              class="text-gray-100 font-bold underline underline-offset-4 text-sm tracking-wider mt-6"
            >
              Phone: +971 581677220
            </p>
            <p
              class="text-gray-100 font-bold underline underline-offset-4 text-sm tracking-wider"
            >
              Email: ceo@tomorrowluxuryproperty.com
            </p>
            <div class="flex space-x-8 !mt-[20px]">
              <component
                :is="handle.icon"
                v-for="(handle, i) in socialMediaHandles"
                class="cursor-pointer fill-white"
                :key="i"
                @click="openExternalUrl(handle.handleUrl)"
              />
            </div>

            <!-- <div
              class="flex flex-col justify-center mx-auto mt-6 md:space-y-0 md:flex-row pt-2 pb-16"
            >
              <input
                type="email"
                v-model="emailId"
                class="pr-10 pl-3 text-black bg-white border-2 border-r-1 border-[#043433] text-[1.1rem] josefin-slab font-bold rounded-none dark:bg-gray-800 dark:text-gray-800 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Enter your email address..."
              />

              <button
                @click="subscribeNewsLetter"
                class="w-full josefin-slab px-6 py-2 text-lg font-bold tracking-widest border-2 border-l-0 border-[#043433] text-black transition-colors duration-300 transform md:w-auto md:ml-0 focus:outline-none bg-[#fff] rounded-none hover:bg-[#e3e3e3] focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                <div class="flex justify-center gap-2">
                  <span class="capitalize">Subscribe</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path
                      d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"
                    />
                  </svg>
                </div>
              </button>
            </div> -->
          </div>
        </div>
        <div class="flex flex-wrap justify-between md:gap-80">
          <div>
            <h2 class="mb-6 text-[1em] font-semibold tracking-wider">
              Features
            </h2>
            <ul class="font-medium">
              <li class="mb-2" v-for="(feature, i) in features" :key="i">
                <a
                  @click="$router.push(feature.route)"
                  class="hover:underline cursor-pointer"
                >
                  <span class="text-neutral-400 text-sm tracking-wider">
                    {{ feature.name }}
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-[1em] font-semibold tracking-wider">
              Company
            </h2>
            <ul class="text-black-900 dark:text-black-900 font-medium">
              <li class="mb-2" v-for="(item, i) in company" :key="i">
                <a
                  @click="$router.push(item.route)"
                  class="hover:underline cursor-pointer"
                >
                  <span class="text-neutral-400 text-sm tracking-wider">
                    {{ item.name }}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p
        class="!mt-4 text-neutral-400 text-sm tracking-wider border-t-[1.5px] border-[#e3e3e3]"
      >
        © 2024 tomm luxury real estate llc
      </p>
    </div>
  </footer>
</template>

<script>
import { markRaw } from "vue";

import facebookIcon from "@/components/svgIcons/facebookIcon.vue";
import instagramIcon from "@/components/svgIcons/instagramIcon.vue";
import linkedinIcon from "@/components/svgIcons/linkedinIcon.vue";
import behanceIcon from "@/components/svgIcons/behanceIcon.vue";

export default {
  components: {
    facebookIcon,
    instagramIcon,
    linkedinIcon,
    behanceIcon,
  },
  data() {
    return {
      emailId: null,
      socialMediaHandles: [
        {
          name: "Facebook",
          handleUrl: "https://facebook.com/tomorrowluxuryproperty",
          icon: markRaw(facebookIcon),
        },
        {
          name: "LinkedIn",
          handleUrl: "https://linkedin.com/company/tomorrowluxuryproperty",
          icon: markRaw(linkedinIcon),
        },
        {
          name: "Instagram",
          handleUrl: "https://instagram.com/tomorrowluxuryproperty/",
          icon: markRaw(instagramIcon),
        },
        {
          name: "Behance",
          handleUrl: "https://tiktok.com/@tomorrowluxuryproperty",
          icon: markRaw(behanceIcon),
        },
      ],
      features: [
        {
          name: "Home",
          route: "/",
        },
        {
          name: "Become an agent",
          route: "/partner",
        },
        {
          name: "Neighborhood",
          route: "/neighborhood",
        },
        {
          name: "News",
          route: "/blogs",
        },
        {
          name: "Contact",
          route: "/contact",
        },
      ],
      company: [
        {
          name: "About Us",
          route: "/about",
        },
        {
          name: "Sitemap",
          route: "/sitemap",
        },
        {
          name: "Careers",
          route: "/careers",
        },
        {
          name: "Terms of Service",
          route: "/terms-of-service",
        },
        {
          name: "Privacy Policy",
          route: "/privacy-policy",
        },
      ],
    };
  },
  methods: {
    openExternalUrl(url) {
      window.open(url, "_blank");
    },
    async subscribeNewsLetter() {
      if (this.emailId && this.emailId.includes("@")) {
        const resp = await this.$store.dispatch("subscribeNewsLetter", {
          email: this.emailId,
        });
        if (resp.message) {
          this.$store.commit("SET_TOASTER_MSG", {
            title: resp.message,
          });
        } else {
          this.$store.commit("SET_TOASTER_MSG", {
            title: "Something went wrong. Please try again later.",
          });
        }
      } else {
        this.$store.commit("SET_TOASTER_MSG", {
          title: "Please enter a valid email address.",
        });
      }
    },
  },
};
</script>
