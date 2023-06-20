<template>
    <div class="w-10/12 px-2 py-8 rounded-md">
        <ul class="relative border-l-2 border-slate-300 dark:border-slate-700 space-y-14">                  
            <li v-for="work in workExperience" :key="work.title" class="ml-6">      
                <span class="absolute flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 dark:bg-[#18192c] -left-4 ring-8 ring-slate-50 dark:ring-[#18192c]">
                    <img class="dark:shadow-lg" :src="`../images/${work.image}`" :alt="work.title"/>
                </span>
                <div class="items-center justify-between ml-2 dark:shadow-sm sm:flex">
                    <time class="mb-1 text-xs font-normal text-[#18192c] dark:text-slate-100 sm:order-last sm:mb-0 whitespace-nowrap">{{ work.time }}</time>
                    <div class="text-sm text-[#18192c] dark:text-slate-100">
                        <a class="cursor-pointer hover:text-slate-400" :href="work.url" target="_blank">
                            <h1 class="text-xl font-semibold">{{ work.title }}</h1>
                        </a>
                        <h2 class="text-sm">{{ work.position }}</h2>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const workExperience = ref({
    gray: {
        url: 'https://gray.tv/',
        title: 'Gray Television',
        position: 'Digital Applications Developer',
        time: 'April 2023 - Present',
        image: 'gray-logo.png'
    },
    buildOnline: {
        url: 'https://www.buildonline.io/',
        title: 'Build Online',
        position: 'Full Stack Developer',
        time: 'Summer 2021',
        image: 'buildonline-logo.png' 
    }
});
</script>