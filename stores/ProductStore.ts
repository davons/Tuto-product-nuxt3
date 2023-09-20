import { defineStore } from "pinia"
import { IProduct, IProductPayload, IResponse } from "@/types"
import axios from "axios"

export const useProductStore = defineStore('ProductStore', () => {
    const products = ref<IProduct[]>()
  
    //get all products
    async function getProducts(){
        const {data: results } = await axios.get('/products')
        products.value = results['hydra:member']
        return results;
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
        products, 
        getProducts, 
        getProduct, 
        addProduct, 
        updateProduct, 
        deleteProduct
    }
})