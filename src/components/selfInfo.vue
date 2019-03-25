<template>
  <div class="self-info-wrap">
    <div class="content">
      <!-- 我的信息 -->
      <div class="my-info">
        <div class="avator">
          <img
            :src="avator"
          >
        </div>
        <div class="name">
          <h4>Hello</h4>
          <p>hello world</p>
        </div>
      </div>
      <!-- 数据图表 -->
      <v-chart theme="macarons" :options="polar" :auto-resize="true" class="w-chart"/>
      <!-- 标签 -->
      <tag-box></tag-box>
    </div>
  </div>
</template>

<script>
import TagBox from '@/components/tag.vue';

export default {
  name: 'SelfInfo',
  components: {
    TagBox,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      avator: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2353372741,1143881671&fm=27&gp=0.jpg',
      polar: {
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: false, readOnly: false },
            magicType: { show: false, type: ['line', 'bar'] },
            restore: { show: false },
            saveAsImage: { show: false },
          },
        },
        tooltip: {
          trigger: 'axis',
        },
        calculable: true,
        xAxis: [
          {
            type: 'value',
            boundaryGap: [0, 0.01],
          },
        ],
        yAxis: [
          {
            type: 'category',
            data: ['html', 'css', 'js', 'php'],
          },
        ],
        series: [
          {
            name: '掌握情况',
            type: 'bar',
            itemStyle: {
              normal: {
                color(params) {
                  const colorList = [
                    '#76ddd6', '#f0a7c4', '#ffe04c', '#c6d8d3',
                  ];
                  return colorList[params.dataIndex];
                },
              },
            },
            barWidth: 24,
            data: [85, 85, 80, 20],
          },
        ],
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../common/less/var";
.self-info-wrap {
  background-color: #fff;
  padding: 40px 20px;
  .name {
    text-align: center;
    p {
      color: @gray-dark;
    }
  }
  .avator {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 20px;
  }
}
.w-chart {
  width: 100%;
  height: 260px;
}
</style>
