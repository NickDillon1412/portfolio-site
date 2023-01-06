import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(4);

  const doubleCount = computed(() => count.value * 2);

  const increment = () => count.value++;

  return { count, doubleCount, increment };
});
