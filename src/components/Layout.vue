<script setup>
import Header from '@/components/Header.vue'


</script>

<template>
    <div :data-path="$route.path" class="absolute flex flex-col top-0 left-0 right-0 h-full bg-gray-200">
        <slot name="header">
            <Header />
        </slot>

        <main class="h-full overflow-y-auto">
            <slot></slot>
        </main>
        <slot name="fab"></slot>
    </div>
</template>
