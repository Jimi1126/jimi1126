<template>
  <div id="main" class="main">
    <div class="header">
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
      <v-card class="w-100" @click="openLink('https://builder.jimi1126.cn')">
        <v-img
          class="w-100"
          aspect-ratio="16/9"
          cover
          src="https://r2.jimi1126.cn/img/2024/09/54e8e803c1e051364b9a75ee5863b715.jpg"
          @load="count++"
        ></v-img>
      </v-card>
    </div>
    <div class="projects">
      <v-card
        v-for="(proj, i) in projects"
        :key="i"
        @click="openLink(proj.link)"
      >
        <v-img
          :src="proj.src"
          class="w-100"
          aspect-ratio="4/3"
          cover
          @load="count++"
        ></v-img>
        <v-card-title>{{ proj.title }}</v-card-title>
        <v-card-text>{{ proj.text }} </v-card-text>
      </v-card>
    </div>
    <div class="plans">
      <div class="plan py-4 elevation-3">
        <v-icon icon="mdi-hand-coin"></v-icon>
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
    <v-sheet class="questions-wrap" color="grey-darken-3">
      <div class="questions">
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
            title="为什么叫JIMI1126？"
            text="JIMI 这个名字可不是随便取的，2022 年我的女儿来到了这个世界上，我和爱人决定给她取乳名“小鸡米”，我就理所当然的是“大鸡米”了，1126是我女儿的生日。大家可以叫我“鸡米”、“大鸡米”、“鸡米仔”，我会非常高兴的。"
          ></v-expansion-panel>
          <v-expansion-panel
            key="2"
            title="本站主营什么？"
            text="本站主要是知识的分享，在这里可以看到我的最新产品与我在捣鼓什么东西。"
          ></v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
import { useAnimate } from "@/hooks/animate";
import { openLink } from "@/hooks/pureFun";

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
    src: "https://r2.jimi1126.cn/img/2024/09/5a07b3ba8c068e56eafc2e03d1d3f379.jpg",
    title: "Unitest",
    text: "可以根据注解自动生成测试文件 npm 包",
    link: "https://github.com/Jimi1126/unitest",
  },
  {
    src: "https://r2.jimi1126.cn/img/2024/09/05f59acacb734550b7786e16d89fdad2.jpg",
    title: "Print Big Char",
    text: "将符号转化为大字符 npm 包",
    link: "https://github.com/Jimi1126/printBigChar",
  },
  {
    src: "https://r2.jimi1126.cn/img/2024/09/a121447b3ba241938e5454b9fec52c87.jpg",
    title: "Encaps Proxy",
    text: "利用原型实现对象代理与添加通用行为 npm 包",
    link: "https://github.com/Jimi1126/encaps-proxy",
  },
]);

let gsapCtx: gsap.Context = gsap.context(() => {}, "home-main");
function setAnimate() {
  gsapCtx.revert();
  gsapCtx.add(() => {
    buildScrollAnimate("#main .header .introduce > *", animateL2R);
    buildScrollAnimate(`#main .header .v-img`, animateT2B);
    buildScrollAnimate(`#main .projects .v-card`, animateTT2B, true);
    buildScrollAnimate("#main .plans  > *", animateTB2T, true);
    buildScrollAnimate("#main .contact", animateB2T);
    buildScrollAnimate("#main .questions .explain", animateL2R);
    buildScrollAnimate("#main .questions .list", animateR2L);
  });
}

const count = ref(0);
const isMounted = ref(false);
watchEffect(() => {
  if (count.value >= 4 && isMounted.value) {
    setAnimate();
  }
});
onMounted(() => {
  isMounted.value = true;
});
onUnmounted(() => {
  gsapCtx && gsapCtx.revert();
});
</script>
<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: $space-page;
  align-items: center;
  text-transform: capitalize;
  font-style: normal;
  text-decoration: none;
  line-height: 1em;
  letter-spacing: 1px;

  .header {
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-items: center;
    margin-top: $space-page;
    width: 100%;
    max-width: $max-width;
    gap: $space-component;

    .introduce {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      gap: $space-content;

      .greet h1 {
        font-size: 60px;
        font-weight: 400;
        line-height: 1.2em;
        letter-spacing: 0px;
      }

      .about-me {
        width: 50%;
      }

      p {
        font-size: 19px;
        font-weight: 300;
        text-transform: none;
        line-height: 1.5em;
        letter-spacing: 1.5px;
      }

      .actions {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: $space-text;
        width: 80%;
      }
    }
  }

  .projects {
    display: grid;
    width: 100%;
    max-width: $max-width;
    grid-template-columns: repeat(3, 1fr);
    gap: $space-component;
    .v-card-title {
      font-size: 19px;
      font-weight: 500;
      text-transform: none;
      line-height: 1.5em;
      letter-spacing: 1px;
    }
    .v-card-text {
      font-size: 16px;
      font-weight: 300;
      text-transform: none;
      line-height: 1.5em;
      letter-spacing: 1px;
    }
  }

  .plans {
    display: grid;
    width: 100%;
    max-width: $max-width;
    grid-template-columns: repeat(4, 1fr);
    gap: $space-content;
    text-transform: none;
    line-height: 1.5em;
    letter-spacing: 1px;

    .plan {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: $space-content;

      .v-icon {
        font-size: 64px;
      }

      span:first-of-type {
        font-size: 22px;
        font-weight: 500;
      }
      span:last-of-type {
        font-size: 16px;
        font-weight: 300;
      }
    }
  }

  .contact {
    display: flex;
    width: 100%;
    max-width: $max-width;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: $space-component;
    padding: 64px;

    p {
      position: relative;
      text-align: center;
      font-size: 32px;
      font-weight: 400;
      text-transform: capitalize;
      font-style: normal;
      text-decoration: none;
      line-height: 44px;
      letter-spacing: 1px;
      span {
        font-size: 28px;
        font-weight: 300;
        color: #9e9e9e;
      }

      &::before,
      &::after {
        font-weight: bold;
        font-family: fangsong;
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
    padding: $space-page 0;
  }

  .questions {
    display: grid;
    width: 100%;
    max-width: $max-width;
    grid-template-columns: 1fr 2fr;
    gap: 84px;
    margin: auto;

    .explain {
      display: flex;
      flex-direction: column;
      gap: $space-text;

      span:nth-child(1) {
        font-size: 46px;
        font-weight: 600;
        text-transform: capitalize;
        font-style: normal;
        text-decoration: none;
        line-height: 1.2em;
        letter-spacing: 0px;
        -webkit-text-stroke-color: #000;
        stroke: #000;
      }

      span:nth-child(n + 2) {
        font-size: 15px;
        font-weight: 300;
        text-transform: none;
        font-style: normal;
        text-decoration: none;
        text-wrap: wrap;
        word-break: break-all;
        line-height: 1.5em;
      }
    }

    .list {
      height: fit-content;
      gap: $space-component;
      .v-expansion-panel {
        border-radius: 0;
      }
      :deep(.v-expansion-panel-title) {
        font-size: 22px;
        font-weight: 500;
        text-transform: none;
        font-style: normal;
        text-decoration: none;
        line-height: 1.5em;
      }
      :deep(.v-expansion-panel-text) {
        font-size: 18px;
        font-weight: 300;
        text-transform: none;
        font-style: normal;
        text-decoration: none;
        line-height: 1.6em;
      }
    }
  }
}
</style>
