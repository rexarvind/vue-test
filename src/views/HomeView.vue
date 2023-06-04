<script setup>
import Layout from '@/components/Layout.vue'

import IconChat from '@/icons/IconChat.vue'

</script>

<template>
    <Layout>
        <div class="home">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aliquam minus, repellat autem, temporibus veritatis sequi aperiam consectetur. Doloribus voluptates sit ipsum quasi voluptatem facere cupiditate dignissimos perspiciatis veniam, voluptate!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aliquam minus, repellat autem, temporibus veritatis sequi aperiam consectetur. Doloribus voluptates sit ipsum quasi voluptatem facere cupiditate dignissimos perspiciatis veniam, voluptate!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aliquam minus, repellat autem, temporibus veritatis sequi aperiam consectetur. Doloribus voluptates sit ipsum quasi voluptatem facere cupiditate dignissimos perspiciatis veniam, voluptate!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aliquam minus, repellat autem, temporibus veritatis sequi aperiam consectetur. Doloribus voluptates sit ipsum quasi voluptatem facere cupiditate dignissimos perspiciatis veniam, voluptate!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aliquam minus, repellat autem, temporibus veritatis sequi aperiam consectetur. Doloribus voluptates sit ipsum quasi voluptatem facere cupiditate dignissimos perspiciatis veniam, voluptate!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aliquam minus, repellat autem, temporibus veritatis sequi aperiam consectetur. Doloribus voluptates sit ipsum quasi voluptatem facere cupiditate dignissimos perspiciatis veniam, voluptate!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aliquam minus, repellat autem, temporibus veritatis sequi aperiam consectetur. Doloribus voluptates sit ipsum quasi voluptatem facere cupiditate dignissimos perspiciatis veniam, voluptate!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aliquam minus, repellat autem, temporibus veritatis sequi aperiam consectetur. Doloribus voluptates sit ipsum quasi voluptatem facere cupiditate dignissimos perspiciatis veniam, voluptate!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aliquam minus, repellat autem, temporibus veritatis sequi aperiam consectetur. Doloribus voluptates sit ipsum quasi voluptatem facere cupiditate dignissimos perspiciatis veniam, voluptate!
        </div>

        <template v-slot:fab>
            <div class="fab-btns">
                <RouterLink to="/about/" type="button" class="fab-btn fixed w-14 h-14 flex items-center justify-center rounded-full shadow bg-blue-500 text-white">
                    <IconChat class="w-6 h-6" />
                </RouterLink>
            </div>
        </template>
    </Layout>
</template>
