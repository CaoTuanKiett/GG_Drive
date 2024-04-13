<script setup lang="ts">
import SideBarLeft from '@/components/Shared/SideBarLeft.vue'
import Header from '@/components/Shared/Header.vue'
import SideBarRight from '@/components/Shared/SideBarRight.vue'
</script>

<template>
  <div :class="$style.defaultLayout">
    <header :class="$style.defaultLayoutHeader">
      <Header />
    </header>
    <div :class="$style.defaultLayoutBody">
      <div :class="$style.defaultLayoutSideBarLeft">
        <SideBarLeft />
      </div>
      <div :class="$style.defaultLayoutContainer">
        <RouterView />
      </div>
      <div :class="$style.defaultLayoutSideBarRight">
        <SideBarRight />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
  .defaultLayout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
  }

  .defaultLayoutHeader {
    background-color: #ffffff;
    text-align: center;
    height: 64px;
  }

  .defaultLayoutBody {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: calc(100vh - 64px);
  }

  .defaultLayoutSideBarLeft {
    background-color: #f4f4f4;
    width: 256px;
    height: 100%;
  }

  .defaultLayoutContainer {
    padding: 10px;
    flex: 1;
    width: 80%;
  }

  .defaultLayoutSideBarRight {
    background-color: #f4f4f4;
    padding: 10px;
    width: 100px;
  }

  // @media (max-width: 768px) {
  //   .defaultLayoutBody {
  //     flex-direction: column;
  //   }

  //   .defaultLayoutSideBarLeft {
  //     width: 100%;
  //   }

  //   .defaultLayoutSideBarRight {
  //     width: 100%;
  //   }
  // }
</style>
