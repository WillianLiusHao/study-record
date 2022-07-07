const tree = {
  val: 1,
  left: { val: 2, left: {val: 4}, right: {val: 5}},
  right: { val: 3, left: {val: 6}}
}

function bfs(root) {
  if(!root) return []
  let res = [], queue = [root];
  while (queue.length > 0){
    let currentLevel = []
    /* 
      ！！！注意：
        1. len 需在每一层进入时保存，否则每次 queue.shift 后会变化
        2. 此处通过len 确定每层节点数目
    */
    let len = queue.length
    for(let i= 0; i<len; i++) {
      let curNode = queue.shift()
      currentLevel.push(curNode.val)
      if(curNode.left) queue.push(curNode.left)
      if(curNode.right) queue.push(curNode.right)
    }
    res.push(currentLevel)
  }
  return res
}
var a = bfs(tree)
console.log(a)

