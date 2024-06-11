<template>
  <header>
    <NuxtLink to="/">
      <img src="/images/logo.svg" alt="logo" />
    </NuxtLink>

    <div>
      <nav>
        <ul>
          <li><NuxtLink to="/about">Services</NuxtLink></li>
          <li><NuxtLink to="/about">Project</NuxtLink></li>
          <li><NuxtLink to="/about">Expertise</NuxtLink></li>
          <li><NuxtLink to="/about">Contacts</NuxtLink></li>
          <li><NuxtLink to="/about">Careers</NuxtLink></li>
        </ul>
      </nav>
      <div>
        <button>make order</button>
        <button>menu</button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
header {
  display: flex;
  max-width: 1710px;
  margin: 0 auto;
  justify-content: space-between;
  padding: 2rem 1.5rem;
}

header > div {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

ul {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

li > a {
  text-decoration: none;
  color: $primary;

  &:hover {
    color: $secondary;
  }
}
</style>
