<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-3 sm:px-6 sm:py-3 lg:max-w-7xl lg:px-3">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">Nos produits ({{ productStore.totalItems }})</h2>
            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
               <ProductItem 
                  v-for="product in productStore.products"
                 :key="product.id"
                 :product="product"
               />
               <p v-if="!productStore.totalItems" class="text-gray-500 text-sm">Pas de produit</p>
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