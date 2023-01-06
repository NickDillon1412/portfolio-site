<template>
    <div
      class="bg-gray-50 min-h-screen"
    >
      <header class="mx-auto text-center p-6">
        <RouterLink to="/" name="Home">
          <h1 class="font-bold text-6xl text-slate-800 mb-3 mt-12">
            Nick Dillon
          </h1>
        </RouterLink>
        <h3 class="font-bold text-3xl text-red-400">
          Full Stack Developer
        </h3>
      </header>

      <RouterView />
      <footer class="pb-4">
        <div class="flex flex-col space-y-2 items-center justify-center p-6 text-slate-800">
          <h1>&copy; 2023 Nick Dillon</h1>
          <h1>Built with <a href="https://vuejs.org/" target="_blank"><span class="text-lg font-bold border-b-2 border-red-400 hover:border-slate-800 hover:text-red-400 p-1 pb-0.5">Vue.js</span></a> <span class="text-2xl p-1">|</span> Styling with <a href="https://tailwindcss.com/" target="_blank"><span class="text-lg font-bold border-b-2 border-red-400 hover:border-slate-800 hover:text-red-400 p-1 pb-0.5">Tailwind CSS</span></a> <span class="text-2xl p-1">|</span> Hosted on <a href="https://vercel.com/" target="_blank"><span class="text-lg font-bold border-b-2 border-red-400 hover:border-slate-800 hover:text-red-400 p-1 pb-0.5">Vercel</span></a></h1>
        </div>
      </footer>
    </div>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>
