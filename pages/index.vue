<template>
  <div class="container">
    <div>
      <h3>We are Alem Solutions</h3>
      <h1>We help ideas to change the world</h1>
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
      <div class="test-overflow">
        <img
          class="bg-right-top"
          src="~/assets/images/bg-right-top.png"
          alt=""
        />
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
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
h1 {
  font-size: 140px;
  margin: 0;
}

h3 {
  font-size: 24px;
}

.bg-left-top {
  position: absolute;
  top: 5%;
  left: 0;
  width: 591px;
  height: 614px;
}

.bg-left-bottom {
  position: absolute;
  top: calc(10% + 614px);
  left: 0;
  width: 591px;
  height: 328px;
}

.bg-center-top {
  position: absolute;
  top: 0;
  left: 38%;
  width: 651px;
  height: 425px;
  z-index: -100;
}

.bg-center-center {
  position: absolute;
  top: calc(4rem + 425px);
  left: 38%;
  width: 651px;
  height: 490px;
}

.bg-center-bottom {
  position: absolute;
  top: calc(4rem + 4rem + 425px + 490px);
  left: 38%;
  width: 651px;
  height: 401px;
}

.bg-right-top {
  position: absolute;
  top: 5%;
  left: 80%;
  width: 594px;
  height: 336px;
  z-index: -100;
}

.bg-right-center {
  position: absolute;
  top: calc(4rem + 5% + 336px);
  left: 80%;
  width: 594px;
  height: 448px;
}

.bg-right-bottom {
  position: absolute;
  top: calc(4rem + 4rem + 5% + 336px + 448px);
  left: 80%;
  width: 594px;
  height: 447px;
}
</style>
