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


/** 链表 */

// 1.反转链表(双指针法)
const reverseLinkList = (head) => {
  if(!head) return null
  let cur = head, pre= null
  while(cur) {
    let next = cur.next // 先保存next
    cur.next = pre  // 反转当前节点指向
    // 双指针前移
    pre = cur
    cur = next
  }
  return pre
}
// 2.回文链表
const isPalindrome = (head) => {
  if(!head) return false
  if(!head.next) return true
  let slow = head, fast = head, pre=null;
  while(fast && fast.next) {
    fast = fast.next.next

    let temp = slow.next
    slow.next = pre
    pre = slow
    slow = temp
  }
  // 关键一步，用于区分奇数偶数链表长度
  if(fast) slow = slow.next

  let flag = true
  while(pre && slow) {
    if(pre.val === slow.val) {
      pre = pre.next
      slow = slow.next
    } else {
      flag = false
      break
    }
  }
  return flag
}
// 3.链中有环
const hasCircle = (head) => {
  if(!head) return null
  let j = head, k = head;
  let res = false
  while(k && k.next) {
    j = j.next
    k = k.next.next
    console.log(j.val, k.val)
    if(j.val === k.val) {
      res = true
      break
    }
  }
  return res
}
// 4.删除链表倒数第k个节点
const removeNthFromEnd = (head, k) => {
  if(!head || !head.next) return null
  let slow = head, fast = head;
  let slowPre = null
  for(let i = 0; i < k; i++) {
    fast = fast.next
  }
  while(fast) {
    slowPre = slow
    slow = slow.next
    fast = fast.next
  }
  if(slowPre) {
    slowPre.next = slow.next
    return head
  } else {
    return head.next
  }
}
// 5.合并递增链表
const mergeLinkLists = (list1, list2) => {
  if(!list1) return list2
  if(!list2) return list1

  if(list2.val >= list1.val) {
    list1.next = mergeLinkLists(list1.next, list2)
    return list1
  } else {
    list2.next = mergeLinkLists(list1, list2.next)
    return list2
  }
}
// 6.两数相加
const addTwoNumbers = (l1, l2) => {
  if(!l1) return l2
  if(!l2) return l1
  let carry = 0, res = {}, resHead = res
  while(l1 || l2) {
    let l1Val = l1.val
    let l2Val = l2.val
    let sum = l1Val + l2Val + carry

    if(sum > 9) {
      sum = sum - 10
      carry = 1
    } else {
      carry = 0
    }

    res.val = sum
    res.next = {}
    console.log(res)
    res = res.next
    if(l1) l1 = l1.next
    if(l2) l2 = l2.next
  }
  console.log(resHead)
}

// 7.相交链表
const getIntersectionNode = function(headA, headB) {
  if(!headA || !headB) return null
  let p1 = headA,p2 = headB;
  while (p1 !== p2){
    p1 = p1 === null ? headB : p1.next;
    p2 = p2 === null ? headA : p2.next;
  }
  return p1;
}

const res = addTwoNumbers(data.linkList1, data.linkList2)
console.log(res);
