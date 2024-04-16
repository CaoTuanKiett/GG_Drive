<script setup lang="ts">
import { ref } from 'vue'
import ViewBox from '@/components/Base/ViewBox.vue'
import ViewLine from '@/components/Base/ViewLine.vue'

import IConLine from '@/assets/icons/line.svg'
import IConBox from '@/assets/icons/box.svg'

const isDisplay = ref(false)

function handleDisplayLine() {
  isDisplay.value = true
}

function handleDisplayBox() {
  isDisplay.value = false
}

const dataFiles = [
  {
    title: 'Báo cáo tháng 7',
    user: 'Nguyễn Văn A',
    time: '2 phút trước',
    address: 'Hà Nội',
    gmail: 'hehe@gmail.com',
    linkAvt: 'https://i.pinimg.com/564x/01/0d/ac/010dacef99287b69d6b935f64f906603.jpg',
    type: 'file',
  },
  {
    title: 'Báo cáo tháng 7',
    user: 'Nguyễn Văn B',
    time: '5 phút trước',
    address: 'Hồ Chí Minh',
    gmail: 'haha@gmail.com',
    linkAvt: 'https://i.pinimg.com/564x/01/0d/ac/010dacef99287b69d6b935f64f906603.jpg',
    type: 'file',
  },
  {
    title: 'Báo cáo tháng 7',
    user: 'Nguyễn Văn C',
    time: '10 phút trước',
    address: 'Đà Nẵng',
    gmail: 'hoho@gmail.com',
    linkAvt: 'https://i.pinimg.com/564x/01/0d/ac/010dacef99287b69d6b935f64f906603.jpg',
    type: 'file',
  },
  {
    title: 'Báo cáo tháng 7',
    user: 'Nguyễn Văn D',
    time: '15 phút trước',
    address: 'Hải Phòng',
    gmail: 'hihi@gmail.com',
    linkAvt: 'https://i.pinimg.com/564x/01/0d/ac/010dacef99287b69d6b935f64f906603.jpg',
    type: 'file',
  },
  {
    title: 'Báo cáo tháng 7',
    user: 'Nguyễn Văn E',
    time: '20 phút trước',
    address: 'Cần Thơ',
    gmail: 'hehehe@gmail.com',
    linkAvt: 'https://i.pinimg.com/564x/01/0d/ac/010dacef99287b69d6b935f64f906603.jpg',
    type: 'file',
  },
  {
    title: 'Báo cáo tháng 7',
    user: 'Nguyễn Văn F',
    time: '25 phút trước',
    address: 'Nha Trang',
    gmail: 'hahahihi@gmail.com',
    linkAvt: 'https://i.pinimg.com/564x/01/0d/ac/010dacef99287b69d6b935f64f906603.jpg',
    type: 'file',
  },
  {
    title: 'Báo cáo tháng 7',
    user: 'Nguyễn Văn G',
    time: '30 phút trước',
    address: 'Vũng Tàu',
    gmail: 'hohohihi@gmail.com',
    linkAvt: 'https://i.pinimg.com/564x/01/0d/ac/010dacef99287b69d6b935f64f906603.jpg',
    type: 'file',
  },
  {
    title: 'Báo cáo tháng 7',
    user: 'Nguyễn Văn H',
    time: '35 phút trước',
    address: 'Bình Dương',
    gmail: 'hihihihi@gmail.com',
    linkAvt: 'https://i.pinimg.com/564x/01/0d/ac/010dacef99287b69d6b935f64f906603.jpg',
    type: 'file',
  },
  {
    title: 'Báo cáo tháng 7',
    user: 'Nguyễn Văn I',
    time: '40 phút trước',
    address: 'Long An',
    gmail: 'huhuhu@gmail.com',
    linkAvt: 'https://i.pinimg.com/564x/01/0d/ac/010dacef99287b69d6b935f64f906603.jpg',
    type: 'file',
  },
  {
    title: 'Báo cáo tháng 7',
    user: 'Nguyễn Văn K',
    time: '45 phút trước',
    address: 'Đồng Nai',
    gmail: 'hehehe@gmail.com',
    linkAvt: 'https://i.pinimg.com/564x/01/0d/ac/010dacef99287b69d6b935f64f906603.jpg',
    type: 'file',
  },
  {
    title: 'Báo cáo tháng 7',
    user: 'Nguyễn Văn K',
    time: '45 phút trước',
    address: 'Đồng Nai',
    gmail: 'hehehe@gmail.com',
    linkAvt: 'https://i.pinimg.com/564x/01/0d/ac/010dacef99287b69d6b935f64f906603.jpg',
    type: 'file',
  },
  {
    title: 'Báo cáo tháng 7',
    user: 'Nguyễn Văn K',
    time: '45 phút trước',
    address: 'Đồng Nai',
    gmail: 'hehehe@gmail.com',
    linkAvt: 'https://i.pinimg.com/564x/01/0d/ac/010dacef99287b69d6b935f64f906603.jpg',
    type: 'file',
  },

]
</script>

