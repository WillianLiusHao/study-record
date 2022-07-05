const data = require("./data.js");

/******** 前中后序迭代法遍历 ********/
// 前续【根左右】
const qianxu = (root) => {
  if(!root) return root
  let res = [], stack = [], cur = root;
  while(cur || stack.length > 0) {
    // 前续遍历是 【根左右】
    while(cur) {
      // 一：直接插入根节点（【根】）
      res.push(cur.val)
      // 二：递归遍历左子树（【左】）
      stack.push(cur)
      cur = cur.left
    }
    // 三：左子树为空了，跳出循环
    // 弹出stack 栈中最后一个节点，即为当前节点的父节点
    // 从右节点开始下一轮循环（【右】）
    cur = stack.pop()
    cur = cur.right
  }
  return res
}
// 中序 【左根右】
const zhongxu = (root) => {
  if(!root) return root
  let res = [], stack = [], cur = root;
  while(cur || stack.length > 0) {
    while(cur) {
      stack.push(cur)
      cur = cur.left //【左】
    }
    cur = stack.pop()
    res.push(cur.val) // 【根】
    cur = cur.right // 【右】
  }
  return res
}
// 后续【左右根】
const houxu = (root) => {
  if(!root) return root
  let res = [], stack = [], cur = root;
  while(cur || stack.length > 0) {
    while(cur) {
      res.push(cur.val)// 【根】
      stack.push(cur)
      cur = cur.right // 【右】
    }
    cur = stack.pop()
    cur = cur.left // 【左】
  }
  // 根右左 => reverse => 左右根(后续)
  return res.reverse()
}

/******** 层次遍历 ********/
const bfs = (root) => {
  if(!root) return root
  let queue = [root], res = [], cur = null;
  while(queue.length > 0) {
    cur = queue.shift()
    res.push(cur.val)
    cur.left && queue.push(cur.left)
    cur.right && queue.push(cur.right)
  }
  return res
}
// 层次遍历(分层)
const levelOrder = (root)=> {
  if(!root) return root
  /**
    * level: 当前层索引
    * queue: 存数队列
  */
  let level = 0,queue = [root], res=[];
  while(queue.length > 0) {
    res[level] = []
    let count = queue.length

    while(count --) {
      const curNode = queue.shift()
      res[level].push(curNode.val)
      curNode.left && queue.push(curNode.left)
      curNode.right && queue.push(curNode.right)
    }
    level ++
  }
  return res
}
// 锯齿形层次遍历 
var zigzagLevelOrder = function (root) {
  if (!root) return root;
  /**
   * cur: 当前层数目
   * next: 下一层数目
   * path: 当前层数据
   * queue: 当前行队列
   * isOdd: 当前行是否为奇数行
   * nextQueue: 下一行队列
   */
  let cur = 1,
    next = 0,
    path = [],
    queue = [root],
    res = [],
    isOdd = true,
    nextQueue = [];
  while (queue.length > 0) {
    let curNode;
    if (isOdd) {
      curNode = queue.pop();
      path.push(curNode.val);

      if (curNode.left) {
        nextQueue.push(curNode.left);
        next++;
      }
      if (curNode.right) {
        nextQueue.push(curNode.right);
        next++;
      }
    } else {
      curNode = queue.pop();
      path.push(curNode.val);

      if (curNode.right) {
        nextQueue.push(curNode.right);
        next++;
      }
      if (curNode.left) {
        nextQueue.push(curNode.left);
        next++;
      }
    }

    cur--;
    if (cur === 0) {
      // 进入下一层
      cur = next;
      next = 0;
      // 每一层数据（path）用数组包起来
      res.push(path);
      path = [];
      isOdd = !isOdd;
      queue = nextQueue;
      nextQueue = [];
    }
  }
  return res;
};

// 第K小的元素
var kthSmallest = function (root, k) {
  function zhongxu(root, res = []) {
    if (!root) return root;
    zhongxu(root.left, res);
    res.push(root.val);
    if (res.length === k) return res;
    zhongxu(root.right, res);
    return res;
  }
  const res = zhongxu(root, []);
  console.log(res);
  return res[k - 1];
};
// 最近公共祖先
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return root;
  if (p === root || q === root) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  console.log(root, left, right);
  if (left && right) return root;
  if (left && !right) return left;
  if (!left && right) return right;
  return null;
};
// 二叉树直径
var diameterOfBinaryTree = function (root) {
  let max = 0;
  function getmax(root) {
    if (!root) return 0;
    let left = getmax(root.left);
    let right = getmax(root.right);
    max = Math.max(left + right, max);
    return Math.max(left + 1, right + 1);
  }
  getmax(root);
  return max;
};
// 根到叶子节点数字之和
var sumNumbers = function (root) {
  let res = 0;
  function getNumStr(root, str) {
    if (!root) return 0;
    str += root.val;
    if (root.left) {
      getNumStr(root.left, str);
    }
    if (root.right) {
      getNumStr(root.right, str);
    }
    if (!root.left && !root.right) {
      res += Number(str);
    }
  }
  getNumStr(root, "");
  return res;
};
// 对称二叉树
const isSymmetric = (root) => {
  let qianRes = [],
    houRes = [];
  function preDfs(root) {
    if (!root) return;
    qianRes.push(root.val);
    preDfs(root.left);
    preDfs(root.right);
  }
  function houDfs(root) {
    if (!root) return;
    houDfs(root.left);
    houDfs(root.right);
    houRes.push(root.val);
  }
  preDfs(root);
  houDfs(root);
  const reverseHouRes = houRes.reverse();
  let a = true;
  for (let i = 0; i < qianRes.length; i++) {
    if (qianRes[i] !== reverseHouRes[i]) {
      a = false;
      break;
    }
  }
  return a;
};
// 判断搜索二叉树
const isValidBST = (root) => {
  if (!root) return false;
  const zhongxu = (root, res) => {
    if (!root || flag === false) return null;
    if (root.left) zhongxu(root.left, res);
    if (res[res.length - 1] >= root.val) {
      flag = false;
      return;
    }
    res.push(root.val);
    if (root.right) zhongxu(root.right, res);
  };
  let flag = true;
  zhongxu(root, []);
  return flag;
};


