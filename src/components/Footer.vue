<template>
  <v-footer pad-top="3" absolute bottom :color="primaryColor">
    <div class="main" :class="{ mobile: isMobile() }">
      <div class="introduce" :class="{ mobile: isMobile() }">
        <v-img
          :width="120"
          aspect-ratio="1/1"
          cover
          src="https://r2.jimi1126.cn/favicon.svg"
          color="success"
        ></v-img>
        <span
          >JIMI1126
          是一名前端开发工程师与开源建造者，我为企业和个人提供软件开发与咨询服务，帮助他们更好的展开业务，在业余时间，我会通过网络分享我的作品和想法心得，致力于帮助前端开发者们提升专业技能，关注身心健康，并有效地管理自身的情绪和精力。</span
        >
        <span>Copyright &copy;2024 JIMI1126, All rights reserved</span>
      </div>
      <div class="business" :class="{ mobile: isMobile() }">
        <div class="item">
          <span>SERVICES | 服务</span>
          <span>PC端应用</span>
          <span>移动端应用</span>
          <span>小程序应用</span>
          <span>网站设计与开发</span>
        </div>
        <div class="item">
          <span>OPEN SOURCE | 开源</span>
          <span>Builder For Web</span>
          <span>Unitest</span>
          <span>Print Big Char</span>
          <span>Encaps Proxy</span>
        </div>
        <div class="item">
          <span>BLOG | 博文</span>
          <span>我的博客</span>
          <span>公众号</span>
          <span>掘金</span>
          <span>简书</span>
        </div>
        <div class="item">
          <span>PODCAST | 播客</span>
          <span>网易云音乐</span>
          <span>喜马拉雅</span>
        </div>
        <div class="links" :class="{ mobile: isMobile() }">
          <v-btn
            icon="mdi-wechat"
            variant="tonal"
            @click="wechatQRVisible = true"
          ></v-btn>
          <v-btn
            icon="mdi-github"
            variant="tonal"
            @click="openLink('https://github.com/Jimi1126')"
          ></v-btn>
          <v-btn
            icon="mdi-email"
            variant="tonal"
            @click="openLink('mailto:jimi1126_mid@163.com', '')"
          ></v-btn>
        </div>
      </div>
    </div>
    <div class="filings">
      <span
        text
        @click="openLink('https://beian.miit.gov.cn/#/Integrated/index')"
        >桂ICP备2024026330号-1</span
      >
    </div>
  </v-footer>
  <v-dialog v-model="wechatQRVisible" width="auto">
    <v-card width="400" title="">
      <v-card-text>
        <v-img
          aspect-ratio="4/3"
          cover
          src="https://r2.jimi1126.cn/img/2024/09/26ee0b5d28a0cd04f88401310645a608.jpg"
        ></v-img>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { useDark } from "@/hooks/dark";
import { isMobile } from "@/utils/is";
import { openLink } from "@/utils/pureFun";

const { primaryColor } = useDark();
const wechatQRVisible = ref(false);
</script>
<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;

  .main {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: var(--space-component);
    padding: var(--space-page) var(--space-page) var(--space-content)
      var(--space-page);

    &.mobile {
      grid-template-columns: 1fr;
    }

    .introduce {
      display: flex;
      flex-direction: column;
      gap: var(--space-content);
      &.mobile {
        align-items: center;
      }
      span {
        font-size: var(--font-size-base);
        font-weight: 300;
        line-height: 1.6em;
      }
      span:last-child {
        font-size: var(--font-size-s);
      }
    }

    .business {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: auto max-content;
      justify-items: center;
      gap: var(--space-content);
      &.mobile {
        grid-template-columns: 1fr;
      }
      .item {
        display: flex;
        flex-direction: column;

        span:nth-child(1) {
          font-size: var(--font-size-m);
          font-weight: 500;
          line-height: 2em;
        }
        span:nth-child(n + 2) {
          font-size: var(--font-size-base);
          color: #ccc;
          font-weight: 300;
          line-height: 1.6em;
        }
      }

      .links {
        grid-column-start: span 4;
        justify-self: end;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--space-text);
        &.mobile {
          grid-column-start: span 1;
          justify-self: unset;
          gap: 80px;
        }
      }
    }
  }
  .filings {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3rem;
    font-size: var(--font-size-s);
    opacity: 0.8;
    span:hover {
      cursor: pointer;
    }
  }
}
</style>
