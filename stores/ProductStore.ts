import { defineStore } from "pinia"
import { IProduct, IProductPayload, IResponse } from "@/types"
import axios from "axios"

export const useProductStore = defineStore('ProductStore', () => {
    const products = ref<IProduct[]>()
    const isLoading = ref(false)
  
    //get all products
    async function getProducts(){
        isLoading.value = true
        const {data: results } = await axios.get('/products')
        products.value = results['hydra:member']
        isLoading.value = false
    }

    //get a product
    async function getProduct(id: string): Promise<IProduct>{
        return await axios.get(`/products/${id}`)
    }

    //add a product
    async function addProduct(product:IProductPayload) {
        await axios.post('/products', product)
    }

    //update a product
    async function updateProduct(id: string, product: IProductPayload) {
        await axios.put(`/products/${id}`, product)
    }

    //delete a product
    async function deleteProduct(id: string) {
        await axios.delete(`/products/${id}`)
    }

    return { 
        isLoading,
        products, 
        getProducts, 
        getProduct, 
        addProduct, 
        updateProduct, 
        deleteProduct
    }
})