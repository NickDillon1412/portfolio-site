<template>
	<div class="flex flex-col space-y-8 sm:space-y-0 sm:space-x-8 sm:flex-row text-slate-800">
		<div v-for="project in projects" :key="project.title">
			<a :href="project.url" target="_blank">
				<div
					class="max-w-sm duration-300 ease-in-out bg-white border border-gray-200 rounded-lg shadow-2xl hover:shadow-pink-500 hover:scale-105 hover:-rotate-2">
					<img class="rounded-t-lg" :src="`../images/${project.image}`" :alt="project.title" />
					<div class="p-5">
						<h5 class="text-2xl font-bold tracking-tight">{{
							project.title }}</h5>
						<ul v-for="tech in project.technologies" class="inline-block pt-3">
							<li
								class="px-2 sm:px-2.5 py-0.5 sm:py-[.8px] mr-2 text-[12.5px] sm:text-sm font-semibold text-pink-600 bg-pink-200 rounded-full shadow-xs shadow-pink-200/75">
								{{ tech }}</li>
						</ul>
					</div>
				</div>
			</a>
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
  