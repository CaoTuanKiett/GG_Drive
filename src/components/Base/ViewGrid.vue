<script setup lang="ts">
import IconSheet from '@/assets/icons/sheet.svg'
import IconUsers from '@/assets/icons/users.svg'
import IconWord from '@/assets/icons/word.svg'

const props = defineProps({
  title: String,
  user: String,
  time: String,
  address: String,
  gmail: String,
  linkAvt: String,
  icon: String,
  type: String,
})
</script>

<template>
  <div :class="$style.viewGrid">
    <div :class="$style.viewGridTitle">
      <div>
        <img :src="IconSheet" alt="IconSheet">
        <p>Bảng tính chưa có tiêu đề</p>
      </div>
      <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" />
    </div>
    <div :class="$style.viewGridImg">
      <img src="https://i.pinimg.com/564x/01/0d/ac/010dacef99287b69d6b935f64f906603.jpg" alt="=)))">
    </div>
    <div :class="$style.viewGridInfor">
      <img src="https://i.pinimg.com/564x/01/0d/ac/010dacef99287b69d6b935f64f906603.jpg" alt="avt">
      <p>Bạn đã tải lên</p>
      <span>19:30</span>
    </div>
  </div>
</template>

<style lang="scss" module>
.viewGrid {
  display: flex;
  padding: 4px 20px;
  flex-direction: column;
  width: 300px;
  background-color: aliceblue;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  cursor: pointer;

  &:hover {
    background-color: rgb(225, 228, 231);
  }
}

.viewGridTitle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  p {
    font-size: 14px;
    font-weight: 500;
  }
}

.viewGridImg {
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
}

.viewGridInfor {
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  p {
    font-size: 14px;
    font-weight: 500;
  }
  span {
    font-size: 14px;
    color: #9e9e9e;
  }
}
</style>
