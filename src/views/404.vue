<template>
  <div class="container">
    <h1>{{ t("404.title") }}</h1>
    <router-link to="/" class="button">{{ t("404.goBack") }}</router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
export default defineComponent({
  setup() {
    const { t } = useI18n();
    return { t };
  },
});
</script>
