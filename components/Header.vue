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
  max-width: 1710px;
  margin: 0 auto;
  justify-content: space-between;
  padding: 2rem 3rem;

  &__nav-section {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  &__ul {
    display: flex;
    list-style: none;
    gap: 1.5rem;
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
    font-size: 17px;
    padding: 10px 20px;
    margin-right: 1rem;
    cursor: pointer;
    text-transform: uppercase;

    & > span {
      margin-right: 10px;
      font-family: "RoadRadio", sans-serif;
    }
  }

  &__button-menu {
    border: none;
    outline: none;
    background: none;
    color: $primary;
    cursor: pointer;
    font-size: 18px;
    display: flex;
    align-items: center;

    & > svg {
      margin-right: 10px;
    }

    & > span {
      text-transform: uppercase;
      font-family: "RoadRadio-Bold", sans-serif;
    }
  }
}
</style>
