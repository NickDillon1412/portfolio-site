<template>
    <nav
        class="fixed z-10 flex items-center justify-between w-full px-3.5 py-3 sm:py-5 border-b sm:px-10 border-slate-700 backdrop-blur-2xl text-slate-50">
        <RouterLink to="/" name="Home">
            <h1 class="text-3xl font-semibold tracking-tighter uppercase duration-200 ease-in-out hover:text-pink-400">
                Nick
                Dillon</h1>
        </RouterLink>

        <Socials />
    </nav>
</template>

<script setup>
import Socials from "./Socials.vue";
</script>
