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
    background-color: #fff;
  }
  h1 {
    font-size: 30px;
  }
}

</style>
