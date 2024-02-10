<template>
  <div>
    <Head>
      <Meta
        name="keywords"
        content="dubai, property, sale, properties for sale in dubai, luxury, exclusive properties in dubai, tomorrow luxury property"
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
