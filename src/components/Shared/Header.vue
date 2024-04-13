<script lang="ts" setup>
import { ref } from 'vue'
import logo from '@/assets/images/logo.png'
import disconet from '@/assets/icons/disconet.svg'
import help from '@/assets/icons/help.svg'
import setting from '@/assets/icons/setting.svg'
import menu from '@/assets/icons/menu.svg'

const input2 = ref('')
</script>

<template>
  <div :class="$style.header">
    <div :class="$style.headerLogo">
      <img :src="logo" alt="logo">
      <h1 :class="$style.headerTitle">
        Drive
      </h1>
    </div>
    <div :class="$style.headerContainer">
      <div :class="$style.headerSearch">
        <Search :input="input2" />
      </div>
      <div :class="$style.headerManage">
        <div :class="$style.headerManageIcon">
          <img :src="disconet" alt="disconet">
        </div>
        <div :class="$style.headerManageIcon">
          <img :src="help" alt="help">
        </div>
        <div :class="$style.headerManageIcon">
          <img :src="setting" alt="setting">
        </div>
        <div :class="$style.headerManageIcon">
          <img :src="menu" alt="menu">
        </div>
        <div :class="$style.headerAvt">
          <img src="https://i.pinimg.com/564x/1c/d3/93/1cd393c81aee774ac3e0f586f7413a09.jpg" alt="avt">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.header {
  background-color: #f8fafd;
  padding: 10px 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}

.headerLogo {
  display: flex;
  align-items: center;
  width: 16%;
}

.headerLogo img {
  width: 40px;
  height: 40px;
}

.headerTitle {
  margin-left: 10px;
  font-size: 22px;
  font-weight: 500;
}

.headerContainer {
  display: flex;
  justify-content: space-between;
  width: 84%;
}

.headerSearch {
  width: 56%;
}

.headerManage {
  display: flex;
  align-items: center;
}

.headerManageIcon {
  margin-right: 22px;
  margin-top: 10px;
  font-size: 22px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}

.headerAvt {
  display: flex;
  align-items: center;
  width: 32px;
  height: 32px;
}

.headerAvt img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
</style>
