
# lightning

## 1. 架构设计

### 平台项目

### 编辑项目

打包成库


## 2. 编辑器

## 3. 编辑组件、业务组件

## 4. 脚本命令

### template

**1.前置基本配置处理**

- **是否有用户信息**  
  读取根目录下的 `env.json` 文件，没有的话会走 `yarn env` 命令，后面会讲到
- **根据模板名称读取打包模板路径**  
  匹配多个模板时，会提供命令行交互选择
- **命令行参数判断发布正式/测试**  
  prod 参数

**2.开始打包**

使用 vue-cli 自带的打包功能，根据`页面开发模板`打包，**将模板页面打包成一个库 `library`**

```js
exec(`yarn build --dest template/${template} --target lib
  --name ${template} src/template/${template}/index.vue`
)
```

打包后的 `文件夹` 和 `html` 如下：

![](../../assets/vuecli-build-dist.png)


![](../../assets/template-build-html.png)

**3.资源重命名、资源上传**

```js
/**
 * 文件重命名
 * @params dir 打包后的文件夹
 * @params template 模板名
 */
const renameAssets = (dir, template) => {
  fs.readdirSync(dir)
    .filter(name => name.includes('.'))
    .forEach(name => {
      const oldPath = `${dir}/${name}`
      console.log('oldPath', oldPath)
      // 只获取umd规范文件（可直接给浏览器或AMD loader使用的 UMD 包）
      // 具体规则：umd.min => 时间戳
      if (name.includes('umd.min.js') || name.includes('css')) {
        fs.renameSync(
          oldPath,
          `${oldPath
            .replace(extname(oldPath), '')
            .replace('.umd.min', '')}.${generate(
            `${template.replace(/_/gi, '')}${dayjs().format('YYYYMMDD')}`,
            8
          )}.${name.includes('css') ? 'css' : 'js'}`
        )
      } else if (!name.includes('umd.min')) {
        // 非 umd 文件全部删掉
        fs.unlinkSync(oldPath)
      }
    })
}
```
```js
// 资源上传：uploadAssets
// 调用接口将资源上传到公司的cdn，返回静态资源地址集合
const cdnRes = await uploadAssets(getFiles(dir), template)
```

**4.生成html文件**
```js
await renderHtml(dir, cdnRes, template)

const renderHtml = async (dir, cdn, template) => {
  // 基于统一的 template 模板文件进行
  let data = fs.readFileSync(join(dir, `../../script/template.html`), {
    flag: 'r+',
    encoding: 'utf8'
  })
  const reg = new RegExp(`/${template}.[0-9a-z]*.(css|js)$`, 'gi')
  ;['css', 'js'].forEach(x => {
    data = data.replace(
      new RegExp(`{{ ${x} }}`, 'gi'),
      cdn.filter(c => c.includes(x) && (!c.includes('umd.min')) && c.match(reg))
    )
  })

  data = data.replace(/{{ template }}/gi, template).replace(/{{ timestamp }}/gi, dayjs().format('YYYYMMDDHHmmssSSS '))
  fs.writeFileSync(join(dir, 'index.prod.html'), data, {
    flag: 'w+',
    encoding: 'utf8'
  })
  const secretKey =
    'hiWcOTz^#XsppKCKRyf6n*x8*U&I1Wg1p1CLa#9V8SD@dSTD#2tWukl1WZ!QOG9l'
  const config = require(join(
    __dirname,
    `../../src/template/${template}/config.json`
  ))
  delete config.style
  config.template || (config.template = {})
  config.other || (config.other = [])
  config.hidden || (config.hidden = [])
  const params = {
    name: template,
    content: data,
    config,
    email: require(envPath).EMAIL,
    responseTime: +new Date()
      .getTime()
      .toString()
      .substr(0, 10)
  }
  params.sign = crypto
    .createHash('sha1')
    .update(
      `${params.name}${params.email}${params.responseTime}${secretKey}`,
      'utf-8'
    )
    .digest('hex')

  // 发布项目
  const publishUrl = prod ? 'https://adms.vrm.cn' : 'http://192.168.0.114'
  const resNew = await axios.post(
    `${publishUrl}/api/template/package`,
    params
  )
  console.log(
    resNew.data.success
      ? `${publishUrl} 提交成功 ${template}`.green
      : `${publishUrl} 提交失败 ${template}：${resNew.data.message}`.red
  )
}

```


## 5. sdk

## 6. git flow 工作流

```json
"husky": {
  "hooks": {
    // 每次切分支，都要拉主分支合并
    "post-checkout": "git pull origin master && git merge master",
    // 每次提交前要走 gitflow.js（校验是否是template下的文件），然后拉取主分支合并
    "pre-commit": "node ./script/command/gitflow.js && git pull origin master 
    && git merge master && lint-staged",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

**master**：是平台分支

**template2020**： 是公共分支，也是发布生产的分支

**template_xxx**：每个用户有自己的 template 分支

`yarn build`：自动拉取 mater 合并，确保是最新的平台代码（业务组件是在平台上）

`yarn commit`：


## 7. cms 后台模板

### 插件

**路由自动生成**

**构建资源自动上传cdn**

### 组件

**ctable**
