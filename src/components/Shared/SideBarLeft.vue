<script lang="ts" setup>
import { ref } from 'vue'
import IconHome from '@/assets/icons/home.svg'
import IconDrive from '@/assets/icons/drive.svg'
import IconLaptop from '@/assets/icons/laptop.svg'
import IconDelete from '@/assets/icons/delete.svg'
import IconDown from '@/assets/icons/down.svg'
import IconOclock from '@/assets/icons/oclock.svg'
import IconPlus from '@/assets/icons/pllus.svg'
import IconStar from '@/assets/icons/star.svg'
import IconUsers from '@/assets/icons/users.svg'
import IconFolders from '@/assets/icons/folder.svg'
import IconSpam from '@/assets/icons/spam.svg'
import IconCloud from '@/assets/icons/cloud.svg'

interface SubItem {
  title: string
  icon: string
  items?: any[]
}

interface MenuItem {
  title: string
  icon: string
  list?: SubItem[]
  oder?: boolean
}

const activeNames = ref(['1'])
const value1 = ref(86)
const dataMenu: MenuItem[] = [
  {
    title: 'Trang chủ',
    icon: IconHome,
  },
  {
    title: 'Drive của tôi',
    icon: IconDrive,
    list: [
      {
        title: 'Danh sách',
        icon: IconFolders,
        items: [
          {
            title: 'Tất cả',
            icon: IconFolders,
          },
          {
            title: 'Gần đây',
            icon: IconFolders,
          },
          {
            title: 'Quan trọng',
            icon: IconFolders,
          },
          {
            title: 'Thùng rác',
            icon: IconFolders,
          },
        ],
      },
      {
        title: 'Thư mục',
        icon: IconFolders,
      },
      {
        title: 'Tệp của tôi',
        icon: IconFolders,
      },
    ],
  },
  {
    title: 'Máy tính',
    icon: IconLaptop,
  },
  {
    title: 'Chia sẻ với tôi',
    icon: IconUsers,
    oder: true,
  },
  {
    title: 'Gần đây',
    icon: IconOclock,
  },
  {
    title: 'Có gắn dấu sao',
    icon: IconStar,
  },
  {
    title: 'Nội dung rác',
    icon: IconSpam,
    oder: true,
  },
  {
    title: 'Thùng rác',
    icon: IconDelete,
  },
  {
    title: 'Bộ nhớ (đã dùng 80%)',
    icon: IconCloud,
  },

]
</script>

<template>
  <el-scrollbar height="100%">
    <div :class="$style.sideBarLeft">
      <div :class="$style.sideBarLeftBtn">
        <button>
          <img :class="$style.sideBarLeftBtnImg" :src="IconPlus" alt="plus">
          Mới
        </button>
      </div>
      <el-collapse v-model="activeNames" :class="$style.sideBarLeftTab">
        <div v-for="(item, index) in dataMenu" :key="index" :class="[item.oder && $style.sideBarPT10, $style.sideBarLeftItemBox]">
          <img :class="$style.sideBarLeftIcon" :src="item.icon" :alt="item.icon">
          <img v-if="item?.list && item?.list?.length > 0" :src="IconDown" alt="IconDown" :class="$style.sideBarLeftIconDown">
          <el-collapse-item :title="item.title" :name="index" :class="$style.sideBarLeftItem">
            <el-collapse v-if="item.list">
              <div v-for="(subItem, subIndex) in item.list" :key="subIndex" :class="$style.sideBarLeftSubItemBox">
                <img :class="$style.sideBarLeftIcon" :src="subItem.icon" :alt="subItem.icon">
                <img v-if="subItem?.items && subItem?.items?.length > 0" :src="IconDown" alt="IconDown" :class="$style.sideBarLeftIconDown">
                <el-collapse-item :title="subItem.title" :name="subIndex" :class="$style.sideBarLeftSubItem">
                  <el-collapse v-if="subItem.items">
                    <div v-for="(subSubItem, subSubIndex) in subItem.items" :key="subSubIndex" :class="$style.sideBarLeftSubSubItemBox">
                      <img :class="$style.sideBarLeftIcon" :src="subSubItem.icon" :alt="subSubItem.icon">
                      <img v-if="subSubItem?.items && subSubItem.items?.length > 0" :src="IconDown" alt="IconDown" :class="$style.sideBarLeftIconDown">
                      <el-collapse-item :title="subSubItem.title" :name="subSubIndex" :class="$style.sideBarLeftSubSubItem" />
                    </div>
                  </el-collapse>
                </el-collapse-item>
              </div>
            </el-collapse>
          </el-collapse-item>
        </div>
      </el-collapse>
      <div :class="$style.sideBarLeftFooter">
        <el-slider v-model="value1" :class="$style.sideBarLeftSlider" />
        <p>
          Đã sử dụng 12,01 GB trong tổng số 15 GB
        </p>
        <button :class="$style.sideBarLeftFooterBtn">
          Mua thêm bộ nhớ
        </button>
      </div>
    </div>
  </el-scrollbar>
