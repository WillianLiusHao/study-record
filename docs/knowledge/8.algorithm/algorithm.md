## 算法
> leetcode中hot 100 | 腾讯精选50题 | 精选Top面试题 | 剑指offer | 面试中遇到的一些算法题

[前端算法渣的救赎之路](https://juejin.cn/post/6844904175562653710)

#### 链表  
>   **常见题型**

- 双指针
  + 链表的中间节点
  + 链表的倒数第k个节点(`mid`)
  + 删除第k个节点
  + 反转链表
  + **链表排序**

- 特殊链表
  + **回文链表**（`解法 & 奇偶长度处理`)
  + 有环（`双指针`）
  + 链表中环位置

- 多条链表（拼接/求和）
  + 合并两个单调递增链表（`递归`）
  + 两数相加(`mid`)
  + **相交链表**（`思路`）



>   **常用方法**

- **链表切割**(cut)
  - 使用快慢指针找到链表的中点，奇数个为`中点`,偶数个为`中心左边`节点
  - 找到中点`slow`后，保存右段并切割，`temp=slow.next`，`slow.next = null`
  - 返回`左段的头结点`和`右段(temp)`

- **合并链表**(merge)
  - 递归思想
  ```js
    if(list1.val < list2.val) {
      list1.next = mergeLinkLists(list1.next, list2);
      return list1
    } else {
      list2.next = mergeLinkLists(list2.next, list1);
      return list2
    }
  ```

#### 二叉树  
  1. 遍历 
      + 前中后序 (`递归 & 迭代`)
        ```js
          // 1. 递归：非常容易，只需要改变存值和递归方法的位置即可
          // 2. 迭代:
            // 后续采用前序反转的形式
            const houxu = (root) => {
              if(!root) return root
              let cur = root, stack = [], res = [];
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
        ```

      + 层次遍历
        + 队列思想
        + 记录每层数目
        + 数组包裹每层数据，进入下一层
        ```js
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
        ```

  2. 遍历变种
      + 锯齿形层次遍历

  3. 根据已知二叉树，求某值
      + 二叉树的最大深度(dfs)
      + **二叉搜索树的第K小元素(no.230)**
      + 二叉树最近公共祖先(剑指 no.68)
      + 二叉树的直径
      + 求根到叶节点数字之和(剑指Ⅱ no.049)

  4. 一些特殊的二叉树（判断和构建）
      + 对称二叉树 (`双指针， 一前一后`)
      + 搜索二叉树 (`中序 or 递归`)
      + 累加二叉树
      + 反转二叉树 (`递归`)
      + 合并二叉树


#### 双指针
  [评论区高级双指针解法](https://leetcode.cn/problems/move-zeroes/comments/)
  - [x] [283.移动零](https://leetcode.cn/problems/move-zeroes/)
  - [x] [75.颜色分类](https://leetcode.cn/problems/sort-colors/)


#### 栈和队列
#### dp(Dynamic Programming：动态规划)
  - [ ] [70.爬楼梯](https://leetcode.cn/problems/climbing-stairs/)
  - [ ] [198.打家劫舍](https://leetcode.cn/problems/house-robber/)
  - [ ] [221.最大正方形](https://leetcode.cn/problems/maximal-square/)
  - [ ] [322.零钱兑换](https://leetcode.cn/problems/coin-change/)
  - [ ] [62.不同路径](https://leetcode.cn/problems/unique-paths/)
  - [ ] [121.买卖股票系列](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/)
  - [x] [22.括号生成](https://leetcode.cn/problems/generate-parentheses/)

#### 字符串
  - [x] [17.电话号码的字母组合](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/)


#### 贪心(greedy)

- [ ] 剑指 Offer 14剪绳子
- [ ] 55.跳跃游戏


#### 二分
  - [x] [33.搜索旋转排序数组](https://leetcode.cn/problems/search-in-rotated-sorted-array/)



#### 并查集
  - 拓扑排序
  - 位运算 `n&1` `<<` `>>`
    - [x] [338.比特位计数](https://leetcode.cn/problems/counting-bits/)
  - 双指针
    - [x] [11.盛水最多的容器](https://leetcode.cn/problems/container-with-most-water/)

#### 矩阵
#### 哈希表

