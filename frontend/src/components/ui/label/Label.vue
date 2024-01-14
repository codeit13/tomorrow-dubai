<script setup>
import { Label } from "radix-vue";
import { cn } from "@/lib/utils";

import { defineProps } from "vue";

const props = defineProps({
  for: { type: String, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: String, required: false },
});
</script>

<template>
  <Label
    v-bind="props"
    :class="
      cn(
        'block text-sm tracking-tight font-medium text-zinc-950 text-left dark:text-zinc-50',
        props.class
      )
    "
  >
    <slot />
  </Label>
</template>
