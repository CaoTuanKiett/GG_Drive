<script setup lang="ts">
import SideBarLeft from '@/components/Shared/SideBarLeft.vue'
import Header from '@/components/Shared/Header.vue'
import SideBarRight from '@/components/Shared/SideBarRight.vue'
</script>

<template>
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
</template>

<style lang="scss" module>
  .defaultLayoutHeader {
    background-color: #ffffff;
    color: white;
    text-align: center;
  }

  .defaultLayoutBody {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .defaultLayoutSideBarLeft {
    background-color: #f4f4f4;
    padding: 10px;
    width: 200px;
    height: 100vh;
  }

  .defaultLayoutContainer {
    padding: 10px;
    flex: 1;
  }

  .defaultLayoutSideBarRight {
    background-color: #f4f4f4;
    padding: 10px;
    width: 200px;
  }

  @media (max-width: 768px) {
    .defaultLayoutBody {
      flex-direction: column;
    }

    .defaultLayoutSideBarLeft {
      width: 100%;
    }

    .defaultLayoutSideBarRight {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    .defaultLayoutFooter {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .defaultLayoutFooter {
      display: none;
    }
  }

  @media (max-width: 992px) {
    .defaultLayoutFooter {
      display: none;
    }
  }

  @media (max-width: 1200px) {
    .defaultLayoutFooter {
      display: none;
    }
  }
</style>
