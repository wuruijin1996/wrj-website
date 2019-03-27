<template>
  <div class="header">
    <div class="header-bg">
      <h1>Hello, welcome</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../common/less/var";
.header {
  width: 100%;
  .header-bg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: #5b6598;
    background-image: url(../common/images/bg4.jpg);
    background-position: 0 50%;
    background-size: 200%;
    background-blend-mode: soft-light;
    animation: scaleBg 20s;
  }
  h1 {
    font-size: 3rem;
    color: #fff;
    will-change: transform;
    mix-blend-mode: overlay;
    pointer-events: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}

@-webkit-keyframes scaleBg {
	0% {
		background-size: 200%;
	}
	50% {
		background-size: 100%;
  }
  100% {
    background-size: 100%;
  }
}

</style>
