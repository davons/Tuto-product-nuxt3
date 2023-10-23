import { defineStore } from "pinia"
import type { IProduct } from "@/types/IProduct"
import axios from "axios"
import { IHydraView } from "~/types/IResponse"

export const useProductStore = defineStore('ProductStore', () => {
    const products = ref<IProduct[]>()
    const product  = ref<IProduct>()
    const hidraView = ref<IHydraView>()
    const isLoading = ref<boolean>(false)
    const totalItems = ref<number>(0)
    const errorMessage = ref()
  
    //getProducts
    async function getProducts(){
        isLoading.value = true
        try {
            const { data:response } = await axios.get('/products')
            products.value = response['hydra:member']
            totalItems.value = response['hydra:totalItems']
            hidraView.value = response['hydra:view']
            isLoading.value = false
        } catch (error) {
            isLoading.value = false
            errorMessage.value = error
            console.error("Error : ", error);
        }
    }

    //getProduct
    async function getProduct(id: string){
        isLoading.value = true
        try {
            const { data:response } = await axios.get(`/products/${id}`)
            product.value = response
            isLoading.value = false
        } catch (error) {
            isLoading.value = false
            errorMessage.value = error
            console.error("Error : ", error);
        }
    }

    //create
    async function create(payload: IProduct) {
        isLoading.value = true

        try {
            const formData = new FormData();
            formData.append("file", payload.image)

            const { data: mediaObject } = await axios.post('/media_objects', formData,  {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
  
            const { data:response } = await axios.post('/products', { 
                        name: payload.name, 
                        price: payload.price, 
                        description: payload.description, 
                        brand: payload.brand,
                        image: mediaObject['@id']
                    })

                    product.value = response
            
        } catch (error) {
            isLoading.value = false
            errorMessage.value = error
            console.error("Error : ", error);
        }

    }

    //update 
    async function update(id: string, payload: IProduct) {
        isLoading.value = true
        try {
            const { data: response } = await axios.put(`/products/${id}`, payload)
            product.value = response
            isLoading.value = false
        } catch (error) {
            isLoading.value = false
            errorMessage.value = error
            console.error("Error : ", error);
        }
    }

    //delete
    async function remove(id: string) {
        isLoading.value = true
        try {
            await axios.delete(`/products/${id}`)
            isLoading.value = false
        } catch (error) {
            isLoading.value = false
            errorMessage.value = error
            console.error("Error : ", error);
        }
    }

    return { 
        isLoading,
        totalItems,
        products, 
        product,
        errorMessage,
        getProducts, 
        getProduct, 
        create, 
        update, 
        remove
    }
})