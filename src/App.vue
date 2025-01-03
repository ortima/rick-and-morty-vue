<script setup lang="ts">
import BaseLayout from '@/components/shared/Layout/BaseLayout.vue'
import BaseHeader from '@/components/shared/Layout/BaseHeader.vue'
import BaseFooter from '@/components/shared/Layout/BaseFooter.vue'
</script>

<template>
  <BaseLayout>
    <template #header>
      <BaseHeader />
    </template>

    <RouterView />

    <template #footer>
      <BaseFooter />
    </template>
  </BaseLayout>
</template>
