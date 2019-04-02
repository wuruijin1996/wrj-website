<template>
  <div class="works-wrap">
    <ul class="works-list">
      <li class="works-item" v-for="(item, index) in worksList" :key="index">
        <div class="item-content">
          <a :href="item.url" target="_blank" class="frame-box">
            <!-- <iframe :src="item.url"></iframe> -->
            <img :src="item.imgUrl">
          </a>
          <div class="info">
            <a class="name" :href="item.url" target="_blank" title="新页面打开">{{item.name}}</a>
            <p>{{item.desc}}</p>
          </div>
        </div>
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
      worksList: [
        {
          name: 'WU-UI',
          desc: '简易消息提示UI，原生JS，各框架都可以接入使用',
          imgUrl: 'http://www.wuruijin.cn/works-img/wuui.png',
          url: 'http://www.wuruijin.cn/wuui/',
        },
        {
          name: '手机诊断室',
          desc: '一个可以测试你手机值多钱的小工具(准不准我不知道~)',
          imgUrl: 'http://www.wuruijin.cn/works-img/phone.png',
          url: 'http://www.wuruijin.cn/works/phone-test/',
        },
        {
          name: '蜕炒官网',
          desc: '一个过气的高端美发类官网',
          imgUrl: 'http://www.wuruijin.cn/works-img/turn.png',
          url: 'http://www.wuruijin.cn/works/turn/',
        },
        {
          name: '滚动抽奖',
          desc: '一个三联动滚动抽奖工具',
          imgUrl: 'http://www.wuruijin.cn/works-img/lucky-draw.png',
          url: 'http://www.wuruijin.cn/works/luckyDraw/',
        },
        {
          name: '幸运大转盘',
          desc: '一个大转盘抽奖工具',
          imgUrl: 'http://www.wuruijin.cn/works-img/turntable.png',
          url: 'http://www.wuruijin.cn/works/turntable/',
        },
        {
          name: '仿探探效果',
          desc: '一个仿探探左右滑动动画效果',
          imgUrl: 'http://www.wuruijin.cn/works-img/tantan.png',
          url: 'http://www.wuruijin.cn/works/viewSwiper/',
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
@import "../../common/less/var";
.works-wrap {
  .works-list {
    display: flex;
    flex-wrap: wrap;
    .works-item {
      width: 50%;
      padding: 10px;
      .item-content {
        background-color: #fff;
        border-radius: @radius-px;
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(0,0,0,0.18);
      }
      .info {
        padding: 10px;
        .name {
          font-size: 16px;
          font-weight: bold;
        }
        p {
          padding-top: 10px;
        }
      }
      a {
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .frame-box {
      display: block;
      position: relative;
      padding-top: 60%;
      border: 10px solid @black;
      border-radius: @radius-px;
      overflow: hidden;
      &:hover {
        img {
          filter: brightness(.6);
          transform: scale(1.05);
        }
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: all 1s ease 0s;
      }
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-width: 0px;
      }
    }
  }
}

@media screen and (max-width: 640px)  {
  .works-wrap .works-list .works-item {
    width: 100%;
  }
}

</style>
