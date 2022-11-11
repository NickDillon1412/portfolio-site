<script setup>
import { ref } from "vue";
import GitHubIcon from "~icons/mdi/github";
import LinkedInIcon from "~icons/mdi/linkedin";
import TwitterIcon from "~icons/mdi/twitter";

const clicked = ref(false);

const onClick = () => {
  clicked.value = !clicked.value;
};
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div class="flex justify-center p-6 mt-8">
      <h1
        @click="onClick"
        :class="[clicked ? 'text-green-600' : 'text-gray-900']"
        class="font-bold text-6xl cursor-default"
      >
        Nick Dillon
      </h1>
    </div>

    <div class="flex justify-center mx-auto w-3/12 space-x-6 p-4">
      <a href="https://twitter.com/NickDillon1412">
        <TwitterIcon width="40px" height="40px" />
      </a>
      <a href="https://github.com/NickDillon1412">
        <GitHubIcon width="40px" height="40px" />
      </a>
      <a href="https://www.linkedin.com/in/nickdillon12/">
        <LinkedInIcon width="40px" height="40px" />
      </a>
    </div>
  </main>
</template>
