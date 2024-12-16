# Note-mark

### Description

Note-mark is a simple note-taking application. It allows you to create, edit, and delete notes. The application is built using `Electron` `React` and `TypeScript`.

### what we use

## **Tech Stack**

The project utilizes the following technologies:

| **Technology**  | **Version** | **Description**            |
|------------------|-------------|----------------------------|
| **Frameworks**   |             |                            |
|Electron         | `^31.7.6`     | Build cross-platform desktop apps |
| React            | `18.3.1`      | Frontend UI library        |
| TypeScript       | `5.7.2`       | Strongly typed JavaScript  |
| **Toolchain**    |             |                            |
| Vite             | `5.4.11`      | High-performance build tool|
| pnpm             | `9.15.0`      | Fast, disk-efficient package 
| **Linters & Formatters** |     |                            |
| ESLint           | `8.57.1`      | JavaScript/TypeScript linter |
| Prettier         | `3.4.2`       | Code formatter             |

## **list** 

```
.
├── src
│   ├── main          # 主进程相关代码
│   │   ├── lib       # 主进程核心逻辑和工具库
│   │   ├── index.ts  # 主进程入口文件
│   │   └── index.d.ts # 主进程类型定义文件
│   ├── preload       # 预加载脚本
│   │   ├── index.ts  # 预加载脚本入口文件
│   │   └── index.d.ts # 预加载脚本类型定义文件
│   ├── renderer      # 渲染器（前端）代码
│   │   ├── src 
│   │   │   ├── components   # 通用 UI 组件
│   │   │   ├── hooks        # 自定义 React Hooks
│   │   │   ├── store        # 状态管理相关文件
│   │   │   ├── assets       # 静态资源（图片、字体等）
│   │   │   ├── mocks        # 模拟数据和服务
│   │   │   ├── App.tsx      # 应用入口
│   │   │   └── ...          # 其他模块
│   │   └── index.html       # 渲染器的 HTML 模板
│   └── shared       # 主进程、预加载和渲染器共享的模块
│       ├── constants.ts     # 通用常量
│       ├── types.ts         # 通用类型定义
│       └── ...              # 其他共享模块
├── resources       # 应用资源（图标、菜单等）
│   └── icon.png    # 应用程序图标
├── package.json    # 项目依赖和脚本
├── README.md       # 项目文档
└── ...
```
