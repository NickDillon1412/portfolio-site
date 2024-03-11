<template>
    <div class="w-10/12 px-2 py-8 rounded-md text-slate-50">
        <ul class="relative border-l-2 border-slate-700 space-y-14">
            <li v-for="work in workExperience" :key="work.title" class="ml-6">
                <span
                    class="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-8 ring-[#18192c] bg-[#18192c]">
                    <img class="shadow-lg" :src="`../images/${work.image}`" :alt="work.title" />
                </span>
                <div class="items-center justify-between ml-2 shadow-sm sm:flex">
                    <time
                        class="flex flex-col mb-1 text-xs font-normal sm:text-center sm:order-last sm:mb-0 whitespace-nowrap">
                        <span>{{ work.time }}</span>
                        <span>{{ work.duration }}</span>
                    </time>
                    <div class="text-sm">
                        <a class="duration-300 ease-in-out cursor-pointer hover:text-slate-400" :href="work.url"
                            target="_blank">
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

const calculateDuration = ((date) => {
    let startDate = new Date(date);
    let diff = Math.abs(new Date() - startDate);
    let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    let months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));

    return years < 1 ? (months > 1 ? `${months} months` : `${months} month`) :
        years === 1 ? `${years} year ${months} months` :
            months > 1 ? `${years} years ${months} months` : `${years} years ${months} month`;
});

const workExperience = ref({
    gray: {
        url: 'https://gray.tv/',
        title: 'Gray Television',
        position: 'Digital Applications Developer',
        time: 'April 2023 - Present',
        duration: calculateDuration('2020-04-24'),
        image: 'gray-logo.png'
    },
    buildOnline: {
        url: 'https://www.buildonline.io/',
        title: 'Build Online',
        position: 'Full Stack Developer',
        time: 'Summer 2021',
        duration: '2 months',
        image: 'build-online.png'
    }
});
</script>