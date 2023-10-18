<template>
    <div class="px-4 mx-auto max-w-screen-xl text-center py-3 lg:py-3">
        
        <div class="relative overflow-x-auto">
            <div class="flex items-center justify-between">
                <h1 class="text-3xl my-4">
                    Créer un produit
                </h1>
            </div>
        </div>

        <NuxtLink to="/admin/products" class="flex items-center text-blue-500">
            <IconArrowLeft class="mr-1 -ml-1"/>
            Retour à la liste
        </NuxtLink>

        <form @submit="onSubmit" class="mt-6">
            <div class="grid gap-4 mb-4 sm:grid-cols-2 text-left">
                <div>
                    <BaseInput 
                        v-bind="name"
                        name="name"
                        label="Nom"
                        type="text"
                        id="name"
                        placeholder="Ex. Casque"
                    />
                </div>
                <div>
                    <BaseInput 
                        v-bind="price"
                        name="price"
                        label="Prix"
                        type="number"
                        id="price"
                        placeholder="20$"
                    />
                </div>
                <div class="sm:col-span-2">
                    <BaseTextarea 
                        v-bind="description"
                        name="description"
                        id="description"
                        rows="5"
                        placeholder="Ajouter une description..."
                    />                  
                </div>
            </div>
            <div class="flex items-center space-x-4">
                <BaseButton 
                    type="submit"
                    variant="btn-primary"
                >
                    Créer un produit
                </BaseButton>
                <BaseButton 
                    type="button" 
                    variant="btn-danger"
                >
                    <IconTrash class="mr-1 -ml-1"/>
                    Supprimer
                </BaseButton>
            </div>
        </form>

    </div>
</template>

<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';

definePageMeta({
  layout: "admin",
});

const { values, errors, defineComponentBinds , handleSubmit } = useForm({
  validationSchema: yup.object({
    name: yup.string().required(),
    price: yup.number().required(),
    description: yup.string().required()
  }),
});

const name = defineComponentBinds('name');
const price = defineComponentBinds('price');
const  description = defineComponentBinds('description');

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
});

</script>

<style>
</style>