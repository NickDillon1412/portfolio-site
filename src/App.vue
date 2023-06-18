<template>
    <div
      class="min-h-screen bg-[#18192c]"
    >
    <div class="p-2 bg-[#38eba4]"></div>
      <header class="p-6 mx-auto text-center">
        <RouterLink to="/" name="Home">
          <h1 class="mt-12 mb-3 text-6xl font-bold text-slate-100">
            Nick Dillon
          </h1>
        </RouterLink>
        <h3 class="text-3xl font-bold text-[#38eba4]">
          Full Stack Developer
        </h3>
      </header>

      <RouterView />
      <div>
        <div class="border-t w-10/12 max-w-[450px] mx-auto"></div>
        <footer class="pb-4">
          <div class="flex flex-col items-center justify-center p-6 space-y-2 text-slate-100">
            <h1>&copy; 2023 Nick Dillon</h1>
            <div class="text-center sm:flex sm:space-x-2">
              <h1>Built with <a href="https://vuejs.org" target="_blank" class="text-lg font-bold border-b-2 border-[#4bedad] hover:border-slate-100 hover:text-[#4bedad]">Vue.js</a></h1>
              <h1>Styled with <a href="https://tailwindcss.com" target="_blank" class="text-lg font-bold border-b-2 border-[#4bedad] hover:border-slate-100 hover:text-[#4bedad]">Tailwind CSS</a></h1>
              <h1>Hosted on <a href="https://vercel.com" target="_blank" class="text-lg font-bold border-b-2 border-[#4bedad] hover:border-slate-100 hover:text-[#4bedad]">Vercel</a></h1>
            </div>
          </div>
        </footer>
      </div>
      <div class="p-2 bg-[#38eba4]"></div>
    </div>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>
