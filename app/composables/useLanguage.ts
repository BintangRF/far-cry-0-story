export function useLanguage(defaultLang = "id") {
  const route = useRoute();
  const router = useRouter();

  const lang = ref<string | null>(
    (route.query.lang as string) || defaultLang || localStorage.getItem("lang")
  );

  watch(lang, (newLang) => {
    localStorage.setItem("lang", newLang || "");

    router.replace({
      path: route.path,
      query: { ...route.query, lang: newLang },
    });
  });

  watch(
    () => route.query.lang,
    (newQueryLang) => {
      if (typeof newQueryLang === "string" && newQueryLang !== lang.value) {
        lang.value = newQueryLang;
      }
    }
  );

  function switchLanguage(newLang: string) {
    lang.value = newLang;
  }

  return { lang, switchLanguage };
}
