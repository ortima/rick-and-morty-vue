<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useFetch } from '@vueuse/core'
import DefaultCard from '@/components/Card/DefaultCard.vue'
import Skeleton from '@/components/ui/skeleton/Skeleton.vue'
import HomeBanner from '@/components/Banner/HomeBanner.vue'
import type { Character, IGetCharactersResponse } from '@/types'

const bannerText = ref('Rick and Morty Vue 3')

// TODO: вынести  логику в отдлеьный комопнент ListCharacters
const { data, isFetching, error, execute } = useFetch('https://rickandmortyapi.com/api/character')
  .get()
  .json<IGetCharactersResponse>()

const characters = ref<Character[]>([])

watchEffect(() => {
  if (data.value) {
    characters.value = data.value.results
  }
})
</script>

<template>
  <div>
    <HomeBanner :bannerText="bannerText" />
    <div class="container py-8 flex flex-col gap-4">
      <h1 class="text-3xl text-center font-bold mt-4">Some random characters</h1>

      <div v-if="isFetching" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        <div v-for="n in 12" :key="n" class="flex justify-center">
          <Skeleton class="w-full h-32 mx-auto md:h-96 lg:h-96" />
        </div>
      </div>

      <div
        v-else-if="characters.length > 0"
        class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4"
      >
        <div v-for="character in characters" :key="character.id" class="flex justify-center">
          <DefaultCard
            :imageSrc="character.image"
            :title="character.name"
            :description="character.species"
            :extraContent="character.status"
            class="w-full h-auto"
          />
        </div>
      </div>

      <div v-else-if="error" class="text-red-500 text-center mt-4">
        <p>Oops, something went wrong: {{ error.message }}</p>
        <button @click="() => execute()" class="px-4 py-2 bg-blue-500 text-white rounded mt-2">
          Retry
        </button>
      </div>
    </div>
  </div>
</template>
