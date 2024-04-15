<script lang="ts" setup>
import IConDrive from '@/assets/icons/driveMenu.svg'
import IConGoogle from '@/assets/icons/google.svg'
import IConGooglePhoto from '@/assets/icons/googlePhoto.svg'
import IConGmail from '@/assets/icons/gmail.svg'
</script>

<template>
  <div :class="$style.SideBarRight">
    <div :class="$style.SideBarRightItem">
      <el-tooltip content="Tài khoản của Google" placement="left" effect="light">
        <img :src="IConDrive" alt="IConDrive" :class="$style.SideBarRightImg">
      </el-tooltip>
    </div>

    <div :class="$style.SideBarRightItem">
      <el-tooltip content="Tài khoản của Google" placement="left" effect="light">
        <img :src="IConGoogle" alt="IConGoogle" :class="$style.SideBarRightImg">
      </el-tooltip>
    </div>

    <div :class="$style.SideBarRightItem">
      <el-tooltip content="Tài khoản của Google" placement="left" effect="light">
        <img :src="IConGooglePhoto" alt="IConGooglePhoto" :class="$style.SideBarRightImg">
      </el-tooltip>
    </div>

    <div :class="$style.SideBarRightItem">
      <el-tooltip content="Tài khoản của Google" placement="left" effect="light">
        <img :src="IConGmail" alt="IConGmail" :class="$style.SideBarRightImg">
      </el-tooltip>
    </div>
  </div>
</template>

<style lang="scss" module>
.SideBarRight {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.SideBarRightItem {
  margin: 16px 0px;
}

.SideBarRightImg {
  width: 30px;
  height: 30px;
}
</style>
