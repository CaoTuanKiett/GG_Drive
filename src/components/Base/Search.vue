<script lang="ts" setup>
import { defineProps } from 'vue'
import PopupFilter from './PopupFilter.vue'

const props = defineProps({
  input: String,
})

const dialogVisible = ref(false)
const formLabelWidth = '140px'
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

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
  <div :class="$style.search">
    <div :class="$style.searchIconSearch">
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    </div>

    <input v-model="props.input" :class="$style.searchInput" type="text" placeholder="Tìm trong drive">
    <div :class="$style.searchIconFilter" @click="handleShowPopup">
      <font-awesome-icon :icon="['fas', 'sliders']" />
    </div>
    <div v-if="dialogVisible" :class="$style.searchFilter">
      <PopupFilter />
    </div>
  </div>
</template>

<style lang="scss" module>
.search {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}

.searchInput {
  border: none;
  background-color: #e9eef6;
  padding: 16px 44px;
  border-radius: 26px;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: none;
    background-color: #fafafa;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
}

.searchIconSearch {
  position: absolute;
  left: 18px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}

.searchIconFilter {
  position: absolute;
  right: 18px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}

.searchFilter {
  position: absolute;
  top: 60px;
  right: 0;
}
</style>
