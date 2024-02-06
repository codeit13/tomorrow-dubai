<template>
  <div>
    <div
      modal-backdrop=""
      class="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"
      v-if="isModalOpen"
    ></div>

    <!-- Main modal -->
    <div
      v-if="isModalOpen"
      id="my-popup"
      tabindex="-1"
      aria-modal="true"
      role="dialog"
      class="overflow-y-auto overflow-x-hidden fixed top-0 z-[999] w-[80%] h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative p-4 w-fit mx-auto max-h-full">
        <!-- Modal content -->
        <div
          class="relative bg-white rounded-lg shadow-default dark:bg-boxdark w-[60vw]"
        >
          <!-- Modal header -->
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Property Detail
            </h3>
            <button
              @click="isModalOpen = false"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only" @click="isModalOpen = false"
                >Close modal</span
              >
            </button>
          </div>
          <!-- Modal body -->
          <div class="flex flex-col gap-9 h-[75vh] overflow-y-auto">
            <!-- Contact Form -->
            <div
              class="rounded-sm border border-stroke bg-white dark:border-strokedark dark:bg-boxdark"
            >
              <div class="p-8">
                <div class="mb-6 relative z-0">
                  <input
                    type="text"
                    v-model="propertyName"
                    placeholder=""
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  />
                  <label
                    class="mb-2.5 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Property Name
                  </label>
                </div>

                <div class="mb-6 relative z-0">
                  <input
                    type="text"
                    v-model="propertyLocation"
                    placeholder=""
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  />
                  <label
                    class="mb-2.5 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Property Location
                  </label>
                </div>
              </div>
            </div>
          </div>
          <!-- Modal footer -->
          <div
            class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              @click="
                () => {
                  if (this.buttonText.toLowerCase() == 'create') {
                    this.createProperty();
                  } else {
                    this.updateProperty();
                  }
                }
              "
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {{ buttonText }}
            </button>
            <!-- <button
                @click="isModalOpen = false"
                class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-boxdark dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Delete
              </button> -->
          </div>
        </div>
      </div>
    </div>

    <main>
      <div class="w-[100vw] h-[100%] z-[1000] backdrop-blur-lg"></div>

      <div class="max-w-screen-2xl mx-auto p-4 md:p-6 2xl:p-10">
        <!-- Breadcrumb Start -->
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6"
        >
          <h2 class="font-semibold text-title-md2 text-black dark:text-white">
            {{ properties.length }} Properties
          </h2>

          <button
            @click="resetPopupModal()"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            CREATE
          </button>

          <nav>
            <ol class="flex items-center gap-2">
              <li>
                <a class="cursor-pointer" @click="$router.push('/portal')">
                  Dashboard /
                </a>
              </li>
              <li class="text-primary">Properties</li>
            </ol>
          </nav>
        </div>
        <!-- Breadcrumb End -->

        <!-- Main Table Starts -->
        <div class="flex flex-col gap-10">
          <div
            class="rounded-sm bg-white px-5 pt-6 pb-2.5 dark:bg-boxdark sm:px-7.5 xl:pb-1"
          >
            <div class="max-w-full overflow-x-auto">
              <table class="w-full table-auto">
                <thead>
                  <tr class="bg-gray-2 text-left dark:bg-meta-4">
                    <th
                      class="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11"
                    >
                      Property Name
                    </th>

                    <th
                      class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white"
                    >
                      Property Location
                    </th>
                    <th
                      class="py-4 px-4 font-medium text-black dark:text-white"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(property, i) in properties" :key="i">
                    <td
                      class="border-t border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11"
                    >
                      <div class="flex items-center gap-3">
                        <h5 class="font-medium text-black dark:text-white">
                          {{ property.name }}
                        </h5>
                      </div>
                    </td>
                    <td
                      class="border-t border-[#eee] py-5 px-4 dark:border-strokedark"
                    >
                      <p class="text-black dark:text-white">
                        {{ property.location }}
                      </p>
                    </td>
                    <td
                      class="border-t border-[#eee] py-5 px-4 dark:border-strokedark"
                    >
                      <div class="flex items-center space-x-3.5">
                        <button
                          class="hover:text-primary"
                          @click="openPropertyModal(property)"
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
                              d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                              fill=""
                            />
                            <path
                              d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                              fill=""
                            />
                          </svg>
                        </button>
                        <button
                          class="hover:text-primary"
                          @click="deleteProperty(property)"
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
                              d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                              fill=""
                            />
                            <path
                              d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                              fill=""
                            />
                            <path
                              d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                              fill=""
                            />
                            <path
                              d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                              fill=""
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
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
    return {
      isModalOpen: false,
      propertyId: null,
      propertyName: null,
      propertyLocation: null,
      buttonText: "UPDATE",
    };
  },
  components: {},
  computed: {
    ...mapState(["properties"]),
  },
  mounted() {},
  methods: {
    openPropertyModal(property) {
      this.buttonText = "UPDATE";

      this.propertyId = property._id;
      this.propertyName = property.name;
      this.propertyLocation = property.location;

      this.isModalOpen = true;
    },

    resetPopupModal() {
      this.isModalOpen = true;
      this.buttonText = "CREATE";
      this.propertyName = null;
      this.propertyLocation = null;
    },

    async createProperty() {
      if (this.propertyName && this.propertyLocation) {
        const property = {
          name: this.propertyName,
          location: this.propertyLocation,
        };
        await this.$store.dispatch("createProperty", {
          property,
        });
        this.isModalOpen = false;
      } else {
        this.$store.commit("SET_TOASTER_MSG", {
          type: "error",
          message: "Please make sure all the details are correct.",
        });
      }
    },

    async updateProperty() {
      if (this.propertyName && this.propertyLocation) {
        const property = {
          name: this.propertyName,
          location: this.propertyLocation,
        };
        await this.$store.dispatch("updateProperty", {
          property,
        });
        this.isModalOpen = false;
      } else {
        this.$store.commit("SET_TOASTER_MSG", {
          type: "error",
          message: "Please make sure all the details are correct.",
        });
      }
    },

    async deleteProperty(property) {
      const status = confirm("Are you sure? You want to delete this property?");
      if (status) {
        await this.$store.dispatch("deleteProperty", {
          id: property._id,
        });
      }
    },
  },
};
</script>

<style>
.ql-container {
  min-height: 150px !important;
}

.file-input-container {
  height: 200px;
  width: 250px;
  border-radius: 10px;
  box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  gap: 5px;
}

.file-input-header {
  flex: 1;
  width: 100%;
  border: 2px dashed royalblue;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.file-input-header svg {
  height: 20px;
  fill: #e3e3e3;
}

.file-input-header p {
  text-align: center;
  color: #e3e3e3;
}

#file {
  display: none;
}

.input-file-footer {
  width: 100%;
  height: 40px;
  padding: 8px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
  border: none;
}

.input-file-footer svg {
  height: 100%;
  fill: royalblue;
  background-color: rgba(70, 66, 66, 0.103);
  border-radius: 50%;
  padding: 2px;
  cursor: pointer;
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.205);
}

.input-file-footer p {
  flex: 1;
  text-align: center;
}
</style>
