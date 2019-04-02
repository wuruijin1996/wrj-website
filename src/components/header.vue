<template>
  <div class="header">
    <div class="header-bg">
      <h1><i class="iconfont icon-smile"></i>{{hello}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      hello: 'Hello, welcome',
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
    height: 150px;
    background-color: #5b6598;
    background-image: url(../common/images/bg3.jpg);
    background-position: 0 20%;
    background-size: cover;
    background-blend-mode: soft-light;
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
    i {
      font-size: inherit;
      margin-right: 10px;
    }
  }
}

@media screen and (max-width: 640px)  {
  .header {
    .header-bg {
      height: 120px;
    }
    h1 {
      font-size: 2rem;
    }
  }
}

</style>
