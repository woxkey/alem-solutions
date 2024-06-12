<template>
  <section class="home">
    <div class="home__inner">
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
        <!-- <img class="bg-right-top" src="~/assets/images/bg-right-top.png" alt="" />
        <img
          class="bg-right-center"
          src="~/assets/images/bg-right-center.png"
          alt=""
        />
        <img
          class="bg-right-bottom"
          src="~/assets/images/bg-right-bottom.png"
          alt=""
        /> -->
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.home {
  @media screen and (min-width: 480px) {
    font-size: 1.4em;
  }

  @media screen and (min-width: 660px) {
    font-size: 1.7em;
  }

  @media screen and (min-width: 768px) {
    font-size: 2em;
  }

  @media screen and (min-width: 1020px) {
    font-size: 2.3em;
  }

  &__inner {
    padding: 20px;

    @media screen and (min-width: 1020px) {
      display: flex;
      justify-content: center;
    }
  }

  &__top {
    // text-align: start;
    position: relative;
    z-index: 2;
  }

  &__title {
    font-family: "RoadRadio-Bold", sans-serif;
    font-size: 0.625em;
    color: $secondary;

    @media screen and (min-width: 1020px) {
      padding-left: 80px;
    }

    @media screen and (min-width: 1200px) {
      padding-left: 100px;
    }
  }

  &__description {
    font-family: "RoadRadio-Black", sans-serif;
    font-size: 3.6em;
    margin: 0;

    & > span:first-child {
      @media screen and (min-width: 1020px) {
        padding-left: 210px;
      }

      @media screen and (min-width: 1200px) {
        padding-left: 270px;
      }
      color: transparent;
      -webkit-text-stroke: 1px white;
      position: relative;

      // &::before {
      //   display: none;
      //   content: "";
      //   position: absolute;
      //   top: 10%;
      //   left: 20%;
      //   width: 40%;
      //   height: 50%;
      //   background-color: $secondary;
      //   border-radius: 50%;
      //   mix-blend-mode: saturation;
      //   z-index: 2;
      // }
    }

    & > span:nth-of-type(2) {
      @media screen and (min-width: 1020px) {
        padding-left: 80px;
      }

      @media screen and (min-width: 1200px) {
        padding-left: 100px;
      }
    }

    & > span:nth-of-type(3) {
      @media screen and (min-width: 1020px) {
        padding-left: 210px;
      }

      @media screen and (min-width: 1200px) {
        padding-left: 270px;
      }
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
  object-fit: contain;
  z-index: 0;
}

.bg-left-top {
  top: 5%;
  left: -90%;
  width: 100%;
  object-fit: cover;
  height: 30%;
  object-position: right;
}

.bg-left-bottom {
  top: 40%;
  left: -90%;
  width: 100%;
  object-fit: cover;
  height: 40%;
  object-position: right;
}

.bg-center-top {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 20%;
  object-fit: cover;
  object-position: center;
}

.bg-center-center {
  top: 25%;
  width: 70%;
  left: 50%;
  transform: translateX(-50%);
  // height: 30vh;
}

.bg-center-bottom {
  top: 55%;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  // height:s 30vh;
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
