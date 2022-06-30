const data = require('./data.js')

var zigzagLevelOrder = function(root) {
  if(!root) return root
  /**
   * cur: 当前层数目
   * next: 下一层数目
   * path: 当前层数据
   * queue: 当前行队列
   * isOdd: 当前行是否为奇数行
   * nextQueue: 下一行队列
   */
  let cur = 1,next = 0, path = [],queue = [root], res=[], isOdd= true, nextQueue = [];
  while(queue.length > 0) {
    let curNode
    if(isOdd) {
      curNode = queue.pop()
      path.push(curNode.val)

      if(curNode.left) {
        nextQueue.push(curNode.left)
        next++
      }
      if(curNode.right) {
        nextQueue.push(curNode.right)
        next++
      }

      
    } else {
      curNode = queue.pop()
      path.push(curNode.val)

      if(curNode.right) {
        nextQueue.push(curNode.right)
        next++
      }
      if(curNode.left) {
        nextQueue.push(curNode.left)
        next++
      }

     
    }
   
    cur--
    if(cur ===0) {
      // 进入下一层
      cur = next
      next = 0
      // 每一层数据（path）用数组包起来
      res.push(path)
      path = []
      isOdd=!isOdd
      queue = nextQueue
      nextQueue= []
    }
  }
  return res
}

var kthSmallest = function(root, k) {
  function zhongxu(root, res = []) {
    if(!root) return root
    zhongxu(root.left, res)
    res.push(root.val)
    if(res.length === k) return res
    zhongxu(root.right, res)
    return res
  }
  const res = zhongxu(root, [])
  console.log(res);
  return res[k-1]
}

// 最近公共祖先
var lowestCommonAncestor = function(root, p, q) {
  if(!root) return root
  if(p===root || q===root) return root
  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)
  console.log(root, left,right)
  if(left && right) return root
  if(left && !right) return left
  if(!left && right) return right
  return null
};

// 二叉树直径
var diameterOfBinaryTree = function(root) {
  let max = 0
  function getmax(root) {
    if(!root) return 0
    let left = getmax(root.left)
    let right = getmax(root.right)
    max = Math.max(left+right, max)
    return Math.max(left+1, right+1)
  } 
  getmax(root)
  return max
}

// 根到叶子节点数字之和
var sumNumbers = function(root) {
  let res = 0
  function getNumStr(root, str) {
    if(!root) return 0
    str += root.val
    if(root.left) {
      getNumStr(root.left, str)
    }
    if(root.right) {
      getNumStr(root.right, str)
    }
    if(!root.left && !root.right) {
      res += Number(str)
    }
  }
  getNumStr(root, '')
  return res
}

// 对称二叉树
const isSymmetric = (root) => {
  let qianRes = [], houRes = []
  function preDfs(root) {
    if(!root) return
    qianRes.push(root.val)
    preDfs(root.left)
    preDfs(root.right)
  }
  function houDfs(root) {
    if(!root) return
    houDfs(root.left)
    houDfs(root.right)
    houRes.push(root.val)
  }
  preDfs(root)
  houDfs(root)
  const reverseHouRes = houRes.reverse()
  let a = true
  for(let i =0; i<qianRes.length; i++) {
    if(qianRes[i] !== reverseHouRes[i]) {
      a = false
      break
    }
  }
  return a
}


const level = isSymmetric(data.SymmetricECS)
console.log(level)
