<template>
    <div
      class="bg-gray-50 min-h-screen"
    >
    <div class="bg-red-400 p-2"></div>
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
      <div>
        <div class="border-t w-10/12 max-w-[450px] mx-auto"></div>
        <footer class="pb-4">
          <div class="flex flex-col space-y-2 items-center justify-center p-6 text-slate-800">
            <h1>&copy; 2023 Nick Dillon</h1>
            <div class="text-center sm:flex sm:space-x-2">
              <h1>Built with <a href="https://vuejs.org" target="_blank" class="text-lg font-bold border-b-2 border-red-400 hover:border-slate-800 hover:text-red-400">Vue.js</a></h1>
              <h1>Styled with <a href="https://tailwindcss.com" target="_blank" class="text-lg font-bold border-b-2 border-red-400 hover:border-slate-800 hover:text-red-400">Tailwind CSS</a></h1>
              <h1>Hosted on <a href="https://vercel.com" target="_blank" class="text-lg font-bold border-b-2 border-red-400 hover:border-slate-800 hover:text-red-400">Vercel</a></h1>
            </div>
          </div>
        </footer>
      </div>
      <div class="bg-red-400 p-2"></div>
    </div>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>
