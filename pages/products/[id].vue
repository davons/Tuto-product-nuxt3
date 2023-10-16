<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
   <div class="lg:flex -mx-6">
      <div class="mb-8 px-6 md:mb-0 lg:w-1/2">
         <div class="w-full overflow-hidden relative bg-gainsboro rounded-lg">
            <img alt="Snapback" 
                 title="Snapback" loading="lazy" width="800" height="800" decoding="async" data-nimg="1" 
                 :src="product?.thumbnail" 
                 style="color: transparent;"
            >
        </div>
      </div>
      <div class="px-6 md:py-3 lg:w-1/2">
         <h1 class="font-bold text-3xl md:text-6xl mb-3 text-primary leading-tight">{{ product.name }}</h1>
         <div class="mb-6">
            <p class="font-semibold text-2xl text-slategray">£{{ product.price }}</p>
         </div>
         <div class="mb-6">
            <p class="leading-loose text-lightgray">
                {{ product.description }}
            </p>
         </div>
         <div class="md:flex md:flex-wrap -mx-3">
            <div class="md:w-1/4 px-3 mb-6">
               <label class="block text-sm font-bold tracking-widest uppercase mb-2 text-slategray" for="quantity">Quantité</label>
               <div class="relative">
                  <select id="quantity" name="quantity" class="block appearance-none w-full bg-gainsboro border-2 border-gainsboro focus:border-slategray px-4 py-3 pr-8 focus:outline-none focus:bg-white text-slategray focus:text-slategray rounded-lg">
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 text-gray-400" aria-hidden="true">
                        <path clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fill-rule="evenodd"></path>
                     </svg>
                  </div>
               </div>
            </div>
         </div>
         <button class="bg-indigo-600 hover:bg-gray-700 px-4 py-3 rounded-lg text-white text-sm font-bold tracking-widest uppercase focus:outline-none">
            Ajouter au panier
         </button>
         <div class="pt-6">
            <div class="border-b-2 pb-4">
               <button class="text-lg text-left w-full flex justify-between items-start text-gray-400">
                  <span class="font-medium text-gray-900">Reviews </span>
                  <span class="ml-6 h-7 flex items-center">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6 transform -rotate-180" aria-hidden="true">
                        <path clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fill-rule="evenodd"></path>
                     </svg>
                  </span>
               </button>
            </div>
            <div class="pt-4">loading</div>
         </div>
      </div>
   </div>
</div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/ProductStore'

const { id } = useRoute().params
const uuid = computed(() => useRoute().params.id as string)
const productStore = useProductStore()
const {data: product} = await productStore.getProduct(uuid.value)
</script>

<style>

</style>