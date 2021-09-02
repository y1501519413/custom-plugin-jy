# warning

## dont download, This is rubbish

## 别下载，这是垃圾

## 发包流程

官方链接[怎样发布一个npm包](https://www.npmjs.cn/getting-started/publishing-npm-packages/)

## 创建账号

```zsh
npm adduser
```

## 登陆

```zsh
npm login
```

Username,Password,Email

## 编写readme.md文件

发布该包后，该文件会展示在web页面上

## 发包

```zsh
npm publish
```

## 更新

### 修改版本号后再次执行发布命令

```zsh
npm version <update_version> & npm publish
```

## 修改readme文件

readme文件的改变同样需要发布一个新版本，所以需要更新版本后再次发布
可使用

```zsh
npm version patch
```

修改修订号

## 设置默认配置

```zsh
npm set init.author.email "example-user@example.com"
npm set init.author.name "example_user"
npm set init.license "MIT"
```
