<template>
  <nav
    class="flex justify-between items-center py-4 px-4 md:px-28 border-[1px] border-t-0 border-x-0 border-black"
    :class="{
      'text-white bg-black bg-opacity-50 border-white': [
        '/',
        '/buy',
        '/sell',
      ].includes($route.path),
    }"
  >
    <div @click="$router.push('/')">
      <span
        class="text-sm md:text-xl font-extrabold josefin-slab cursor-pointer"
        :style="{ fontSize: '30px' }"
        >Tomorrow.
      </span>
      <span
        class="text-sm md:text-xl cursor-pointer josefin-slab"
        :style="{ fontSize: '16px' }"
      >
        Luxury Property
      </span>
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
          <div
            v-for="(item, i) in menuItems"
            :key="i"
            @click="$router.push(item.route)"
            class="text-white-600 cursor-pointer"
            :class="{
              'underline underline-offset-2': $route.path === item.route,
            }"
          >
            {{ item.name }}
          </div>
        </div>
      </PopoverContent>
    </Popover>

    <div class="space-x-4 md:space-x-12 hidden md:flex">
      <div
        v-for="(item, i) in menuItems"
        :key="i"
        @click="$router.push(item.route)"
        class="text-white-600 cursor-pointer"
        :class="{
          'underline underline-offset-2': $route.path === item.route,
        }"
      >
        {{ item.name }}
      </div>
    </div>
  </nav>
</template>

<script>
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
export default {
  components: {
    Popover,
    PopoverContent,
    PopoverTrigger,
    // Label,
    // Input,
  },
  data() {
    return {
      menuItems: [
        {
          name: "Buy",
          route: "/buy",
        },
        {
          name: "Sell",
          route: "/sell",
        },
        {
          name: "Off Plan",
          route: "/offplan",
        },
        {
          name: "Agents",
          route: "/partner",
        },
      ],
    };
  },
};
</script>
