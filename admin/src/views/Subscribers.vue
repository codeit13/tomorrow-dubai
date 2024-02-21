<template>
  <div>
    <div
      modal-backdrop=""
      class="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"
      v-if="isModalOpen"
    ></div>

    <main>
      <div class="w-[100vw] h-[100%] z-[1000] backdrop-blur-lg"></div>

      <div class="max-w-screen-2xl mx-auto p-4 md:p-6 2xl:p-10">
        <!-- Breadcrumb Start -->
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6"
        >
          <h2 class="font-semibold text-title-md2 text-black dark:text-white">
            {{ subscribers.length }} Subscribers
          </h2>

          <nav>
            <ol class="flex items-center gap-2">
              <li>
                <a class="cursor-pointer" @click="$router.push('/portal')">
                  Dashboard /
                </a>
              </li>
              <li class="text-primary">Subscribers</li>
            </ol>
          </nav>
        </div>
        <!-- Breadcrumb End -->

        <!-- Main Table Starts -->
        <div class="flex flex-col gap-10">
          <div
            class="rounded-sm bg-white px-5 pt-6 pb-2.5 shadow-default dark:bg-boxdark sm:px-7.5 xl:pb-1"
          >
            <div class="max-w-full overflow-x-auto">
              <table class="w-full table-auto">
                <thead>
                  <tr class="bg-gray-2 text-left dark:bg-meta-4">
                    <th
                      class="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11"
                    >
                      #
                    </th>

                    <th
                      class="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11"
                    >
                      Email
                    </th>

                    <!-- <th
                      class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white"
                    >
                      Location
                    </th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(subscriber, i) in subscribers" :key="i">
                    <td
                      class="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11"
                    >
                      {{ i + 1 }}
                    </td>
                    <td
                      class="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11"
                    >
                      {{ subscriber.email }}
                    </td>

                    <!-- <td
                      class="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11"
                    >
                      <div class="flex flex-col items-start gap-3">
                        <p class="">{{ subscriber.location }}</p>
                      </div>
                    </td> -->
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- Main Table Ends -->
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapState(["subscribers"]),
  },
  mounted() {},
  methods: {},
};
</script>

<style></style>
