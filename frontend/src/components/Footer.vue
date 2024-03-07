<template>
  <footer class="bg-black text-white mt-40">
    <div class="mx-auto w-full p-4 py-6 md:px-24 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="/" class="flex items-center mb-4">
            <span
              class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >
              Tomorrow Luxury Property
            </span>
          </a>
          <div class="flex flex-col space-y-3 mt-2">
            <p>Contact us</p>
            <p>Phone: +971 581677220</p>
            <p>Email: ceo@tomorrowluxuryproperty.com</p>
            <div class="flex space-x-8 !mt-[14px]">
              <component
                :is="handle.icon"
                v-for="(handle, i) in socialMediaHandles"
                class="cursor-pointer fill-white"
                :key="i"
                @click="openExternalUrl(handle.handleUrl)"
              />
            </div>
            <p class="!mt-6">© 2024 tomm luxury real estate llc</p>
          </div>
        </div>
        <div class="flex flex-wrap justify-between md:space-x-48">
          <div>
            <h2 class="mb-4 text-xl font-semibold">Features</h2>
            <ul class="text-black-900 dark:text-gray-400 font-medium">
              <li class="mb-4" v-for="(feature, i) in features" :key="i">
                <a
                  @click="$router.push(feature.route)"
                  class="hover:underline cursor-pointer"
                >
                  {{ feature.name }}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-4 text-xl font-semibold">Company</h2>
            <ul class="text-black-900 dark:text-black-900 font-medium">
              <li class="mb-4" v-for="(item, i) in company" :key="i">
                <a
                  @click="$router.push(item.route)"
                  class="hover:underline cursor-pointer"
                  >{{ item.name }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
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
      socialMediaHandles: [
        {
          name: "Facebook",
          handleUrl: "https://www.facebook.com/tomorrowdubai",
          icon: markRaw(facebookIcon),
        },
        {
          name: "LinkedIn",
          handleUrl: "https://www.linkedin.com/company/tomorrow-dubai",
          icon: markRaw(linkedinIcon),
        },
        {
          name: "Instagram",
          handleUrl: "https://www.instagram.com/tomorrowdubai/",
          icon: markRaw(instagramIcon),
        },
        {
          name: "Behance",
          handleUrl: "https://www.behance.net/tomorrowdubai",
          icon: markRaw(behanceIcon),
        },
      ],
      features: [
        {
          name: "Home",
          route: "/",
        },
        {
          name: "Become a agent",
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
          name: "Press",
          route: "/press",
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
  },
};
</script>