</template>

<style lang="scss" module>
// :root {
//   --el-collapse-header-bg-color: red;
// }

.sideBarPT10 {
  margin-top: 20px;

}

.sideBarLeft {
  padding: 16px 18px 10px 18px;
  width: 100%;
  height: 100%;
  background-color: #f8fafd;
}

.sideBarLeftBtn {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 20px;
}

.sideBarLeftBtn button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 56px;
  background-color: white;
  border: none;
  font-size: 14px;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 4px 5px 1px;
  padding: 18px 20px 18px 16px;
  transition: all 0.3s;

  &:hover {
    background-color: #f4f4f4;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
}

.sideBarLeftBtn button img {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.sideBarLeftIcon {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 9px;
  left: 18px;
}

.sideBarLeftIconDown {
  width: 16px;
  height: 16px;
  position: absolute;
  top: 11px;
  left: 4px;
  transform: rotate(-90deg);
}

.sideBarLeftItemBox {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-right: 10px;

  &:hover {
    background-color: #c2e7ff;
    border-radius: 20px;
  }
}

.sideBarLeftItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 48px;

}

.sideBarLeftSubItemBox {
  display: flex;
  align-items: center;
  position: relative;
}

.sideBarLeftSubItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 48px;
}

.sideBarLeftSubSubItemBox {
  display: flex;
  align-items: center;
  position: relative;
}

.sideBarLeftSubSubItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 40px;
}

.sideBarLeftFooter {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
}

.sideBarLeftSlider {
  width: 100%;
}

.sideBarLeftFooter p {
  font-size: 14px;
  padding: 0 2px;
  margin: 0;
}

.sideBarLeftFooterBtn {
  width: 100%;
  height: 38px;
  background-color: white;
  border: 1px solid var(--color-primary);
  font-size: 14px;
  border-radius: 20px;
  transition: all 0.3s;
  margin-top: 10px;
  color: var(--color-primary);
  font-weight: 500;

  &:hover {
    background-color: #f4f4f4;
  }
}

:global {
  .el-collapse {
    padding-left: 2px;
    // padding-right: 18px;
    border-bottom: none;
    border-top: none;
  }
  .el-collapse-item {
    width: 100%;
  }

  .el-collapse-item__wrap {
    width: 100%;
    margin-left: -40px;
    background-color: transparent;
    border-bottom: none;
  }

  .el-collapse-item__header {
    background-color: transparent;
    height: 36px;
    border-bottom: none;
  }

  .el-collapse-item__header {
    color: var(--color-text-primary);
    font-size: 14px;
  }

  .el-collapse-item__header .is-active {
    color: var(--color-text-secondary) !important;
  }

  .el-collapse-item__arrow {
    display: none;
  }

  .el-collapse-item__content {
    padding-bottom: 0;
  }

  .el-slider__button-wrapper {
    display: none;
  }

  .el-slider__bar {
    background-color: #f09d00;
    height: 4px;
  }

  .el-slider__runway {
    height: 4px;
  }
}
</style>
