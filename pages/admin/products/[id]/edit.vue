<template>
    <div class="container mx-auto px-4 max-w-2xl text-center py-3 lg:py-3">
        <NuxtLink to="/admin/products" class="flex items-center text-blue-500">
            <IconArrowLeft class="mr-1 -ml-1"/>
            Retour à la liste
        </NuxtLink>
        <AdminAlert :message="messageAlert" :display="displayAlert" :variant="variant"/>
        <AdminProductForm @update-product="update" :isEditing="true" :item="item"/>
        <AdminModal :isShowModal="isShowModal" @close="closeModal"/>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { IProduct } from "@/types/IProduct";

definePageMeta({
  layout: "admin",
});

const route = useRoute()
const productStore = useProductStore()
const id = computed(() => route.params.id as string)
const item = await productStore.getProduct(id.value)
const { errorMessage } = storeToRefs(productStore)

const displayAlert = ref<boolean>(false)
const messageAlert = ref<string>()
const isShowModal = ref<boolean>(false)
const variant = ref<string>()

async function update(payload: any){
   const item = await productStore.update(id.value, payload);

    if (item){
        displayAlert.value = true
        messageAlert.value = `Le ${item['@id']} a été modifié`
        variant.value = 'bg-green-100 text-green-700'
    }

    if (errorMessage.value) {
        displayAlert.value = true
        messageAlert.value = errorMessage.value
        variant.value = 'bg-red-100 text-red-700'
    }
}

function closeModal () {
  isShowModal.value = false
}

function showModal () {
  isShowModal.value = true
}
</script>

<style>
</style>