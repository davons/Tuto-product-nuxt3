<template>
  <div class="max-w-2xl mx-auto">
      <p class="mt-5">
        Tuto Nuxt et Symfony avec API platforme
      </p>
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