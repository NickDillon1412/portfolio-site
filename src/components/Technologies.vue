<template>
	<div class="p-4 space-y-2 md:space-y-12">
		<div class="grid grid-cols-2 gap-4 md:flex md:justify-center md:space-x-2 flex:space-y-4 md:space-y-0">
			<div v-for="technology in technologies.tallStack" :key="technology.title"
				class="p-2 hover:shadow-2xl hover:ease-in-out hover:scale-125 duration-300 hover:shadow-pink-500/75 hover:bg-[#1e2037] hover:rounded hover:-rotate-3 w-36">
				<a :href="technology.url" target="_blank">
					<div class="flex justify-center mb-1.5">
						<img :src="`../images/${technology.image}`" :alt="technology.title" />
					</div>
					<div class="text-center">
						<h1 class="text-xl font-semibold shadow-indigo-400/50">{{ technology.title }}</h1>
					</div>
				</a>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-4 md:flex md:justify-center md:space-x-2 flex:space-y-4 md:space-y-0">
			<div v-for="technology in technologies.js" :key="technology.title"
				class="row-start-2 p-2 hover:shadow-2xl hover:scale-125 hover:ease-in-out duration-300 hover:shadow-pink-500/75 hover:bg-[#1e2037] hover:-rotate-3 hover:rounded w-36">
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
			url: 'https://livewire.laravel.com/',
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