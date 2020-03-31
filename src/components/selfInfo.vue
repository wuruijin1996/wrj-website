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
          <h4>吴瑞进 (三年经验)</h4>
          <ul class="info-ul">
            <li>
              <i class="iconfont icon-sex"></i>
              <span>男 24岁</span>
            </li>
            <li>
              <i class="iconfont icon-email"></i>
              <span>wuruijin1996@163.com</span></li>
            <li>
              <i class="iconfont icon-phone"></i>
              <a href="tel:18559997346">18559997346</a>
            </li>
            <li>
              <i class="iconfont icon-github"></i>
              <a href="https://github.com/wuruijin1996" target="_blank">Github 个人主页</a>
            </li>
            <li>
              <i class="iconfont icon-jquery"></i>
              <a href="https://www.jq22.com/mem350037" target="_blank">JQ22 个人主页</a>
            </li>
          </ul>
          <div class="btn-resume">
            <a href="http://www.wuruijin.cn/works/resume/" target="_blank">查看详细简历</a>
            <a href="http://www.wuruijin.cn/works/pdf" target="_blank">PDF简历</a>
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
            data: ['PHP', 'VUE', 'ES6', 'JS', 'CSS', 'HTML'],
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
            barWidth: 12,
            data: [20, 65, 65, 82, 90, 90],
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
.self-info-wrap {
  background-color: #fff;
  padding: 40px 20px;
  border-radius: 4px;
  overflow: hidden;
  .name {
    text-align: center;
    padding: 0 10px;
    h4 {
      margin-bottom: 10px;
    }
    .info-ul {
      li {
        display: flex;
        align-items: center;
        text-align: left;
        color: @gray-dark;
        padding: 4px 0;
      i {
        margin-right: 10px;
      }
      a {
        color: inherit;
        &:hover {
          text-decoration: underline;
        }
      }
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
        margin: 0 10px;
        &:hover {
          opacity: .9;
        }
      }
    }
  }
  .avator {
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 20px;
    img {
      position: relative;
      z-index: 2;
    }
    &::after {
      content: '暂无头像☹';
      width: 100%;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      transform: translate(-50%, -50%);
    }
    &:hover {
      img {
        display: none;
      }
    }
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
