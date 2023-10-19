<template>
    <div class="group relative">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img :src="product?.thumbnail" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
        </div>
        <div class="mt-4 flex justify-between">
            <div>
                <h3 class="text-sm text-gray-700">
                <NuxtLink :to="`products/${product?.id}`" class=" group-hover:text-blue-700 mb-1 text-gray-800 font-semibold">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    {{ product?.name }}
                </NuxtLink>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ product?.brand }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">${{ product?.price }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IProduct } from "@/types/IProduct";

defineProps({
  product: Object as PropType<IProduct>
})
</script>

<style>

</style>