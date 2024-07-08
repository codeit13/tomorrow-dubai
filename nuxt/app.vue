<template>
  <div>
    <Head>
      <Meta
        name="keywords"
        content="luxury real estate Dubai, Dubai luxury homes, high-end properties Dubai, premier real estate Dubai, buy luxury homes Dubai, Dubai luxury apartments, real estate investment Dubai, Dubai property market, exclusive real estate Dubai, Tomorrow Luxury Property, Jumeirah Bay Island property for sale, Palm Jebel Ali villa for sale, Palm Jumeirah villa for sale, Bluewater Island apartment for sale, Emaar Beachfront properties, Downtown Dubai real estate, Dubai Marina properties, Arabian Ranches homes, Business Bay real estate, DIFC apartments, JBR properties, City Walk Dubai real estate, Al Barari villas, Emirates Hills properties, MBR City homes, Dubai Creek Harbour properties"
      />
      <!-- <Meta property="og:title" /> -->
      <!-- <Meta
        property="og:description"
        content="Explore, buy, sell, or rent with Tomorrow Luxury Property. Collaborate with our expert real estate agents to discover the perfect luxury home or apartment for you."
      /> -->
      <Meta
        property="og:image"
        content="https://tomorrowluxuryproperty.com/assets/images/logo-light.png"
      />
      <Meta property="og:url" content="http://tomorrowluxuryproperty.com" />

      <!-- <Meta
        name="twitter:title"
        content="Real Estate in Dubai, Homes for Sale | Tomorrow Luxury Property"
      />
      <Meta
        name="twitter:description"
        content="Explore, buy, sell, or rent with Tomorrow Luxury Property. Collaborate with our expert real estate agents to discover the perfect luxury home or apartment for you."
      /> -->
      <Meta
        name="twitter:url"
        content="https://tomorrowluxuryproperty.com/assets/images/logo-light.png"
      />
      <!-- <Meta
        name="twitter:card"
        content="Explore, buy, sell, or rent with Tomorrow Luxury Property. Collaborate with our expert real estate agents to discover the perfect luxury home or apartment for you."
      /> -->

      <Script src="https://js.stripe.com/v3/buy-button.js"></Script>
    </Head>

    <Header
      v-if="route.path ? !['/', '/buy', '/sell'].includes(route.path) : false"
    />
    <NuxtPage />

    <Footer />
    <Toaster />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { useToast } from "@/components/ui/toast/use-toast";
const { toast } = useToast();

export default {
  data() {
    return {
      route: {},
    };
  },
  computed: {
    ...mapState(["toasterData"]),
  },
  watch: {
    toasterData: {
      deep: true,
      handler(toasterData) {
        toast(toasterData);
      },
    },
  },
  async mounted() {
    const route = useRoute();
    this.route = route;

    await this.$store.dispatch("fetchProperties");
    await this.$store.dispatch("fetchListings");
    await this.$store.dispatch("fetchBlogs");
  },
};
</script>
