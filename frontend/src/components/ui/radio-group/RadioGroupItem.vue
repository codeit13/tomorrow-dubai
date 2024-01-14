<script setup>
import { RadioGroupIndicator, RadioGroupItem } from "radix-vue";
import { CheckIcon } from "@radix-icons/vue";
import { cn } from "@/lib/utils";

import { defineProps } from "vue";

const props = defineProps({
  id: { type: String, required: false },
  value: { type: String, required: false },
  disabled: { type: Boolean, required: false },
  required: { type: Boolean, required: false },
  name: { type: String, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: String, required: false },
});
</script>

<template>
  <RadioGroupItem
    v-bind="props"
    :class="
      cn(
        'aspect-square h-4 w-4 rounded-full border border-zinc-900 text-zinc-900 shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-50 dark:text-zinc-50 dark:focus-visible:ring-zinc-300',
        props.class
      )
    "
  >
    <RadioGroupIndicator
      :class="cn('flex items-center justify-center', props.class)"
    >
      <CheckIcon class="h-3.5 w-3.5 fill-primary" />
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
