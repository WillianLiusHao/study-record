# TS


## 1. **什么是泛型？**

泛型是静态类型语言的基本特征，允许将类型作为参数传递给另一个类型、函数、或者其他结构。

```js
// T,K就是泛型
let pickType = <T, K extends keyof T>(obj: T, attrArr: K[]) => {
  for(let attr of attrArr) {
    if(attr in obj) {
      return obj[attr]
    }
  }
}
```

[泛型](https://juejin.cn/post/7064351631072526350)
### 基本使用

- **处理函数参数**
- 默认参数
- 处理多个函数参数
- 函数副作用操作

### 约束

- 约束泛型
```js
interface ILength { length: number }
function printLength<T extends ILength>(arg: T): T {
  console.log(arg.length) // 因为继承了 ILength 类，所以此处打印长度属性才不会报错
  return arg
}
```
- 泛型约束类
- 泛型约束接口
```js
interface Person<T, U> {
  name: T
  age: U
}
const person: Person<string, number> = { name: 'william', age: 26 }
```
- 泛型定义数组 `Array<number>`


## 2. **类型和接口的区别？**


## 3. 工具类

- keyof: 获取接口所有的 key 值的联合类型
```js
type Person = {
  name: string;
  age: number;
  sex: number
}
type T = keyof Person
// T的类型为 'name' | 'age' | 'sex'
```

- in: 遍历字符串联合类型 或 枚举类型
- extends：P extends T => P 是 T 的子类型（P的类型更多，T的类型更少）

- Partial (对象全部属性转为可选)
- Required (对象全部属性转为必选)
- Readonly
- Pick<T,K>
- Record<P,T> (构造一个类型，属性为 P 的每个类型`P一般为字符串联合类型`，类型为 T)

- Exclude<T,U> (从类型 T 中`T一般是联合类型`，去掉可分配给U的类型)
