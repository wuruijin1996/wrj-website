<template>
  <div class="index">
    <div class="index-left">
      <SelfInfo></SelfInfo>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SelfInfo from '@/components/selfInfo.vue';

export default {
  name: 'home',
  components: {
    SelfInfo,
  },
};
</script>
<style lang="less" scoped>
.index {
  display: flex;
  .index-left {
    width: 400px;
  }
}
</style>

