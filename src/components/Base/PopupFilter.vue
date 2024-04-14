<script lang="ts" setup>
import { defineProps, reactive } from 'vue'
import IconPlus from '@/assets/icons/pllus.svg'

const props = defineProps({
  handleShowPopup: Function,
})

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

const dataTypeFile = {
  label: 'Loại file',
  list: [
    {
      label: 'Loại 1',
      value: 'Loại 1',
    },
    {
      label: 'Loại 2',
      value: 'Loại 2',
    },
    {
      label: 'Loại 3',
      value: 'Loại 3',
    },
  ],
}

const dataOwner = {
  label: 'Chủ sở hữu',
  list: [
    {
      label: 'Chủ sở hữu 1',
      value: 'Chủ sở hữu 1',
    },
    {
      label: 'Chủ sở hữu 2',
      value: 'Chủ sở hữu 2',
    },
    {
      label: 'Chủ sở hữu 3',
      value: 'Chủ sở hữu 3',
    },
  ],
}

const dataAddress = {
  label: 'Địa chỉ',
  list: [
    {
      label: 'Địa chỉ 1',
      value: 'Địa chỉ 1',
    },
    {
      label: 'Địa chỉ 2',
      value: 'Địa chỉ 2',
    },
    {
      label: 'Địa chỉ 3',
      value: 'Địa chỉ 3',
    },
  ],
}

const dataDateUpdate = {
  label: 'Ngày cập nhật',
  list: [
    {
      label: 'Ngày cập nhật 1',
      value: 'Ngày cập nhật 1',
    },
    {
      label: 'Ngày cập nhật 2',
      value: 'Ngày cập nhật 2',
    },
    {
      label: 'Ngày cập nhật 3',
      value: 'Ngày cập nhật 3',
    },
  ],
}

const dataFolow = {
  label: 'Theo dõi',
  list: [
    {
      label: 'Theo dõi 1',
      value: 'Theo dõi 1',
    },
    {
      label: 'Theo dõi 2',
      value: 'Theo dõi 2',
    },
    {
      label: 'Theo dõi 3',
      value: 'Theo dõi 3',
    },
  ],
}
</script>

<template>
  <div :class="$style.popupFilterContainer">
    <div :class="$style.popupFilterOverlay" />
    <div :class="$style.popupFilter">
      <div :class="$style.popupFilterClose">
        <img :src="IconPlus" alt="IconPlus">
      </div>
      <div :class="$style.popupFilterContent">
        <div :class="$style.popupFilterBody">
          <div :class="$style.popupFilterLine">
            <p :class="$style.popupFilterTitle">
              {{ dataTypeFile.label }}
            </p>
            <el-select v-model="form.type" placeholder="Loại file" clearable>
              <el-option
                v-for="item in dataTypeFile.list"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>

          <div :class="$style.popupFilterLine">
            <p :class="$style.popupFilterTitle">
              {{ dataOwner.label }}
            </p>
            <el-select v-model="form.type" placeholder="Chủ sở hữu" clearable>
              <el-option
                v-for="item in dataOwner.list"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>

          <div :class="$style.popupFilterLine">
            <p :class="$style.popupFilterTitle">
              Có các từ
            </p>
            <el-input v-model="form.name" placeholder="Nhập từ khóa" clearable />
          </div>

          <div :class="$style.popupFilterLine">
            <p :class="$style.popupFilterTitle">
              Tên mục
            </p>
            <el-input v-model="form.name" placeholder="Nhập tên mục" clearable />
          </div>

          <div :class="$style.popupFilterAddress">
            <div :class="$style.popupFilterLine">
              <p :class="$style.popupFilterTitle">
                {{ dataAddress.label }}
              </p>
              <el-select v-model="form.type" placeholder="Địa chỉ" clearable>
                <el-option
                  v-for="item in dataAddress.list"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>

            <div>
              <el-checkbox v-model="form.delivery">
                Trong thùng rác
              </el-checkbox>
              <el-checkbox v-model="form.delivery">
                Có gắn dấu sao
              </el-checkbox>
              <el-checkbox v-model="form.delivery">
                Đã mã hóa
              </el-checkbox>
            </div>
          </div>

          <div :class="$style.popupFilterLine">
            <p :class="$style.popupFilterTitle">
              {{ dataDateUpdate.label }}
            </p>
            <el-select v-model="form.type" placeholder="Ngày cập nhật" clearable>
              <el-option
                v-for="item in dataDateUpdate.list"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>

          <div :class="$style.popupFilterLine">
            <p :class="$style.popupFilterTitle">
              Yêu cầu phê duyệt
            </p>
            <el-checkbox v-model="form.delivery">
              Đang chờ phê duyệt
            </el-checkbox>
            <el-checkbox v-model="form.delivery">
              Do tôi yêu cầu
            </el-checkbox>
          </div>

          <div :class="$style.popupFilterLine">
            <p :class="$style.popupFilterTitle">
              Đã chia sẻ với tôi
            </p>
            <el-input v-model="form.name" placeholder="Nhập tên hoặc địa chỉ email..." clearable />
          </div>

          <div :class="$style.popupFilterLine">
            <p :class="$style.popupFilterTitle">
              {{ dataFolow.label }}
            </p>
            <el-select v-model="form.type" placeholder="Theo dõi" clearable>
              <el-option
                v-for="item in dataFolow.list"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
      </div>

      <div :class="$style.popupFilterFooter">
        <el-button :class="$style.popupFilterFooterHelp">
          Tìm hiểu thêm
        </el-button>

        <div :class="$style.popupFilterFooterBtn">
          <el-button :class="$style.popupFilterFooterCancle">
            Đặt lại
          </el-button>
          <el-button :class="$style.popupFilterFooterSearch" type="primary">
            Tìm kiếm
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.popupFilterContainer {
  position: relative;
}
.popupFilter {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 999;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 722px;
}

.popupFilterOverlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.popupFilterContent {
  width: 100%;
  height: 548px;
  overflow-y: scroll;
  padding: 10px 20px 20px 20px;
}

.popupFilterClose {
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  margin-right: 20px;
}

.popupFilterClose img {
  width: 24px;
  height: 24px;
  transform: rotate(45deg);
}

.popupFilterBody {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.popupFilterLine {
  display: flex;
  gap: 20px;
}

.popupFilterTitle {
  font-size: 14px;
  font-weight: 600;
  width: 150px;
  text-align: start;
}

.popupFilterFooter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.popupFilterFooterHelp {
  font-size: 14px !important;
  font-weight: 600 !important;
  border: none !important;
  color: #0b57d0 !important;
}

.popupFilterFooterBtn {
  display: flex;
  gap: 10px;
}

.popupFilterFooterCancle {
  color:  #0b57d0;
  border: none ;
}

.popupFilterFooterSearch {
  width: 100px;
  font-size: 14px;
  font-weight: 600;
  color: #fff !important;
}

:global {
  .el-select {
    width: 256px;
  }

  .el-input {
    width: 510px;
  }

  .el-button {
    padding: 10px 20px;
    border-radius: 24px;
  }

  .el-input__wrapper {
    width: 100px;
  }
}
</style>
