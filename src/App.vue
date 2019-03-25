<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="less">
// 重置样式表
@import './common/css/reset.css';
@import './common/less/var';

html, body {
    background-color: @gray-bg;
    color: @black;
}

html {
  a {
      color: @black;
    }
  p {
    color: @gray-dark;
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
