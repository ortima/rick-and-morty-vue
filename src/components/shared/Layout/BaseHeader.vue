<script setup lang="ts">
import IconCommunity from '@/components/icons/IconCommunity.vue'
import ThemeToggle from '../theme/theme-toggle.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="flex justify-between">
    <div class="flex items-center">
      <router-link to="/">
        <IconCommunity :height="45" :width="45" class="fill-primary" />
      </router-link>
    </div>

    <div class="flex items-center gap-4">
      <div v-for="route in router.options.routes" :key="route.name">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </div>

      <ThemeToggle />
    </div>
  </div>
</template>
