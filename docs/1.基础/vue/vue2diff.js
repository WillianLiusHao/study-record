
const oldNode = [
    {
        tag: 'div',
        data: 'a',
        key: 1
    },
    {
        tag: 'div',
        data: 'b',
        key: 2
    },
    {
        tag: 'div',
        data: 'c',
        key: 3
    },
    {
        tag: 'div',
        data: 'd',
        key: 4
    }
]

const parentNode = document.createElement('div')
parentNode.id = 'parent'
oldNode.forEach(node => {
    const realNode = document.createElement(node.tag)
    realNode.innerText = node.data
    realNode.setAttribute('key', node.key)
    parentNode.appendChild(realNode)
})

const newNode = [
    {
        tag: 'div',
        data: 'b',
        key: 2
    },
    {
        tag: 'div',
        data: 'a',
        key: 1
    },
    {
        tag: 'div',
        data: 'd',
        key: 4
    }
]
function isSameNode(o, n) {
    return o.tag === n.tag && o.key === n.key
}
function diff(oldN, newN) {
    let oldStart = 0, oldEnd = oldN.length - 1;
    let newStart = 0, newEnd = newN.length - 1;

    while(oldStart <= oldEnd && newStart <= newEnd) {
        const oldStartNode = oldN[oldStart]
        const oldEndNode = oldN[oldEnd]
        const newStartNode = newN[newStart]
        const newEndNode = newN[newEnd]
        
        if(isSameNode(oldStartNode, newStartNode)) {
            oldStart ++        
            newStart ++        
        } else if (isSameNode(oldEndNode, newEndNode)) {
            oldEnd --
            newEnd --
        } else if (isSameNode(oldStartNode, newEndNode)) {
            // 将某个子节点移动到某个新位置（不需要删掉节点）
            parentNode.insertBefore(oldN[oldStart], oldN[oldEnd])
            oldStart ++
            newEnd --
        } else if (isSameNode(oldEndNode, newStartNode)) {
            parentNode.insertBefore(oldN[oldEnd], oldN[oldStart])
            oldEnd --
            newStart ++
        } else {
            // 待实现    
        }
    }
    if(oldStart > oldEnd && newStart < newEnd) {
        // 需要新增
        for(let i = newEnd; i > newStart; i--) {
            // 从后往前依次插入
            const newNode = document.createElement(newN[i].tag)
            newNode.innerText = newN[i].data
            newNode.setAttribute('key', newN[i].key)

            parentNode.insertBefore(newNode, oldN[oldEnd])
        }
        
    } else if(oldStart > oldEnd && newStart < newEnd) {
        // 需要删除
    }
}

const res = diff(oldNode, newNode)
console.log(res)



