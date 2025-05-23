[TOC]

## 引言

TODO。跟着[参考链接 1](https://pomb.us/build-your-own-react/)，实现一个 mini-react-hooks。

这次还是通过参考 deepseek 生成的代码来初始化项目。Prompt：

> 如何在 Typescript 项目中，使用 babel-plugin-transform-react-jsx，或者其他更合适的 Babel 插件，将 jsx 代码转为 myCreateElement 函数的调用？
>
> 补充：使用 vite vanilla typescript 和最新版 Babel。输出完整代码。

根据输出，项目的依赖为：

```powershell
yarn add -D @vitejs/plugin-react @babel/core @babel/plugin-transform-react-js
```

## hans-js-runtime

调试发现，对于 JSX 树，`hansCreateElement`的调用顺序是后序遍历。

## JSX

为了让项目跑起来，需要在`vite.config.ts`里添加：

```ts
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "@babel/plugin-transform-react-jsx",
            {
              pragma: "myCreateElement",
              pragmaFrag: "myFragment",
            },
          ],
        ],
      },
    }),
  ],
});
```

其中，`pragmaFrag` 是 Babel 转换 JSX 时用于处理 React 片段（`<>...</>` 或 `<React.Fragment>...</React.Fragment>`）的配置选项。

接下来的配置，是解决 IDE 报错的问题，不解决也不影响运行。不同于 React 项目，我们还需要在每个`.tsx`文件下添加：

```ts
/** @jsx myCreateElement */
/** @jsxFrag myFragment */
/** @jsxRuntime classic */
import { myCreateElement, myFragment } from "@/mini-react-hooks/my-jsx-runtime";
```

`jsx, jsxFrag`的作用为镇压 TS 报错。比如：

```
'myFragment' is declared but its value is never read.ts(6133)
```

根据[参考链接 2](https://bin.zmide.com/?p=1037)，vite 会在控制台报警告：`[vite] (client) warning: The JSX factory cannot be set when using React's "automatic" JSX transform /** @jsx myCreateElement */`。设置`classic`的可以镇压这个警告。

### IDE 报错： Cannot use JSX unless the '--jsx' flag is provided

在`tsconfig.json`中配置`"jsx": "react-jsx"`即可。

### IDE 报错： JSX element implicitly has type 'any' because no interface 'JSX.IntrinsicElements' exists

```powershell
yarn add -D @types/react @types/react-dom
```

## 参考资料

1. https://pomb.us/build-your-own-react/
2. https://bin.zmide.com/?p=1037
