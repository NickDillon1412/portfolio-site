<template>
    <nav
        class="fixed z-10 flex items-center justify-between w-full px-3.5 py-3 sm:py-5 border-b sm:px-10 border-slate-700 backdrop-blur-xl text-slate-50">
        <!-- <RouterLink to="/" name="Home">
            <h1 class="text-3xl font-semibold tracking-tighter uppercase duration-200 ease-in-out hover:text-pink-400">
                Nick
                Dillon</h1>
        </RouterLink> -->

        <div class="relative inline-flex group/button">
            <div
                class="absolute transition-all duration-1000 bg-pink-500 opacity-90 -inset-px rounded-xl blur-xl group-hover/button:opacity-100 group-hover/button:-inset-1 group-hover/button:duration-200 animate-pulse">
            </div>
            <RouterLink to="/" name="Home"
                class="relative inline-flex items-center justify-center w-full px-4 text-lg font-bold text-white transition-all duration-300 ease-out sm:w-auto hover:scale-110 rounded-xl"
                role="button">
                <h1 class="text-3xl font-semibold tracking-tighter uppercase duration-200 ease-in-out">
                    Nick
                    Dillon</h1>
            </RouterLink>
        </div>

        <Socials />
    </nav>
</template>

<script setup>
import Socials from "./Socials.vue";
</script>
