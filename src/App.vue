<template>
  <div id="app">
    <Header></Header>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="less">
// 重置样式表
@import './common/css/reset.css';

html, body {
    background-color: @gray-bg;
    color: @black;
}

a {
    color: @black;
  }
p {
  color: @gray-dark;
}

#app {
  font-family: "Microsoft YaHei, Arial, sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  color: @black;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #1e1b22;
    &.router-link-exact-active {
      color: @roseRed;
    }
  }
}
</style>
