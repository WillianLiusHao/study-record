const msgPath = process.env.HUSKY_GIT_PARAMS


console.log(msgPath);

console.error(`
        不合法的 commit 消息格式。
        请查看 git commit 提交规范：https://github.com/woai3c/Front-end-articles/blob/master/git%20commit%20style.md
    `)

process.exit(1)
