<script setup lang="ts">
import ViewGrid from '@/components/Base/ViewGrid.vue'
import ViewLine from '@/components/Base/ViewLine.vue'

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
]
</script>

<template>
  <div :class="$style.Body">
    <el-scrollbar height="100%" :class="$style.BodyScrollbar">
      <ViewLine v-for="data in dataFiles" :key="data.title" :address="data.address" :title="data.title" :time="data.time" :gmail="data.gmail" :link-avt="data.linkAvt" />
      <ViewGrid />
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
  }

  .BodyScrollbar {
    width: 100%;
  }
</style>
