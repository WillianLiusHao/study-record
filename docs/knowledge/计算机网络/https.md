# HTTP

## 1. HTTPS 是什么

### 1.1 概念
HTTPS 是在 HTTP 的基础上，利用 `SSL/TLS` 加密数据包。

### 1.2 SSL / TLS （王老吉和加多宝）

```js
https     =  http  +  TLS/SSL 
--------     风险      目的
  http  |   信息窃听  信息加密
--------    信息篡改  数据完整性
tls/ssl |   信息劫持  身份验证
--------     
  tcp   |
--------
```


## 2 加密

SSL/TLS 三类算法

- 非对称加密：身份验证，秘钥协商
- 对称加密：信息加密
- 散列算法：完整校验
 

### 2.1 对称加密 AES

**AES**
  - aes-128-ecb
  - aes-128-cbc

```js
const crypto = require('crypto')
// key：密钥   iv：盐
function encrypt(data, key, iv) {
  let cipher = crypto.createCipheric('aes-128-cbc', key, iv)
  cipher.update(data)
  return cipher.final('hex') // 输出16进制字符串
}
function decrypt(data, key, iv) {
  let cipher = crypto.createCipheric('aes-128-cbc', key, iv)
  cipher.update(data, 'hec') // 添加16进制数据
  return cipher.final('utf8') // 输出utf8字符串
}
```

### 2.2 非对称加密 RSQ

**公钥加密私钥解，私钥加密公钥解**

- 非对称加密的核心：`单向函数`

- **RSA**（原始数据m, 加密数据c）
  - 公钥（e,N）已知，加密过程
    - `m ^ e % N = c`
    - 例子：5 ^ 7 % 33 = 14

  - 私钥（d,N）解密过程
    - `c ^ d % N = m`
    - 例子：14 ^ 3 % 33 = 5

> **非对称的难点在于，如何通过公钥(e, N) 算出私钥 (d, N)**，计算过程如下：
  1. **N**：已知，且为 2个质数(p,q)的乘积，即 `p * q = N` (分解一个数成2个质数乘积是数学上的难题)
  2. **欧拉积 FN**：`FN = (p-1)*(q-1)`
  3. 最后通过如下公式找到密钥的关键 **d**：`e * d % FN == 1`

### 2.3 哈希 MD5/SHA256

特点 
1. 不同输入有不同输出
2. 单向
3. 长度固定 

| hash类型 | md5 | sha256 |
| ---- | --- | ------ |
| 长度 | 32 | 64 |
| 加盐 | × | √ |

### 2.4 数字签名 SHA256 RSA

- 作用：**验证数据完整性 / 认证发送者身份**
- 基本原理：**私钥签名，公钥验证**
- 具体流程
  - 发送者用 `hash算法` 对要传递的信息进行摘要，生成 `数字指纹A`
  - 发送者使用自己的 `私钥` 对数字指纹进行加密,形成 `数字签名`
  - 发送者将 `消息`和`数字签名` 一同发送给接收者
  - 接收者使用发送者 `公钥` 进行解密，得到 `数字指纹A`（信息的hash值）
  - 接收者使用 `hash算法` 接收到的信息进行摘要，生成 `数字指纹B`
  - 接收者比对 `A和B` ，如果一致，则验证了 `数据的完整性` 及 `发送者的真实性`
- 实现

```js
const { generateKeyPairSync, createSign, createVerify } = require('crypto')

/**
 * 数字签名和验签
 */
// 生成密钥对
const rsa = generateKeyPairSync('rsa', {
  modulusLength: 1024,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem' // base64 格式
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: 'passphrase' // 私钥密码
  }
})

let file = 'file'
/* 文件签名*/
// 创建签名实例
const signObj = createSign('rsa-sha256')
// 放入文件内容
signObj.update(file) 
// 私钥进行签名，输出16进制（hex ）字符串
let sign = signObj.sign({key: rsa.privateKey, format: 'pem', passphrase: 'passphrase'}, 'hex') 

/* 验签 */
const verifyObj = createVerify('rsa-sha256')
verifyObj.update(file)
const isValid = verifyObj.verify(rsa.publicKey, sign, 'hex')
```

### 2.5 数字证书

流程
1. 服务器创建秘钥对，把公钥注册到`第三方数字认证机构（CA）`
2. CA 用自己的私钥，把服务器公钥进行数字签名`生成数字证书`，并发送到服务器
3. 服务器把 `数字证书`(**CA 数字签名** 和 **服务器公钥**) 发到客户端
4. 客户端的 `浏览器/操作系统`，默认内置了 `CA 公钥`。使用公钥对 数字证书 进行验证
5. 把数据用 `服务器公钥` 进行加密，而后发送到服务器

### 2.6 算法

**Diffie-Hellman 算法(三色相加算法)**

