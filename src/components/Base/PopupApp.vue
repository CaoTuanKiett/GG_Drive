<script lang="ts" setup>
import IConDrive from '@/assets/icons/driveMenu.svg'
import IConGoogle from '@/assets/icons/google.svg'
import IConGooglePhoto from '@/assets/icons/googlePhoto.svg'
import IConGmail from '@/assets/icons/gmail.svg'

const props = defineProps({
  handle: Function,
})
</script>

<template>
  <div :class="$style.PopupApp">
    <div :class="$style.PopupAppOverlay" @click="props.handle" />
    <div :class="$style.PopupAppContent">
      <el-scrollbar height="100%" :class="$style.PopupAppContentScrollbar">
        <div :class="$style.PopupAppItem">
          <img :src="IConDrive" alt="IConDrive" :class="$style.PopupAppImg">
          <p :class="$style.PopupAppTitle">
            Tìm kiếm
          </p>
        </div>

        <div :class="$style.PopupAppItem">
          <img :src="IConGmail" alt="IConGmail" :class="$style.PopupAppImg">
          <p :class="$style.PopupAppTitle">
            Tìm kiếm
          </p>
        </div>

        <div :class="$style.PopupAppItem">
          <img :src="IConGoogle" alt="IConGoogle" :class="$style.PopupAppImg">
          <p :class="$style.PopupAppTitle">
            Google
          </p>
        </div>

        <div :class="$style.PopupAppItem">
          <img :src="IConGooglePhoto" alt="IConGooglePhoto" :class="$style.PopupAppImg">
          <p :class="$style.PopupAppTitle">
            Photo
          </p>
        </div>

        <div :class="$style.PopupAppItem">
          <img :src="IConDrive" alt="IConDrive" :class="$style.PopupAppImg">
          <p :class="$style.PopupAppTitle">
            Tìm kiếm
          </p>
        </div>

        <div :class="$style.PopupAppItem">
          <img :src="IConDrive" alt="IConDrive" :class="$style.PopupAppImg">
          <p :class="$style.PopupAppTitle">
            Tìm kiếm
          </p>
        </div>

        <div :class="$style.PopupAppItem">
          <img :src="IConDrive" alt="IConDrive" :class="$style.PopupAppImg">
          <p :class="$style.PopupAppTitle">
            Tìm kiếm
          </p>
        </div>

        <div :class="$style.PopupAppItem">
          <img :src="IConDrive" alt="IConDrive" :class="$style.PopupAppImg">
          <p :class="$style.PopupAppTitle">
            Tìm kiếm
          </p>
        </div>

        <div :class="$style.PopupAppItem">
          <img :src="IConGmail" alt="IConGmail" :class="$style.PopupAppImg">
          <p :class="$style.PopupAppTitle">
            Tìm kiếm
          </p>
        </div>

        <div :class="$style.PopupAppItem">
          <img :src="IConGoogle" alt="IConGoogle" :class="$style.PopupAppImg">
          <p :class="$style.PopupAppTitle">
            Google
          </p>
        </div>

        <div :class="$style.PopupAppItem">
          <img :src="IConGooglePhoto" alt="IConGooglePhoto" :class="$style.PopupAppImg">
          <p :class="$style.PopupAppTitle">
            Photo
          </p>
        </div>

        <div :class="$style.PopupAppItem">
          <img :src="IConDrive" alt="IConDrive" :class="$style.PopupAppImg">
          <p :class="$style.PopupAppTitle">
            Tìm kiếm
          </p>
        </div>

        <div :class="$style.PopupAppItem">
          <img :src="IConDrive" alt="IConDrive" :class="$style.PopupAppImg">
          <p :class="$style.PopupAppTitle">
            Tìm kiếm
          </p>
        </div>

        <div :class="$style.PopupAppItem">
          <img :src="IConDrive" alt="IConDrive" :class="$style.PopupAppImg">
          <p :class="$style.PopupAppTitle">
            Tìm kiếm
          </p>
        </div>

        <div :class="$style.PopupAppItem">
          <img :src="IConDrive" alt="IConDrive" :class="$style.PopupAppImg">
          <p :class="$style.PopupAppTitle">
            Tìm kiếm
          </p>
        </div>

        <div :class="$style.PopupAppItem">
          <img :src="IConGmail" alt="IConGmail" :class="$style.PopupAppImg">
          <p :class="$style.PopupAppTitle">
            Tìm kiếm
          </p>
        </div>

        <div :class="$style.PopupAppItem">
          <img :src="IConGoogle" alt="IConGoogle" :class="$style.PopupAppImg">
          <p :class="$style.PopupAppTitle">
            Google
          </p>
        </div>

        <div :class="$style.PopupAppItem">
          <img :src="IConGooglePhoto" alt="IConGooglePhoto" :class="$style.PopupAppImg">
          <p :class="$style.PopupAppTitle">
            Photo
          </p>
        </div>

        <div :class="$style.PopupAppItem">
          <img :src="IConDrive" alt="IConDrive" :class="$style.PopupAppImg">
          <p :class="$style.PopupAppTitle">
            Tìm kiếm
          </p>
        </div>

        <div :class="$style.PopupAppItem">
          <img :src="IConDrive" alt="IConDrive" :class="$style.PopupAppImg">
          <p :class="$style.PopupAppTitle">
            Tìm kiếm
          </p>
        </div>

        <div :class="$style.PopupAppItem">
          <img :src="IConDrive" alt="IConDrive" :class="$style.PopupAppImg">
          <p :class="$style.PopupAppTitle">
            Tìm kiếm
          </p>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<style lang="scss" module>
.PopupApp {
  width: 100%;
}

.PopupAppOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}

.PopupAppContent {
  position: absolute;
  top: 0;
  right: 20px;
  z-index: 1001;
  background-color: #fff;
  width: 352px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  border: 8px solid #dfdfdf;
  transition: all 0.3s;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
}

.PopupAppContentScrollbar {
  padding: 21px;
}

.PopupAppItem {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 14px;
  width: 98px;
  cursor: pointer;

  &:hover {
    background-color: #d6cbcbb2;
    border-radius: 16px;
  }
}

.PopupAppImg {
  width: 40px;
  height: 40px;
}

.PopupAppTitle {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 0;
}

:global {
  .el-scrollbar__view {
    display: flex;
    flex-wrap: wrap;
}
}
</style>
