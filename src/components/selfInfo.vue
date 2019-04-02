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
          <p>
            <i class="iconfont icon-sex"></i>
            <span><i class="iconfont icon-man" title="男!"></i></span>
          </p>
          <p>
            <i class="iconfont icon-email"></i>
            <span>wuruijin1996@163.com</span></p>
          <p>
            <i class="iconfont icon-phone"></i>
            <a href="tel:18559997346">18559997346</a>
          </p>
          <div class="btn-resume">
            <a href="http://www.wuruijin.cn/works/resume/" target="_blank">查看详细简历</a>
          </div>
        </div>
      </div>
      <!-- 数据图表 -->
      <!-- <v-chart theme="macarons" :options="polar" :auto-resize="true" class="w-chart"/> -->
      <div id="myChart"></div>
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
      // 图标数据
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
        // grid 组件离容器左侧的距离
        grid: {
          left: 46,
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
            data: ['HTML', 'CSS', 'ES6', 'JS', 'PHP'],
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
                    '#76ddd6', '#f0a7c4', '#ffe04c', '#c6d8d3', '#76ddd6',
                  ];
                  return colorList[params.dataIndex];
                },
              },
            },
            barWidth: 20,
            data: [85, 85, 60, 80, 30],
          },
        ],
      },
    };
  },
  mounted() {
    this.drawBarChart();
  },
  methods: {
    /**
     * 配置echarts 从外引入的
     *  */
    drawBarChart() {
      this.myChart = echarts.init(document.getElementById('myChart'));
      this.myChart.setOption(this.polar);
    },
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
    padding: 0 10px;
    h4 {
      margin-bottom: 10px;
    }
    p {
      display: flex;
      align-items: center;
      text-align: left;
      color: @gray-dark;
      padding: 2px 0;
      i {
        margin-right: 10px;
      }
      a {
        color: inherit;
      }
    }
    .btn-resume {
      padding-top: 20px;
      a {
        display: inline-block;
        color: #fff;
        background-color: @roseRed;
        padding: 8px 15px;
        border-radius: @radius-px;
        overflow: hidden;
        &:hover {
          opacity: .9;
        }
      }
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
#myChart {
  width: 100%;
  height: 260px;
}
@media screen and (max-width: 640px)  {
  .self-info-wrap {
    .name {
      p {
        a {
          text-decoration: underline;
        }
      }
    }
    .avator {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto 20px;
    }
  }
}
</style>
