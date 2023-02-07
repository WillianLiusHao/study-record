
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

      const title = file.endsWith('.md') ? file.replace('.md', '') : file
      const current = { title, sidebarDepth: 2, collapsable: true };

      if (fs.statSync(subPath).isDirectory()) {
        current.children = buildChildren(subPath, `${parentName}/${file}`);
      } else {
        if(!file.endsWith('.md')) return

        current.path = encodeURI(`${parentName}/${file.slice(0, file.includes('README.md') ? -9 : -3)}`)
        
      }
      return current;
    })
    .filter((item) => item);
}

const sidebar = buildChildren(workPath);

module.exports = {
  title: "前端随笔 WillianLiusHao",
  description:
    "勤学如春起之苗，不见其增，日有所长",
  themeConfig: {
    nav: [{ text: "GitHub", link: "https://github.com/WillianLiusHao" }],
    sidebar,
    // displayAllHeaders: true,
    // activeHeaderLinks: false,
  },
  dest: path.resolve(__dirname, "../", "../", "dist"),
  base: "/study-record/",
  evergreen: true,
};
