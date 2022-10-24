<template>
  <div id="loaderBlock">
    <div class="loaderWrapper">
      <LoaderIcon></LoaderIcon>
    </div>
  </div>
</template>
<script lang="ts" setup>
import LoaderIcon from "./LoaderIcon.vue";
</script>

<style scoped>
#loaderBlock {
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: var(--primary-bg);
}

.loaderWrapper {
  width: 128px;
  height: 128px;
  background: var(--secondary-bg);
  border: 1px solid var(--border);
  border-radius: 36px;
  display: grid;
  place-items: center;
  filter: drop-shadow(0px 4px 96px rgba(0, 0, 0, 0.16));
}
</style>
