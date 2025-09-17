<script setup lang="ts">
import { textNotFound } from "~/constant/not-found";

const route = useRoute();
const { name } = route.query;

const { lang } = useLanguage("id");

const text = computed(() => textNotFound(lang.value).text);

const { data: doc } = await useAsyncData(
  () => `?name=${name}?lang=${lang.value}`,
  () => queryContent(`${lang.value}/${name}`).findOne()
);
</script>

<template>
  <article class="prose">
    <ContentRenderer v-if="doc" :value="doc" />
    <p v-else>{{ text }}</p>
  </article>
</template>
