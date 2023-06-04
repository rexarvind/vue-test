<script setup>
import Layout from '@/components/Layout.vue'

import IconChat from '@/icons/IconChat.vue'

</script>

<template>
    <Layout>
        <div class="home">hello</div>

        <template v-slot:fab>
            <transition name="fade">
                <RouterLink to="/about/" type="button" class="fab fixed w-14 h-14 flex items-center justify-center border rounded-full bg-blue-500 text-white">
                    <IconChat class="w-6 h-6" />
                </RouterLink>
            </transition>
        </template>
    </Layout>
</template>
