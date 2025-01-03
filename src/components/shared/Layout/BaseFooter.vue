<script setup lang="ts">
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <footer class="text-center">
    <p>&copy; {{ currentYear }} Rick and Morty Fan App. All rights reserved.</p>
  </footer>
</template>