<template>
  <div :class="$style.Body">
    <div :class="$style.BodyBtn">
      <div :class="$style.BodyType">
        <p>Được đề xuất</p>
        <div :class="$style.BodyTypeBtn">
          <button>
            Tệp
          </button>

          <button>
            Thư mục
          </button>
        </div>
      </div>
      <div :class="$style.BodyDisplay">
        <button @click="handleDisplayLine">
          <img :src="IConLine" alt="IConLine">
        </button>

        <button @click="handleDisplayBox">
          <img :src="IConBox" alt="IConBox">
        </button>
      </div>
    </div>
    <el-scrollbar height="100%" :class="$style.BodyScrollbar">
      <div v-if="isDisplay" :class="$style.BodyLine">
        <div :class="$style.BodyLineHeader">
          <p :class="$style.BodyLineHeaderName">
            Tên
          </p>
          <p :class="$style.BodyLineHeaderRason">
            Lý do tài liệu được đề xuất
          </p>
          <p :class="$style.BodyLineHeaderOwner">
            Chủ sở hữu
          </p>
          <p :class="$style.BodyLineHeaderAddress">
            Địa điểm
          </p>
        </div>
        <ViewLine v-for="data in dataFiles" :key="data.title" :address="data.address" :title="data.title" :time="data.time" :gmail="data.gmail" :link-avt="data.linkAvt" />
      </div>
      <div v-else :class="$style.BodyBox">
        <ViewBox v-for="data in dataFiles" :key="data.title" :user="data.user" :title="data.title" :time="data.time" :link-avt="data.linkAvt" :type="data.type" />
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" module>
  .Body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-top: 28px;
  }

  .BodyBtn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
  }

  .BodyType {
    display: flex;
    align-items: center;
  }

  .BodyTypeBtn {
    display: flex;
    align-items: center;
    margin-left: 20px;
    height: 32px;
    border: 1px solid #dcdfe6;
    border-radius: 28px;
  }

  .BodyTypeBtn button {
    width: 88px;
    height: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;
    overflow: hidden;
    font-weight: 500;

    &:hover {
      background-color: #f5f7fa;
    }

    &:first-child {
      border-right: 1px solid #dcdfe6;
    }
  }

  .BodyDisplay {
    display: flex;
    align-items: center;
    margin-left: 20px;
    height: 32px;
    border: 1px solid #dcdfe6;
    border-radius: 28px;
  }

  .BodyDisplay button {
    width: 64px;
    height: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;
    overflow: hidden;
    font-weight: 500;

    &:hover {
      background-color: #f5f7fa;
    }

    &:first-child {
      border-right: 1px solid #dcdfe6;
    }
  }

  .BodyDisplay button img {
    margin-top: 4px;
  }

  .BodyScrollbar {
    width: 100%;
    margin-top: 30px;
  }

  .BodyLineHeader {
    display: flex;
    border-bottom: 1px solid #ebebeb;
    padding-left: 20px;

    p {
      font-size: 14px;
    }
  }

  .BodyLineHeaderName {
    width: 388px;
  }

  .BodyLineHeaderRason {
    width: 200px;
  }

  .BodyLineHeaderOwner {
    width: 278px;
  }

  .BodyLineHeaderAddress {
    width: 200px;
  }

  .BodyScrollbar .el-scrollbar__wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
  }

  .BodyScrollbar .el-scrollbar__view {
    width: 100%;
  }

  .BodyScrollbar {
    width: 100%;
  }

  .BodyLine {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .BodyBox {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
