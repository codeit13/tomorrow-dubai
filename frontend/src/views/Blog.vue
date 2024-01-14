<template>
  <div class="mx-auto px-6 md:px-28 pt-10">
    <div class="flex flex-wrap justify-between items-start md:items-end sticky">
      <span
        class="text-xl font-extrabold josefin-slab mb-20 cursor-pointer uppercase"
      ></span>
      <div class="text-center">
        <h1 class="text-2xl md:text-4xl montserrat-font mb-20">
          {{ title }}
        </h1>
      </div>
      <span></span>
    </div>

    <div class="px-1 md:px-4 min-h-[60vh]">
      <p class="text-lg text-justify" v-html="content"></p>
    </div>

    <div class="my-16">
      <h2 class="text-2xl font-extrabold my-12 mt-20 josefin-slab">
        Similar Blogs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div
          @click="goToBlog(blog)"
          class="relative cursor-pointer w-fit hover:bg-gray-100 rounded-sm border-[1px] border-[#00000062]"
          v-for="(blog, i) in similarBlogs"
          :key="i"
        >
          <img
            :src="require('@/assets/images/blogs/01.png')"
            alt="Blog"
            class="w-auto h-auto"
            style="aspect-ratio: 1 / 1; object-fit: cover"
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
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["blogs"]),
  },
  data() {
    return {
      blogId: null,
      title: null,
      content: null,
      similarBlogs: [],
    };
  },
  mounted() {
    this.getValues();
  },
  watch: {
    blogs: {
      handler(newVal) {
        console.log("watcher getValues: ", newVal);
        this.getValues(newVal);
      },
      deep: true,
    },
  },
  methods: {
    getValues(newVal = null) {
      const title = this.$route.params.titleSlug.replace(/-/g, " ");
      let blogs = newVal ? newVal : JSON.parse(JSON.stringify(this.blogs));
      if (blogs && blogs.length) {
        this.similarBlogs = blogs.length > 1 ? blogs.slice(0, 3) : [];

        let blog = blogs.filter((blog) => {
          return blog.title.toLowerCase().trim() == title.toLowerCase().trim();
        })[0];

        if (blog) {
          this.blogId = blog.id;
          this.title = blog.title;

          this.content = blog.content;
        }
      }
    },
    goToBlog(blog) {
      if (blog && blog.title) {
        const titleSlug = blog.title
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/-$/g, "");

        if (this.$route.path.includes("/blog/")) {
          this.getValues();
        }

        this.$router.push(`/blog/${titleSlug}`);
      } else {
        console.log("No property found");
      }
    },
  },
};
</script>

<style></style>
