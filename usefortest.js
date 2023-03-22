
// Diffie-Hellman
const { createDiffieHellman } = require('crypto')

// 客户端
const client = createDiffieHellman(512)
const clientKey = client.generateKeys()
const prime = client.getPrime() // 获取素数
const generator = client.getGenerator()

// 服务器
const server = createDiffieHellman(prime, generator)
const serverKey = server.generateKeys() // 生成本地key

const client_secret = client.computeSecret(serverKey)
const server_secret = server.computeSecret(clientKey)

console.log(client_secret.toString('hex'), server_secret.toString('hex'))


