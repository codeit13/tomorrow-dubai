<template>
  <main>
    <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <div
        class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5"
      >
        <!-- Card Item Start -->
        <div
          class="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark"
        >
          <div
            class="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4"
          >
            <svg
              class="fill-current"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_130_9756)">
                <path
                  d="M15.7501 0.55835H2.2501C1.29385 0.55835 0.506348 1.34585 0.506348 2.3021V15.8021C0.506348 16.7584 1.29385 17.574 2.27822 17.574H15.7782C16.7345 17.574 17.5501 16.7865 17.5501 15.8021V2.3021C17.522 1.34585 16.7063 0.55835 15.7501 0.55835ZM6.69385 10.599V6.4646H11.3063V10.5709H6.69385V10.599ZM11.3063 11.8646V16.3083H6.69385V11.8646H11.3063ZM1.77197 6.4646H5.45635V10.5709H1.77197V6.4646ZM12.572 6.4646H16.2563V10.5709H12.572V6.4646ZM2.2501 1.82397H15.7501C16.0313 1.82397 16.2563 2.04897 16.2563 2.33022V5.2271H1.77197V2.3021C1.77197 2.02085 1.96885 1.82397 2.2501 1.82397ZM1.77197 15.8021V11.8646H5.45635V16.3083H2.2501C1.96885 16.3083 1.77197 16.0834 1.77197 15.8021ZM15.7501 16.3083H12.572V11.8646H16.2563V15.8021C16.2563 16.0834 16.0313 16.3083 15.7501 16.3083Z"
                  fill=""
                />
              </g>
              <defs>
                <clipPath id="clip0_130_9756">
                  <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="translate(0 0.052124)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div class="mt-4 flex items-end justify-between" v-if="properties">
            <div>
              <h4 class="text-title-md font-bold text-black dark:text-white">
                {{ properties.length }}
              </h4>
              <span class="text-sm font-medium">Total Properties</span>
            </div>

            <!-- <span
              class="flex items-center gap-1 text-sm font-medium text-meta-3"
            >
              0.43%
              <svg
                class="fill-meta-3"
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                  fill=""
                />
              </svg>
            </span> -->
          </div>
        </div>
        <!-- Card Item End -->

        <!-- Card Item Start -->
        <div
          class="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark"
        >
          <div
            class="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4"
          >
            <svg
              class="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.43425 7.5093H2.278C2.44675 7.5093 2.55925 7.3968 2.58737 7.31243L2.98112 6.32805H5.90612L6.27175 7.31243C6.328 7.48118 6.46862 7.5093 6.58112 7.5093H7.453C7.76237 7.48118 7.87487 7.25618 7.76237 7.03118L5.428 1.4343C5.37175 1.26555 5.3155 1.23743 5.14675 1.23743H3.88112C3.76862 1.23743 3.59987 1.29368 3.57175 1.4343L1.153 7.08743C1.0405 7.2843 1.20925 7.5093 1.43425 7.5093ZM4.47175 2.98118L5.3155 5.17493H3.59987L4.47175 2.98118Z"
                fill=""
              />
              <path
                d="M10.1249 2.5031H16.8749C17.2124 2.5031 17.5218 2.22185 17.5218 1.85623C17.5218 1.4906 17.2405 1.20935 16.8749 1.20935H10.1249C9.7874 1.20935 9.47803 1.4906 9.47803 1.85623C9.47803 2.22185 9.75928 2.5031 10.1249 2.5031Z"
                fill=""
              />
              <path
                d="M16.8749 6.21558H10.1249C9.7874 6.21558 9.47803 6.49683 9.47803 6.86245C9.47803 7.22808 9.75928 7.50933 10.1249 7.50933H16.8749C17.2124 7.50933 17.5218 7.22808 17.5218 6.86245C17.5218 6.49683 17.2124 6.21558 16.8749 6.21558Z"
                fill=""
              />
              <path
                d="M16.875 11.1656H1.77187C1.43438 11.1656 1.125 11.4469 1.125 11.8125C1.125 12.1781 1.40625 12.4594 1.77187 12.4594H16.875C17.2125 12.4594 17.5219 12.1781 17.5219 11.8125C17.5219 11.4469 17.2125 11.1656 16.875 11.1656Z"
                fill=""
              />
              <path
                d="M16.875 16.1156H1.77187C1.43438 16.1156 1.125 16.3969 1.125 16.7625C1.125 17.1281 1.40625 17.4094 1.77187 17.4094H16.875C17.2125 17.4094 17.5219 17.1281 17.5219 16.7625C17.5219 16.3969 17.2125 16.1156 16.875 16.1156Z"
                fill="white"
              />
            </svg>
          </div>

          <div class="mt-4 flex items-end justify-between">
            <div>
              <h4 class="text-title-md font-bold text-black dark:text-white">
                {{ blogs.length }}
              </h4>
              <span class="text-sm font-medium">Total News/ Blogs</span>
            </div>

            <!-- <span
              class="flex items-center gap-1 text-sm font-medium text-meta-3"
            >
              4.35%
              <svg
                class="fill-meta-3"
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                  fill=""
                />
              </svg>
            </span> -->
          </div>
        </div>
        <!-- Card Item End -->

        <!-- Card Item Start -->
        <div
          class="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark"
        >
          <div
            class="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4"
          >
            <svg
              class="fill-primary dark:fill-white"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.1063 18.0469L19.3875 3.23126C19.2157 1.71876 17.9438 0.584381 16.3969 0.584381H5.56878C4.05628 0.584381 2.78441 1.71876 2.57816 3.23126L0.859406 18.0469C0.756281 18.9063 1.03128 19.7313 1.61566 20.3844C2.20003 21.0375 2.99066 21.3813 3.85003 21.3813H18.1157C18.975 21.3813 19.8 21.0031 20.35 20.3844C20.9 19.7656 21.2094 18.9063 21.1063 18.0469ZM19.2157 19.3531C18.9407 19.6625 18.5625 19.8344 18.15 19.8344H3.85003C3.43753 19.8344 3.05941 19.6625 2.78441 19.3531C2.50941 19.0438 2.37191 18.6313 2.44066 18.2188L4.12503 3.43751C4.19378 2.71563 4.81253 2.16563 5.56878 2.16563H16.4313C17.1532 2.16563 17.7719 2.71563 17.875 3.43751L19.5938 18.2531C19.6282 18.6656 19.4907 19.0438 19.2157 19.3531Z"
                fill=""
              />
              <path
                d="M14.3345 5.29375C13.922 5.39688 13.647 5.80938 13.7501 6.22188C13.7845 6.42813 13.8189 6.63438 13.8189 6.80625C13.8189 8.35313 12.547 9.625 11.0001 9.625C9.45327 9.625 8.1814 8.35313 8.1814 6.80625C8.1814 6.6 8.21577 6.42813 8.25015 6.22188C8.35327 5.80938 8.07827 5.39688 7.66577 5.29375C7.25327 5.19063 6.84077 5.46563 6.73765 5.87813C6.6689 6.1875 6.63452 6.49688 6.63452 6.80625C6.63452 9.2125 8.5939 11.1719 11.0001 11.1719C13.4064 11.1719 15.3658 9.2125 15.3658 6.80625C15.3658 6.49688 15.3314 6.1875 15.2626 5.87813C15.1595 5.46563 14.747 5.225 14.3345 5.29375Z"
                fill=""
              />
            </svg>
          </div>

          <div class="mt-4 flex items-end justify-between">
            <div>
              <h4 class="text-title-md font-bold text-black dark:text-white">
                2.450
              </h4>
              <span class="text-sm font-medium">Total Product</span>
            </div>

            <!-- <span
              class="flex items-center gap-1 text-sm font-medium text-meta-3"
            >
              2.59%
              <svg
                class="fill-meta-3"
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                  fill=""
                />
              </svg>
            </span> -->
          </div>
        </div>
        <!-- Card Item End -->

        <!-- Card Item Start -->
        <div
          class="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark"
        >
          <div
            class="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4"
          >
            <svg
              class="fill-primary dark:fill-white"
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.18418 8.03751C9.31543 8.03751 11.0686 6.35313 11.0686 4.25626C11.0686 2.15938 9.31543 0.475006 7.18418 0.475006C5.05293 0.475006 3.2998 2.15938 3.2998 4.25626C3.2998 6.35313 5.05293 8.03751 7.18418 8.03751ZM7.18418 2.05626C8.45605 2.05626 9.52168 3.05313 9.52168 4.29063C9.52168 5.52813 8.49043 6.52501 7.18418 6.52501C5.87793 6.52501 4.84668 5.52813 4.84668 4.29063C4.84668 3.05313 5.9123 2.05626 7.18418 2.05626Z"
                fill=""
              />
              <path
                d="M15.8124 9.6875C17.6687 9.6875 19.1468 8.24375 19.1468 6.42188C19.1468 4.6 17.6343 3.15625 15.8124 3.15625C13.9905 3.15625 12.478 4.6 12.478 6.42188C12.478 8.24375 13.9905 9.6875 15.8124 9.6875ZM15.8124 4.7375C16.8093 4.7375 17.5999 5.49375 17.5999 6.45625C17.5999 7.41875 16.8093 8.175 15.8124 8.175C14.8155 8.175 14.0249 7.41875 14.0249 6.45625C14.0249 5.49375 14.8155 4.7375 15.8124 4.7375Z"
                fill=""
              />
              <path
                d="M15.9843 10.0313H15.6749C14.6437 10.0313 13.6468 10.3406 12.7874 10.8563C11.8593 9.61876 10.3812 8.79376 8.73115 8.79376H5.67178C2.85303 8.82814 0.618652 11.0625 0.618652 13.8469V16.3219C0.618652 16.975 1.13428 17.4906 1.7874 17.4906H20.2468C20.8999 17.4906 21.4499 16.9406 21.4499 16.2875V15.4625C21.4155 12.4719 18.9749 10.0313 15.9843 10.0313ZM2.16553 15.9438V13.8469C2.16553 11.9219 3.74678 10.3406 5.67178 10.3406H8.73115C10.6562 10.3406 12.2374 11.9219 12.2374 13.8469V15.9438H2.16553V15.9438ZM19.8687 15.9438H13.7499V13.8469C13.7499 13.2969 13.6468 12.7469 13.4749 12.2313C14.0937 11.7844 14.8499 11.5781 15.6405 11.5781H15.9499C18.0812 11.5781 19.8343 13.3313 19.8343 15.4625V15.9438H19.8687Z"
                fill=""
              />
            </svg>
          </div>

          <div class="mt-4 flex items-end justify-between">
            <div v-if="agents">
              <h4 class="text-title-md font-bold text-black dark:text-white">
                {{ agents.length }}
              </h4>
              <span class="text-sm font-medium">Total Agents</span>
            </div>

            <!-- <span
              class="flex items-center gap-1 text-sm font-medium text-meta-5"
            >
              0.95%
              <svg
                class="fill-meta-5"
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
                  fill=""
                />
              </svg>
            </span> -->
          </div>
        </div>
        <!-- Card Item End -->
      </div>

      <div
        class="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5"
      >
        <!-- ====== Chart One Start -->
        <!-- <include src="./partials/chart-01.html" /> -->
        <!-- ====== Chart One End -->

        <!-- ====== Chart Two Start -->
        <!-- <include src="./partials/chart-02.html" /> -->
        <!-- ====== Chart Two End -->

        <!-- ====== Chart Three Start -->
        <!-- <include src="./partials/chart-03.html" /> -->
        <!-- ====== Chart Three End -->

        <!-- ====== Map One Start -->
        <!-- <include src="./partials/map-01.html" /> -->
        <!-- ====== Map One End -->

        <!-- ====== Table One Start -->
        <div class="col-span-12 xl:col-span-8">
          <!-- <include src="./partials/table-01.html" /> -->
        </div>
        <!-- ====== Table One End -->

        <!-- ====== Chat Card Start -->
        <!-- <div
          class="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4"
        >
          <h4 class="mb-6 px-7.5 text-xl font-bold text-black dark:text-white">
            Chats
          </h4>

          <div>
            <a
              href="messages.html"
              class="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
            >
              <div class="relative h-14 w-14 rounded-full">
                <img
                  :src="require('@/assets/images/user/user-03.png')"
                  alt="User"
                />
                <span
                  class="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"
                ></span>
              </div>

              <div class="flex flex-1 items-center justify-between">
                <div>
                  <h5 class="font-medium text-black dark:text-white">
                    Devid Heilo
                  </h5>
                  <p>
                    <span class="text-sm font-medium text-black dark:text-white"
                      >Hello, how are you?</span
                    >
                    <span class="text-xs"> . 12 min</span>
                  </p>
                </div>
                <div
                  class="flex h-6 w-6 items-center justify-center rounded-full bg-primary"
                >
                  <span class="text-sm font-medium text-white">3</span>
                </div>
              </div>
            </a>
            <a
              href="messages.html"
              class="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
            >
              <div class="relative h-14 w-14 rounded-full">
                <img
                  :src="require('@/assets/images/user/user-04.png')"
                  alt="User"
                />
                <span
                  class="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"
                ></span>
              </div>

              <div class="flex flex-1 items-center justify-between">
                <div>
                  <h5 class="font-medium">Henry Fisher</h5>
                  <p>
                    <span class="text-sm font-medium"
                      >I am waiting for you</span
                    >
                    <span class="text-xs"> . 5:54 PM</span>
                  </p>
                </div>
              </div>
            </a>
            <a
              href="messages.html"
              class="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
            >
              <div class="relative h-14 w-14 rounded-full">
                <img
                  :src="require('@/assets/images/user/user-05.png')"
                  alt="User"
                />
                <span
                  class="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-6"
                ></span>
              </div>

              <div class="flex flex-1 items-center justify-between">
                <div>
                  <h5 class="font-medium">Wilium Smith</h5>
                  <p>
                    <span class="text-sm font-medium">Where are you now?</span>
                    <span class="text-xs"> . 10:12 PM</span>
                  </p>
                </div>
              </div>
            </a>
            <a
              href="messages.html"
              class="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
            >
              <div class="relative h-14 w-14 rounded-full">
                <img
                  :src="require('@/assets/images/user/user-01.png')"
                  alt="User"
                />
                <span
                  class="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"
                ></span>
              </div>

              <div class="flex flex-1 items-center justify-between">
                <div>
                  <h5 class="font-medium text-black dark:text-white">
                    Henry Deco
                  </h5>
                  <p>
                    <span class="text-sm font-medium text-black dark:text-white"
                      >Thank you so much!</span
                    >
                    <span class="text-xs"> . Sun</span>
                  </p>
                </div>
                <div
                  class="flex h-6 w-6 items-center justify-center rounded-full bg-primary"
                >
                  <span class="text-sm font-medium text-white">2</span>
                </div>
              </div>
            </a>
            <a
              href="messages.html"
              class="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
            >
              <div class="relative h-14 w-14 rounded-full">
                <img
                  :src="require('@/assets/images/user/user-02.png')"
                  alt="User"
                />
                <span
                  class="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-7"
                ></span>
              </div>

              <div class="flex flex-1 items-center justify-between">
                <div>
                  <h5 class="font-medium">Jubin Jack</h5>
                  <p>
                    <span class="text-sm font-medium">I really love that!</span>
                    <span class="text-xs"> . Oct 23</span>
                  </p>
                </div>
              </div>
            </a>
            <a
              href="messages.html"
              class="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
            >
              <div class="relative h-14 w-14 rounded-full">
                <img
                  :src="require('@/assets/images/user/user-05.png')"
                  alt="User"
                />
                <span
                  class="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-6"
                ></span>
              </div>

              <div class="flex flex-1 items-center justify-between">
                <div>
                  <h5 class="font-medium">Wilium Smith</h5>
                  <p>
                    <span class="text-sm font-medium">Where are you now?</span>
                    <span class="text-xs"> . Sep 20</span>
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div> -->
        <!-- ====== Chat Card End -->
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["properties", "blogs", "agents"]),
  },
  data() {
    return {};
  },
};
</script>
