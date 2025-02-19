# 快速开始​
本节将介绍如何在项目中使用 Element Plus。

## 用法​

### 完整引入
完整引入
```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ElementPlusKit from '@meetjs/element-plus-kit' // [!code focus] // [!code ++] 
import 'element-plus-kit/dist/index.css'  // [!code focus] // [!code ++]  

const app = createApp(App)
app.use(ElementPlus)
app.use(ElementPlusKit) // [!code focus] // [!code ++] 
```

#### 组件使用
```vue
<template>
    <q-form ref="formRef" :model="FormValue" :form-options="formOptions" /> // [!code focus] // [!code ++] 
    <q-table  :data="data" :columns="columns"  /> // [!code focus] // [!code ++] 
</template>
```
### 按需导入

```vue

<template>
    <q-form ref="formRef" :model="FormValue" :form-options="formOptions" /> // [!code focus] // [!code ++] 
    <q-table  :data="data" :columns="columns"  /> // [!code focus] // [!code ++] 
</template>

<script setup lang="ts" > 
import { QForm , QTable } from '@meetjs/element-plus-kit' // [!code focus] // [!code ++] 
</script>
```