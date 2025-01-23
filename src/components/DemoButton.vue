<template>
  <el-button @click="post">
    <slot></slot>
  </el-button>
</template>
<script setup name="DemoButton">
import { postRequest } from '../service/interface.js'


const post = () => {
  postRequest('/button/clock', {
    username: 'admin',
    password: '123456'
  })
}
</script>
