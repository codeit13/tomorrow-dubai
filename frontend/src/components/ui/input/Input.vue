<script setup>
import { useAttrs } from "vue";
import { useVModel } from "@vueuse/core";
import { cn } from "@/lib/utils";
import { defineProps, defineEmits, defineOptions } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  defaultValue: { type: [String, Number], required: false },
  modelValue: { type: [String, Number], required: false },
});

const emits = defineEmits(["update:modelValue"]);

const { class: className, ...rest } = useAttrs();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});
</script>

<template>
  <input
    v-model="modelValue"
    :class="
      cn(
        'flex h-9 w-full border border-[#141414] bg-gray-100 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300',
        className ?? ''
      )
    "
    v-bind="rest"
  />
</template>
