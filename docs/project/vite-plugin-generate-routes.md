## vite-plugin-generate-routes

### 根据nuxt 规则自动生成路由文件

- 匹配规则

```js
pages：
--| page1.vue
--| id.vue
--| page2
----| index.vue
----| page21.vue
----| _id_.vue
--| page3
----| page31.vue
----| #componentName.vue

=>

routes：
--| page1
--| page2
----| page2/page21
----| page2/:id
----| page31
```

### config

**dir**

**extend**
