const fs = require('fs')
process.nextTick(() => {
  console.log('2')
})
fs.readFile('test.txt', () => {
  console.log('readFile')
  process.nextTick(() => {
    console.log('3')
  })
  setTimeout(() => {
    console.log('timeout')
    process.nextTick(() => {
      console.log('1')
    })
  }, 0)
  setImmediate(() => {
    console.log('immediate')
  })
})
