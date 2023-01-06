## vite 项目工程

#### 项目创建、初始化

- 创建

```#js
pnpm create vite@latest my-vue-app -- --template vue
```

- 初始化

```
pnpm i
```



#### 集成eslint prettier

##### eslint

1. 安装eslint

```
pnpm add -D eslint
```

2. 初始化配置

```
npx eslint --init
```

3. 安装 eslint 的 vite 插件

```
pnpm add -D vite-plugin-eslint
```

4. 安装 eslint-parser

```
pnpm add -D '@babel/core'
pnpm add -D '@babel/eslint-parser'
```

5. 配置 vite.config.ts

```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue']
    })
  ],
  resolve: {
    alias: {
      '@': '/src/'
    }
  }
})
```



##### prettier

1. 安装 prettier

```
pnpm add -D prettier
pnpm add -D eslint-config-prettier // eslint 兼容插件
pnpm add -D eslint-plugin-prettier // eslint 的 prettier
```

2. 配置 .prettierrc.js

```
module.exports = {
  printWidth: 120,
  tabWidth: 2,
  tabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  tailingComma: 'all',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'auto',
}
```



**修改 .eslintrc.js 配置**

```
module.exports = {
    env: { node: true },
    parser: 'vue-eslint-parser',
    parserOptions: { parser: '@typescript-eslint/parser', sourceType: 'module' },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
    plugins: ['vue', '@typescript-eslint'],
    globals: { },
    rules: {
      'vue/multi-word-component-names': 0,
    },
  }
```



#### 集成ts

```
pnpm add -D "@types/node"
pnpm add -D typescript
pnpm add -D "@typescript-eslint/eslint-plugin"
pnpm add -D "@typescript-eslint/parser"
```

