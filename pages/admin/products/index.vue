<template>
    <div class="px-4 mx-auto max-w-screen-xl text-center py-3 lg:py-3">
        <div class="relative overflow-x-auto">
            <div class="flex items-center justify-between mb-3">
                <h1 class="text-3xl my-4">List des produits</h1>
                <NuxtLink
                    to="/admin/products/create"
                    class="px-6 py-2 bg-blue-600 text-white text-lg rounded shadow-md hover:bg-blue-700 flex items-center justify-between"
                >
                    <IconPlus class="mr-1 -ml-1"/>
                    Créer un produit
                </NuxtLink>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" class="px-6 py-3">
                          Nom du produit 
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Description
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Marque
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Price
                      </th>
                      <th colspan="2" scope="col" class="px-6 py-3">
                        Actions
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="product in products" :key="product['@id']"  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {{ product.name }}
                      </th>
                      <td class="px-6 py-4">
                          {{ product.description }}
                      </td>
                      <td class="px-6 py-4">
                          {{ product.brand }}
                      </td>
                      <td class="px-6 py-4">
                          {{ product.price }}
                      </td>
                      <td class="text-sm">
                            <nuxtLink
                                :to="{ name: 'admin-products-id', params: { id: getIdFromIri(product['@id']) } }"
                                class="px-3 py-2 m-2 bg-blue-600 text-white text-xs rounded shadow-md hover:bg-blue-700"
                            >
                                Show
                            </nuxtLink>
                            <nuxtLink
                                :to="{ name: 'admin-products-id-edit', params: { id: getIdFromIri(product['@id']) } }"
                                class="px-3 py-2 bg-green-600 text-white text-xs rounded shadow-md hover:bg-green-700"
                            >
                                Edit
                            </nuxtLink>
                      </td>
                  </tr>
              </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

definePageMeta({
  layout: "admin",
});

const productStore = useProductStore()
await productStore.getProducts()
const { products } = storeToRefs(productStore);
console.log(products.value)

</script>

<style>
</style>