/********************** 链表 start **********************/
// 1.反转链表(双指针法)
const reverseLinkList = (head) => {
  if (!head) return null;
  let cur = head,
    pre = null;
  while (cur) {
    let next = cur.next; // 先保存next
    cur.next = pre; // 反转当前节点指向
    // 双指针前移
    pre = cur;
    cur = next;
  }
  return pre;
};
// 2.回文链表
const isPalindrome = (head) => {
  if (!head) return false;
  if (!head.next) return true;
  let slow = head,
    fast = head,
    pre = null;
  while (fast && fast.next) {
    fast = fast.next.next;

    let temp = slow.next;
    slow.next = pre;
    pre = slow;
    slow = temp;
  }
  // 关键一步：用于区分奇数偶数链表长度
  if (fast) slow = slow.next;

  let flag = true;
  while (pre && slow) {
    if (pre.val === slow.val) {
      pre = pre.next;
      slow = slow.next;
    } else {
      flag = false;
      break;
    }
  }
  return flag;
};
// 3.链中有环
const hasCircle = (head) => {
  if (!head) return null;
  let j = head,
    k = head;
  let res = false;
  while (k && k.next) {
    j = j.next;
    k = k.next.next;
    console.log(j.val, k.val);
    if (j.val === k.val) {
      res = true;
      break;
    }
  }
  return res;
};
// 4.删除链表倒数第k个节点
const removeNthFromEnd = (head, k) => {
  if (!head || !head.next) return null;
  let slow = head,
    fast = head;
  let slowPre = null;
  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }
  while (fast) {
    slowPre = slow;
    slow = slow.next;
    fast = fast.next;
  }
  if (slowPre) {
    slowPre.next = slow.next;
    return head;
  } else {
    return head.next;
  }
};
// 5.合并递增链表
const mergeLinkLists = (list1, list2) => {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list2.val >= list1.val) {
    list1.next = mergeLinkLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeLinkLists(list1, list2.next);
    return list2;
  }
};
// 6.两数相加
const addTwoNumbers = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;
  let carry = 0,
    res = {},
    resHead = res;
  while (l1 || l2) {
    let l1Val = l1.val;
    let l2Val = l2.val;
    let sum = l1Val + l2Val + carry;

    if (sum > 9) {
      sum = sum - 10;
      carry = 1;
    } else {
      carry = 0;
    }

    res.val = sum;
    res.next = {};
    console.log(res);
    res = res.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  console.log(resHead);
};

// 7.相交链表
const getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let p1 = headA,
    p2 = headB;
  while (p1 !== p2) {
    p1 = p1 === null ? headB : p1.next;
    p2 = p2 === null ? headA : p2.next;
  }
  return p1;
};

// 二叉树展开为链表(无需返回，在原二叉树的结构上修改)
const flatten = (root) => {
  if(!root) return root
  let res = [], cur = root, stack = [];
  while(cur || stack.length > 0) {
    while(cur) {
      res.push(cur) // 根
      stack.push(cur)
      cur = cur.left // 左
    }
    cur = stack.pop()
    cur = cur.right // 右
  }
  // **res 中保存的节点为引用类型数据，故修改改数据会对源数据造成影响**
  const len = res.length
  for(let i = 0; i < len-1; i++) {
    const cur = res[i]
    const next = res[i+1]
    cur.left = null
    cur.right = next
  }
  console.log(root)
};

// LRU缓存
// 9.LRU缓存
var LRUCache = function(capacity) {
  this.len = capacity
  this.queue = []
}

LRUCache.prototype.get = function(key) {
  const flag = this.hasOwnProperty(key)
  if(flag) {
    this.queue = this.queue.filter(x => x!== key)
    this.queue.push(key)
    return this[key].value
  } else {
    return -1
  }
}

LRUCache.prototype.put = function(key, value) {
  const length = Object.keys(this).length - 2
  const flag = this.hasOwnProperty(key)
  if(flag) {
    // 更新数据
    this.queue = this.queue.filter(x => x!== key)
    this.queue.push(key)
    this[key] = {key, value}
  } else {
    if(length >= this.len) {
       // 已经满了，需先删除
      const deleteKey = this.queue.shift()
      delete this[deleteKey]
    }
    // 新增数据
    this[key] = {value, key}
    this.queue.push(key)
  }
}
