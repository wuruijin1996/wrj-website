<template>
  <div class="tag-wrap">
    <ul>
      <li v-for="(item, index) in colorList" :key="index" :style="{backgroundColor: item.value}">
        <div class="point"></div>
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TagBox',
  props: {
    msg: String,
  },
  data() {
    return {
      colorList: [
        {
          name: '黑色',
          value: '#5d606f',
        },
        {
          name: '深灰色',
          value: '#acb4c4',
        },
        {
          name: '灰色',
          value: '#cdd2db',
        },
        {
          name: '背景灰',
          value: '#fafafb',
        },
        {
          name: '玫红',
          value: '#db2a70',
        },
        {
          name: '辅助色（浅绿）',
          value: '#76ddd6',
        },
        {
          name: '辅助色（浅粉）',
          value: '#f0a7c4',
        },
        {
          name: '辅助色（浅黄）',
          value: '#ffe04c',
        },
        {
          name: '辅助色（暗浅绿）',
          value: '#c6d8d3',
        },
      ],
    };
  },
  methods: {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../common/less/var";
.tag-wrap {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      color: #fff;
      border-radius: @radius-px;
      padding: 4px 10px;
      margin: 5px;
      overflow: hidden;
      position: relative;
      &:hover {
        .point {
          transform: rotate(360deg);
        }
      }
      .point {
        width: 6px;
        height: 6px;
        position: absolute;
        top: -2px;
        left: -2px;
        background-color: #fff;
        transition: all 1s ease-in-out;
      }
    }
  }
}
</style>
