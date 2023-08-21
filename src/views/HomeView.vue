<template>
	<div class="pt-20 sm:pt-44 text-slate-50">
		<div class="flex flex-col items-center max-w-lg px-8 mx-auto space-y-4 text-center sm:px-4">
			<h1 class="p-1 text-5xl italic font-bold">
				Hey, I'm Nick!
			</h1>
			<img class="w-64 h-64 sm:w-72 sm:h-72 shadow-3xl rounded-3xl" src="/images/profile.jpg" alt="Profile Image">
			<p class="text-xl font-semibold">
				I'm a full stack developer, primarily working with the TALL stack, but I also love
				using Vue.js and Inertia.js. I'm also a huge fan of coffee, I love listening to music, and I play
				the drums.
			</p>
		</div>

		<div class="flex flex-col items-center justify-center mt-24 sm:mt-32">
			<h1 class="w-9/12 mb-3 text-3xl font-semibold text-center">Technologies I work with:</h1>
			<Technologies />
		</div>

		<div class="mt-24 sm:mt-32">
			<h1 class="w-9/12 mx-auto text-3xl font-semibold text-center mb-7">My work experience:</h1>
			<div class="flex justify-center w-10/12 mx-auto border-2 rounded-md bg-[#18192c] md:max-w-xl border-slate-700">
				<Work />
			</div>
		</div>

		<div class="flex flex-col items-center justify-center mt-24 sm:mt-32 mb-14">
			<div class="p-4">
				<h1 class="w-9/12 mx-auto mb-2 text-3xl font-semibold text-center">A couple of my projects:</h1>
				<Projects class="pl-3 pr-3" />
			</div>
		</div>
	</div>
</template>

<script setup>
import Technologies from "../components/Technologies.vue";
import Projects from "../components/Projects.vue";
import Work from "../components/Work.vue";
</script>
