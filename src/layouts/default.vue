<template>
  <v-theme-provider :theme="appStore.theme" with-background>
    <v-app>
      <Header />
      <v-main>
        <router-view />
      </v-main>
      <Footer />
    </v-app>
  </v-theme-provider>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/stores/app";

const appStore = useAppStore();
</script>
<style lang="scss" scoped></style>
