<template>
  <nav
    class="flex justify-between items-center py-4 px-6 md:px-24 border-b"
    :class="{ 'text-white bg-black bg-opacity-50': $route.path === '/' }"
  >
    <h1 class="text-xl font-semibold cursor-pointer" @click="$router.push('/')">
      Tomorrow Luxury Property
    </h1>
    <div class="flex space-x-4">
      <a class="text-white-600" href="#"> Buy </a>
      <a class="text-white-600" href="#"> Sell </a>
      <a class="text-white-600" href="#"> Agent </a>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
