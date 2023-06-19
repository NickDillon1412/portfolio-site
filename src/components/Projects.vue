<template>
  <div class="sm:flex-row">
    <div class="grid grid-cols-1 gap-2 mt-6 mb-6 sm:grid-cols-2 gap-y-5">
      <div v-for="project in projects" :key="project.title" class="mx-auto text-lg font-semibold border-2 cursor-pointer sm:w-10/12 text-gray-50 bg-[#363d68] rounded-md border-[#363d68] hover:border-[#33d492] dark:hover:border-slate-200">
        <a :href="project.url">
          <div>
            <img class="object-cover w-full h-64 sm:h-64 rounded-t-md" :src="`../images/${project.image}`" :alt="project.title" />
          </div>
        </a>
        <div class="p-3 bg-[#363d68] rounded-b-md">
          <h1>{{ project.title }}</h1>
          <div>
            <ul v-for="tech in project.technologies" class="inline-block pt-3 text-xs">
              <li class="p-1 mr-2 border rounded dark:border-white">{{ tech }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref({
  contacts: {
    url: 'https://github.com/NickDillon1412/Contacts',
    image: 'contacts.png',
    title: 'Contacts App',
    technologies: [
      'Vue.js',
      'Inertia.js',
      'Laravel',
      'Tailwind'
    ]
  },
  recipes: {
    url: 'https://github.com/NickDillon1412/Recipe-App',
    image: 'recipes.png',
    title: 'Recipes App',
    technologies: [
      'Tailwind',
      'Alpine.js',
      'Laravel',
      'Livewire'
    ]
  }
});
</script>
  