<script lang="ts" setup>
import logo from '@/assets/images/logo.png'

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
          <font-awesome-icon :icon="['fas', 'cloud']" />
        </div>
        <div :class="$style.headerManageIcon">
          <font-awesome-icon :icon="['fas', 'circle-question']" />
        </div>
        <div :class="$style.headerManageIcon">
          <font-awesome-icon :icon="['fas', 'gear']" />
        </div>
        <div :class="$style.headerManageIcon">
          <font-awesome-icon :icon="['fas', 'bars']" />
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
  color: white;
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 64px;
}

.headerLogo {
  display: flex;
  align-items: center;
  width: 15%;
}

.headerLogo img {
  width: 42px;
  height: 42px;
}

.headerTitle {
  margin-left: 10px;
  font-size: 24px;
  font-weight: 500;
}

.headerContainer {
  display: flex;
  justify-content: space-between;
  width: 85%;
}

.headerSearch {
  width: 50%;
}

.headerManage {
  display: flex;
  align-items: center;
}

.headerManageIcon {
  margin-right: 28px;
  font-size: 22px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}

.headerAvt {
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
}

.headerAvt img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
</style>
