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
        <div :class="$style.headerIconSearch">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </div>

        <input v-model="input2" type="text" placeholder="Tìm trong drive">
        <div :class="$style.headerIconFilter">
          <font-awesome-icon :icon="['fas', 'sliders']" />
        </div>
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
  display: flex;
  align-items: center;
  position: relative;
  width: 50%;
}

.headerSearch input {
  border: none;
  background-color: #e9eef6;
  padding: 16px 36px;
  border-radius: 26px;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: none;
    background-color: #fafafa;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
}

.headerIconSearch {
  position: absolute;
  left: 14px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}

.headerIconFilter {
  position: absolute;
  right: 16px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
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
