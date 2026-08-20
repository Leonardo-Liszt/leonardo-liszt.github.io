# 部署到 GitHub Pages 手把手教程

> 全程免费、约 15–40 分钟，**不需要会编程，不需要装任何软件**，全程在浏览器操作。

本教程的目标：把 `diffgeo-viz` 网站发布到公网，得到一个 `https://你的用户名.github.io` 的网址，任何人都能输入网址访问。

---

## 第 0 步：理解你要上传什么

本 `deploy` 文件夹里就是**需要上传的全部内容**（共 66 个文件）：

```
deploy/
├── index.html          ← 网站入口（必须放在仓库根目录）
├── .nojekyll           ← 告诉 GitHub 不要用 Jekyll 处理（保留即可）
├── css/style.css
├── dist/site.js        ← 打包好的网站程序
└── js/lib/katex/       ← 数学公式库 + 字体
```

**关键**：上传时是上传 `deploy` **文件夹里面的内容**（让 `index.html` 出现在仓库根目录），而不是把整个 `deploy` 文件夹原样传上去。

---

## 第 1 步：注册 GitHub 账号

1. 打开 https://github.com
2. 点右上角 **Sign up** → 输入邮箱、密码、用户名
3. 用户名很重要——它决定你的网址。例如用户名是 `zhangsan`，网址就是 `https://zhangsan.github.io`
4. 完成邮箱验证（GitHub 会发一封验证邮件，点邮件里的链接）
5. 登录后你就有了账号

> 如果访问 github.com 较慢，可多刷新几次或用手机热点；注册只需一次。

---

## 第 2 步：创建仓库

1. 登录后，点右上角 **＋** 号 → **New repository**
2. **Repository name** 填：`你的用户名.github.io`
   - ⚠️ 必须严格是这个格式！例如用户名 `zhangsan`，就填 `zhangsan.github.io`
3. 可见性选 **Public**（公开，免费 Pages 必须公开）
4. 其余默认，点最下方绿色 **Create repository** 按钮

---

## 第 3 步：上传网站文件

1. 进入刚创建的仓库，页面上有 **"…or create a new repository on the command line"** 等提示，不用管
2. 点页面上方 **Add file** 按钮 → 选 **Upload files**
3. 打开本机上的 `deploy` 文件夹（在 `C:\Users\67461\anaconda_projects\deepseek harness\diffgeo-viz\deploy`）
4. **全选里面所有文件**（`index.html`、`.nojekyll`、`css`、`dist`、`js` 等），直接**拖拽**到网页的虚线框里
   - GitHub 会自动递归上传 `css/`、`js/`、`fonts/` 里的所有子文件
5. 等上传进度条走完，下方 **Commit changes** 处可填一句说明（如"首次上传"），点绿色 **Commit changes** 按钮

---

## 第 4 步：等待并访问

1. 提交后，GitHub 会在后台构建你的网站，通常 **1–3 分钟**生效
2. 在浏览器输入：`https://你的用户名.github.io`
   - 例如：`https://zhangsan.github.io`
3. 看到「整体微分几何可视化」首页，就成功了！🎉

---

## 常见问题

**Q：打开是 404 或空白？**
- 大概率是还没构建完，等 3–5 分钟再刷新
- 检查仓库名是不是严格 `用户名.github.io`
- 检查 `index.html` 是否在仓库**根目录**（而不是在一个子文件夹里）

**Q：页面样式/公式错乱？**
- 确认上传时是"deploy 里的内容"而不是"deploy 文件夹本身"
- 确认 `dist/site.js`、`js/lib/katex/` 都传上去了（GitHub 有时会漏传，看仓库文件列表核对）

**Q：想用自己买的域名（如 xxx.com）？**
- 在仓库 **Settings → Pages → Custom domain** 填入你的域名，再去域名服务商把域名解析到 GitHub 即可（可选，非必需）

**Q：改内容后怎么更新？**
- 重新运行 `node scripts\build.mjs` 生成新的 `dist/site.js`，再进 GitHub 仓库 → Add file → Upload files → 拖入新文件覆盖即可

---

## 备选：用 Netlify（也免费，界面更友好）

如果 GitHub 网络不好用，Netlify 更简单：
1. 打开 https://app.netlify.com → 用 GitHub 账号登录
2. 点 **Add new site → Deploy manually**
3. 把 `deploy` 文件夹整个拖进网页
4. 立刻得到一个 `https://随机名字.netlify.app` 网址

---

需要帮助时，把遇到的问题（截图/报错文字）发给我即可。
