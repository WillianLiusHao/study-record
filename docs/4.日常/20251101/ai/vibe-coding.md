# Vibe coding

## 项目结构

```markdown
- ai-project-demo
	- .claude
		- commands(人写的，建议文档)
			- my:plan.md（规划文档）
			- my:feature.md（功能特性文档）
	- .plan
		- project.md(AI生成的项目规划文档)

```





## 流程

### 1. 写规划文档

​	写简略规划大纲，然后在 claude code 中进行对话，描述需要实现的功能和需求，让 AI 产出详细的规划文档

```markdown
# 项目规划

## 功能拆解

尽可能详细，并且按照新特性逐步开发

## 性能优化

在设计需求实现的时候，尽量考虑性能瓶颈点，并且进行优化方案的探讨

## 产出

规划完后，将规划文档输出至 .plan.md 文件中 
```

### 2. 写功能特性文档

​	写简略功能特性规范文档，让AI基于第一步AI生成的.plan 中项目规范进行开发

```markdown
# 具体新特性开发

基于.plan规划，逐步开发新特性
严格按照当前项目的规范

- eslint规范
- prettier规范
- commitlint 规范
- cspell 规范
- 单测规范
```