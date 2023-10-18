<template>
  <div>
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 mb-6"> Tuto Symfony 6, API Plateform 3 et Nuxt 3</h1>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <NuxtLink  to="/admin/products" 
              class="px-6 py-2 bg-blue-600 text-white text-lg rounded shadow-md hover:bg-blue-700 flex items-center justify-between">
              Gérer mes produits
            </NuxtLink>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/ProductStore'

const productStore = useProductStore()
onMounted(async() => {
    await productStore.getProducts()
})
</script>

<style>
</style>