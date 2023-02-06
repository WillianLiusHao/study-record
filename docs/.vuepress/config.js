
const fs = require("fs");
const path = require("path");
const process = require("process");

const ignoreList = [".vuepress"];

const workPath = path.join(process.cwd() + "/docs");

function buildChildren(path, parentName = "") {
  const files = fs.readdirSync(path);
  return files
    .map((file) => {
      if (ignoreList.includes(file)) return;
      const subPath = `${path}/${file}`;
      const current = { title: file, sidebarDepth: 2 };
      if (fs.statSync(subPath).isDirectory()) {
        current.children = buildChildren(subPath, `${parentName}/${file}`);
      } else {
        if (file === "README.md") {
          current.path = `${parentName}/`;
        } else {
          const suffixName = file.slice(-3);
          if (suffixName !== ".md") return;
          current.path = encodeURI(`${parentName}/${file.slice(0, -3)}`)
        }
      }
      return current;
    })
    .filter((item) => item);
}

const sidebar = buildChildren(workPath);

module.exports = {
  title: "前端随笔 WillianLiusHao",
  description:
    "Record William's daily study notes",
  themeConfig: {
    nav: [{ text: "GitHub", link: "https://github.com/WillianLiusHao" }],
    sidebar,
  },
  dest: path.resolve(__dirname, "../", "../", "dist"),
  base: "/study-record/",
  evergreen: true,
};
