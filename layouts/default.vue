<template>
  <div class="container">
    <Header />
    <main>
      <slot />
    </main>
    <!-- <footer>footer</footer> -->
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
main,
footer {
  max-width: 1110px;
  margin: 0 auto;
}

.container {
  max-width: 1710px;
  margin: 0 auto;
  overflow-x: hidden;
  position: relative;
  height: 100vh;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
