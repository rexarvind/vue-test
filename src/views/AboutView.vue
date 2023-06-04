<script setup>
import Layout from '@/components/Layout.vue'

import IconArrowBack from '@/icons/IconArrowBack.vue'

const alpha = Array.from(Array(26)).map((e, i)=> i + 65);
const alphabets = alpha.map((x)=> String.fromCharCode(x));

</script>

<template>
    <Layout>
        <template v-slot:header>
            <header class="app-header h-14 px-1 flex items-center bg-blue-500 text-white shadow-sm border-gray-400">
                <button type="button" @click="$router.back()" title="Back" class="px-2 py-2 rounded select-none">
                    <IconArrowBack class="h-7 w-7" />
                </button>
                <div class="px-3 flex flex-col select-none">
                    <span class=" font-semibold">Select contact</span>
                    <span class="leading-tight text-xs">141 contacts</span>
                </div>
            </header>
        </template>
        <div class="about">
            <section v-for="alphabet in alphabets" :key="alphabet">
                <div class="sticky top-0 px-3 py-1 font-semibold text-sm border-b border-gray-400 bg-gray-200">{{ alphabet }}</div>
                <div class="">
                    <ul>
                        <li v-for="i in 10" :key="i" class="bg-white">
                            <div class="px-3 py-2 flex border-b">
                                <img src="/favicon.ico" alt="image" class="border rounded-full w-10 h-10">
                                <div class="px-3 flex flex-col truncate">
                                    <div class="font-semibold truncate">Cjontactj ajs flakjsdf lasjfaljfalsjfal {{ i }}</div>
                                    <span class="text-xs">Available</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </Layout>
</template>
