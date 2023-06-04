import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRouteLoadingStore = defineStore('siteLoading', () => {
    const loading = ref(false);

    function setLoading(loading) {
        loading.value = loading;
    }

    return {loading, setLoading}
});