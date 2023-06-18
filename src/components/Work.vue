<template>
    <div class="w-10/12 px-2 py-8 rounded-md">
        <ul class="relative border-l border-gray-200 space-y-14 dark:border-gray-700">                  
            <li v-for="work in workExperience" :key="work.title" class="ml-6">      
                <span class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-950">
                    <img class="shadow-lg" :src="`../images/${work.image}`" :alt="work.title"/>
                </span>
                <div class="items-center justify-between ml-2 shadow-sm sm:flex">
                    <time class="mb-1 text-xs font-normal text-slate-100 sm:order-last sm:mb-0 whitespace-nowrap">{{ work.time }}</time>
                    <div class="space-y-1 text-sm text-gray-100">
                        <h1 class="text-xl font-semibold">{{ work.title }}</h1>
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
        title: 'Gray Television',
        position: 'Digital Applications Developer',
        time: 'April 2023 - Present',
        image: 'gray-logo.png'
    },
    buildOnline: {
        title: 'Build Online',
        position: 'Full Stack Developer',
        time: 'Summer 2021',
        image: 'buildonline-logo.png' 
    }
});
</script>