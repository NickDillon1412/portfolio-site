<template>
	<div class="pt-32 text-slate-50">
		<div class="relative flex flex-col items-center max-w-xl mx-auto space-y-4 text-center group sm:px-4">
			<img style="
				animation: pulse 3s ease-in-out infinite;
            " src="/src/assets/blur.svg" class="absolute top-0 sm:-top-10 -inset-px opacity-[.8s]">

			<div class="z-0 flex flex-col items-center space-y-4">
				<img class="w-64 h-64 duration-500 ease-in-out rounded-full sm:w-56 sm:h-56 shadow-3xl"
					src="/images/profile.jpg" alt="Profile Image">
				<h1 class="italic font-bold">
					<div
						class="relative items-center justify-center inline-block w-auto h-auto px-1 mb-2 text-base font-bold text-opacity-100 transition-all duration-300 rounded outline-none group active:ring-0 active:outline-none">
						<span class="relative z-20 p-1 text-5xl">Hi, I'm Nick!</span>
						<span
							class="absolute bottom-0 left-0 z-10 w-full h-3 transition-all duration-300 ease-out -skew-x-12 bg-pink-500"></span>
					</div>
				</h1>
			</div>
			<p class="w-9/12 text-xl font-semibold sm:w-full">
				I'm a full stack developer, working with <vue-typewriter-effect
					:strings="['the TALL stack.', 'Vue.js.', 'Inertia.js.']" />
			</p>
		</div>

		<div class="mt-32 px-7 sm:mt-40">
			<h1 class="w-9/12 mx-auto text-3xl font-semibold text-center mb-7">My work experience:</h1>
			<div class="flex justify-center mx-auto border-2 rounded-md bg-[#18192c] md:max-w-xl border-slate-700">
				<Work />
			</div>
		</div>

		<div class="flex flex-col items-center justify-center mt-32 sm:mt-40">
			<h1 class="w-9/12 mb-3 text-3xl font-semibold text-center">My favorite technologies:</h1>
			<Technologies />
		</div>


		<div class="flex flex-col items-center justify-center mt-24 sm:mt-32 mb-14">
			<div class="p-4">
				<h1 class="w-7/12 mx-auto mb-8 text-3xl font-semibold text-center sm:mb-6">A couple of my projects:</h1>
				<Projects class="pl-3 pr-3" />
			</div>
		</div>
	</div>
</template>

<script setup>
import Technologies from "../components/Technologies.vue";
import Projects from "../components/Projects.vue";
import Work from "../components/Work.vue";
import VueTypewriterEffect from "vue-typewriter-effect";
</script>
