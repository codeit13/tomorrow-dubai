<script setup>
import { ComboboxRoot, useForwardPropsEmits } from "radix-vue";
import { cn } from "@/lib/utils";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: { type: null, required: false },
  defaultValue: { type: null, required: false },
  open: { type: Boolean, required: false },
  defaultOpen: { type: Boolean, required: false },
  searchTerm: { type: String, required: false },
  multiple: { type: Boolean, required: false },
  disabled: { type: Boolean, required: false },
  name: { type: String, required: false },
  dir: { type: String, required: false },
  filterFunction: { type: Function, required: false },
  displayValue: { type: Function, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
});
const emits = defineEmits([
  "update:modelValue",
  "update:open",
  "update:searchTerm",
]);

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <ComboboxRoot
    v-bind="forwarded"
    :open="true"
    :class="
      cn(
        'flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50',
        $attrs.class ?? ''
      )
    "
  >
    <slot />
  </ComboboxRoot>
</template>
