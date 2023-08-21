<template>
	<div class="antialiased min-h-screen bg-[#18192c] bg-dots text-slate-50">
		<Nav />
		<RouterView />
		<div>
			<div class="border-t w-10/12 max-w-[450px] mx-auto"></div>
			<footer class="pb-4">
				<div class="flex flex-col items-center justify-center p-6 space-y-2">
					<h1>&copy; 2023 Nick Dillon</h1>
				</div>
			</footer>
		</div>
	</div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
</script>
