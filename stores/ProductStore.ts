import { defineStore } from "pinia"
import type { IProduct } from "@/types/IProduct"
import axios from "axios"

export const useProductStore = defineStore('ProductStore', () => {
    const products = ref<IProduct[]>()
    const product  = ref<IProduct>()
    const error = ref()
    const isLoading = ref(false)
    const isEdited = ref(false)
    const isCreated = ref(false)
    const totalItems = ref(0)

  
    //get all products
    async function getProducts(){
        isLoading.value = true
        await axios.get('/products')
        .then(function (response) {
            products.value = response.data['hydra:member']
            totalItems.value = response.data['hydra:totalItems']
            isLoading.value = false
        })
        .catch(function (response) {
            error.value = response
            isLoading.value = false
        });
    }

    //get a product
    async function getProduct(id: string){
        await axios.get(`/products/${id}`)
        .then(function (response) {
            product.value = response.data
            isLoading.value = false
        })
        .catch(function (response) {
            error.value = response
            isLoading.value = false
        });
    }

    //create a product
    async function create(payload: IProduct) {
        isLoading.value = true
        await axios.post('/products', payload)
        .then(function (response) {
            product.value = response.data
            isLoading.value = false
            isCreated.value = true
        })
        .catch(function (response) {
            error.value = response
            isLoading.value = false
        });
    }

    //update a product
    async function update(id: string, payload: IProduct) {
         await axios.put(`/products/${id}`, payload)
         .then(function (response) {
             product.value = response.data
             isLoading.value = false
             isEdited.value = true
         })
         .catch(function (response) {
             isLoading.value = false
             error.value = response
         });
    }

    //delete a product
    async function remove(id: string) {
        await axios.delete(`/products/${id}`)
        .then(function (response) {
            isLoading.value = false
        })
        .catch(function (response) {
            isLoading.value = false
            error.value = response
        });
    }

    return { 
        isLoading,
        totalItems,
        products, 
        product,
        error,
        isCreated,
        isEdited,
        getProducts, 
        getProduct, 
        create, 
        update, 
        remove
    }
})