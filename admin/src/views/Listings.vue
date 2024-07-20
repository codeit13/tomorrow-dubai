run
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
          class="relative bg-white rounded-lg shadow dark:bg-boxdark w-[60vw]"
        >
          <!-- Modal header -->
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Listing Details
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
              class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
            >
              <div class="p-8">
                <div class="mb-6 relative z-0">
                  <input
                    type="text"
                    v-model="tag"
                    placeholder=""
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  />
                  <label
                    class="mb-2.5 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Tag
                  </label>
                </div>

                <div class="mb-6 relative z-0">
                  <input
                    type="text"
                    v-model="listingTitle"
                    placeholder=""
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  />
                  <label
                    class="mb-2.5 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Listing Title
                  </label>
                </div>

                <div class="mb-6 relative z-0">
                  <label class="block text-gray-500 dark:text-gray-400 text-xs">
                    Property Name
                  </label>

                  <div class="relative searchable-list">
                    <div class="flex" @click="propertyNameArrowClicked">
                      <input
                        type="text"
                        v-model="propertyName"
                        @blur="propertyNameBlur"
                        class="data-list py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 pee"
                        spellcheck="false"
                        placeholder="Select a property"
                      />

                      <svg
                        class="outline-none cursor-pointer fill-gray-400 transition-all duration-200 w-4"
                        :class="{
                          'rotate-90': propertyNameListOpened,
                          'rotate-0': !propertyNameListOpened,
                        }"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <path d="M0 256l512 512L1024 256z"></path>
                      </svg>
                    </div>
                    <ul
                      class="option-list overflow-y-scroll max-h-64 min-h-[0px] flex-col top-12 left-0 z-[9999999999] bg-white rounded-sm scale-0 opacity-0 transition-all duration-200"
                      :class="{
                        'scale-100 opacity-100': propertyNameListOpened,
                        'scale-0 opacity-0': !propertyNameListOpened,
                        hidden: !propertyNameListOpened,
                        flex: propertyNameListOpened,
                      }"
                    >
                      <li
                        v-for="(property, i) in filteredProperties"
                        :key="i"
                        @click="selectPropertyName(property)"
                        class="data-option z-[999999999999999] select-none break-words inline-block text-sm text-gray-500 bg-gray-100 odd:bg-gray-200 hover:bg-gray-300 hover:text-gray-700 transition-all duration-200 font-bold p-3 cursor-pointer max-w-full"
                      >
                        {{ property.name }}
                      </li>
                      <li
                        v-if="filteredProperties.length == 0"
                        class="data-option z-[999999999999999] select-none break-words inline-block text-sm text-gray-500 bg-gray-100 odd:bg-gray-200 transition-all duration-200 p-3 cursor-pointer max-w-full"
                      >
                        No Property Found.
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="mb-6 relative z-0">
                  <input
                    type="text"
                    v-model="listingFullAddress"
                    placeholder=""
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  />
                  <label
                    class="mb-2.5 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Listing Full Address
                  </label>
                </div>

                <div
                  class="mb-6 flex flex-col gap-6 xl:flex-row justify-center"
                >
                  <div class="w-full xl:w-1/2 relative z-0">
                    <!-- <label
                      class="mb-2.5 block text-md text-black dark:text-white"
                    >
                      Home Type
                    </label> -->
                    <select
                      v-model="homeType"
                      class="relative z-20 w-full text-sm rounded-none bg-transparent py-3 px-5 pl-0 outline-none border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 transition dark:bg-boxdark"
                    >
                      <option
                        disabled
                        selected
                        value="DEFAULT"
                        class="text-gray-500 dark:text-gray-400"
                      >
                        Select Home Type
                      </option>
                      <option
                        v-for="(item, i) in homeTypes"
                        :key="i"
                        :value="item"
                      >
                        {{ item }}
                      </option>
                    </select>
                  </div>

                  <div class="w-full xl:w-1/2 relative z-0">
                    <input
                      type="text"
                      v-model="listingSize"
                      placeholder=""
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    />
                    <label
                      class="mb-2.5 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                      Listing Size
                    </label>
                  </div>
                </div>

                <div class="mb-6 flex flex-col gap-6 xl:flex-row">
                  <div class="w-full xl:w-1/2 relative z-0">
                    <input
                      type="number"
                      v-model="noOfBeds"
                      placeholder=""
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    />
                    <label
                      class="mb-2.5 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                      Number of Beds
                    </label>
                  </div>

                  <div class="w-full xl:w-1/2 relative z-0">
                    <input
                      type="number"
                      v-model="noOfBaths"
                      placeholder=""
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    />
                    <label
                      class="mb-2.5 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                      Number of Bathrooms
                    </label>
                  </div>
                </div>
                <div class="mb-6 flex flex-col gap-6 xl:flex-row">
                  <div class="w-full xl:w-1/2 relative z-0">
                    <input
                      type="number"
                      v-model="listingPrice"
                      placeholder=""
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    />
                    <label
                      class="mb-2.5 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                      Listing Price
                    </label>
                  </div>
                </div>

                <div class="mb-6">
                  <label class="mb-2.5 block text-black dark:text-white">
                    Listing Description
                  </label>

                  <QuillEditor
                    v-if="modules && formats"
                    theme="snow"
                    contentType="html"
                    :content="listingDescription"
                    v-model="newListingDescription"
                    @ready="quillEditorReady"
                  />
                </div>

                <div class="mb-6 flex">
                  <div class="w-[30%]">
                    <label class="mb-2.5 block text-black dark:text-white">
                      Images
                    </label>

                    <div class="file-input-container">
                      <div class="file-input-header">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15"
                              stroke="#e3e3e3"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </g>
                        </svg>
                        <p>Browse File to upload!</p>
                      </div>
                      <label for="file" class="input-file-footer">
                        <svg
                          fill="#000000"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path d="M15.331 6H8.5v20h15V14.154h-8.169z"></path>
                            <path d="M18.153 6h-.009v5.342H23.5v-.002z"></path>
                          </g>
                        </svg>
                        <p class="text-black dark:text-white">Select a file</p>
                      </label>
                      <input
                        @change="handleImageUpload"
                        id="file"
                        type="file"
                      />
                    </div>
                  </div>
                  <div
                    class="overflow-x-auto overflow-y-hidden ml-10"
                    :style="{
                      whiteSpace: 'nowrap',
                    }"
                  >
                    <div
                      v-for="(image, i) in images"
                      :key="i"
                      class="max-w-[50%] max-h-[100%] mr-6 inline-block relative"
                    >
                      <img :src="image" />
                      <span
                        class="cursor-pointer absolute top-0 right-0 rounded-full bg-black text-white px-[10px] py-[1px] mt-2 mr-2"
                        @click="removeImage(i)"
                        >x</span
                      >
                    </div>
                  </div>
                </div>

                <div class="mb-6 border-[1px] rounded-md p-4">
                  <label class="mb-2.5 block text-black dark:text-white">
                    Ammenities
                  </label>
                  <div class="flex flex-wrap">
                    <div
                      class="flex items-center mb-4 mr-4 w-1/4"
                      v-for="(item, i) in ammenities"
                      :key="i"
                    >
                      <input
                        :id="item.name.replaceAll(' ', '-').trim()"
                        type="checkbox"
                        :checked="item.value == true"
                        @change="updateAmmenities(item)"
                        class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        :for="item.name.replaceAll(' ', '-').trim()"
                        class="ms-2 text-md font-medium text-gray-900 dark:text-gray-300"
                      >
                        {{ item.name }}
                      </label>
                    </div>
                  </div>
                </div>

                <div class="mb-6">
                  <label class="mb-2.5 block text-black dark:text-white">
                    Is this listing Off Plan
                  </label>
                  <select
                    v-model="isOffPlan"
                    class="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-boxdark dark:focus:border-primary"
                  >
                    <option
                      v-for="(item, i) in ['NO', 'YES']"
                      :key="i"
                      :value="item"
                    >
                      {{ item }}
                    </option>
                  </select>
                </div>

                <div
                  class="my-4 border-[1px] rounded-md p-4"
                  v-if="isOffPlan == 'YES'"
                >
                  <label class="mb-4 block text-black dark:text-white">
                    Details
                  </label>
                  <div class="flex flex-wrap gap-4">
                    <div
                      class="w-fit relative z-0"
                      v-for="(item, i) in details"
                      :key="i"
                    >
                      <input
                        type="text"
                        v-model="item.value"
                        placeholder=""
                        class="block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      />
                      <label
                        class="mb-2.5 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        {{ item.name }}
                      </label>
                    </div>
                  </div>
                </div>

                <div
                  class="my-6 border-[1px] rounded-md p-4"
                  v-if="isOffPlan == 'YES'"
                >
                  <label class="mb-4 block text-black dark:text-white">
                    Units Available
                  </label>
                  <div class="flex flex-wrap gap-4">
                    <div class="my-2" v-for="(unit, i) in units" :key="i">
                      <div class="flex flex-wrap gap-4">
                        <div class="w-fit">
                          <input
                            type="text"
                            v-model="unit.name"
                            placeholder=""
                            class="block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          />
                        </div>
                        <div class="w-fit relative z-0" :key="i">
                          <input
                            type="text"
                            v-model="unit.sqFt"
                            placeholder=""
                            class="block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          />
                          <label
                            class="mb-2.5 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                          >
                            Sq Ft
                          </label>
                        </div>
                        <div class="w-fit relative z-0" :key="i">
                          <input
                            type="text"
                            v-model="unit.price"
                            placeholder=""
                            class="block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          />
                          <label
                            class="mb-2.5 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                          >
                            Price
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="my-6 border-[1px] rounded-md p-4"
                  v-if="isOffPlan == 'YES'"
                >
                  <label class="mb-4 block text-black dark:text-white">
                    Payment Plans
                  </label>
                  <div class="flex flex-wrap gap-4">
                    <div
                      class="w-fit relative z-0"
                      v-for="(plan, i) in Object.keys(paymentPlans)"
                      :key="i"
                    >
                      <input
                        type="text"
                        v-model="paymentPlans[plan]"
                        placeholder=""
                        class="block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      />
                      <label
                        class="mb-2.5 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        {{ plan }}
                      </label>
                    </div>
                  </div>
                </div>

                <div class="mb-6">
                  <label class="mb-2.5 block text-black dark:text-white">
                    Agent
                  </label>
                  <select
                    v-model="agent"
                    class="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-boxdark dark:focus:border-primary"
                  >
                    <option
                      v-for="(agent, i) in agents"
                      :key="i"
                      :value="agent.id"
                    >
                      {{ agent.name }}
                    </option>
                  </select>
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
                    this.createListing();
                  } else {
                    this.updateListing();
                  }
                }
              "
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {{ buttonText }}
            </button>
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
            {{ listings.length }} Listings
          </h2>

          <button
            @click="resetPopupModal()"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            CREATE
          </button>

          <button
            @click="compress"
            class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-boxdark dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Compress
          </button>

          <nav>
            <ol class="flex items-center gap-2">
              <li>
                <a class="cursor-pointer" @click="$router.push('/portal')">
                  Dashboard /
                </a>
              </li>
              <li class="text-primary">Listings</li>
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
                      Project Name
                    </th>

                    <th
                      class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white"
                    >
                      Price (AED)
                    </th>
                    <th
                      class="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white"
                    >
                      Status
                    </th>
                    <th
                      class="py-4 px-4 font-medium text-black dark:text-white"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(listing, i) in listings" :key="i">
                    <td
                      class="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11"
                    >
                      <div class="flex items-center gap-3">
                        <h5 class="font-medium text-black dark:text-white">
                          {{ listing.title }}
                        </h5>
                        <svg
                          v-if="listing?.slug"
                          class="fill-primary cursor-pointer"
                          @click="openListingUrl(listing)"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 -960 960 960"
                          width="24"
                        >
                          <path
                            d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"
                          />
                        </svg>
                      </div>

                      <p class="text-sm">{{ listing.address }}</p>
                    </td>
                    <td
                      class="border-b border-[#eee] py-5 px-4 dark:border-strokedark"
                    >
                      <p class="text-black dark:text-white">
                        {{ listing.price?.toLocaleString("en-US") }}
                      </p>
                    </td>
                    <td
                      class="border-b border-[#eee] py-5 px-4 dark:border-strokedark"
                    >
                      <p
                        class="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success"
                      >
                        {{ listing.status }}
                      </p>
                    </td>
                    <td
                      class="border-b border-[#eee] py-5 px-4 dark:border-strokedark"
                    >
                      <div class="flex items-center space-x-3.5">
                        <button
                          class="hover:text-primary"
                          @click="openListingModal(listing)"
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
                          @click="deleteListing(listing)"
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
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/utils/Firebase";

