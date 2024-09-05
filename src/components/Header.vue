<template>
  <v-app-bar id="app-header" :color="primaryColor">
    <h1 class="cursor-pointer" @click="goto('/')">JIMI1126</h1>
    <v-spacer></v-spacer>
    <v-btn text @click="goto('/about')">关于我</v-btn>
    <v-btn text @click="openLink('https://blog.jimi1126.cn/')">我的博客</v-btn>
    <v-btn
      @click="toggleTheme"
      :icon="isDark() ? 'mdi-weather-night' : 'mdi-weather-sunny'"
    ></v-btn>
  </v-app-bar>
  <v-btn
    class="back-to-top"
    icon="mdi-arrow-up-bold"
    variant="tonal"
    @click="goTo(0, { container: '#goto-container-example' })"
  ></v-btn>
</template>
<script lang="ts" setup>
import { useAnimate } from "@/hooks/animate";
import { useDark } from "@/hooks/dark";
import { openLink } from "@/hooks/pureFun";
import { useGoTo } from "vuetify/lib/framework.mjs";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const router = useRouter();
const goTo = useGoTo();
const { isDark, primaryColor, toggleTheme } = useDark();

const { gsap, hidden, animateB2T } = useAnimate();

function goto(path: string) {
  router.push(path);
}
function animateTY(elems: HTMLElement[], direction1: number = 1) {
  const y = direction1 * 50;
  const tl = gsap.timeline();
  elems.forEach((elem) => {
    elem.style.transform = "translateY(" + y + "px)";
    elem.style.opacity = "0";
    tl.fromTo(
      elem,
      { y, autoAlpha: 0 },
      {
        y: 0,
        duration: 0.2,
        autoAlpha: 1,
        ease: "power1.in",
        overwrite: "auto",
      },
      "<0.1"
    );
  });
  return tl.play();
}

function buildScrollAnimate(
  query: string,
  animate: Function,
  isTimeLine: boolean = false
) {
  const els = gsap.utils.toArray(document.querySelectorAll(query)) as any;
  const runAnimate = function (elem: HTMLElement | HTMLElement[]) {
    hidden(elem);
    ScrollTrigger.create({
      trigger: elem,
      scrub: true, // 是否需要绑定滚动条和动画执行关系
      onEnter: function () {
        animate(elem);
      },
      onEnterBack: function () {
        animate(elem, -1);
      },
      onLeave: function () {
        hidden(elem);
      },
    });
  };
  if (isTimeLine) {
    runAnimate(els);
  } else {
    els.forEach(runAnimate);
  }
}

let gsapCtx: gsap.Context;
function setAnimate() {
  gsapCtx && gsapCtx.revert();
  gsapCtx = gsap.context(() => {
    buildScrollAnimate(`#app-header h1, #app-header button`, animateTY, true);
    animateB2T(document.querySelectorAll(".back-to-top")[0] as any);
  });
}

onMounted(setAnimate);
onUnmounted(() => {
  gsapCtx && gsapCtx.revert();
});
</script>
<style lang="scss" scoped>
#app-header {
  text-transform: none;
  font-style: normal;
  text-decoration: none;
  line-height: 1.5em;

  :deep(.v-toolbar__content) {
    max-width: $max-width;
    margin: auto;
  }
}

.back-to-top {
  position: fixed;
  bottom: $space-component;
  right: $space-component;
  z-index: 999;
}
</style>
