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
            <p :title="item.desc">{{item.desc}}</p>
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
          name: 'Kin custom (国内访问比较慢)',
          desc: '为艺术家们提供设计和印刷自己设计的产品，并开设自己的店铺',
          imgUrl: 'http://www.wuruijin.cn/works-img/kincustom.jpg',
          url: 'https://www.kincustom.com/',
        },
        {
          name: 'WU-UI',
          desc: '简易消息提示UI，原生JS，大多数框架都可以接入使用',
          imgUrl: 'http://www.wuruijin.cn/works-img/wuui.png',
          url: 'http://www.wuruijin.cn/wuui/',
        },
        {
          name: '分分钟线上便利店 （移动端）',
          desc: '可以在线下单的便利店',
          imgUrl: 'http://www.wuruijin.cn/works-img/every-minute.jpg',
          url: 'http://www.wuruijin.cn/works/everyMinute/',
        },
        {
          name: '蜕潮官网',
          desc: '一个过气的高端美发类官网',
          imgUrl: 'http://www.wuruijin.cn/works-img/turn.png',
          url: 'http://www.wuruijin.cn/works/turn/',
        },
        {
          name: 'Select美化插件',
          desc: '就是一个美化 select 原生组件的小插件',
          imgUrl: 'http://www.wuruijin.cn/works-img/select.jpg',
          url: 'https://www.jq22.com/jquery-info17583',
        },
        {
          name: '手机诊断室 （移动端）',
          desc: '一个可以测试你手机值多钱的小工具(准不准我不知道~)',
          imgUrl: 'http://www.wuruijin.cn/works-img/phone.png',
          url: 'http://www.wuruijin.cn/works/phone-test/',
        },
        {
          name: '幸运大转盘 （移动端）',
          desc: '一个大转盘抽奖工具',
          imgUrl: 'http://www.wuruijin.cn/works-img/turntable.png',
          url: 'http://www.wuruijin.cn/works/turntable/',
        },
        {
          name: '仿探探效果 （移动端）',
          desc: '一个仿探探左右滑动动画效果',
          imgUrl: 'http://www.wuruijin.cn/works-img/tantan.png',
          url: 'http://www.wuruijin.cn/works/viewSwiper/',
        },
      ],
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.18);
      }
      .info {
        padding: 10px;
        .name {
          font-size: 16px;
          font-weight: bold;
        }
        p {
          padding-top: 10px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
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
          filter: brightness(0.6);
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

@media screen and (max-width: 640px) {
  .works-wrap .works-list .works-item {
    width: 100%;
  }
}
</style>
