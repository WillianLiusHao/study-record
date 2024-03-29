# 手写

## 1. new

```js
function MyNew(fn, ...args) {
  const obj = Object.create(null); // 1. 创建空对象
  obj.__proto__ = fn.prototype; // 2. 构造原型链
  const cb = fn.call(obj, ...args); // 3. 执行函数，入参和改变this
  return typeof cb === "object" ? cb : obj; // 4. 判断返回类型
}

// test case
function Person(name, sex) {
  this.name = name;
  this.sex = sex;
  this.age = 18;
}
var p1 = MyNew(Person, "william", "1");
console.log(p1);
console.log(p1.__proto__ === Person.prototype);
```

## 2. call / bind / apply

```js
Function.prototype.myCall = function(target, ...opts) {
    target.fn = this
    const res = target.fn(...opts)
    delete target.fn
    return res
}

Function.prototype.Mybind = function(target, ...opts) {
    target.fn = this
   	const res = () => {
        return target.fn(...opts)
    }
    return res
}

Function.prototype.myApply = function(target, arr) {
    target.fn = this
    const res = target.fn(...arr)
    delete target.fn
    return res
}
```

## 3. 深浅克隆

```js
function shallowClone(obj) {
  if (typeof obj !== "object") return;
  let ret = obj instanceof Array ? [] : {};
  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      ret[k] = obj[k];
    }
  }
  return ret;
}

function deepClone(obj) {
  // 过滤基础数据类型和 null
  if (typeof obj !== "object" || obj === null) return;
  // 复杂数据类型：特殊处理 RegExp Date Array
  if (obj instanceof 'Date') return new Date(obj)
  if (obj instanceof 'RegExp') return new RegExp(obj)
  let ret = obj instanceof Array ? [] : {};
  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      ret[k] = typeof obj[k] === "object" ? deepClone(obj[k]) : obj[k];
    }
  }
  return ret;
}
```

## 4. 防抖 / 节流

```js
function debounce(fn, wait, immediate = true) {
  let timer = null;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, arguments);
    }, wait);
  };
}
let num = 1;
function Log() {
  num++;
  console.log(num);
}
const debFn = debounce(Log, 3000);
document.addEventListener("click", debFn);
```

```js
  function
```

## 5. instanceof

```js
function myInstance(target, origin) {
  let proto = Object.getPrototypeOf(target)
  const originPrototype = origin.prototype
  while(true) {
    if(!proto) return false
    if(proto === originPrototype) return true
    proto = Object.getPrototypeOf(proto)
  } 
}
```

## 6. 柯里化

## 7. 继承(组合寄生)

每次写前看一遍这个图

