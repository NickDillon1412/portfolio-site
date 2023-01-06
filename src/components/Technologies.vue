<template>
  <div class="flex justify-center p-4">
    <ul class="flex space-x-4">
      <li v-for="technology in technologies" :key="technology.title" class="hover:bg-gray-100 hover:rounded-lg p-2 w-36">
        <a :href="technology.url" target="_blank">
          <div class="flex justify-center mb-2">
            <img :src="technology.image" :alt="technology.title" />
          </div>
          <div class="text-center">
            <h1 class="font-semibold text-xl">{{ technology.title }}</h1>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const technologies = ref([
  {
    url: 'https://laravel.com',
    image: '/src/assets/images/laravel.svg',
    title: 'Laravel'
  },
  {
    url: 'https://vuejs.org/',
    image: '/src/assets/images/vue.svg',
    title: 'Vue.js'
  },
  {
    url: 'https://tailwindcss.com/',
    image: '/src/assets/images/tailwindcss.svg',
    title: 'Tailwind CSS'
  },
  {
    url: 'https://inertiajs.com/',
    image: '/src/assets/images/inertia.svg',
    title: 'Inertia.js'
  },
]);
</script>