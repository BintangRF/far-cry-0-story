<script setup lang="ts">
import { textNotFound } from "~/constant/not-found";

const { lang } = useLanguage("id");

const text = computed(() => textNotFound(lang.value).text);

const { data: doc } = await useAsyncData(
  () => `index-lang=${lang.value}`,
  () => queryContent(`${lang.value}/`).findOne(),
  { watch: [lang] }
);
</script>

<template>
  <article class="prose">
    <ContentRenderer v-if="doc" :value="doc" />
    <p v-else>{{ text }}</p>
  </article>
</template>
