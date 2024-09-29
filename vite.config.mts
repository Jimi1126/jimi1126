// Plugins
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
// import Fonts from 'unplugin-fonts/vite';
import Layouts from 'vite-plugin-vue-layouts';
import Vue from '@vitejs/plugin-vue';
import VueRouter from 'unplugin-vue-router/vite';
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
// import viteCompression from 'vite-plugin-compression';
import postcsspxtoviewport8plugin from 'postcss-px-to-viewport-8-plugin';
import dnsPrefetchPlugin from './plugins/vite-plugin-dns-prefetch';

// Utilities
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.glb'],
  css: {
    postcss: {
      plugins: [
        postcsspxtoviewport8plugin({
          // 需要转换的单位，默认为"px"
          unitToConvert: 'px',

          // 设计稿的视口宽度
          viewportWidth: 1920,

          // 单位转换后保留的精度
          unitPrecision: 5,

          // 能转化为vw的属性列表
          propList: ['*', '!font*'],

          // 希望使用的视口单位
          viewportUnit: 'vw',

          // 字体使用的视口单位
          fontViewportUnit: 'vw',

          // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
          selectorBlackList: ['.ignore', '.hairlines'],

          // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
          minPixelValue: 1,

          // 媒体查询里的单位是否需要转换单位
          mediaQuery: false,

          //  是否直接更换属性值，而不添加备用属性
          replace: true,

          // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
          exclude: [/node_modules/, /dist/, /.output/, /.nuxt/, /.vscode/],

          // 如果设置了include，那将只有匹配到的文件才会被转换
          include: [/pages/, /assets\/styles\/*/, /src\/styles\/*/],

          // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
          landscape: false,

          // 横屏时使用的单位
          landscapeUnit: 'vw',

          // 横屏时使用的视口宽度
          landscapeWidth: 1338,
        }),
      ],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/styles/variables.scss';`,
      },
    },
  },
  plugins: [
    VueRouter({
      dts: 'src/typed-router.d.ts',
    }),
    Layouts(),
    AutoImport({
      imports: [
        'vue',
        {
          'vue-router/auto': ['useRoute', 'useRouter'],
        },
      ],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
      vueTemplate: true,
    }),
    Components({
      dts: 'src/components.d.ts',
    }),
    Vue({
      template: { transformAssetUrls },
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
    // viteCompression({
    //   filter: /\.(js|css|json|txt|ico|svg)(\?.*)?$/i, // 需要压缩的文件
    //   threshold: 1024, // 文件容量大于这个值进行压缩
    //   algorithm: 'gzip', // 压缩方式
    //   ext: 'gz', // 后缀名
    //   deleteOriginFile: true, // 压缩后是否删除压缩源文件
    // }),
    dnsPrefetchPlugin(),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  server: {
    port: 5000,
    proxy: {
      '/rest': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
});
