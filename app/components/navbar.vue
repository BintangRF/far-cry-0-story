<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const breadcrumbs = computed(() => {
  const pathArray = route.path.split("/").filter(Boolean);
  const path = ["home", ...pathArray];

  return path.map((segment, index) => {
    return {
      name: segment.charAt(0).toUpperCase() + segment.slice(1),
      path: "/" + path.slice(0, index + 1).join("/"),
    };
  });
});

const { lang } = useLanguage("id");
</script>

<template>
  <header
    class="bg-custom-mafia-dark text-custom-mafia-white py-4 shadow-md border-b border-custom-mafia-accent"
  >
    <div class="max-w-4xl mx-auto px-4">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-custom-mafia tracking-wide">Far Cry 0</h1>
        <span
          class="text-custom-mafia-accent font-custom-noir text-sm font-semibold"
          >Conflict & Survival</span
        >

        <!-- Language switcher -->
        <div class="mt-2">
          <select
            v-model="lang"
            class="px-2 py-1 border rounded bg-custom-mafia-dark text-white"
          >
            <option value="en">EN</option>
            <option value="id">ID</option>
          </select>
        </div>
      </div>

      <hr class="border-custom-mafia-accent mt-1.5" />

      <div class="py-1.5 flex items-center gap-3.5 font-bold">
        <div
          v-for="(crumb, index) in breadcrumbs"
          :key="crumb.path"
          class="group flex items-center"
        >
          <!-- Link -->
          <nuxt-link
            v-if="index !== breadcrumbs.length - 1"
            :to="crumb.name === 'Home' ? '/' : crumb.path"
            class="mr-1.5 hover:underline"
            >{{ crumb.name }}</nuxt-link
          >

          <!-- last segment -->
          <span v-else>{{ crumb.name }}</span>

          <!-- separator -->
          <span
            v-if="index !== breadcrumbs.length - 1"
            class="transition-transform group-hover:translate-x-1.5"
          >
            ›
          </span>
        </div>
      </div>
    </div>
  </header>
</template>
