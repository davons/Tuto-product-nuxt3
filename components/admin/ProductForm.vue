<template>
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
            <div class="sm:col-span-2">
                <BaseInput 
                    v-bind="name"
                    name="name"
                    label="Nom"
                    type="text"
                    id="name"
                    placeholder="Nom du produit"
                />
            </div>
            <div>
                <BaseInput 
                    v-bind="brand"
                    name="brand"
                    label="Marque"
                    type="text"
                    id="brand"
                    placeholder="Marque du produit"
                />
            </div>
            <div>
                <BaseInput 
                    v-bind="price"
                    name="price"
                    label="Prix"
                    type="number"
                    id="price"
                    placeholder="Prix du produit"
                />
            </div>
            <div class="sm:col-span-2">
                <BaseTextarea 
                    v-bind="description"
                    name="description"
                    id="description"
                    rows="5"
                    placeholder="Description du produit"
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

</template>

<script>
</script>

<style>
</style>