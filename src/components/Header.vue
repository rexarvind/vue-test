<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <header class="bg-white border-b border-gray-400">
        <nav class="flex justify-center">
            <RouterLink
                to="/"
                class="inline-block px-4 py-3 font-bold select-none"
                exact-active-class="text-blue-500"
                >Home</RouterLink
            >
            <RouterLink
                to="/about"
                class="inline-block px-4 py-3 font-bold select-none"
                exact-active-class="text-blue-500"
                >About</RouterLink
            >
        </nav>
    </header>
</template>
