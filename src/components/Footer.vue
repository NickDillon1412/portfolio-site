<template>
    <div class="pb-10">
        <div class="border-t w-10/12 max-w-[450px] mx-auto"></div>
        <footer class="flex flex-col items-center justify-center p-6 pb-4 space-y-4 text-center">
            <div class="max-w-lg">
                <div
                    class="flex flex-col items-center justify-between max-w-sm space-y-5 sm:space-x-5 sm:space-y-0 sm:flex-row">
                    <!-- <div class="relative inline-flex w-full group/button sm:w-auto">
                        <div
                            class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-pink-500 to-pink-500 rounded-xl blur-lg group-hover/button:opacity-100 group-hover/button:-inset-1 group-hover/button:duration-200 animate-tilt">
                        </div>
                        <a href="mailto:nickhds@gmail.com"
                            class="relative sm:w-auto w-full hover:-rotate-3 transition-all ease-out duration-300 inline-flex items-center justify-center px-4 py-2 text-lg font-bold text-white bg-pink-500 hover:bg-pink-500 hover:scale-[1.01] rounded-xl "
                            role="button">Send me a message!</a>
                    </div> -->
                    <div class="relative inline-flex w-full group">
                        <div
                            class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-pink-500 to-pink-500 rounded-xl blur-2xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                        </div>
                        <a href="https://github.com/laravel-frontend-presets/tall" target="_blank"
                            class="relative sm:w-auto w-full hover:-rotate-3 transition-all ease-out duration-300 inline-flex items-center justify-center px-4 py-2 text-lg font-bold text-white bg-pink-500 hover:scale-[1.01] rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                            role="button">Send me a message!</a>
                    </div>
                    <span class="hidden sm:inline-block">|</span>
                    <Socials />
                </div>
            </div>
            <h1>&copy; {{ new Date().getFullYear() }} Nick Dillon</h1>
        </footer>
    </div>
</template>

<script setup>
import Socials from './Socials.vue';
</script>