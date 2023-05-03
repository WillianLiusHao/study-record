# vue3-scroll-virtual-list

[github](https://github.com/WillianLiusHao/vue3-scroll-virtual-list)

## install

```js
npm install vue3-scroll-virtual-list -S
or
yarn add vue3-scroll-virtual-list -S
```

## use

```js
import VirtualList from 'vue3-scroll-virtual-list'
import 'vue3-scroll-virtual-list/dist/style.css'

<virtualList
  :data="list"
  :initSize="6"
  :bufferScale="2"
>
  <template #default="{item}">
    <div>
      {{item.index}}.
      {{item.value}}
    </div>
  </template>
</virtualList>
```


## param

|参数|类型|默认值|是否必填|说明|
|:--:|:--:|:--:|:--:|:--|
|data|Array||✓|列表所需要的数据|
|key|String|index|x|列表每项的key值|
|bufferScale|Number|1|x|在可见区域之外的上/下方预渲染比例，避免快速滑动时出现闪烁|
|initSize|Number|10|x|列表项初始化时渲染数据条数，用于预先计算可视区域的显示项数|

## slot
|名称|说明|prop|
|:--:|:--:|:--:|
|default|默认插槽|item：列表当前项数据|
