# Claude Code

## 1. CCSwitch

功能：切换当前使用的模型



## 2. 使用技巧

[官方文档](https://code.claude.com/docs/zh-CN)

### 初级

1. 权限设置：`shift + tab`
2. plan模式
3. /+命令：如`/model`、`rewind`、`context`
4. 上下文：上下文超过50%占比时，AI的效能下降，可通过 `/clear` 重置上下文
5.  关联 github：直接让 claude 提交代码
6. 调试：截图或提供报错代码，继续 vide coding
7. 联网开发：让 cc 去网上搜寻好的方案进行功能开发
8. 理解和询问：vibe coding 不是纯 vibe，也需要理解 ai 每一步在干什么，写了什么，做到心中有数

### 高级

#### 1. skills：技能包

1. **frontend design**：帮你生成高设计质量、可直接用于生产环境的前端界面代码，避免那种千篇一律的 “AI 模板感”，输出的代码会更有设计感、更精致。
1. **superpowers**：提供一整套“结构化开发方法”的技能包，包括头脑风暴、子代理+代码审查、系统化调试、TDD，以及编写新技能等。它还强调严格的 TDD（红-绿-重构）与分阶段调试流程。
1. agent broswer：ai可以自助打开网页，进行测试，爬数，填表单等操作

- find-skills：不知道有什么具体的skills时，可描述具体功能让ai去自己寻找
- vercel skills：部署项目

#### 2. agent teams：多 agent 分饰不同角色进行协作开发

#### 3. mcp：mcp会占用额外的 tokens

#### 4. GSD 框架

#### 5. work-tree