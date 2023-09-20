import axios from "axios"

export default defineNuxtPlugin(async (nuxtApp) => {
    const config = useRuntimeConfig()
    axios.defaults.baseURL = config.public.appURL
})