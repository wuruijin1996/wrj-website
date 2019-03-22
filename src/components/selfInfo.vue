<template>
  <div class="self-info-wrap">
    <div class="content">
      <div class="my-info">
        <div class="avator">
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2353372741,1143881671&fm=27&gp=0.jpg"
          >
        </div>
        <div class="name">
          <h4>Hello</h4>
          <p>hello world</p>
        </div>
      </div>
      <v-chart theme="macarons" :options="polar" :auto-resize="true" style="width: 100%; height: 260px;"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelfInfo",
  props: {
    msg: String
  },
  data() {
    return {
      polar: {
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        tooltip : {
          trigger: 'axis'
        },
        calculable: true,
        xAxis: [
          {
            type: "value",
            boundaryGap: [0, 0.01]
          }
        ],
        yAxis: [
          {
            type: "category",
            data: ["html", "css", "js", "php"]
          }
        ],
        series: [
          {
            name: "掌握情况",
            type: "bar",
            data: [85, 85, 80, 20]
          }
        ]
      }
    };
  }
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
      color: @gray;
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
</style>
