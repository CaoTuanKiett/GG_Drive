<script lang="ts" setup>
import { ref } from 'vue'
import logo from '@/assets/images/logo.png'
import disconet from '@/assets/icons/disconet.svg'
import help from '@/assets/icons/help.svg'
import setting from '@/assets/icons/setting.svg'
import menu from '@/assets/icons/menu.svg'

const input2 = ref('')
const dialogVisible = ref(false)

function handleShowPopup() {
  if (dialogVisible.value) {
    console.log('hide popup')
    dialogVisible.value = false
  }
  else {
    console.log('show popup')
    dialogVisible.value = true
  }
}
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
          <el-tooltip content="Sẵn sàng khi ngoại tuyến" placement="bottom" effect="light">
            <img :src="disconet" alt="disconet">
          </el-tooltip>
        </div>
        <div :class="$style.headerManageIcon">
          <el-tooltip content="Hỗ trợ" placement="bottom" effect="light">
            <img :src="help" alt="help">
          </el-tooltip>
        </div>
        <div :class="$style.headerManageIcon">
          <el-tooltip content="Cài đặt" placement="bottom" effect="light">
            <img :src="setting" alt="setting">
          </el-tooltip>
        </div>
        <div :class="$style.headerManageIcon" @click="handleShowPopup">
          <el-tooltip content="Các ứng dụng của Google" placement="bottom" effect="light">
            <img :src="menu" alt="menu">
          </el-tooltip>
        </div>
        <div :class="$style.headerAvt">
          <el-tooltip content="Tài khoản của Google" placement="bottom" effect="light">
            <img src="https://i.pinimg.com/564x/1c/d3/93/1cd393c81aee774ac3e0f586f7413a09.jpg" alt="avt">
          </el-tooltip>
        </div>
      </div>
    </div>
  </div>
  <div v-if="dialogVisible" :class="$style.headerPopupApp">
    <PopupApp :handle="handleShowPopup" />
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
  color: white;
}

.headerLogo {
  display: flex;
  align-items: center;
  width: 16%;
  cursor: pointer;
  width: 110px;

  &:hover {
    opacity: 0.7;
  }
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
  position: relative;
  color: white !important;

  &:hover {
    opacity: 0.7;
  }
}
.headerManageTitle {
  font-size: 12px;
  font-weight: 500;
  position: absolute;
  top: 12px;
  left: -50px;
  background-color: #3c3c3cca;
  color: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.headerAvt {
  display: flex;
  align-items: center;
  width: 32px;
  height: 32px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}

.headerAvt img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}

.headerPopupApp {
  position: relative;
}

:global {
  .el-popper .is-dark {
    color: white !important;
  }
}
</style>
