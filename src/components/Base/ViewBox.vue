<script setup lang="ts">
import IconSheet from '@/assets/icons/sheet.svg'
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
        <div v-if="props.type === 'file'">
          <img :src="IconSheet" alt="IconSheet">
        </div>
        <div v-else>
          <img :src="IconWord" alt="IconWord">
        </div>
        <el-tooltip content="Hỗ trợ" placement="bottom" effect="light">
          <p>{{ props.title }}</p>
        </el-tooltip>
      </div>
      <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" />
    </div>
    <div :class="$style.viewGridImg">
      <img :src="props.linkAvt" alt="=)))">
    </div>
    <div :class="$style.viewGridInfor">
      <img :src="props.linkAvt" alt="avt">
      <p>{{ props.user }}</p>
      <span>{{ props.time }}</span>
    </div>
  </div>
</template>

<style lang="scss" module>
.viewGrid {
  display: flex;
  padding: 4px 12px;
  flex-direction: column;
  width: 280px;
  background-color: aliceblue;
  border-radius: 12px;
  margin: 6px;
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
  width: 256px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
