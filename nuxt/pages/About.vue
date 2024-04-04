<template>
  <div class="bg-white px-6 md:px-28 py-6 md:py-8">
    <div class="mt-6">
      <!-- <span
          class="text-xl font-extrabold josefin-slab mb-20 cursor-pointer"
          @click="$router.go(-1)"
          >{{ `< Back` }}</span
        > -->

      <h1
        class="text-2xl md:text-2xl font-extrabold montserrat-font mb-20 text-center"
      >
        About Us
      </h1>
    </div>
    <div class="mt-12 mx-auto">
      <div>
        <h2 class="text-xl font-semibold mb-10">
          Welcome to Tomorrow Luxury Property
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      sections: [
        {
          title: `Welcome to Tomorrow Luxury Property`,
          description: `At Tomorrow Luxury Property, we redefine excellence in the realm of real estate brokerage. Nestled in the heart of Dubai, we pride ourselves on being the city's pioneering subscription-based real estate hub, serving agents from across the globe.`,
        },
        {
          title: `Our Vision`,
          description: `Our vision is to transform the traditional real estate landscape by offering unparalleled services through innovation, dedication, and a commitment to excellence. We believe in creating a community of empowered agents, where collaboration and success go hand in hand.`,
        },
        {
          title: `Full-Service Brokerage`,
          description: `As a full-service brokerage, we cater to every aspect of your real estate journey. Whether you're buying, selling, or investing, our team of experienced professionals is dedicated to providing personalized solutions tailored to your unique needs and goals. From luxury residences to prime commercial spaces, we have the expertise and resources to guide you through every step of the process.`,
        },
        {
          title: `Unrivaled Subscription Model`,
          description: `At Tomorrow Luxury Property, we understand the evolving needs of modern agents. That's why we've introduced Dubai's first subscription-based model, offering a flexible and cost-effective solution for real estate professionals worldwide. With our subscription, agents gain access to exclusive listings, cutting-edge marketing tools, and unparalleled support, empowering them to thrive in today's competitive market.`,
        },
        {
          title: `Global Reach, Local Expertise`,
          description: `Dubai's real estate market is renowned for its diversity and dynamism. As a global hub, it attracts investors and buyers from all corners of the globe. At Tomorrow Luxury Property, we leverage our deep understanding of the local market coupled with our extensive network to connect buyers with their dream properties and help sellers achieve maximum value for their investments.`,
        },
        {
          title: `Experience Tomorrow, Today`,
          description: `Tomorrow Luxury Property invites you to experience the future of real estate today. Whether you're a seasoned agent looking to elevate your career or a discerning client seeking exceptional service, we are here to exceed your expectations. Join us on this journey as we redefine luxury, innovation, and success in Dubai's thriving real estate market.
Contact us now to learn more about our subscription model and discover how Tomorrow Luxury Property can transform your real estate experience. Welcome to tomorrow, today.`,
        },
      ],
    };
  },
  setup() {
    useSeoMeta({
      title: "About Us | Tomorrow Luxury Property",
      description:
        "At Tomorrow Luxury Property, we redefine excellence in the realm of real estate brokerage. Nestled in the heart of Dubai, we pride ourselves on being the city's pioneering subscription-based real estate hub, serving agents from across the globe.",
    });
  },
  computed: {},
  methods: {},
};
</script>
