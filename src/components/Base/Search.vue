<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  input: String,
})
</script>

<template>
  <div :class="$style.search">
    <div :class="$style.searchIconSearch">
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    </div>

    <input v-model="props.input" type="text" placeholder="Tìm trong drive">
    <div :class="$style.searchIconFilter">
      <font-awesome-icon :icon="['fas', 'sliders']" />
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

.search input {
  border: none;
  background-color: #e9eef6;
  padding: 16px 36px;
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
  left: 14px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}

.searchIconFilter {
  position: absolute;
  right: 16px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}
</style>
