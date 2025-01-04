<script setup lang="ts">
const props = defineProps<{
  imageSrc: string
  title: string
  description?: string
  extraContent?: string
}>()
</script>

<template>
  <div class="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
    <img :src="props.imageSrc" alt="Image" class="w-full h-72 object-cover object-center" />

    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ props.title }}</div>

      <p v-if="props.description" class="text-gray-700 text-base">
        {{ props.description }}
      </p>

      <p v-if="props.extraContent" class="text-sm text-gray-500 mt-2">
        {{ props.extraContent }}
      </p>
    </div>

    <div class="px-6 pt-4 pb-2">
      <button
        class="inline-block bg-blue-500 text-white text-sm py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
      >
        Learn More
      </button>
    </div>
  </div>
</template>
