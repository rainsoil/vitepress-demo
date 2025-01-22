<template>

  <el-col :span="12">
    <el-form-item label="输入">
      <el-input ></el-input>
    </el-form-item>
  </el-col>
</template>
<script>
export default {
  name: 'XlInput',
  props: {
    type: { type: String, default: 'default' }
  }
}
</script>

<style scoped>

</style>

