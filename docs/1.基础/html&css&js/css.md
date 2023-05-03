# css

## 盒子模型

- 标准盒模型（content-box）
- ie盒模型（border-box)
## flex

- `flex: 1`
  - flex-grow: 1;
  - flex-shrink: 1;
  - flex-basis: 0;

## BFC

### 是什么

Block Formatting Context：块级格式化上下文
### 解决什么问题

- margin 塌陷
- 清除浮动

### 怎么触发

- float 不为none
- position: absolut / fixed;
- overflow: 不为visible;
- display: flex / inline-block / table-cell
