<script setup>

import { RouterLink } from 'vue-router'

</script>

<template>
    <header class="app-header h-14 px-1 flex shrink-0 items-center bg-white shadow-sm border-gray-400">
        <nav class="flex justify-center">
            <router-link
                to="/"
                class="inline-block px-4 py-3 font-bold select-none"
                exact-active-class="text-blue-500"
                >Home</router-link
            >
            <router-link
                to="/about/"
                class="inline-block px-4 py-3 font-bold select-none"
                exact-active-class="text-blue-500"
                >About</router-link
            >
        </nav>
    </header>
</template>
