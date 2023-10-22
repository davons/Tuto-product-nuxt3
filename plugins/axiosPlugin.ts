import axios from "axios"

export default defineNuxtPlugin(async (nuxtApp) => {
    const config = useRuntimeConfig()
    axios.defaults.baseURL = config.public.appURL
    axios.defaults.headers.common['Content-Type'] = 'application/ld+json'
    axios.defaults.headers.common['Accept'] = 'application/ld+json'
})