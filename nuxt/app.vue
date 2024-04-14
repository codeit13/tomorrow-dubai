<template>
  <div>
    <Head>
      <Meta
        name="keywords"
        content="dubai, palm,jebel, exclusive, market, property, sale, properties for sale in dubai, luxury, exclusive properties in dubai, tomorrow luxury property, Dubai's First Subscription-Based Real Estate Jobs"
      />
      <Meta
        property="og:title"
        content="Real Estate in Dubai, Homes for Sale"
      />
      <Meta
        property="og:description"
        content="Explore, buy, sell, or rent with Tomorrow Luxury Property. Collaborate with our expert real estate agents to discover the perfect luxury home or apartment for you."
      />
      <Meta
        property="og:image"
        content="https://tomorrowluxuryproperty.com/assets/images/logo-light.png"
      />
      <Meta property="og:url" content="http://tomorrowluxuryproperty.com/" />

      <Meta
        name="twitter:title"
        content="Real Estate in Dubai, Homes for Sale"
      />
      <Meta
        name="twitter:description"
        content="Explore, buy, sell, or rent with Tomorrow Luxury Property. Collaborate with our expert real estate agents to discover the perfect luxury home or apartment for you."
      />
      <Meta
        name="twitter:url"
        content="https://tomorrowluxuryproperty.com/assets/images/logo-light.png"
      />
      <Meta
        name="twitter:card"
        content="Explore, buy, sell, or rent with Tomorrow Luxury Property. Collaborate with our expert real estate agents to discover the perfect luxury home or apartment for you."
      />
    </Head>
    <Header v-if="!['/', '/buy', '/sell'].includes(route.path)" />
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
