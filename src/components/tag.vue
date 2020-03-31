<template>
  <div class="tag-wrap">
    <ul>
      <li v-for="(item, index) in colorList" :key="index" :style="{backgroundColor: item.value}">
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
          name: 'HTML5/CSS3',
          value: '#f0a7c4',
        },
        {
          name: 'JQuery',
          value: '#f0a7c4',
        },
        {
          name: 'JS / ES6',
          value: '#f0a7c4',
        },
        {
          name: 'Vue / vue-cli',
          value: '#76ddd6',
        },
        {
          name: '微信开发',
          value: '#76ddd6',
        },
        {
          name: '小程序',
          value: '#76ddd6',
        },
        {
          name: 'Bootstrap',
          value: '#f5d849',
        },
        {
          name: 'UI设计',
          value: '#f5d849',
        },
        {
          name: 'Git',
          value: '#f5d849',
        },
        {
          name: 'Hbuilder',
          value: '#c6d8d3',
        },
        {
          name: 'Apicloud',
          value: '#c6d8d3',
        },
        {
          name: 'ThinkPHP5',
          value: '#c6d8d3',
        },
        {
          name: 'NPM',
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
.tag-wrap {
  h5 {
    font-weight: normal;
    padding: 10px 5px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      line-height: 1.5;
      color: #fff;
      border-radius: @radius-px;
      padding: 4px 10px;
      margin: 5px;
      overflow: hidden;
    }
  }
}
</style>
