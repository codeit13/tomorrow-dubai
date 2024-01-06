<script setup>
import { DialogTitle } from "radix-vue";
import { cn } from "@/lib/utils";
import { defineProps } from "vue";

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: String, required: false },
});
</script>

<template>
  <DialogTitle
    v-bind="props"
    :class="
      cn(
        'text-lg text-zinc-950 font-semibold leading-none tracking-tight dark:text-zinc-50',
        props.class
      )
    "
  >
    <slot />
  </DialogTitle>
</template>
