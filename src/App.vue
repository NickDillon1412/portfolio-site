<template>
    <div
      class="min-h-screen bg-slate-100 dark:bg-[#18192c] relative"
    >
    <div class="p-2 bg-[#33d492] dark:bg-[#38eba4]"></div>
    <div class="absolute flex items-center space-x-4 text-slate-100 top-12 right-10">
      <SunLightIcon class="dark:text-slate-500 text-[#33d492]" />
      <label class="relative inline-flex items-center cursor-pointer">
        <input @click="toggleDark()" type="checkbox" value="on" class="sr-only peer" checked>
        <div class="w-11 h-6 bg-gray-400 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#38eba4]"></div>
      </label>
      <MoonIcon class="text-slate-300 dark:text-[#33d492]" />
    </div>
      <header class="p-6 mx-auto text-center mt-7 md:mt-0">
        <RouterLink to="/" name="Home">
          <h1 class="mt-12 mb-3 text-6xl font-bold text-[#18192c] dark:text-slate-100">
            Nick Dillon
          </h1>
        </RouterLink>
        <h3 class="text-3xl font-bold text-[#33d492] dark:text-[#38eba4]">
          Full Stack Developer
        </h3>
      </header>

      <RouterView />
      <div>
        <div class="border-t w-10/12 max-w-[450px] mx-auto"></div>
        <footer class="pb-4">
          <div class="flex flex-col items-center justify-center p-6 space-y-2 text-[#18192c] dark:text-slate-100">
            <h1>&copy; 2023 Nick Dillon</h1>
            <div class="text-center sm:flex sm:space-x-2">
              <h1>Built with <a href="https://vuejs.org" target="_blank" class="text-lg font-bold border-b-2 border-[#33d492] dark:border-[#4bedad] hover:border-[#18192c] dark:hover:border-slate-100 hover:text-[#33d492]">Vue.js</a></h1>
              <h1>Styled with <a href="https://tailwindcss.com" target="_blank" class="text-lg font-bold border-b-2 border-[#33d492] dark:border-[#4bedad] hover:border-[#18192c] dark:hover:border-slate-100 hover:text-[#33d492]">Tailwind CSS</a></h1>
              <h1>Hosted on <a href="https://vercel.com" target="_blank" class="text-lg font-bold border-b-2 border-[#33d492] dark:border-[#4bedad] hover:border-[#18192c] dark:hover:border-slate-100 hover:text-[#33d492]">Vercel</a></h1>
            </div>
          </div>
        </footer>
      </div>
      <div class="p-2 bg-[#33d492] dark:bg-[#38eba4]"></div>
    </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import { useDark, useToggle } from "@vueuse/core";
import SunLightIcon from '~icons/ph/sun';
import MoonIcon from '~icons/ph/moon';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
