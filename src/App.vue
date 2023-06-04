<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
    <div class="h-full">
        <router-view v-slot="{ Component, route }">
            <transition :name="route.meta.transition" mode="in-out">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>
