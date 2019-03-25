<template>
  <div class="index">
    <div class="index-left">
      <self-info></self-info>
    </div>
    <div class="index-right">
      <works-list></works-list>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SelfInfo from '@/components/selfInfo.vue';
import WorksList from '@/components/worksList.vue';

export default {
  name: 'home',
  components: {
    SelfInfo,
    WorksList,
  },
};
</script>

<style lang="less" scoped>
@import "../../common/less/var";
.index {
  display: flex;
  max-width: 1220px;
  padding: 0 10px;
  margin: 0 auto;
  .index-left {
    width: 400px;
    border-radius: @radius-px;
    overflow: hidden;
  }
  .index-right {
    flex: 1;
    padding: 0 10px;
  }
}
@media screen and (max-width: 640px)  {
  .index {
    flex-wrap: wrap;
    .index-left {
      width: 100%;
    }
    .index-right {
      width: 100%;
      padding: 0;
    }
  }
}
</style>
