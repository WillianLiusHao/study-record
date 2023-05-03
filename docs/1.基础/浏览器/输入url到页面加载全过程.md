# 输入url到页面加载全过程

前置知识，浏览器是多进程的，主要分为：
- 浏览器主进程：只有一个，主要控制页面的创建、销毁、网络资源管理、下载等。
- 第三方插件进程：每一种类型的插件对应一个进程，仅当使用该插件时才创建。
- GPU进程：最多一个，用于3D绘制等。
- 浏览器渲染进程(浏览器内核)：每个Tab页对应一个进程，互不影响。

### 1. 输入url

### [2. 浏览器查找缓存](./6.2%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98.md)

> http缓存

### 3. DNS 域名解析

> DNS 查询规则

浏览器向DNS服务器发起请求，解析该URL中的域名对应的IP地址。`DNS服务器是基于UDP的，因此会用到UDP协议`

值得注意的是，浏览器提供 `DNS数据缓存功能`,及一个域名如果解析过，会把解析的结果缓存，下次该域名直接走缓存。另外默认IP端口为`80`


### 4. 建立 TCP 连接

> 3次握手

`建立 TCP 连接分为以下三个阶段`:

  1. 通过`三次握手`(即总共发送3个数据包确认已经建立连接)建立客户端和服务器之间的连接。

  2. 进行数据传输。这里有一个重要的机制，就是接收方接收到数据包后必须要向发送方确认, 如果发送方没有接到这个确认的消息，就判定为数据包丢失，并重新发送该数据包。当然，发送的过程中还有一个优化策略，就是把大的数据包拆成一个个小包，依次传输到接收方，接收方按照这个小包的顺序把它们组装成完整数据包。

  3. 断开连接的阶段。数据传输完成，现在要断开连接了，通过`四次挥手`来断开连接。


Chrome 同一域名下`最多6个`TCP链接

### 5. 发起请求

> http、cookie

`HTTP 请求组成`：

  1. 请求行：请求方法 + 请求URL + HTTP版本协议
```http
GET / HTTP/1.1   =>  get请求，请求根路径，协议版本为http1.1
```

  2. 请求头

  ```http
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3
    Accept-Encoding: gzip, deflate, br
    Accept-Language: zh-CN,zh;q=0.9
    Cache-Control: no-cache
    Connection: keep-alive
    Cookie: /* 省略cookie信息 */
    Host: www.baidu.com
    Pragma: no-cache
    Upgrade-Insecure-Requests: 1
    User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1
  ```

  3. 请求体：

### 6. 响应请求

  - 常见状态码
  - 响应报文（响应行+响应头+响应体）

### 7. 关闭 TCP 连接

> 四次挥手

### 8. 浏览器渲染

> 资源加载顺序，js加载阻塞问题
> 回流重绘

**1. 构建 `DOM树`**
**2. 样式计算，生成 `CSSOM`**
**3. 布局，计算元素布局信息 `Layout`**
**4. 分层，建图层树**
**5. 生成绘制列表，提交到合成线程**
**6. 光栅化：生成图块和生成位图**
**7. 显示器显示内容**


