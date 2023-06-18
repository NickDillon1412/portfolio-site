<template>
  <div class="text-slate-100">
    <div class="flex items-center justify-center w-11/12 mx-auto mt-1 md:mt-8">
      <div class="flex flex-col items-center md:flex-row sm:justify-between">
        <div class="flex flex-col max-w-lg px-4 mb-4">
          <h1 class="mb-5 text-4xl font-bold text-center sm:text-left">A little about me...</h1>
          <p class="text-xl font-semibold sm:mr-8 sm:pl-0">
            Hey! I'm Nick, and I'm a full stack developer. I love creating web applications, solving real-world problems, and learning new things every day. I'm also a huge fan of coffee, I love music, and I play the drums.
          </p>
          <Socials class="pl-0 mt-5 mb-20 md:mb-5" />
        </div>
        <img class="rounded-full w-72 h-72" src="/images/profile.jpg" alt="Profile Image">
      </div>
    </div>

    <div class="flex flex-col items-center justify-center mt-24 sm:mt-32 text-slate-100">
      <h1 class="w-9/12 mb-3 text-3xl font-semibold text-center">Technologies I use on a daily basis:</h1>
      <Technologies />
    </div>

    <div class="mt-24 sm:mt-32 text-slate-100">
      <h1 class="w-9/12 mx-auto text-3xl font-semibold text-center mb-7">My Work Experience</h1>
      <div class="flex justify-center w-10/12 mx-auto border rounded-md md:w-6/12 lg:4/12 border-slate-700">
        <Work />
      </div>
    </div>

    <div class="flex flex-col items-center justify-center mt-24 sm:mt-32 mb-14">
      <div class="p-4">
        <h1 class="w-9/12 mx-auto mb-3 text-3xl font-semibold text-center">A couple of my projects:</h1>
        <Projects class="pl-3 pr-3" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Technologies from "../components/Technologies.vue";
import Projects from "../components/Projects.vue";
import Socials from "../components/Socials.vue";
import Work from "../components/Work.vue";
</script>