- 特点：双方都不需要告知对方自己的秘钥情况下，协商一个公共的秘钥出来
- 使用场景：协商密钥，计算对称加密的秘钥

- 图解
![](../../../assets/Diffie-Hellman_Key_Exchange.svg)  

- 算法数学原理
```JS
// 假设 p=2, sec1=3, sec2=4, N=10
let p=2, sec1=3, sec2=4, N=10;
let A = Math.pow(p, sec1) % N // A用自己sec1 生成值
let B = Math.pow(p, sec2) % N // B用自己sec2 生成值

let AcommonK = Math.pow(B ^ sec1) % N // A计算结果 commonKey = 6
let BcommonK = Math.pow(A ^ sec2) % N // B计算结果 commonKey = 6
```

- 代码实现
```js
// Diffie-Hellman
const { createDiffieHellman } = require('crypto')

// 客户端
const client = createDiffieHellman(512)
const clientKey = client.generateKeys() // A
const prime = client.getPrime() // 获取素数 p
const generator = client.getGenerator() // N

// 服务器
const server = createDiffieHellman(prime, generator)
const serverKey = server.generateKeys() // B

// 生成私钥
const client_secret = client.computeSecret(serverKey)
const server_secret = server.computeSecret(clientKey)

console.log(client_secret.toString('hex'), server_secret.toString('hex'))
```



## 3. 密钥协商

![](../../../assets/myxs.png)




## 4. 过程详解

1. Client Hello
```js
TLSv1.2 Record Layer: Handshake Protocol: Client Hello
  Content Type: Handshake (22)
  Version: TLS 1.0 (0x0301)
  Length: 512
  Handshake Protocol: Client Hello
    Handshake Type: Client Hello (1)
    Length: 508
    Version: TLS 1.2 (0x0303)
    Random: acf15a314292b72307b5e6c3444b0e1438792f59fca64243c476c69cb9c2af2b
    Session ID Length: 32
    Session ID: 751f64e168c344d940cf2bf173965fd151d54f428e4668f1b547827274abe9fc
    Cipher Suites Length: 32
    Cipher Suites (16 suites) // 提供可选加密套件
    Compression Methods Length: 1
    Compression Methods (1 method)
    Extensions Length: 403
    Extension: Reserved (GREASE) (len=0)
    Extension: server_name (len=22)
    Extension: signed_certificate_timestamp (len=0)
    Extension: session_ticket (len=192)
    Extension: application_settings (len=5)
    Extension: renegotiation_info (len=1)
    Extension: psk_key_exchange_modes (len=2)
    Extension: application_layer_protocol_negotiation (len=14)
    Extension: signature_algorithms (len=18)
    Extension: ec_point_formats (len=2)
    Extension: key_share (len=43)
    Extension: extended_master_secret (len=0)
    Extension: supported_groups (len=10)
    Extension: compress_certificate (len=3)
    Extension: status_request (len=5)
    Extension: supported_versions (len=7)
    Extension: Reserved (GREASE) (len=1)
    Extension: padding (len=6)
    [JA3 Fullstring: 771,4865-4866-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53,0-18-35-17513-65281-45-16-13-11-51-23-10-27-5-43-21,29-23-24,0]
    [JA3: 3619c9919b9b911b40e3252e7ef29bad]
```

2. Server Hello
```js
Frame 213: 2908 bytes on wire (23264 bits), 2908 bytes captured (23264 bits) on interface \Device\NPF_Loopback, id 0
Null/Loopback
Internet Protocol Version 4, Src: 127.0.0.1, Dst: 127.0.0.1
Transmission Control Protocol, Src Port: 7890, Dst Port: 24082, Seq: 40, Ack: 744, Len: 2864
Hypertext Transfer Protocol
Transport Layer Security
  TLSv1.2 Record Layer: Handshake Protocol: Server Hello
    Content Type: Handshake (22)
    Version: TLS 1.2 (0x0303)
    Length: 74
    Handshake Protocol: Server Hello
      Handshake Type: Server Hello (2)
      Length: 70
      Version: TLS 1.2 (0x0303)
      Random: 0fc210b6cf435b7e1d59ba2f301f3ef709919ebd275eb203276daa7bfee6db76
      Session ID Length: 0
      Cipher Suite: TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 (0xc02f) // 加密套件
      Compression Method: null (0)
      Extensions Length: 30
      Extension: server_name (len=0)
      Extension: renegotiation_info (len=1)
      Extension: ec_point_formats (len=4)
      Extension: session_ticket (len=0)
      Extension: application_layer_protocol_negotiation (len=5)
      [JA3S Fullstring: 771,49199,0-65281-11-35-16]
      [JA3S: b898351eb5e266aefd3723d466935494]
```

3. Certificate

4. Server Key Exchange

5. Server Hello Done

6. Client Key Exchange

7. Change Cipher Spec

8.  Encrypted Handshake Message
