<template>
  <div class="loader"></div>
</template>

<style lang="scss" scoped>
.loader {
  width: 50px;
  height: 50px;
  border: solid 4px;
  border-color: var(--selector) var(--selector) var(--selector) transparent;
  border-radius: 50%;
  position: relative;
  animation: loading 1.6s linear infinite;
}

.loader:before,
.loader:after {
  content: "";
  width: 4px;
  height: 4px;
  border-radius: 50%;
  // background-color: var(--selector);
  position: absolute;
}

.loader:before {
  top: 2px;
  left: 3px;
}

.loader:after {
  bottom: 2px;
  left: 3px;
}

@keyframes loading {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
