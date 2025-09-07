<script setup lang="ts">
import { textNotFound } from "~/constant/not-found";

const route = useRoute();
const path = route.path;

const { lang } = useLanguage("id");

const text = computed(() => textNotFound(lang.value).text);

const { data: doc } = await useAsyncData(
  () => `story-${path}?lang=${lang.value}`,
  () => queryContent(`${lang.value}${path}`).findOne()
);
</script>

<template>
  <article class="prose">
    <ContentRenderer v-if="doc" :value="doc" />
    <p v-else>{{ text }}</p>
  </article>
</template>
