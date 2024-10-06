<template>
  <div id="main" class="main" :class="{ mobile: isMobile() }">
    <div class="header" :class="{ mobile: isMobile() }">
      <div class="introduce">
        <div class="greet">
          <h1>Hi There,<br />I'm Jimi1126</h1>
        </div>
        <v-btn
          class="about-me"
          color="primary"
          variant="outlined"
          @click="router.push('/about')"
          >About Me 关于我</v-btn
        >
        <p>
          我的最新工具 Builder For Web
          页面生成已经部署上线，该工具可以通过拖拽编写简历与页面，点击右侧可以免费使用与了解更多。
        </p>
        <div class="actions">
          <v-btn color="orange" variant="outlined" text="Share"></v-btn>
          <v-btn
            color="orange"
            variant="outlined"
            text="Explore"
            @click="openLink('https://builder.jimi1126.cn')"
          ></v-btn>
        </div>
      </div>
      <div
        class="slot-div ratio-16-9"
        @click="openLink('https://builder.jimi1126.cn')"
      >
        <img
          data-src="https://r2.jimi1126.cn/hotlink-ok/img/2024/09/24dd5fcf63f16748bf156c8442595712.jpg"
          class="lazyload"
          alt=" Builder For Web 概念图"
        />
      </div>
    </div>
    <div class="projects" :class="{ mobile: isMobile() }">
      <v-card
        v-for="(proj, i) in projects"
        :key="i"
        @click="openLink(proj.link)"
      >
        <div class="slot-div ratio-16-9">
          <img :data-src="proj.src" class="lazyload" />
        </div>
        <v-card-title>{{ proj.title }}</v-card-title>
        <v-card-text>{{ proj.text }} </v-card-text>
      </v-card>
    </div>
    <div class="plans" :class="{ mobile: isMobile() }">
      <div class="plan py-4 elevation-3">
        <v-icon icon="mdi-handshake-outline"></v-icon>
        <span>SERVICES | 服务</span>
        <span>软件开发 & 问题咨询</span>
      </div>
      <div class="plan py-4 elevation-3">
        <v-icon icon="mdi-open-source-initiative"></v-icon>
        <span>OPEN SOURCE | 开源</span>
        <span>共建开源社区</span>
      </div>
      <div class="plan py-4 elevation-3">
        <v-icon icon="mdi-post"></v-icon>
        <span>BLOG | 博文</span>
        <span>知识分享</span>
      </div>
      <div class="plan py-4 elevation-3">
        <v-icon icon="mdi-podcast"></v-icon>
        <span>PODCAST | 播客</span>
        <span>计划中...</span>
      </div>
    </div>
    <div class="contact elevation-3">
      <p>
        JIMI1126 是一名<b>前端开发工程师</b>，主攻
        <b>Web</b> 领域的软件开发<br />
        <span
          >我为企业或个人提供软件开发与咨询服务，同时在网上以 JIMI1126 的身份<br />
          参与开源社区建设与知识分享。</span
        >
      </p>
      <v-btn
        color="primary"
        @click="openLink('mailto:jimi1126_mid@163.com', '')"
        >Contact Me 联系我</v-btn
      >
    </div>
    <v-sheet
      class="questions-wrap"
      color="grey-darken-3"
      :class="{ mobile: isMobile() }"
    >
      <div class="questions" :class="{ mobile: isMobile() }">
        <div class="explain">
          <span>FAQs | 常见问题</span>
          <span
            ><b>常见问题解答：</b>如果您有其他问题，请发送电子邮件至
            jimi1126_mid@163.com。您也可以通过我的社交平台账号 @JIMI1126
            联系我，但请注意我可能很可能会漏看私信和评论。对于重要事项，请通过电子邮件与我联系，邮件我会天天看的。</span
          >
          <span
            ><b>FAQs:</b> For additional questions, email jimi1126_mid@163.com.
            I’ll answer commonly asked questions here. You can also use my
            social media account @JIMI1126 Contact me, but please note I may not
            see private messages or comments. Email is the best way to contact
            me for important matters</span
          >
        </div>
        <v-expansion-panels
          class="list"
          v-model="faqLists"
          multiple
          color="grey-darken-2"
        >
          <v-expansion-panel
            key="1"
            title="本站主要内容是什么？"
            text="本站主要是知识的分享，在这里可以看到我的最新产品与我在捣鼓什么东西。"
          ></v-expansion-panel>
          <v-expansion-panel
            key="2"
            title="会有哪些新项目吗？"
            text="目前正在进行中的项目是 Builder For Web，它是一个基于 Vue3 + TypeScript 的前端框架，旨在帮助用户轻松地创建网站、简历、博客等各种类型，目前完成了简历编辑器，并且支持高清导出PDF，后续想看看如何生成一个兼容性高的网站。"
          ></v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
