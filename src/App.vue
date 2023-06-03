<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
    <div>
        <router-view v-slot="{ Component, route }">
            <transition :name="route.meta.transition" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<style>
/*  route.meta.transition  */
.route-next-enter-from {
    opacity: 0;
    transform: translateY(9px);
}

.route-next-enter-active {
    transition: all 200ms ease-out;
}

.route-next-leave-to {
    opacity: 0;
    transform: translateY(-9px);
}

.route-next-leave-active {
    transition: all 150ms ease-in;
}

.route-back-enter-from {
    opacity: 0;
    transform: translateY(-10px);
}

.route-back-enter-active {
    transition: all 150ms ease-out;
}

.route-back-leave-to {
    opacity: 0;
    transform: translateY(10px);
}

.route-back-leave-active {
    transition: all 150ms ease-in;
}
</style>
