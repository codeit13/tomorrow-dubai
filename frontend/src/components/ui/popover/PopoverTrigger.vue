<script setup>
import { PopoverTrigger } from "radix-vue";

import { defineProps } from "vue";

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
});
</script>

<template>
  <PopoverTrigger v-bind="props" class="">
    <slot />
  </PopoverTrigger>
</template>
