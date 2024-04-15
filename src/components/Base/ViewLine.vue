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
  <div :class="$style.viewLine">
    <div :class="$style.viewLineTitle">
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

    <div :class="$style.viewLinePropose">
      <el-tooltip content="Hỗ trợ" placement="bottom" effect="light">
        <div>
          <p>{{ props.user }}</p>
          <span>{{ props.title }}</span>
        </div>
      </el-tooltip>
    </div>

    <div :class="$style.viewLineOwenr">
      <el-tooltip content="Hỗ trợ" placement="bottom" effect="light">
        <div>
          <img :src="props.linkAvt" alt="avt">
          <p>{{ props.gmail }}</p>
        </div>
      </el-tooltip>
    </div>

    <div :class="$style.viewLineAddress">
      <el-tooltip content="Hỗ trợ" placement="bottom" effect="light">
        <div>
          <img :src="IconUsers" alt="IconUsers">
          <p>{{ props.address }}</p>
        </div>
      </el-tooltip>
    </div>

    <div :class="$style.viewLineMenu">
      <el-tooltip content="Hỗ trợ" placement="bottom" effect="light">
        <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" />
      </el-tooltip>
    </div>
  </div>
</template>

<style lang="scss" module>
.viewLine {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  padding: 0 20px;

  &:hover {
    background-color: rgb(225, 228, 231);
  }
}

.viewLineTitle {
  display: flex;
  align-items: center;
  justify-content: start;
  width: 388px;
}

.viewLineTitle img {
  width: 20px;
  height: 20px;
  margin-right: 12px;
}

.viewLineTitle p {
  font-size: 14px;
  font-weight: 500;
}

.viewLinePropose {
  display: flex;
  align-items: center;
  justify-content: start;
  width: 200px;
}

.viewLinePropose div {
  display: flex;
  align-items: center;
  justify-content: start;
}

.viewLinePropose p {
  font-size: 14px;
  font-weight: 500;
  margin-right: 10px;
  color: #7b7b7b;
}

.viewLinePropose span {
  font-size: 14px;
  font-weight: 500;
  color: #7b7b7b;
}

.viewLineOwenr {
  display: flex;
  align-items: center;
  justify-content: start;
  width: 278px;
}

.viewLineOwenr div {
  display: flex;
  align-items: center;
  justify-content: start;
}

.viewLineOwenr img {
  width: 20px;
  height: 20px;
  margin-right: 12px;
}

.viewLineOwenr p {
  font-size: 14px;
  font-weight: 500;
  color: #7b7b7b;
}

.viewLineAddress {
  display: flex;
  align-items: center;
  justify-content: start;
  width: 200px;
}

.viewLineAddress div {
  display: flex;
  align-items: center;
  justify-content: start;
}

.viewLineAddress img {
  width: 20px;
  height: 20px;
  margin-right: 12px;
}

.viewLineAddress p {
  font-size: 14px;
  font-weight: 500;
  color: #7b7b7b;
}

.viewLineMenu {
  display: flex;
  align-items: center;
  justify-content: end;
  width: 160px;
}
</style>
