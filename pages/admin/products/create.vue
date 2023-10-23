<template>
    <div class="container mx-auto px-4 max-w-2xl text-center py-3 lg:py-3">
        <NuxtLink to="/admin/products" class="flex items-center text-blue-500">
            <IconArrowLeft class="mr-1 -ml-1"/>
            Retour à la liste
        </NuxtLink>
        <AdminAlert :message="messageAlert" :display="displayAlert"/>
        <AdminProductForm @create-product="create"/>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

definePageMeta({
  layout: "admin",
});

const productStore = useProductStore()
const displayAlert = ref(false)
const messageAlert = ref()

async function create(payload: any){
    await productStore.create(payload);
    const { product } = storeToRefs(productStore);
    if (product.value) {
        displayAlert.value = true
        messageAlert.value = `Le ${product.value['@id']} a été créé.`
    }
}
</script>

<style>
</style>