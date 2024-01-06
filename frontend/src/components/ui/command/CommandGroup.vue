<script setup>
import { ComboboxGroup, ComboboxLabel } from "radix-vue";
import { cn } from "@/lib/utils";
import { defineProps } from "vue";

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  heading: { type: String, required: false },
});
</script>

<template>
  <ComboboxGroup
    v-bind="props"
    :class="
      cn(
        'overflow-hidden p-1 text-zinc-950 dark:text-zinc-50',
        $attrs.class ?? ''
      )
    "
  >
    <ComboboxLabel
      v-if="heading"
      class="px-2 py-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400"
    >
      {{ heading }}
    </ComboboxLabel>
    <slot />
  </ComboboxGroup>
</template>
