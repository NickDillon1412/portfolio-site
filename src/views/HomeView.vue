<template>
  <div class="text-gray-800">
    <div class="flex items-center justify-center mx-auto mt-1 md:mt-8 w-11/12">
      <div class="flex flex-col md:flex-row items-center sm:justify-between">
        <div class="flex flex-col px-4 mb-4 max-w-lg">
          <h1 class="font-bold text-4xl mb-5 text-center sm:text-left">A little about me...</h1>
          <p class="font-semibold text-xl sm:mr-8 sm:pl-0">
            Hey! I'm Nick, and I'm a full stack developer. I love creating web applications, solving real-world problems, and learning new things every day. I'm also a huge fan of coffee, I love music, and I play the drums.
          </p>
          <Socials class="mt-5 mb-5 pl-0" />
        </div>
        <img class="rounded-full w-72 h-72" src="/images/profile.jpg" alt="Profile Image">
      </div>
    </div>

    <div class="flex flex-col items-center justify-center mt-24 sm:mt-32">
      <h1 class="text-3xl font-semibold w-9/12 text-center mb-3">Technologies I use on a daily basis:</h1>
      <Technologies />
    </div>

    <div class="flex flex-col items-center justify-center mt-24 sm:mt-32 mb-14">
      <div class="p-4">
        <h1 class="text-3xl font-semibold text-center w-9/12 mb-3 mx-auto">A couple of my projects:</h1>
        <Projects class="pl-3 pr-3" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Technologies from "../components/Technologies.vue";
import Projects from "../components/Projects.vue";
import Socials from "../components/Socials.vue";
</script>
