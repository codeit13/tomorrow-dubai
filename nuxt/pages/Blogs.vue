<template>
  <div class="bg-white px-6 md:px-28 py-6 md:py-8">
    <div class="mt-6">
      <!-- <span
          class="text-xl font-extrabold josefin-slab mb-20 cursor-pointer"
          @click="$router.go(-1)"
          >{{ `< Back` }}</span
        > -->

      <h1 class="text-2xl md:text-4xl font-extrabold josefin-slab mb-20">
        News and Updates
      </h1>
      <!-- <h1></h1> -->
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mx-auto">
      <div
        class="relative cursor-pointer w-fit hover:bg-gray-100 rounded-sm border-[1px] border-[#00000062]"
        v-for="(blog, i) in blogs"
        :key="i"
        @click="goToBlog(blog)"
      >
        <img
          :src="blog.imageUrl"
          alt="Property"
          class="w-full h-auto"
          style="aspect-ratio: 1/1; object-fit: cover"
        />

        <div class="p-4 pl-6 pb-8 w-full">
          <p class="text-sm font-semibold josefin-slab">
            Dubai Market Insights
          </p>
          <p class="text-xl md:text-3xl font-extrabold josefin-slab mt-3">
            {{ blog.title.replaceAll('"', "") }}
          </p>
          <!-- <p class="text-[1rem] josefin-slab mt-2">
              {{ blog.completionText }}
            </p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  head: {
    title:
      "News and Insights - Tomorrow Luxury Property Real Estate in Dubai UAE",
    meta: [
      {
        name: "title",
        content:
          "News and Insights - Tomorrow Luxury Property Real Estate in Dubai UAE",
      },
      {
        name: "description",
        content:
          "Learn about with Tomorrow Luxury Property the recent updates in Dubai property investments by visiting our news and insights page",
      },
    ],
  },
  data() {
    return {
      // blogs
    };
  },
  computed: {
    ...mapState(["blogs"]),
  },
  setup() {
    useAsyncData(() => {
      useSeoMeta({
        title: `News and Insights - Tomorrow Luxury Property Real Estate in Dubai UAE`,
        description: `Learn about with Tomorrow Luxury Property the recent updates in Dubai property investments by visiting our news and insights page`,
      });
    });
  },
  methods: {
    goToBlog(blog) {
      if (blog && blog.slug) {
        this.$store.commit("SET_SELECTED_BLOG", null);
        this.$router.push(`/blog/${blog.slug}`);
      } else {
        console.log("No Blog found");
      }
    },
  },
};
</script>