![原型链](https://images.vrm.cn/ox/2023/02/06/原型链.png)


```js
function Parent(name) {
  this.name = name
  this.num = [0, 1, 2]
}
Parent.prototype.sayName = function() {
  alert(this.name)
}
function Child(name, age) {
  this.age = age
  Parent.call(this, name) // 调用要继承的父类函数
}

// 实现inherit 函数
function inherit(children, parent) {
  // 1.创建父类的显示原型
  let prototype = Object.create(parent.prototype);
  // 2.修改改原型的构造器
  prototype.constructor = children;
  // 3.将子类的显示原型改为这个新创建的原型
  /* 
    结合new 的过程可以理解：
    1.创建空对象obj
    2.构造原型链，将obj.__proto__ 指向构造函数的 prototype(主要影响这一步)
    3.执行函数，把this指向当前对象obj
    4.判断函数执行后的返回值
  */
  // **继承的实现主要就是要改变子类的 显示原型prototype**
  children.prototype = prototype;
}

inherit(Child, Parent)

var child1 = new Child("william", 12); // {name: 'william', num: [0,1,2]}
child1.sayName(); //william
```

## 8. **Promise**

## 9. 异步控制并发数

## 10. 数组去重 / 扁平化

```js
[...new Set(arr)];
```

```js
function myFlat(arr) {
  let res = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      res = res.concat(myFlat(item));
    } else {
      res.push(item);
    }
  });
  return res;
}
```

## 11. 发布订阅 (EventListener)

```js
class EventEmitter {
  constructor() {
    this.fnLists = {};
  }
  on(type, fn) {
    this.fnLists[type]
      ? this.fnLists[type].push(fn)
      : (this.fnLists[type] = [fn]);
  }
  once(type, fn) {
    const onceFn = (...args) => {
      fn.call(this, ...args);
      this.off(type, fn);
    };
    this.on(type, onceFn);
  }
  emit(type, ...args) {
    if (this.fnLists[type]) {
      this.fnLists[type].forEach((fn) => {
        fn.call(this, ...args);
      });
    }
  }
  off(type, fn) {
    if (this.fnLists[type]) return;
    const removeIndex = this.fnLists[type].findIndex((x) => x === fn);
    this.fnLists[type].splice(removeIndex, 1);
  }
}

// test case
const event = new EventEmitter();

const handle1 = (...rest) => {
  console.log("handle1", rest);
};
const handle2 = (...rest) => {
  console.log("handle2", rest);
};

event.on("click", handle1);
event.on("click", handle2);

event.emit("click", 1, 2, 3, 4);

event.off("click", handle);

event.emit("click", 1, 2);

event.once("dbClick", () => {
  console.log(123456);
});
event.emit("dbClick");
event.emit("dbClick");
```

## 12. compose

```js
function double(num) {
  return num * 2;
}
function square(num) {
  return num ** 2;
}
function add2(num) {
  return num + 2;
}
function myCompose(...fnLists) {
  let res = null;
  return function (...args) {
    fnLists.forEach((fn) => {
      res = res ? fn.call(this, res) : fn.call(this, ...args);
    });
    return res;
  };
}
const fn = myCompose(double, add2, square);
fn(2);
```

## 13. 排序

1. 冒泡排序 `O(n^2)`：双循环，外层控制对比轮次，内层控制对比的下标。
2. 选择排序 `O(n^2)`：双循环，内外侧都控制下标，外层控制当前要替换的下标，内层控制用于对比的下标。
3. 快速排序 `O(nlogn)`：
4. 归并排序 `O(nlogn)`：后续遍历，`先二分，在合并`
5. 插入排序 `O(n^2)`：



- 冒泡 `O(n^2)`

```js
function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    // for(let i = 0; i < arr.length; i++)
    for (let j = 0; j < i; j++) {
      // for(let j = 0; j < arr.length-1-i; j++)
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
```

- 选择 `O(n^2)`

```js
function selectSort(arr) {
  let minIndex;
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}
```

- 插入排序 `O(n^2)`

```js
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // 当前要处理的数，在索引 i 处
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      // j 索引从 i 左边开始不断左移
      // 如果 arr[j] 大于 当前要处理的数 temp，则让改数右移一位
      arr[j + 1] = arr[j];
      j--;
    }
    //此时的j是要处理的数排序后应该在的位置
    arr[j + 1] = temp;
  }
  return arr;
}
insertSort([4, 2, 8, 9, 10]);
```

- 快排 `Ο(nlogn)`

```js
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let midIndex = arr.length >> 1;
  let leftArr = [], rightArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== midIndex) {
      arr[i] > arr[midIndex] ? rightArr.push(arr[i]) : leftArr.push(arr[i]);
    }
  }
  return quickSort(leftArr).concat(arr[midIndex], quickSort(rightArr));
}
```

- 归并 `O(nlogn)`

```js
//缺点：创建许多额外的内存空间
function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let mid = arr.length >> 1
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  // 递归
  const leftRes = mergeSort(left)
  const rightRes = mergeSort(right)
  // 递归后调用，为后续遍历，即归并
  return merge(leftRes, rightRes)
}
function merge(left, right) {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
}
```


## 14. Promise

1. 异步（通过状态实现,`pending状态`会暂缓执行）
2. then 的微任务（回调函数使用`微任务` 封装）
3. then/catch 的多次调用（回调函数使用`数组`存储）
4. **then的链式调用**

```js
const [PENDING, FULFILLED, REJECTED] = ['PENDING', 'FULFILLED', 'REJECTED']
class MyPromise {
  constructor(executor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    this.fulfillCb = []
    this.rejectCb = []
    // 定义成功回调函数，如果外部执行了这个函数，则做两件事
    // 1. 改变 promise 状态
    // 2. 现在全局储存 promise 成功的值(后续then的时候抛出)
    const resolve = (value) => {
      if(this.status === PENDING) {
        this.value = value
        this.status = FULFILLED
        // 状态改变后，如果已经有回调(pending状态下调用了then就会存储一条回调)，则需直接执行
        this.fulfillCb && this.fulfillCb.forEach(cb => cb())
      }
    }
    // 失败回调同理
    const reject = (reason) => {
      if(this.status === PENDING) {
        this.reason = reason
        this.status = REJECTED
        this.rejectCb && this.rejectCbforEach(cb => cb())
      }
    }
    // 执行外部传入的函数
    // 并将定义好的 resolve 和 reject 回调函数作为实参传入，抛出给外部执行
    try{
      executor(resolve, reject)
    } catch(e) {
      reject(e)
    }
  }
  then(fulfillCb) {
    if(this.status === FULFILLED) {
      Promise.resolve().then(() => fulfillCb(this.value))
    }
    if (this.status === PENDING) {
      // 存储回调函数
      this.fulfillCb.push(() => fulfillCb(this.value)) 
    }
  }
  catch(rejectCb) {
    if(this.status === REJECTED) {
      Promise.reject().catch(() => rejectCb(this.reason))
    }
    if (this.status === PENDING) {
      // 存储回调函数
      this.rejectCb.push(() => rejectCb(this.reason))
    }
  }
}
```

<!-- test case -->
```js
let p = new MyPromise((resolve, reject) => {
  const num = Math.random()*10
  if(num <= 5) {
    resolve(1)
  } else {
    reject(0)
  }
})

p.then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
```
