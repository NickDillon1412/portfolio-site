<template>
  <div class="sm:flex sm:justify-center p-4">
    <ul class="grid grid-cols-2 gap-8 sm:flex">
      <li v-for="technology in technologies" :key="technology.title" class="hover:bg-gray-100 hover:rounded-lg p-2 w-36">
        <a :href="technology.url" target="_blank">
          <div class="flex justify-center mb-2">
            <img :src="`../images/${technology.image}`" :alt="technology.title" />
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
    image: 'laravel.svg',
    title: 'Laravel'
  },
  {
    url: 'https://vuejs.org/',
    image: 'vue.svg',
    title: 'Vue.js'
  },
  {
    url: 'https://tailwindcss.com/',
    image: 'tailwindcss.svg',
    title: 'Tailwind CSS'
  },
  {
    url: 'https://inertiajs.com/',
    image: 'inertia.svg',
    title: 'Inertia.js'
  },
  {
    url: 'https://laravel-livewire.com',
    image: 'livewire.svg',
    title: 'Livewire'
  }
]);
</script>