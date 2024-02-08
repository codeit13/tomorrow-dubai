<template>
  <div>
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
