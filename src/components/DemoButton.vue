<template>
  <el-button @click="post">
    <slot></slot>
  </el-button>
</template>
<script setup name="DemoButton">
import { postRequest } from '../service/interface.js'


const post = () => {
  postRequest('/api/login', {
    username: 'admin',
    password: '123456'
  })
}
</script>