import { useAnimate } from "@/hooks/animate";
import { isMobile } from "@/utils/is";
import { openLink } from "@/utils/pureFun";

const router = useRouter();
const {
  gsap,
  animateB2T,
  animateL2R,
  animateR2L,
  animateT2B,
  animateTT2B,
  animateTB2T,
  buildScrollAnimate,
} = useAnimate();

const faqLists = ref([]);
const projects = ref([
  {
    src: "https://r2.jimi1126.cn/hotlink-ok/img/2024/09/5a07b3ba8c068e56eafc2e03d1d3f379.jpg",
    title: "FrontEnd Stack",
    text: "前端开发需要具备的知识体系，以及一些开发工具的整理",
    link: "https://front-end-stack.pages.dev/",
  },
  {
    src: "https://r2.jimi1126.cn/hotlink-ok/img/2024/09/05f59acacb734550b7786e16d89fdad2.jpg",
    title: "Jimi Blog",
    text: "一个用 Nuxtjs 搭建的个人博客，能快速搭建自己的博客，主题好看，集成SEO，以及能够自动发布 ",
    link: "https://blog.jimi1126.cn",
  },
  {
    src: "https://r2.jimi1126.cn/hotlink-ok/img/2024/09/a121447b3ba241938e5454b9fec52c87.jpg",
    title: "Markdown Processer",
    text: "一个通过插件方式实现 Markdown 的编辑与转换为 HTML 的网页应用",
    link: "https://md.jimi1126.cn",
  },
]);

let gsapCtx: gsap.Context = gsap.context(() => {}, "home-main");
function setAnimate() {
  gsapCtx.revert();
  gsapCtx.add(() => {
    buildScrollAnimate("#main .header .introduce > *", animateL2R);
    buildScrollAnimate(`#main .header img`, animateT2B);
    buildScrollAnimate(`#main .projects .v-card`, animateTT2B, true);
    buildScrollAnimate("#main .plans  > *", animateTB2T, true);
    buildScrollAnimate("#main .contact", animateB2T);
    buildScrollAnimate("#main .questions .explain", animateL2R);
    buildScrollAnimate("#main .questions .list", animateR2L);
  });
}

