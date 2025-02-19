# QTable

快捷表格（QTable）融合了Element-Plus 的 [Table 表格](https://element-plus.org/zh-CN/component/table.html) ，[Pagination 分页](https://element-plus.org/zh-CN/component/pagination.html) 组件开发，；分为 **表头**、**表格**，**分页** 三个区域；


## 基础用法

:::demo
QTable/base
:::


除了原始组件拥有的的`empty`和`append`外，还支持了**操作列插槽**、**数据列插槽**、**表头插槽**。

1. **操作列插槽**：`action`，配置了`action`插槽，则出现操作列，如果需要配置操作列的其他属性，可在`columns`中添加`prop:'action`的对象，对象中可自由定义操作列；
2. **数据列，表头 自定义渲染**：用来配置自定义渲染内容的，主要是支持两种方式配置；
   - **方式1**：columns 下的 配置`render-header`、`render`可以实现表头和单元格内容自定义渲染
```ts
{
    prop: 'age',
    label: '年龄',
    render: ({ row, column, $index }) => { // [!code focus] // [!code ++]
            return h('a', { style: { color: row.age > 20 ? 'green' : 'blue' } }, row.age)   // [!code focus] // [!code ++]
    },  // [!code focus] // [!code ++]
    // render-header 可以正常使用，但控制台会报警告，Element官网建议使用 scoped-slot 代替 render-header  // [!code focus]
    'render-header': ({ column, $index }) => {  // [!code focus] // [!code ++]
        return h('a', { style: { color: 'green' } }, '年龄(20为分界)')  // [!code focus] // [!code ++]
    },  // [!code focus] // [!code ++]
},

```
:::warning 注意
 `render-header`可以正常使用，但控制台会报警告，Element官网建议使用`scoped-slot`代替`render-header`
:::
 - **方式2**：组件内部使用 **`#列标识.header`** 配置表头 ，**`#列标识`** 配置单元格内容
```vue
<template>
 <QTable :title="title" :data="tableData1" :columns="columns1" v-model:page="page">
   <!-- 配置 sex.header 插槽实现表头自定义渲染内容 --> // [!code focus]
    <template #sex.header="{ row }"> // [!code focus] // [!code ++]
        <el-tag size="small" type="warning">Sex</el-tag> // [!code focus] // [!code ++]
    </template> // [!code focus] // [!code ++]
   <!-- 配置 sex 插槽实现单元格内容自定义渲染 --> // [!code focus]
    <template #sex="{ row }"> // [!code focus]  // [!code ++]
        <el-tag size="small" v-if="row.sex === 1">男</el-tag> // [!code focus] // [!code ++]
        <el-tag size="small" type="danger" v-if="row.sex === 2">女</el-tag> // [!code focus] // [!code ++]
    </template> // [!code focus] // [!code ++]
</QTable>
</template>

```



## QTable API

### QTable  属性
以下是 QTable 新属性，Element-Plus 的 [Table 表格](https://element-plus.org/zh-CN/component/table.html) 原始配置均支持
| **属性名**                    | **说明**                             | **类型**                                             | **默认值** |
| ----------------------------- | ------------------------------------ | ---------------------------------------------------- | ---------- |
| title                         | 表格标题，居左                       | `string`                                             | -          |
| [columns](#columns属性配置项) | 表格列对象                           | ^[object]`ColumnProps[]`                             | []         |
| data                          | 数据                                 | ^[object]`any[]`                                     | []         |
| page                          | 分页对象，配置此属性，则开启尾部分页 | ^[object]`{current:number,size:number,total:number}` | -          |
| page-config                   | 分页组件其他选项配置                 | `object`                                             | -          |

#### columns属性配置项

columns属性配置继承了[Table Column](https://element-plus.org/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7)的属性配置项，同时在此基础上新增了如下属性

| 属性名 | 说明                                           | 类型                                                                                   | 默认值 |
| ------ | ---------------------------------------------- | -------------------------------------------------------------------------------------- | ------ |
| render | 属性为`prop`对应的单元格区域自定义渲染Function | ^[Function]`data: { row: any, column: any, $index: number }) => VNode\|string\|number` | -      |
| prop   | 属性名                                         | string                                                                                 | -      |
|        |                                                |                                                                                        |        |



### QTable 事件

以下为 QTable 新增事件，Element-Plus 的 [Table 表格](https://element-plus.org/zh-CN/component/table.html) 默认事件均支持

| **事件名**  | **说明**                                      | **类型**                                                        |
| ----------- | --------------------------------------------- | --------------------------------------------------------------- |
| page-change | 分页变化时触发,返回`page`对象和触发变化的类型 | ^[Function]`(page:object,type:'currentPage'\|'pageSize')=>void` |



### QTable 插槽

| 插槽名          | 说明                                                                                                                                    |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| theader         | 表格头部区域插槽，如果配置，则 属性`title`,插槽`headerLeft`和`headerRight`均失效                                                        |
| headerLeft      | 头部左侧区域插槽                                                                                                                        |
| headerRight     | 头部右侧区域插槽                                                                                                                        |
| action          | 表格操作列自定义的内容，配置后则出现操作列，如需配置操作列属性，可在columns单配置`prop`为`action`的对象                                 |
| tfooter         | 表格尾部区域插槽，这里默认指分页位置                                                                                                    |
| append          | 插入至表格最后一行之后的内容， 如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。 若表格有合计行，该 slot 会位于合计行之上。 |
| empty           | 当数据为空时自定义的内容                                                                                                                |
| `[prop]`        | `prop` 列单元格自定义的内容                                                                                                             |
| `[prop]`.header | `prop` 列表头区域自定义的内容                                                                                                           |

###  QTable 方法

Element-Plus 的 [Table 表格](https://element-plus.org/zh-CN/component/table.html) 相关方法均支持

## 类型申明

::: details 类型申明

```ts
 type ISlots = {
  header?: ((...args: any[]) => VNode | string | void) | string;
  default?: ((...args: any[]) => VNode | string | void) | string;
}

type ItemCols = {
  label: string;
  prop: string;
  children?: Array<ItemCols>;
  // slot?: ISlots;
  render?: (...args: any[]) => VNode | number | string;
  // render?: ((...args: any[]) => VNode | string | void) | string;
} & Indexable

type IPageProps = {
  current: number;
  size: number;
  total: number;
}
```
