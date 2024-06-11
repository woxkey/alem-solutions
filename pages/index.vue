<template>
  <section class="home">
    <div class="home__top">
      <h3 class="home__title">We are Alem Solutions</h3>
      <h1 class="home__description">
        <span>We help</span>
        <br />
        <span>ideas</span>
        <br />
        <span>to change</span>
        <br />
        <span>the world</span>
      </h1>
    </div>
    <div>
      <img class="bg-left-top" src="~/assets/images/bg-left-top.png" alt="" />
      <img
        class="bg-left-bottom"
        src="~/assets/images/bg-left-bottom.png"
        alt=""
      />
      <img
        class="bg-center-top"
        src="~/assets/images/bg-center-top.png"
        alt=""
      />
      <img
        class="bg-center-center"
        src="~/assets/images/bg-center-center.png"
        alt=""
      />
      <img
        class="bg-center-bottom"
        src="~/assets/images/bg-center-bottom.png"
        alt=""
      />
      <img class="bg-right-top" src="~/assets/images/bg-right-top.png" alt="" />
      <img
        class="bg-right-center"
        src="~/assets/images/bg-right-center.png"
        alt=""
      />
      <img
        class="bg-right-bottom"
        src="~/assets/images/bg-right-bottom.png"
        alt=""
      />
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.home {
  display: flex;
  justify-content: center;

  &__top {
    text-align: start;
    position: relative;
    z-index: 2;
  }

  &__title {
    font-family: "RoadRadio-Bold", sans-serif;
    font-size: 1.5em;
    color: $secondary;
    padding-left: 6.25em;
  }

  &__description {
    font-family: "RoadRadio-Black", sans-serif;
    font-size: 8.75em;
    margin: 0;

    & > span:first-child {
      padding-left: 2em;
      color: transparent;
      -webkit-text-stroke: 1px white;
      position: relative;

      &::before {
        display: none;
        content: "";
        position: absolute;
        top: 10%;
        left: 20%;
        width: 40%;
        height: 50%;
        background-color: $secondary;
        border-radius: 50%;
        mix-blend-mode: saturation;
        z-index: 2;
      }
    }

    & > span:nth-of-type(2) {
      padding-left: 1.07em;
    }

    & > span:nth-of-type(3) {
      padding-left: 2em;
    }

    & > span:last-child {
      color: transparent;
      -webkit-text-stroke: 1px white;
    }
  }
}

.bg-left-top,
.bg-left-bottom,
.bg-center-top,
.bg-center-center,
.bg-center-bottom,
.bg-right-top,
.bg-right-center,
.bg-right-bottom {
  position: absolute;
  object-fit: cover;
  z-index: 1;
}

.bg-left-top {
  top: 5vh;
  left: 0;
  width: 30vw;
  height: 60vh;
}

.bg-left-bottom {
  top: 70vh;
  left: 0;
  width: 30vw;
  height: 30vh;
}

.bg-center-top {
  top: 0vh;
  left: 35vw;
  width: 30vw;
  height: 40vh;
}

.bg-center-center {
  top: 45vh;
  left: 35vw;
  width: 30vw;
  height: 30vh;
}

.bg-center-bottom {
  top: 80vh;
  left: 35vw;
  width: 30vw;
  height: 30vh;
}

.bg-right-top {
  top: 10vh;
  left: calc(100% - 30vw);
  width: 30vw;
  height: 30vh;
}

.bg-right-center {
  top: 45vh;
  left: calc(100% - 30vw);
  width: 30vw;
  height: 30vh;
}

.bg-right-bottom {
  top: 80vh;
  left: calc(100% - 30vw);
  width: 30vw;
  height: 30vh;
}
</style>
