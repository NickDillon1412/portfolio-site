<template>
  <div class="p-4 space-y-2 md:space-y-12">
      <div class="grid grid-cols-2 gap-4 md:flex md:justify-center md:space-x-2 flex:space-y-4 md:space-y-0">
        <div v-for="technology in technologies.tallStack" :key="technology.title" class="p-2 opacity-85 hover:bg-slate-200 dark:hover:bg-[#1e2037] hover:rounded w-36">
          <a :href="technology.url" target="_blank">
            <div class="flex justify-center mb-1.5">
              <img :src="`../images/${technology.image}`" :alt="technology.title" />
            </div>
            <div class="text-center">
              <h1 class="text-xl font-semibold">{{ technology.title }}</h1>
            </div>
          </a>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-4 md:flex md:justify-center md:space-x-2 flex:space-y-4 md:space-y-0">
        <div v-for="technology in technologies.js" :key="technology.title" class="row-start-2 p-2 opacity-85 hover:bg-slate-200 dark:hover:bg-[#1e2037] hover:rounded w-36">
          <a :href="technology.url" target="_blank">
            <div class="flex justify-center mb-1.5">
              <img :src="`../images/${technology.image}`" :alt="technology.title" />
            </div>
            <div class="text-center">
              <h1 class="text-xl font-semibold">{{ technology.title }}</h1>
            </div>
          </a>
        </div>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const technologies = ref({
  tallStack: {
    tailwindcss: {
      url: 'https://tailwindcss.com/',
      image: 'tailwindcss.svg',
      title: 'Tailwind CSS'
    },
    alpinejs: {
      url: 'https://alpinejs.dev/',
      image: 'alpinejs.svg',
      title: 'Alpine.js'
    },
    laravel: {
      url: 'https://laravel.com',
      image: 'laravel.svg',
      title: 'Laravel'
    },
    livewire: {
      url: 'https://laravel-livewire.com',
      image: 'livewire.svg',
      title: 'Livewire'
    },
  },
  js: {
    vuejs: {
      url: 'https://vuejs.org/',
      image: 'vue.svg',
      title: 'Vue.js'
    },
    inertiajs: {
      url: 'https://inertiajs.com/',
      image: 'inertia.svg',
      title: 'Inertia.js'
    }
  }
});
</script>