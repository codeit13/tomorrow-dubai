<template>
  <div class="bg-white px-6 md:px-28 py-6 md:py-8">
    <div class="mt-6">
      <!-- <span
          class="text-xl font-extrabold josefin-slab mb-20 cursor-pointer"
          @click="$router.go(-1)"
          >{{ `< Back` }}</span
        > -->

      <h1
        class="text-2xl md:text-3xl font-extrabold montserrat-font mb-20 text-center"
      >
        About Us
      </h1>
    </div>
    <div class="mt-12 mx-auto">
      <div class="flex gap-20">
        <div class="">
          <p class="text-3xl font-semibold text-black">
            A premium Dubai real estate brokerage founded on <br />
            <span class="text-[#302CFF] font-bold">TRUST</span>,
            <span class="text-[#302CFF] font-bold">TRANSPARENCY</span>, and
            <span class="text-[#302CFF] font-bold">INTEGRITY</span>,<br />
            we partner with real estate agents worldwide.
          </p>
          <p class="text-xl mt-16">
            Tomorrow Luxury Property Middle East, a cutting-edge PropTech 3.0
            firm, is a premier real estate company renowned for its expertise in
            Dubai's luxury market. Launched in 2023,
          </p>
          <p class="text-xl mt-8">
            our mission is to build a Billion-Dirham Brokerage within the next
            10 years. We aim to be the most trusted real estate brokerage, known
            for providing unparalleled service, deep market insights, and
            seamless transactions. Our tailored services cater to the needs of
            high-net-worth buyers and sellers, including property acquisition,
            sales, leasing, property management, and investment advisory.
          </p>
          <p class="text-xl mt-8">
            We collaborate with numerous developers across Dubai, including but
            not limited to, several prominent ones.
          </p>
          <div class="flex gap-4 mt-10">
            <img
              v-for="(img, i) in brandImages"
              :key="i"
              :src="img"
              :alt="`Brand ${i}`"
              class="w-auto h-20"
            />
          </div>
        </div>
        <img
          :src="`/assets/images/about/hero.webp`"
          class="w-1/3 max-w-[500px]"
          alt="About Image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      brandImages: [
        "/assets/images/about/nakheel.png",
        "/assets/images/about/sobha.png",
        "/assets/images/about/meraas.png",
        "/assets/images/about/emaar.png",
        "/assets/images/about/meydan.png",
      ],
    };
  },
  setup() {
    useSeoMeta({
      title:
        "About Tomorrow Luxury Property | Dubai's Leading Real Estate Firm",
      ogTitle:
        "About Tomorrow Luxury Property | Dubai's Leading Real Estate Firm",
      description:
        " Learn about Tomorrow Luxury Property, Dubai's leading luxury real estate firm. Discover our mission, vision, and meet the team dedicated to your success.",
      ogDescription:
        " Learn about Tomorrow Luxury Property, Dubai's leading luxury real estate firm. Discover our mission, vision, and meet the team dedicated to your success.",
      keywords:
        "about Tomorrow Luxury Property, luxury real estate firm Dubai, Dubai real estate experts, Tomorrow Luxury Property team, company information",
    });
  },
  computed: {},
  methods: {},
};
</script>
