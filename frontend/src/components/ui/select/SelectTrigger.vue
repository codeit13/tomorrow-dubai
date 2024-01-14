<script setup>
import { SelectIcon, SelectTrigger } from "radix-vue";
import { ChevronDownIcon } from "@radix-icons/vue";
import { cn } from "@/lib/utils";
import { defineProps } from "vue";

const props = defineProps({
  disabled: { type: Boolean, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: String, required: false, default: "" },
  invalid: { type: Boolean, required: false, default: false },
});
</script>

<template>
  <SelectTrigger
    v-bind="props"
    :class="[
      cn(
        'flex gap-4 justify-between items-center h-9 w-fit border border-black bg-gray-100 px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800  dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-300',
        props.class
      ),
      props.invalid
        ? '!ring-destructive ring-2 placeholder:!text-destructive'
        : '',
    ]"
  >
    <slot />
    <SelectIcon as-child>
      <ChevronDownIcon class="w-4 h-4 opacity-50" />
    </SelectIcon>
  </SelectTrigger>
</template>
