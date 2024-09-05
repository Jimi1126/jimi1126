<template>
  <v-sheet class="about" :color="isDark() ? 'grey-darken-3' : ''">
    <div class="body">
      <article class="info">
        <h1>关于 JIMI1126</h1>
        <p>
          JIMI1126
          是一名前端开发工程师和开源建设者，我为企业或个人提供软件开发与咨询服务。
          <br />
          帮助他们更好的展开业务，在业余时间，我会通过网络分享我的作品和想法心得，致力于帮助前端开发者们提升专业技能，关注身心健康，并有效地管理自身的情绪和精力。
        </p>
        <h2>工科背景 + 工作经历</h2>
        <p>
          JIMI1126 是 2016 年毕业于一本院校，授予工学学位，我通过自学 Java
          入软件开发行业。
          <br />
          工作一段时间后被 JavaScript
          这门语言所吸引，喜爱它的动态类型与弱类型特性，恰逢当时出现前后端分离开发模式，当时项目组的前端问题也是我负责解决的，所以当部门决定试点前后端开发模式时，领导第一个想到我，我也很乐意尝试，至此开启了我的前端之路。
          <br />
          从业 7
          年多次担任前端项目负责人，主导前端项目的建设，项目类型包括数据展示、开发平台、销售系统、管理系统、H5应用等。带过团队开发过几个项目，从中丰富了我的管理经验与团队协作经验。
        </p>
        <h2>设计与规范是长板</h2>
        <p>
          JIMI1126
          认为找准客户的需求和解决问题永远是一位开发工程师的首位，其次是开发高质量、高可维护性的代码，为此
          JIMI1126 热衷于实施前端工程化，与不断学习设计模式和编程思想。
        </p>
        <h2>最近在忙什么？</h2>
        <p>
          最近在学习AI、低代码、Threejs。
          <br />
          JIMI1126 一直在追求成为前端领域的专家，为此 JIMI1126
          保持一直学习，我非常喜欢 LOL
          里面剑圣的一句话“真正的大师永远都怀着一个学徒的心”。
        </p>
      </article>
      <v-card
        class="contact"
        :color="isDark() ? 'grey-darken-4' : 'blue-lighten-1'"
      >
        <v-card-text>
          <h2>社交媒体<br />SOCIAL MEDIA</h2>
          <v-card-actions>
            <v-btn
              icon="mdi-sina-weibo"
              @click="openLink('https://weibo.com/jisheng189504559')"
            ></v-btn>
            <v-btn icon="mdi-wechat" @click="wechatQRVisible = true"></v-btn>
          </v-card-actions>
          <h2>Get in Touch</h2>
          <p>
            您可以通过我的社交平台账号 @JIMI1126
            联系我，但请注意我很可能会漏看私信和评论。对于重要事项，请发送电子邮件至
            jimi1126_mid@163.com与我联系，邮件我会天天看的。
          </p>
        </v-card-text>
      </v-card>
      <v-dialog v-model="wechatQRVisible" width="auto">
        <v-card width="400" title="微信二维码">
          <v-card-text>
            <v-img
              aspect-ratio="4/3"
              cover
              src="https://r2.jimi1126.cn/img/2024/09/26ee0b5d28a0cd04f88401310645a608.jpg"
            ></v-img>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </v-sheet>
</template>
<script lang="ts" setup>
import { useDark } from "@/hooks/dark";
import { openLink } from "@/hooks/pureFun";

const { isDark } = useDark();
const wechatQRVisible = ref(false);

onMounted(() => {
  if (location.hash) {
    const hrefEl = document.querySelector(location.hash);
    hrefEl && hrefEl.scrollIntoView({ behavior: "smooth" });
  }
});
</script>
<style lang="scss" scoped>
.about {
  width: 100%;
  padding: $space-page 0;
  .body {
    width: 100%;
    max-width: $max-width;
    margin: auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: $space-page;
    line-height: 4em;
    text-transform: capitalize;
    font-style: normal;
    text-decoration: none;
    letter-spacing: 1px;

    p {
      line-height: 2em;
    }

    .contact {
      height: fit-content;
    }
  }

  .v-card-text {
    line-height: 4em;
    text-transform: capitalize;
    font-style: normal;
    text-decoration: none;
    letter-spacing: 1px;

    h2,
    p {
      line-height: 2em;
    }
  }
}
</style>
