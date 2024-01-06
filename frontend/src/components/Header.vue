<template>
  <nav
    class="flex justify-between items-center py-4 px-6 md:px-24 border-b"
    :class="{
      'text-white bg-black bg-opacity-50': ['/', '/buy'].includes($route.path),
    }"
  >
    <h1 class="text-xl font-semibold cursor-pointer" @click="$router.push('/')">
      Tomorrow Luxury Property
    </h1>
    <div class="flex space-x-4">
      <div
        v-for="(item, i) in menuItems"
        :key="i"
        @click="$router.push(item.route)"
        class="text-white-600 cursor-pointer"
        href="#"
      >
        {{ item.name }}
      </div>
    </div>
  </nav>
</template>

<script>
export default {
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
          name: "Agents",
          route: "/partner",
        },
      ],
    };
  },
};
</script>
