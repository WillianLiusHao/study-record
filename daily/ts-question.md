# ts 练习题

## 第一题

希望参数a和b类型一致，不一致时给出报错信息
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
