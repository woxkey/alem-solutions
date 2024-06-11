<template>
  <header class="header">
    <NuxtLink class="header__link" to="/"> ALEM SOLUTIONS </NuxtLink>

    <div class="header__nav-section">
      <nav class="header__nav">
        <ul class="header__ul">
          <li class="header__li">
            <NuxtLink class="header__link" to="/about">Services</NuxtLink>
          </li>
          <li class="header__li">
            <NuxtLink class="header__link" to="/about">Project</NuxtLink>
          </li>
          <li class="header__li">
            <NuxtLink class="header__link" to="/about">Expertise</NuxtLink>
          </li>
          <li class="header__li">
            <NuxtLink class="header__link" to="/about">Contacts</NuxtLink>
          </li>
          <li class="header__li">
            <NuxtLink class="header__link" to="/about">Careers</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="header__buttons">
        <button class="header__button-order">
          <span>make order</span>
          <font-awesome-icon icon="fa-solid fa-square-arrow-up-right" />
        </button>
        <button class="header__button-menu">
          <font-awesome-icon icon="fa-solid fa-bars" />
          <span>menu</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.header {
  display: flex;
  // max-width: 1710px;
  // margin: 0 auto;
  justify-content: space-between;
  padding: 2em 3em;
  position: relative;
  z-index: 2;

  &__nav-section {
    display: flex;
    gap: 1.5em;
    align-items: center;
  }

  &__ul {
    display: flex;
    list-style: none;
    gap: 1.5em;
  }

  &__link {
    text-decoration: none;
    color: $primary;

    &:hover {
      color: $secondary;
    }
  }

  &__buttons {
    display: flex;
  }

  &__button-order {
    border: 1px solid $secondary;
    background: transparent;
    color: $secondary;
    font-size: 1.063em;
    padding: 1em 1.5em;
    margin-right: 1em;
    cursor: pointer;
    text-transform: uppercase;

    & > span {
      margin-right: 1em;
      font-family: "RoadRadio", sans-serif;
    }
  }

  &__button-menu {
    border: none;
    outline: none;
    background: none;
    color: $primary;
    cursor: pointer;
    font-size: 1.125em;
    display: flex;
    align-items: center;

    & > svg {
      margin-right: 1em;
    }

    & > span {
      text-transform: uppercase;
      font-family: "RoadRadio-Bold", sans-serif;
    }
  }
}
</style>