onMounted(() => {
  setAnimate();
});
onUnmounted(() => {
  gsapCtx && gsapCtx.revert();
});
</script>
<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: var(--space-page);
  align-items: center;
  text-transform: capitalize;
  font-style: normal;
  text-decoration: none;
  letter-spacing: 0.1rem;

  .slot-div {
    width: 100%;
    position: relative;
    height: 0;

    &.ratio-16-9 {
      padding-top: 56.25%;
    }

    &.ratio-4-3 {
      padding-top: 75%;
    }

    &.ratio-1-1 {
      padding-top: 100%;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .header {
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-items: center;
    margin-top: var(--space-page);
    width: 100%;
    max-width: var(--max-width);
    gap: var(--space-component);

    &.mobile {
      grid-template-columns: 1fr;
      align-items: center;
    }

    .introduce {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      gap: var(--space-content);

      .greet h1 {
        font-size: var(--font-size-xxl);
        font-weight: 400;
        line-height: 1.2em;
        letter-spacing: 0;
      }

      .about-me {
        width: 50%;
      }

      p {
        font-size: var(--font-size-m);
        font-weight: 300;
        text-transform: none;
        line-height: 1.5;
        letter-spacing: 0.1rem;
      }

      .actions {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-text);
        width: 80%;
      }
    }
  }

  .projects {
    display: grid;
    width: 100%;
    max-width: var(--max-width);
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-component);

    &.mobile {
      grid-template-columns: 1fr;
    }

    .v-card-title {
      font-size: var(--font-size-m);
      font-weight: 500;
      text-transform: none;
      line-height: 1.5;
      letter-spacing: 1px;
    }

    .v-card-text {
      font-size: var(--font-size-base);
      font-weight: 300;
      text-transform: none;
      line-height: 1.5;
      letter-spacing: 1px;
    }
  }

  .plans {
    display: grid;
    width: 100%;
    max-width: var(--max-width);
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-content);
    text-transform: none;
    line-height: 1.5;
    letter-spacing: 1px;

    &.mobile {
      grid-template-columns: 1fr;
    }

    .plan {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-content);

      .v-icon {
        font-size: var(--font-size-xxl);
      }

      span:first-of-type {
        font-size: var(--font-size-m);
        font-weight: 500;
      }
      span:last-of-type {
        font-size: var(--font-size-base);
        font-weight: 300;
      }
    }
  }

  .contact {
    display: flex;
    width: 100%;
    max-width: var(--max-width);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--space-component);
    padding: var(--space-page);

    p {
      position: relative;
      text-align: center;
      font-size: var(--font-size-l);
      font-weight: 400;
      text-transform: capitalize;
      font-style: normal;
      text-decoration: none;
      line-height: 1.2;
      letter-spacing: 1px;
      span {
        font-size: var(--font-size-m);
        font-weight: 300;
        color: #9e9e9e;
      }

      &::before,
      &::after {
        font-weight: bold;
        position: absolute;
        top: 65%;
        opacity: 0.5;
        color: #e1e1e1;
      }

      &::before {
        content: "“";
        right: 100%;
        transform: scale(6) translateX(-16px);
      }
      &::after {
        content: "”";
        left: 100%;
        transform: scale(6) translateX(16px);
      }
    }
  }

  .questions-wrap {
    width: 100%;
    height: fit-content;
    padding: var(--space-page) 0;
  }

  .questions {
    display: grid;
    width: 100%;
    max-width: var(--max-width);
    grid-template-columns: 1fr 2fr;
    gap: var(--space-page);
    margin: auto;

    &.mobile {
      grid-template-columns: 1fr;
    }

    .explain {
      display: flex;
      flex-direction: column;
      gap: var(--space-text);

      span:nth-child(1) {
        font-size: var(--font-size-l);
        font-weight: 600;
        text-transform: capitalize;
        font-style: normal;
        text-decoration: none;
        line-height: 1.2;
        letter-spacing: 1px;
        -webkit-text-stroke-color: #000;
        stroke: #000;
      }

      span:nth-child(n + 2) {
        font-size: var(--font-size-base);
        font-weight: 300;
        text-transform: none;
        font-style: normal;
        text-decoration: none;
        text-wrap: wrap;
        word-break: break-all;
        line-height: 1.5;
        letter-spacing: 1px;
      }
    }

    .list {
      height: fit-content;
      gap: var(--space-component);
      .v-expansion-panel {
        border-radius: 0;
      }
      :deep(.v-expansion-panel-title) {
        font-size: var(--font-size-m);
        font-weight: 500;
        text-transform: none;
        font-style: normal;
        text-decoration: none;
        line-height: 1.5;
      }
      :deep(.v-expansion-panel-text) {
        font-size: var(--font-size-base);
        font-weight: 300;
        text-transform: none;
        font-style: normal;
        text-decoration: none;
        line-height: 1.5;
      }
    }
  }
}
</style>
