# sg-react-library

![CocoaPods](https://img.shields.io/npm/dt/sg-react-library.svg)
![CocoaPods](https://img.shields.io/npm/v/sg-react-library.svg)

这是一个 个人的 react 组件仓库

<!-- [demo](http://www.githubs.cloud/vue3-cron/) -->

## 项目地址

- github : https://github.com/sugdove/sg-react-library

- github 项目启动: 1.yarn 2.yarn serve

## 依赖

- react react-dom
- typescript

## 安装方式

```
npm install sg-react-library
```

## 使用方式

```javascript
//局部引入
import { Wordle, Dialog } from 'sg-react-library'
```

## 示例

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Wordle } from './src/index'
const root = ReactDOM.createRoot(
  document.getElementById('my-app') as HTMLElement
)
root.render(<Wordle />)
```

在示例中我使用了 typescript 语法,你可能需要引入 ts-loader 才能正常运行,或者你也可以用 es5 的写法

## 联系方式

邮箱 : 849809724@qq.com

欢迎大家关注我做的网站: http://www.githubs.cloud/

如果对您有帮助, 欢迎 star

有任何问题请发 Issues 或者邮箱联系我-.- 谢谢!
