# ts 练习题

> 常用内置工具函数、方法

  - keyof: 获取类型的键
  - typeof: 获取值的类型
  - Required: 把类型所有属性变必选
  - Partial: 把类型所有属性变可选
  
  - Pick: 从类型中选出某些属性
  - Omit: 从类型中去掉某些属性

## 第一题


- 希望参数a和b类型一致，不一致时给出报错信息
```ts
function f(a: string | number, b: string | number) {
  if (typeof a === 'string') {
    return a + ':' + b; // no error but b can be number!
  } else {
    return a + b; // error as b can be number | string
  }
}

f(2, 3); // Ok
f(1, 'a'); // Error
f('a', 2); // Error
f('a', 'b') // Ok
```
答案
```ts
function add(a: string, b: string): string
function add(a: number, b: number): number
function add(a: string | number, b: string | number) {
  if(typeof a === 'number' || typeof b === 'number') {
    return a + b
  } else {
    return a + ':' + 'b'
  }
}
```



## 第二题


- 实现一个 SetOptional 工具类型，把给定的 keys 变成可选的？
- 实现一个 SetRequired 工具类型，把给定的 keys 变成必选的？
```ts
type Foo = {
	a: number;
	b?: string;
	c: boolean;
}

// 测试用例: 把类型 Foo 中的 'a'或 'b' 变成可选的
type SomeOptional = SetOptional<Foo, 'a' | 'b'>; 

// type SomeOptional = {
// 	a?: number; // 该属性已变成可选的
// 	b?: string; // 保持不变
// 	c: boolean; 
// }
```
答案
```ts
/* 灵活使用内置类型工具
  Omit: 剔除类型中某属性
  Pick: 选出类型中某属性
  Partial: 把某类型所有属性变为可选
  Required: 把某类型所有属性变成必选
*/

type SetOptional<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>
type SetRequired<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>
```



## ☆第三题


- 实现一个 ConditionalPick 工具类型，根据指定的条件生成新类型
```ts
interface Example {
	a: string;
	b: string | number;
	c: () => void;
	d: {};
}

// 测试用例：
type StringKeysOnly = ConditionalPick<Example, string>;
//=> {a: string}
```
答案
```ts
type ConditionalPick<T, P> = {[K in keyof T as T[K] extends P ? K : never]: T[K]}

```



## 第四题


- 为函数增加某个类型的参数
```ts
type Fn = (a: number, b: string) => number
type AppendArgument<F, A> = // 你的实现代码

type FinalFn = AppendArgument<Fn, boolean> 
// (x: boolean, a: number, b: string) => number
```
答案
```ts
/*
  灵活使用内置类型工具
  Parameters<T>: 获取函数T类型的参数类型
  ReturnType<T>: 获取函数T类型的返回值类型
*/
type AppendArgument<F, A> = (x: A, ...args: Parameters<F>) => Return<F>
// !报错: 类型“F”不满足约束“(...args: any) => any”
/*
  注意：Parameters 、Return 工具函数的入参 F 必须为函数类型
  可这么定义 => F extends (...args: any) => any
  即 T为 "任意参数任意返回值" 这一函数类型的子集
*/
type AppendArgument<F extends (...args: any) => any, A> = (x: A, ...arg: Parameters<F>) => ReturnType<F>
```



## 第五题（？？？）


- 定义一个 NativeFlat 工具类型，支持把数组类型拍平（扁平化）。具体的使用示例如下所示：
```ts
// 测试用例：
type NaiveResult = NaiveFlat<[['a'], ['b', 'c'], ['d']]>
// NaiveResult的结果： "a" | "b" | "c" | "d"
```
答案
```ts
type NaiveFlat<T> = T extends (infer P)[] ? (P extends any[] ? NaiveFlat<P>: P) : never
```
