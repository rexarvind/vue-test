<script setup>
import Header from '@/components/Header.vue'
</script>

<template>
    <div class="">
        <Header />

        <main>
            <slot></slot>
        </main>
    </div>
</template>
