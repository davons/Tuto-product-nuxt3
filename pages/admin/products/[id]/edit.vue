<template>
    <div class="container mx-auto px-4 max-w-2xl text-center py-3 lg:py-3">
        <NuxtLink to="/admin/products" class="flex items-center text-blue-500">
            <IconArrowLeft class="mr-1 -ml-1"/>
            Retour à la liste
        </NuxtLink>
        <AdminAlert :message="messageAlert" :display="displayAlert"/>
        <AdminProductForm @update-product="update" :isEditing="true" :item="product"/>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

definePageMeta({
  layout: "admin",
});

const route = useRoute()
const productStore = useProductStore()
const id = computed(() => route.params.id as string)
await productStore.getProduct(id.value)
const { product } = storeToRefs(productStore);
const displayAlert = ref(false)
const messageAlert = ref()

function update(payload: any){
    productStore.update(id.value, payload);
    if (product.value){
        displayAlert.value = true
        messageAlert.value = `Le ${product.value['@id']} a été modifié`
    }
}
</script>

<style>
</style>