export default {
  data() {
    return {
      json: {
        "652118add1aa1e2cd26e164d": [
          "https://api.tinify.com/output/xa4zeqm7eh09b92z0z6emfhkm58r3wmr",
          "https://api.tinify.com/output/s2qvsnrm0qzmbk5ccjbqn36mheemcvfr",
          "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/PJA%20Payment%20Plan%20-%20Villa%20Plots%20v3.pdf?alt=media&token=d130a712-1fa2-41d0-921a-4d6d2c8dee23",
        ],
        "658c2ddbd0a0a338b29181ce": [],
        "658c2e1ad0a0a338b29181d0": [],
        "65ab843860ea7db136118c62": [],
        "65ab844860ea7db136118c64": [],
        "65c071e2b4a3938730e7ace3": [],
        "65c202926faa6122faccb3f6": [
          "https://api.tinify.com/output/jh44ypnq99gv31kz20k5bj2cwzey4f6b",
          "https://api.tinify.com/output/wfkxhq7zp8dgq7r9b5ebkhra3dy07x3m",
          "https://api.tinify.com/output/7jepx7eww3b8x7wpn9ec27mq64gnnra0",
        ],
        "65c229cb6faa6122faccb464": [
          "https://api.tinify.com/output/a8wx394xh9me99j0c8wyvgw2hakmfn4q",
          "https://api.tinify.com/output/hw7h51hybesfvay4x94qs2tjraxz2mh4",
          "https://api.tinify.com/output/wtfw0152cfvzkq5bek0gspg2230eeqk7",
          "https://api.tinify.com/output/v36c8m069fjyknf7ydqc1cs5n48rrzhj",
        ],
        "65c27b296faa6122faccb4a1": [
          "https://api.tinify.com/output/134hgz3yej021fx8j936yh72k2qxmmnb",
          "https://api.tinify.com/output/mywfmz2bkw4eqp76j6nzt5r1x2v87wrd",
          "https://api.tinify.com/output/mtnjbepd0ex51pe4d56ydx6vhng06aks",
          "https://api.tinify.com/output/p7gfw2zfpzwk11xjr0srkspjrv8t35wq",
          "https://api.tinify.com/output/za8ggvxsaq9mh9pcj9jakdn3t5ag5dm9",
          "https://api.tinify.com/output/fkz9ff14d9myten5zq7g6enwcqrxe325",
          "https://api.tinify.com/output/esqed4pv09vpjbkke2yx7fcteqc3k2b5",
          "https://api.tinify.com/output/rr644znrfwt68x0paa424z1rbvh7ebta",
          "https://api.tinify.com/output/repykbv0e3epatbkfh8rb02evvme2j2j",
          "https://api.tinify.com/output/rza3y1cqqjckyh17h3v1nvw778pqzxw1",
          "https://api.tinify.com/output/vqfvh1hpda7xaanbr6cp72w1pwvhpemj",
          "https://api.tinify.com/output/cg0y1nejsy19g7h9qdybj4ah0xcg85x5",
          "https://api.tinify.com/output/e3b1w2tphht9rdcb49eq8w1p4fv9nkf0",
          "https://api.tinify.com/output/fkz9ff14d9myten5zq7g6enwcqrxe325",
        ],
        "65c284bc6faa6122faccb4c5": [
          "https://api.tinify.com/output/yscxwz9t9kzqfdmwa0xjd45er0xx19fk",
          "https://api.tinify.com/output/5s1pfyacfpz8yt2b7c86pncg5e52hwdg",
          "https://api.tinify.com/output/3nh2ve4k19w65fn2pb2wvpsa7td7t9a0",
          "https://api.tinify.com/output/5ccyffkaqjevxg7699y6mj6gvxg2n9vq",
          "https://api.tinify.com/output/4s5e59d7srzbwpjbp3wv00sfvq71wsqt",
          "https://api.tinify.com/output/cy0vykv1eyedtc94qe01fnpx7tkm307k",
          "https://api.tinify.com/output/mfgvnxyfkn1w6fg672destymahek9t97",
        ],
        "65d339a6f29eecd0901c84c9": [
          "https://api.tinify.com/output/mcvc07z5r8dfrcvrym65tgnrgvyvgxyp",
          "https://api.tinify.com/output/bcjrs0qh11ky1hdzkkmdj6t2kgjq1r2t",
          "https://api.tinify.com/output/vv3k0qn95ww5vjbksvz9e7py1n82sxfc",
          "https://api.tinify.com/output/mgwg1xddabkptjxztv4f4ayhba05fg69",
          "https://api.tinify.com/output/yss7vqmmbsrtv4nvcvzqhrzj2v1rwttd",
          "https://api.tinify.com/output/8t9mj0pbscwg2t8mfcccyb38j4kqa2dh",
          "https://api.tinify.com/output/m0z1z25yj6tpjg5jg7eh978kse02s1gx",
        ],
        "65d59b1acc1d87f1dd8d376b": [],
        "65db4ba2b8dc9858055e546a": [
          "https://api.tinify.com/output/esqed4pv09vpjbkke2yx7fcteqc3k2b5",
          "https://api.tinify.com/output/zcw2wa0086ncjg2h6wq69g4q95cq4ttv",
          "https://api.tinify.com/output/mtnjbepd0ex51pe4d56ydx6vhng06aks",
          "https://api.tinify.com/output/mywfmz2bkw4eqp76j6nzt5r1x2v87wrd",
          "https://api.tinify.com/output/vqfvh1hpda7xaanbr6cp72w1pwvhpemj",
          "https://api.tinify.com/output/5ve48rbw98mywa1369gdvxj309kemadj",
          "https://api.tinify.com/output/p7gfw2zfpzwk11xjr0srkspjrv8t35wq",
          "https://api.tinify.com/output/fkz9ff14d9myten5zq7g6enwcqrxe325",
          "https://api.tinify.com/output/za8ggvxsaq9mh9pcj9jakdn3t5ag5dm9",
          "https://api.tinify.com/output/rr644znrfwt68x0paa424z1rbvh7ebta",
          "https://api.tinify.com/output/repykbv0e3epatbkfh8rb02evvme2j2j",
        ],
        "66050a6499eebdddf48832fe": [
          "https://api.tinify.com/output/5ccyffkaqjevxg7699y6mj6gvxg2n9vq",
          "https://api.tinify.com/output/r5gg1waee1qj02kjq56a3ee248n3p7ym",
          "https://api.tinify.com/output/aptm2pvg5h95tj09ek0mv57fb68qgm8q",
          "https://api.tinify.com/output/a6gxpgean9cmwrxts85e8w6gkg70fvbe",
          "https://api.tinify.com/output/1xhy74jeb5xzt6wpbr9zg2qrw3d7yp1j",
          "https://api.tinify.com/output/haqfepq7khh1xtpm4wmth36gj0q04yy6",
          "https://api.tinify.com/output/4s5e59d7srzbwpjbp3wv00sfvq71wsqt",
        ],
        "660536da99eebdddf488332a": [
          "https://api.tinify.com/output/tg7x06c0r3kc97rjvvap1dgzer8v2fh5",
          "https://api.tinify.com/output/1h6mv4aaef0yxs0dgrjm4ybmk3harg7n",
          "https://api.tinify.com/output/6qdpt0mape2c7bs7a0p7wx06hyw2d41y",
          "https://api.tinify.com/output/y643dj3pr0pzhas6dqd9qjxr72pnbkk4",
          "https://api.tinify.com/output/r5gg1waee1qj02kjq56a3ee248n3p7ym",
          "https://api.tinify.com/output/xj387aa8zzc4m75gvd5bag3fe7psrr9w",
        ],
        "661b7cfd099dd60d040af6d2": [],
        "6625ced1a667b63378c27918": [],
        "66489061fbf468b4e2e9449b": [
          "https://api.tinify.com/output/n0y8zjzrxbr39qnf5bqd9tv947ws988m",
          "https://api.tinify.com/output/sg1483wmgdc92a10ehc7y16z0p5fan8d",
          "https://api.tinify.com/output/hc4s3x4jbk398j72p07rm88kpkmxs168",
          "https://api.tinify.com/output/0vfkc7phbnkg8c6dc8fsvqhsr5xkg6wg",
        ],
        "6659e46bfbf468b4e2e94af2": [
          "https://api.tinify.com/output/efw77njam6shgrvv7agwn8acb6qtq64k",
          "https://api.tinify.com/output/rmgdjbkyce56ve8961vgdfp372vh85hk",
          "https://api.tinify.com/output/z3x3w8rakm07mfjqnd754b5kp98n3rwk",
          "https://api.tinify.com/output/qrkqsnmnnaxg89q5n7vb9068npkcrmsg",
          "https://api.tinify.com/output/vxbswrxfb8pcssz936pxn1v9rnrmye93",
          "https://api.tinify.com/output/1bm0kgkxn04zxr12t6cr91hjx5yc6pvs",
          "https://api.tinify.com/output/hpc34srzd3b8asyp9v60maryesnjearj",
          "https://api.tinify.com/output/npsqt883y54s081nbznv0sd5ct74ezt7",
          "https://api.tinify.com/output/wndxxkwcz5nd18x805eba0yjm0c4a2b9",
        ],
        "6661a005fbf468b4e2e94e74": [
          "https://api.tinify.com/output/18fzbncaqj4mt7bjsbgeah46hebseda0",
          "https://api.tinify.com/output/y813shx7gnr9nz1abz5qvjz126rcrdz8",
          "https://api.tinify.com/output/4em122adx306gz041gv0emfsmj03ctys",
          "https://api.tinify.com/output/h41emkfqac76tj17c30xrpabygb0m4ve",
        ],
        "6661a2b2fbf468b4e2e94eac": [
          "https://api.tinify.com/output/689g8dpfkgnqz5dnwe9wdgtr4w17zskk",
          "https://api.tinify.com/output/gjxpxs8pn55yn51c9rhmn63v4kks243b",
          "https://api.tinify.com/output/x4p7bsa63dnfkwptmkh0mrrzgdx05cft",
          "https://api.tinify.com/output/a49nabrgrrr4cemwhjg3wsc6dmh3e587",
          "https://api.tinify.com/output/zc31kjhssekzzrf0zf4zfynhn5t89rtv",
          "https://api.tinify.com/output/nkd5sdvfn8k7ars8kbjc1wfbjyvbymqc",
          "https://api.tinify.com/output/pmescbtxbxmwc6b1kady2t7kg0022wwb",
          "https://api.tinify.com/output/z018a0azdrt4xcnn8neawxjkcz4dba60",
          "https://api.tinify.com/output/206p8wnk7ca0ham7m48ak5860pdpww39",
          "https://api.tinify.com/output/ac1zb9d1beqvwnksaspma3c9009vfs8a",
        ],
        "6662ba4efbf468b4e2e94f09": [
          "https://api.tinify.com/output/9wwpphsvysvpwgt7qrgwd99kb9fmsqxp",
          "https://api.tinify.com/output/215pcv8e7nfjqyzzd114bvvb180cwk01",
          "https://api.tinify.com/output/8ggz57cyzyywdnr2hx6t2ew3y6eyvb8c",
          "https://api.tinify.com/output/qnnvzhx4nkgxm79vqm95zpm0mxbgqf2k",
        ],
        "6662cc11fbf468b4e2e94f48": [
          "https://api.tinify.com/output/5981tzzz8jdmswdn0mt477by0x4355w7",
          "https://api.tinify.com/output/j9pds17z6gts98ap6y0paj0ydkjtx0c9",
          "https://api.tinify.com/output/dte0t1t6n3hgs4cpjh4edyzfjkd1r7eq",
          "https://api.tinify.com/output/1sve90551x8m3ktdd0mwcn47qqn6zvvp",
          "https://api.tinify.com/output/8q45yrpjq9tdgrq0181ayv2fx1hbvb9y",
          "https://api.tinify.com/output/ksyjtnaa1n6q36gyg2akec7tkkjc5ye8",
          "https://api.tinify.com/output/43gskfjbjw7krqs7vyehv84cegvc228x",
          "https://api.tinify.com/output/n78hqa2140m5x5hww76qhbdvmv7m42x3",
          "https://api.tinify.com/output/80b5skjk8z3bxttvvs6n6900fthatqt5",
        ],
        "6662cd49fbf468b4e2e94f53": [
          "https://api.tinify.com/output/j9pds17z6gts98ap6y0paj0ydkjtx0c9",
          "https://api.tinify.com/output/1sve90551x8m3ktdd0mwcn47qqn6zvvp",
          "https://api.tinify.com/output/ksyjtnaa1n6q36gyg2akec7tkkjc5ye8",
          "https://api.tinify.com/output/80b5skjk8z3bxttvvs6n6900fthatqt5",
          "https://api.tinify.com/output/43gskfjbjw7krqs7vyehv84cegvc228x",
        ],
        "666408d3fbf468b4e2e94fd5": [
          "https://api.tinify.com/output/dexrksb2dd4zdt8pkx0kq85vw8aptz4z",
          "https://api.tinify.com/output/mrd1chdg8vbjh4ambrj12bgyaa2sm58r",
          "https://api.tinify.com/output/qphy2bmv9mpvabn3wva3sfsnj4mrsnmv",
          "https://api.tinify.com/output/kk3tn5v5b9648h5admgkqhgcez3y7kfb",
        ],
        "666c2b1bfbf468b4e2e952ee": [
          "https://api.tinify.com/output/mkptqvnkkzdt4413cf6ksfpa4pw229w8",
        ],
        "66806baefbf468b4e2e9585e": [
          "https://api.tinify.com/output/48esjk198hcrq6dzzs9kytx809qapeb1",
          "https://api.tinify.com/output/2r7sh1vy22fwvdvxc2kyvfa2qb4yq7na",
          "https://api.tinify.com/output/ybvmvffy4t3hthgdh1fg7904h1rv64wp",
          "https://api.tinify.com/output/aa3fererpe57feda702kdxyerx80g6gn",
          "https://api.tinify.com/output/rvxant1yqp16vx0z5yz0ye5k4cx32xan",
          "https://api.tinify.com/output/anab8rgxjjyg3dpgcyekf183rj8yvn9q",
          "https://api.tinify.com/output/nta69dg53g00k1qr2knaaer15atvgeyw",
          "https://api.tinify.com/output/ye20xk3d30vey7rcz1hgxqvt7brsdtjc",
          "https://api.tinify.com/output/a8yv6zqp9f8666sb35ge9ykte76h1804",
          "https://api.tinify.com/output/bqyn3jcwryky9tr4t7j0vnmjnw52k654",
          "https://api.tinify.com/output/h2jvdbrnreynsb9vred751xhbt6rg87r",
        ],
        "668854e5fbf468b4e2e95afc": [
          "https://api.tinify.com/output/jmstwxbbrbe7vspgtrcs20q2cchhbcz7",
          "https://api.tinify.com/output/4xwa32hvx0j15e96q5hwjfkvnypx8m8n",
          "https://api.tinify.com/output/7pzhq4sm241jtsb0ted0jw52zn07t3hd",
          "https://api.tinify.com/output/8qwkhkgsqj4yshxj6ja7g35xsfg92vhs",
          "https://api.tinify.com/output/vtepzteazdzw8e2g2jshhcp3q8s9nkwn",
          "https://api.tinify.com/output/kdtfws70y21hpj1md5df0tykykvkve5e",
          "https://api.tinify.com/output/m1w1fw3r06j06ccd7z8y5j3t8s3g7ezc",
          "https://api.tinify.com/output/2br2szja68xwjg83ybv37w5jn62jed3f",
          "https://api.tinify.com/output/eqm7mmgecs6wfpe01fhagcnffma06gxx",
          "https://api.tinify.com/output/c790q21zjfseaykyaaf4q66zy3ab2ycs",
          "https://api.tinify.com/output/1ab6hwz2rqjk9pytmay1j345gnp990cr",
          "https://api.tinify.com/output/kv27t96bqed6eb3mqywy0h0pss7781d0",
        ],
      },
      isModalOpen: false,
      homeTypes: [
        "Villa",
        "Apartment",
        "Penthouse",
        "Townhouse",
        "Plot",
        "Other",
      ],
      ammenities: [
        {
          name: "Swimming Pool",
          value: false,
        },
        {
          name: "Kids Play Area",
          value: false,
        },
        {
          name: "Jacuzzi",
          value: false,
        },
        {
          name: "Built In Wardrobes",
          value: false,
        },
        {
          name: "Balcony",
          value: false,
        },
        {
          name: "Gym",
          value: false,
        },
        {
          name: "Private Gym",
          value: false,
        },
        {
          name: "Steam Room",
          value: false,
        },
        {
          name: "Concierge Service",
          value: false,
        },
        {
          name: "Beach Access",
          value: false,
        },
        {
          name: "Covered Parking",
          value: false,
        },
        {
          name: "Cigar Lounge",
          value: false,
        },
        {
          name: "Sauna Room",
          value: false,
        },
        {
          name: "Finished Basement",
          value: false,
        },
        {
          name: "Charging Station",
          value: false,
        },
        {
          name: "Terrace Garden",
          value: false,
        },
        {
          name: "Maid Room",
          value: false,
        },
        {
          name: "Walk In Closet",
          value: false,
        },
        {
          name: "Beachfront",
          value: false,
        },
        {
          name: "Movie Theater",
          value: false,
        },
        {
          name: "Study Room",
          value: false,
        },
        {
          name: "Private Pool",
          value: false,
        },
        {
          name: "Equipped Kitchen",
          value: false,
        },
        {
          name: "Wine Cellar",
          value: false,
        },
      ],
      details: [
        {
          name: "Completion Date",
          value: "",
        },
        {
          name: "Developer",
          value: "",
        },
        {
          name: "Lifestyle",
          value: "",
        },
        {
          name: "Property Type",
          value: "",
        },
        {
          name: "Available Unit",
          value: "",
        },
        {
          name: "Price Range",
          value: "",
        },
      ],
      units: [
        {
          name: "2 Bedrooms",
          sqFt: "",
          price: "",
        },
        {
          name: "3 Bedrooms",
          sqFt: "",
          price: "",
        },
        {
          name: "4 Bedrooms",
          sqFt: "",
          price: "",
        },
        {
          name: "5 Bedrooms",
          sqFt: "",
          price: "",
        },
        {
          name: "6 Bedrooms",
          sqFt: "",
          price: "",
        },
      ],
      paymentPlans: {
        "On Booking": "",
        "During Construction": "",
        Completion: "",
      },
      modules: {
        toolbar: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image", "video"],
          ["clean"],
        ],
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        },
      },
      formats: [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "video",
      ],
      listingSlug: "DEFAULT",
      listingId: null,
      propertyId: null,
      listingTitle: null,
      propertyName: null,
      listingFullAddress: null,
      homeType: "DEFAULT",
      listingSize: null,
      noOfBeds: null,
      noOfBaths: null,
      listingPrice: null,
      listingDescription: "as",
      newListingDescription: "",
      isOffPlan: "NO",
      agent: "DEFAULT",
      quillEditor: null,
      images: [],
      buttonText: "UPDATE",
      propertyNameListOpened: false,
      filteredProperties: [],
      tag: null,
    };
  },
  components: {
    // QuillEditor,
  },
  computed: {
    ...mapState(["listings", "properties", "agents"]),
  },
  watch: {
    propertyName() {
      if (this.propertyName) {
        this.filteredProperties = this.properties.filter((i) =>
          i.name
            .trim()
            .toLowerCase()
            .includes(this.propertyName.trim().toLowerCase())
        );
      } else {
        this.filteredProperties = this.properties;
      }
    },
    properties() {
      this.filteredProperties = this.properties;
    },
  },
  mounted() {
    this.filteredProperties = this.properties;
  },
  methods: {
    async fetchImageBlob(imageUrl) {
      // Construct the URL for the backend endpoint with the image URL as a query parameter
      const backendUrl = `http://localhost:5000/fetch-image/${encodeURIComponent(
        imageUrl
      )}`;

      // Fetch the image from the backend
      const response = await fetch(backendUrl);

      // Check if the response is OK
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Convert the response to a blob
      const blob = await response.blob();
      return blob;
    },
    async compress() {
      let array = Object.keys(this.json);
      for (let key in array) {
        let images = this.json[array[key]];
        for (let i = 0; i < images.length; i++) {
          let imageUrl = images[i];

          const blob = await this.fetchImageBlob(imageUrl); // Fetch the image from the URL
          // const blob = await response.blob(); // Convert the image to a blob
          const fileName = imageUrl.split("/").pop(); // Extract the file name from the URL
          const storageRef = ref(storage, fileName); // Create a reference to the storage location

          await uploadBytes(storageRef, blob); // Upload the blob to the storage location
          const uploadedImageUrl = await getDownloadURL(storageRef);
          images[i] = uploadedImageUrl;
        }
      }

      // this.listings.map(async (listing, i) => {
      // const timestamp = Date.now();
      // const compressedFilePath = path.join(__dirname, `${timestamp}.png`);

      // ***************
      //     const response = await fetch(imageUrl); // Fetch the image from the URL
      // const blob = await response.blob(); // Convert the image to a blob
      // const fileName = imageUrl.split('/').pop(); // Extract the file name from the URL
      // const storageRef = ref(storage, fileName); // Create a reference to the storage location

      // await uploadBytes(storageRef, blob); // Upload the blob to the storage location
      // const uploadedImageUrl = await getDownloadURL(storageRef); // Get the download URL of the uploaded image

      // this.images.push(uploadedImageUrl);

      //****************/
    },
    updateAmmenities(item) {
      this.ammenities.map((i) => {
        if (i.name == item.name) {
          i.value = !i.value;
        }
      });
    },
    quillEditorReady(editor) {
      this.quillEditor = editor;
    },
    removeImage(i) {
      this.images.splice(i, 1);
    },
    openListingUrl(listing) {
      if (listing && listing.propertyName && listing.title && listing.address) {
        const propertyName = listing.propertyName
          .trim()
          .replaceAll(" ", "-")
          .replaceAll(",", "")
          .replaceAll(".", "")
          .toLowerCase();
        const listingName = listing.title
          .trim()
          .replaceAll(" ", "-")
          .replaceAll(",", "")
          .replaceAll(".", "")
          .toLowerCase()
          .trim();
        const address = listing.address
          .trim()
          .replaceAll(" ", "-")
          .replaceAll(",", "")
          .replaceAll(".", "")
          .toLowerCase()
          .trim();

        window.open(
          `https://tomorrowluxuryproperty.com/listing/${address}/${propertyName}/${listingName}`
        );
      } else {
        console.log("No listing found");
      }
    },
    openListingModal(listing) {
      console.log(listing);
      this.buttonText = "UPDATE";

      this.listingId = listing._id;
      this.listingSlug = listing.slug;
      this.listingTitle = listing.title;
      this.propertyName = listing.propertyName;
      this.listingFullAddress = listing.address;
      this.homeType = listing.homeType;
      this.listingSize = listing.sqFt;
      this.noOfBeds = listing.bed;
      this.noOfBaths = listing.bath;
      this.listingPrice = listing.price;
      this.listingDescription = listing.description;
      this.isOffPlan = listing.isOffPlan ? "YES" : "NO";

      this.images = listing.images;
      this.agent = listing.agent._id;

      this.tag = listing.tag;

      if (listing.amenities)
        listing.amenities.map((i) => {
          this.ammenities.map((j) => {
            if (i == j.name) {
              j.value = true;
            }
          });
        });

      if (listing.details)
        this.details = Object.keys(listing.details).map((key) => {
          return {
            name: key,
            value: listing.details[key],
          };
        });

      if (listing.units)
        this.units = Object.keys(listing.units).map((key) => {
          return {
            name: key,
            sqFt: listing.units[key]["sqFt"],
            price: listing.units[key]["price"],
          };
        });

      this.paymentPlans = listing.paymentPlans;

      // this.paymentPlans = Object.keys(listing.paymentPlans).map((key) => {
      //   return {
      //     name: key,
      //     value: listing.paymentPlans[key],
      //   };
      // });

      this.isModalOpen = true;
      console.log("this.properties: ", this.properties);
      this.filteredProperties = this.properties;

      // const _this = this;

      // setTimeout(() => {
      //   // see how to use at the end of the script
      //   const domParser = new DOMParser();
      //   const dataList = {
      //     el: document.querySelector(".data-list"),
      //     listEl: document.querySelector(".option-list"),
      //     arrow: document.querySelector(".searchable-list>svg"),
      //     currentValue: null,
      //     listOpened: false,
      //     optionTemplate: `
      //   <li
      // class='data-option z-[999999999999999] select-none break-words inline-block text-sm text-gray-500 bg-gray-100 odd:bg-gray-200 hover:bg-gray-300 hover:text-gray-700 transition-all duration-200 font-bold p-3 cursor-pointer max-w-full '>
      // 	[[REPLACEMENT]]
      //   </li>
      //   `,
      //     optionElements: [],
      //     options: [],
      //     find(str) {
      //       for (let i = 0; i < dataList.options.length; i++) {
      //         const option = dataList.options[i];
      //         if (!option.toLowerCase().includes(str.toLowerCase())) {
      //           dataList.optionElements[i].classList.remove("block");
      //           dataList.optionElements[i].classList.add("hidden");
      //         } else {
      //           dataList.optionElements[i].classList.remove("hidden");
      //           dataList.optionElements[i].classList.add("block");
      //         }
      //       }
      //     },
      //     remove(value) {
      //       const foundIndex = dataList.options.findIndex((v) => v === value);
      //       if (foundIndex !== -1) {
      //         dataList.listEl.removeChild(dataList.optionElements[foundIndex]);
      //         dataList.optionElements.splice(foundIndex, 1);
      //         dataList.options.splice(value, 1);
      //       }
      //     },
      //     append(value) {
      //       if (
      //         !value ||
      //         typeof value === "object" ||
      //         typeof value === "symbol" ||
      //         typeof value === "function"
      //       )
      //         return;
      //       value = value.toString().trim();
      //       if (value.length === 0) return;
      //       if (dataList.options.includes(value)) return;

      //       const html = dataList.optionTemplate.replace(
      //         "[[REPLACEMENT]]",
      //         value
      //       );
      //       const targetEle = domParser
      //         .parseFromString(html, "text/html")
      //         .querySelector("li");
      //       targetEle.innerHTML = targetEle.innerHTML.trim();
      //       dataList.listEl.appendChild(targetEle);
      //       dataList.optionElements.push(targetEle);
      //       dataList.options.push(value);

      //       if (!dataList.currentValue) dataList.setValue(value);

      //       targetEle.onmousedown = (e) => {
      //         dataList.optionElements.forEach((el, index) => {
      //           if (e.target === el) {
      //             dataList.setValue(dataList.options[index]);
      //             dataList.hideList();
      //             return;
      //           }
      //         });
      //       };
      //     },
      //     setValue(value) {
      //       dataList.el.value = value;
      //       dataList.currentValue = value;
      //     },
      //     showList() {
      //       dataList.listOpened = true;
      //       dataList.listEl.classList.add("opacity-100");
      //       dataList.listEl.classList.add("scale-100");
      //       dataList.arrow.classList.add("rotate-0");
      //       dataList.listEl.classList.remove("hidden");
      //       dataList.listEl.classList.add("flex");
      //     },
      //     hideList() {
      //       dataList.listOpened = false;
      //       dataList.listEl.classList.remove("opacity-100");
      //       dataList.listEl.classList.remove("scale-100");
      //       dataList.arrow.classList.remove("rotate-0");
      //       dataList.listEl.classList.remove("flex");
      //       dataList.listEl.classList.add("hidden");
      //     },
      //     init() {
      //       dataList.arrow.onclick = () => {
      //         dataList.listOpened ? dataList.hideList() : dataList.showList();
      //       };
      //       dataList.el.oninput = (e) => {
      //         dataList.find(e.target.value);
      //       };
      //       dataList.el.onclick = () => {
      //         dataList.showList();
      //         for (let el of dataList.optionElements) {
      //           el.classList.remove("hidden");
      //         }
      //       };
      //       dataList.el.onblur = () => {
      //         dataList.hideList();
      //         dataList.setValue(dataList.currentValue);
      //       };
      //     },
      //   };

      //   // how to use
      //   dataList.init();
      //   // add items
      //   const properties = _this.properties.length
      //     ? this.properties.map((p) => p.name)
      //     : [];
      //   properties.forEach((v) => dataList.append(v));

      //   // remove item
      //   // dataList.remove("Peach");

      //   // get selected value
      //   // dataList.currentvalue;
      // }, 500);
    },
    resetPopupModal() {
      this.isModalOpen = true;
      this.buttonText = "CREATE";

      this.listingSlug = null;
      this.listingId = null;
      this.listingTitle = null;
      this.propertyName = null;
      this.listingFullAddress = null;
      this.homeType = "DEFAULT";
      this.listingSize = null;
      this.noOfBeds = null;
      this.noOfBaths = null;
      this.listingPrice = null;
      this.listingDescription = "";
      this.newListingDescription = "";
      this.isOffPlan = "NO";
      this.agent = "DEFAULT";
      this.images = [];
      this.tag = null;

      this.ammenities.map((i) => {
        i.value = false;
      });

      this.details.map((i) => {
        i.value = "";
      });

      this.units.map((i) => {
        i.sqFt = "";
        i.price = "";
      });

      Object.keys(this.paymentPlans).map((i) => {
        this.paymentPlans[`${i}`] = "";
      });
    },
    async createListing() {
      console.log(this.quillEditor.root.innerHTML);
      this.listingSlug = String(parseInt(Date.now()));
      if (
        this.listingTitle &&
        this.propertyName &&
        this.listingFullAddress &&
        this.homeType != "DEFAULT" &&
        this.listingSize &&
        this.noOfBeds &&
        this.noOfBaths &&
        this.listingPrice &&
        this.isOffPlan &&
        this.agent != "DEFAULT"
      ) {
        const listing = {
          slug: this.listingSlug?.toLowerCase(),
          tag: this.tag,
          title: this.listingTitle,
          propertyName: this.propertyName,
          address: this.listingFullAddress,
          homeType: this.homeType,
          sqFt: this.listingSize,
          bed: this.noOfBeds,
          bath: this.noOfBaths,
          price: this.listingPrice,
          description: this.quillEditor.root.innerHTML,
          isOffPlan: this.isOffPlan == "YES" ? true : false,
          amenities: this.ammenities.filter((i) => i.value).map((i) => i.name),
          details: this.details.reduce((obj, item) => {
            obj[item.name] = item.value;
            return obj;
          }, {}),
          units: this.units.reduce((obj, item) => {
            obj[item.name] = {
              sqFt: item.sqFt,
              price: item.price,
            };
            return obj;
          }, {}),
          paymentPlans: this.paymentPlans,
          agent: this.agents.filter((agent) => agent._id == this.agent)[0],
          images: this.images,
        };
        await this.$store.dispatch("createListing", {
          listing,
        });
        this.isModalOpen = false;
      } else {
        this.$store.commit("SET_TOASTER_MSG", {
          type: "error",
          message: "Please make sure all the details are correct.",
        });
      }
    },
    async updateListing() {
      if (
        this.listingSlug &&
        this.listingId &&
        this.listingTitle &&
        this.propertyName &&
        this.listingFullAddress &&
        this.homeType != "DEFAULT" &&
        this.listingSize &&
        this.noOfBeds &&
        this.noOfBaths &&
        this.listingPrice &&
        this.listingDescription &&
        this.isOffPlan &&
        this.agent != "DEFAULT"
      ) {
        const listing = {
          slug: this.listingSlug?.toLowerCase(),
          tag: this.tag,
          title: this.listingTitle,
          propertyName: this.propertyName,
          address: this.listingFullAddress,
          homeType: this.homeType,
          sqFt: this.listingSize,
          bed: this.noOfBeds,
          bath: this.noOfBaths,
          price: this.listingPrice,
          description: this.quillEditor.root.innerHTML,
          isOffPlan: this.isOffPlan == "YES" ? true : false,
          amenities: this.ammenities.filter((i) => i.value).map((i) => i.name),
          details: this.details.reduce((obj, item) => {
            obj[item.name] = item.value;
            return obj;
          }, {}),
          units: this.units.reduce((obj, item) => {
            obj[item.name] = {
              sqFt: item.sqFt,
              price: item.price,
            };
            return obj;
          }, {}),
          paymentPlans: this.paymentPlans,
          agent: this.agents.filter((agent) => agent._id == this.agent)[0],
          images: this.images,
        };
        await this.$store.dispatch("updateListing", {
          id: this.listingId,
          listing,
        });
        this.isModalOpen = false;
      } else {
        this.$store.commit("SET_TOASTER_MSG", {
          type: "error",
          message: "Please make sure all the details are correct.",
        });
      }
    },
    async deleteListing(listing) {
      const status = confirm("Are you sure? You want to delete this listing?");
      if (status) {
        await this.$store.dispatch("deleteListing", {
          id: listing._id,
        });
      }
    },
    async handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const storageRef = ref(storage, file.name); // Create a reference to the storage location
        await uploadBytes(storageRef, file); // Upload the file to the storage location
        const imageUrl = await getDownloadURL(storageRef); // G

        this.images.push(imageUrl);
      }
    },
    propertyNameArrowClicked() {
      this.propertyNameListOpened = true;
    },
    selectPropertyName(property) {
      this.propertyName = property.name;
      this.listingFullAddress = property.location;
      this.propertyId = property._id;
      this.propertyNameListOpened = false;
    },
    propertyNameBlur() {
      setTimeout(() => {
        this.propertyNameListOpened = false;
      }, 200);
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
  box-shadow: 4px 4px 30px hsl(0, 0%, 0%);
  background: rgb(0, 0, 0);
  color: #e3e3e3;
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
  color: #e3e3e3;
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
  color: #e3e3e3;
  border: none;
}

.input-file-footer svg {
  height: 100%;
  fill: royalblue;
  background-color: rgb(70, 66, 66);
  border-radius: 50%;
  padding: 2px;
  cursor: pointer;
  box-shadow: 0 2px 30px rgb(0, 0, 0);
}

.input-file-footer p {
  flex: 1;
  text-align: center;
}
</style>
