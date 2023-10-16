<template>
    <nav class="border-gray-200 px-2 mb-10 mt-3 shadow p-3">
        <div class="container mx-auto flex flex-wrap items-center justify-between">
            <NuxtLink to="/admin/products">
                <span class="self-center text-lg font-semibold whitespace-nowrap">Administraton</span>
            </NuxtLink>
            <div> 
                <NuxtLink  class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Ajouter un produit
                </NuxtLink>
            </div>
        </div>
    </nav> 
</template>