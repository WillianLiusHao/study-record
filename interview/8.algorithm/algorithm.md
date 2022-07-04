## 算法
> leetcode中hot 100 | 腾讯精选50题 | 精选Top面试题 | 剑指offer | 面试中遇到的一些算法题

[前端算法渣的救赎之路](https://juejin.cn/post/6844904175562653710)

### 链表  
>  常见题型

- 双指针
  + 链表的中间节点
  + 链表的倒数第k个节点(`mid`)
  + 删除第k个节点
  + 反转链表

- 特殊链表
  + **回文链表**（`解法 & 奇偶长度处理`)
  + 有环（`双指针`）
  + 链表中环位置

- 多条链表（拼接/求和）
  + 合并两个单调递增链表（`递归`）
  + 两数相加(`mid`)
  + **相交链表**（`思路`）

### 二叉树  
  - 遍历 
    + 前中后序 
    + 层次遍历
      + 队列思想
      + 记录每层数目
      + 数组包裹每层数据，进入下一层
      ```js
        const levelOrder = (root)=> {
          if(!root) return root
          /**
           * cur: 当前层数目
          * next: 下一层数目
          * path: 当前层数据
          * queue: 存数队列
          */
          let cur = 1,next = 0, path = [],queue = [root], res=[];
          while(queue.length > 0) {
            const curNode = queue.shift()
            path.push(curNode.val)
            if(curNode.left) {
              queue.push(curNode.left)
              next++
            }
            if(curNode.right) {
              queue.push(curNode.right)
              next++
            }
            cur--
            if(cur ===0) {
              // 进入下一层
              cur = next
              next = 0
              // 每一层数据（path）用数组包起来
              res.push(path)
              path = []
            }
          }
          return res
        }
      ```
  
  - 遍历变种
    + 锯齿形层次遍历

  - 根据已知二叉树，求某值
    + 二叉树的最大深度
    + **二叉搜索树的第K小元素(no.230)**
    + 二叉树最近公共祖先(剑指 no.68)
    + 二叉树的直径
    + 求根到叶节点数字之和(剑指Ⅱ no.049)

  - 一些特殊的二叉树（判断和构建）
    + 对称二叉树 （双指针）
    + 反转二叉树 (递归)


### 栈和队列
### dp(Dynamic Programming：动态规划)
  - [ ] [70.爬楼梯](https://leetcode.cn/problems/climbing-stairs/)
  - [ ] [198.打家劫舍](https://leetcode.cn/problems/house-robber/)
  - [ ] [221.最大正方形](https://leetcode.cn/problems/maximal-square/)
  - [ ] [322.零钱兑换](https://leetcode.cn/problems/coin-change/)
  - [ ] [62.不同路径](https://leetcode.cn/problems/unique-paths/)
  - [ ] [121.买卖股票系列](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/)

### 贪心(greedy)

- [ ] 剑指 Offer 14剪绳子
- [ ] 55.跳跃游戏

### 哈希表
### 字符串
### 二分
  - 回溯
  - 排序
    1. 冒泡

### 并查集
  - 拓扑排序
  - 位运算
  - 双指针
    - [ ] 11.盛水最多的容器

### 矩阵
