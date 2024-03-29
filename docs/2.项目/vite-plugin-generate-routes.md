# vite-plugin-generate-routes

> auto watch page's change and generate routes

[github](https://github.com/WillianLiusHao/vite-plugin-generate-routes)

## use

```js
/** vite.config.js */
import pluginRoutes from 'vite-plugin-generate-routes'
export default defineConfig({
  plugins: [
    pluginRoutes()
  ]
  ...
}
```

## nuxt rules

```js
pages：
--| page1.vue
--| page2
----| index.vue
----| page21.vue
----| _id.vue
--| page3
----| page31.vue
----| #componentName.vue

=>

routes：
--| page1
--| page2
--| page2/page21
--| page2/:id
--| page31
```

- start with '\_' means dynamic component：`page/_id.vue` => `/page/:id`
- start with '#' means ignore

## config

### dir

- Type: `string`
- Default: `src/views`

### extend

- Type: `Function`
```js
export default defineConfig({
  plugins: [
    pluginRoutes({
      extend: (route) => {
        if(route.path === '/') {
          route = {
            title: 'root'
            meta: {
              auth: false
            },
            ...route
          }
        }
      }
    })
  ]
  ...
}
```
