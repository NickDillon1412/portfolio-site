<template>
  <div class="text-gray-800">
    <div class="flex items-center justify-center mx-auto mb-7 mt-10 w-9/12">
      <div class="flex items-center justify-between space-x-2">
        <div class="flex flex-col px-4">
          <h1 class="font-bold text-4xl mb-5">A little about me...</h1>
          <p class="font-semibold text-xl mr-8">
            Hey! I'm Nick, and I'm a full stack web developer. I love creating web applications, solving real-world problems, and learning new things every day. I am also a huge fan of coffee, and I play the drums.
          </p>
          <Socials class="mt-5" />
        </div>
        <img class="rounded-full w-72 h-72" src="/images/profile.jpg" alt="Profile Image">
      </div>
    </div>

    <div class="flex flex-col items-center justify-center mt-36">
      <h1 class="text-3xl font-semibold mb-3">Technologies I use on a daily basis:</h1>
      <Technologies />
    </div>

    <div class="flex flex-col items-center justify-center mt-40 mb-14">
      <h1 class="text-3xl font-semibold mb-3">A couple of my projects:</h1>
      <Projects />
    </div>
  </div>
</template>

<script setup>
import Technologies from "../components/Technologies.vue";
import Projects from "../components/Projects.vue";
import Socials from "../components/Socials.vue";
</script>
