<script setup lang="ts">
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<template>
  <button
    @click="scrollToTop"
    class="fixed bottom-8 right-8 w-12 h-12 bg-custom-mafia-black border-2 border-custom-mafia-accent rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
  >
    <svg
      class="w-6 h-6 text-custom-mafia-accent"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M5 15l7-7 7 7"
      ></path>
    </svg>
  </button>
</template>
