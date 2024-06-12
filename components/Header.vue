<template>
  <header class="header">
    <div class="header__inner">
      <NuxtLink class="header__logo" to="/"> ALEM SOLUTIONS </NuxtLink>

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
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.header {
  padding-bottom: 100px;

  // @media screen and (min-width: 768px) {
  //   font-size: 1.5em;
  // }

  &__inner {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // max-width: 1710px;
    // margin: 0 auto;
    // position: relative;
    // z-index: 2;
  }

  &__logo {
    text-decoration: none;
    color: $primary;
    font-size: 18px;

    &:hover {
      color: $secondary;
    }
  }

  &__nav {
    display: none;

    @media screen and (min-width: 1025px) {
      display: block;
    }
  }

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
    font-size: 18px;

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
    margin-right: 2em;
    cursor: pointer;
    text-transform: uppercase;
    display: none;

    @media screen and (min-width: 768px) {
      display: flex;
      align-items: center;
      gap: 1em;
    }

    & > span {
      font-family: "RoadRadio", sans-serif;
      white-space: nowrap;
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
      margin-right: 1em;
    }

    & > span {
      text-transform: uppercase;
      font-family: "RoadRadio-Bold", sans-serif;
    }
  }
}
</style>
