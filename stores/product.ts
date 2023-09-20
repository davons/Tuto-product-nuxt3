import { defineStore } from "pinia"
import { IProduct, IProductPayload, IResponse } from "@/types"
import axios from "axios"

export const useProductStore = defineStore('product', () => {
    const products = ref<IProduct[]>()
    const product = ref<IProduct>()
  
    //get all products
    async function getProducts(): Promise<IResponse<IProduct[]>> {
        const { data:products } = await axios.get('/products')
        products.value = products['hydra:member']
        return products
    }

    //get a product
    async function getProduct(id: string): Promise<IResponse<IProduct>> {
        const { data:product } = await axios.get(`/products/${id}`)
        product.value = product['hydra:member']
        return product
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
        product, 
        getProducts, 
        getProduct, 
        addProduct, 
        updateProduct, 
        deleteProduct
    }
})