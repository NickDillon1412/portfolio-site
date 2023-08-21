<template>
	<div class="antialiased min-h-screen bg-[#18192c] bg-dots text-slate-50">
		<Nav />
		<RouterView />
		<Footer />
	</div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
</script>
