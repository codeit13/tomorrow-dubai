<template>
  <nav
    class="flex justify-between items-center py-4 px-4 md:px-28 border-[1px] border-t-0 border-x-0 border-black"
    :class="{
      'text-white bg-black text-white bg-opacity-50 border-[0px] border-white':
        ['/', '/buy', '/sell'].includes(route.path),
    }"
  >
    <div @click="$router.push('/')" class="cursor-pointer">
      <!-- <span
        class="text-sm md:text-xl font-extrabold josefin-slab cursor-pointer"
        :style="{ fontSize: '30px' }"
        >tomorrow.
      </span>
      <span
        class="text-sm md:text-xl cursor-pointer josefin-slab"
        :style="{ fontSize: '16px' }"
      >
        Luxury Property
      </span> -->
      <!--  -->
      <img
        class="h-12 md:h-14"
        :src="
          ['/', '/buy', '/sell'].includes(route.path)
            ? '/assets/images/logo-dark.png'
            : '/assets/images/logo-light.png'
        "
        alt=""
      />
    </div>

    <Popover>
      <PopoverTrigger as-child>
        <div class="space-y-2 cursor-pointer block md:hidden">
          <div
            class="w-8 h-0.5 bg-black"
            :class="{
              'bg-white': ['/', '/buy', '/sell'].includes($route.path),
            }"
          ></div>
          <div
            class="w-8 h-0.5 bg-black"
            :class="{
              'bg-white': ['/', '/buy', '/sell'].includes($route.path),
            }"
          ></div>
          <div
            class="w-8 h-0.5 bg-black"
            :class="{
              'bg-white': ['/', '/buy', '/sell'].includes($route.path),
            }"
          ></div>
        </div>
      </PopoverTrigger>
      <PopoverContent class="w-100 rounded-sm mt-4 px-8">
        <div class="flex flex-col space-y-4 md:space-x-12">
          <NuxtLink
            v-for="(item, i) in menuItems.filter((item) => !item.isDropDown)"
            :key="i"
            :to="item.route"
            class="text-white-600 cursor-pointer"
            :class="{
              'underline underline-offset-2': $route.path === item.route,
            }"
          >
            {{ item.name }}
          </NuxtLink>
          <hr />
          <div
            v-for="(item, i) in menuItems.filter((item) => item.isDropDown)"
            :key="i"
            @click="$router.push(item.route)"
            class="flex flex-col space-y-4 md:space-x-12"
          >
            <NuxtLink
              v-for="(dropDownItem, index) in item.dropDownItems"
              :key="index"
              :to="dropDownItem.route"
              class="text-white-600 cursor-pointer"
            >
              {{ dropDownItem.name }}
            </NuxtLink>
          </div>
        </div>
      </PopoverContent>
    </Popover>

    <div class="space-x-4 md:space-x-12 hidden md:flex">
      <NuxtLink
        v-for="(item, i) in menuItems.filter((item) => !item.isDropDown)"
        :key="i"
        :to="item.route"
        class="text-white-600 cursor-pointer transition-all duration-200 hover:underline hover:underline-offset-2"
        :class="{
          'underline underline-offset-2': item.underlineRoutes.includes(
            route.path
          ),
        }"
      >
        {{ item.name }}
      </NuxtLink>

      <div
        class="relative"
        v-for="(item, i) in menuItems.filter((item) => item.isDropDown)"
        :key="i"
        :class="{
          'underline underline-offset-2': item.underlineRoutes.includes(
            route.path
          ),
        }"
      >
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          class="inline-flex items-center transition-all duration-200 hover:underline hover:underline-offset-2"
          type="button"
          @click="agentDropDownOpened = !agentDropDownOpened"
        >
          {{ item.name }}
          <svg
            class="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <!-- Dropdown menu -->
        <div
          id="dropdown"
          class="z-10 absolute right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          :class="{
            block: agentDropDownOpened,
            hidden: !agentDropDownOpened,
          }"
        >
          <ul class="py-2 text-black" aria-labelledby="dropdownDefaultButton">
            <li
              @click="agentDropDownOpened = false"
              v-for="(dropDownItem, index) in item.dropDownItems"
              :key="index"
            >
              <NuxtLink
                :to="dropDownItem.route"
                class="cursor-pointer block px-4 py-2"
              >
                {{ dropDownItem.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
export default {
  components: {
    // Popover,
    // PopoverContent,
    // PopoverTrigger,
    // Label,
    // Input,
  },
  data() {
    return {
      route: {},
      menuItems: [
        {
          name: "Buy",
          route: "/buy",
          isDropDown: false,
          underlineRoutes: ["/", "/buy"],
        },
        {
          name: "Sell",
          route: "/sell",
          isDropDown: false,
          underlineRoutes: ["/sell"],
        },
        {
          name: "Off Plan",
          route: "/offplan",
          isDropDown: false,
          underlineRoutes: ["/offplan"],
        },
        {
          name: "Agents",
          route: "/partner",
          isDropDown: true,
          dropDownItems: [
            {
              name: "Find an Agent",
              route: "/agents",
            },
            {
              name: "Join as an Agent",
              route: "/partner",
            },
          ],
          underlineRoutes: ["/partner", "/agents", "/agent"],
        },
      ],
      agentDropDownOpened: false,
    };
  },
  created() {
    const route = useRoute();
    this.route = route;
  },
};
</script>
