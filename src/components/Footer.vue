<template>
    <div class="pb-10">
        <div class="border-t w-10/12 max-w-[450px] mx-auto"></div>
        <footer class="flex flex-col items-center justify-center p-6 pb-4 space-y-4 text-center">
            <div class="max-w-lg">
                <div class="flex items-center justify-between max-w-sm space-x-5">
                    <a href="mailto:nickhds@gmail.com"
                        class="px-3 py-2 duration-300 ease-in-out bg-pink-500 rounded shadow-2xl hover:shadow-pink-500 hover:scale-110 hover:-rotate-2">Send
                        me a message!</a>
                    <span>|</span>
                    <Socials />
                </div>
            </div>
            <h1>&copy; 2023 Nick Dillon</h1>
        </footer>
    </div>
</template>

<script setup>
import Socials from './Socials.vue';
</script>