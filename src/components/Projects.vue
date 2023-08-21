<template>
	<div class="flex flex-col space-y-6 md:space-y-0 md:space-x-8 md:flex-row text-slate-100">
		<div class="grid grid-cols-1 gap-8 mt-6 mb-6 sm:grid-cols-2 gap-y-5">
			<div v-for="project in projects" :key="project.title"
				class="mx-auto hover:shadow-2xl hover:ease-in-out hover:scale-105 duration-300 hover:shadow-pink-500/75 bg-[#363d68] text-lg font-semibold border-2 cursor-pointer w-full text-gray-50 rounded-md border-[#363d68] hover:-rotate-3">
				<a :href="project.url">
					<div>
						<img class="object-cover w-full h-64 rounded-t sm:h-64" :src="`../images/${project.image}`"
							:alt="project.title" />
					</div>
					<div class="p-5 bg-[#363d68] rounded-b">
						<h1>{{ project.title }}</h1>
						<div>
							<ul v-for="tech in project.technologies" class="inline-block pt-3 text-xs">
								<li class="p-1 mr-2 tracking-wide border rounded dark:border-white">{{ tech }}</li>
							</ul>
						</div>
					</div>
				</a>
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
  