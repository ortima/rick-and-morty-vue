<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = withDefaults(
  defineProps<{
    bannerText?: string
    containerClass?: string
    backgroundClass?: string
    textClass?: string
  }>(),
  {
    bannerText: 'Rick and Morty Vue',
    containerClass:
      'relative text-center bg-primary text-secondary h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] flex items-center justify-center px-4 overflow-hidden',
    backgroundClass:
      'absolute inset-0 flex items-center justify-center text-[200px] sm:text-[300px] lg:text-[400px] font-bold dark:text-green-950 text-green-300 opacity-10',
    textClass: 'relative text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black',
  },
)
</script>

<template>
  <div :class="cn(props.containerClass)">
    <div :class="cn(props.backgroundClass)" aria-hidden="true">V</div>

    <h1 :class="cn(props.textClass)">
      {{ props.bannerText }}
    </h1>
  </div>
</template>
