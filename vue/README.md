# 创建项目
```
npm create vue@latest

│  ◻ JSX 支持               → 不选（用标准模板语法）
│  ◻ Router                 → 选上（页面路由必备）
│  ◻ Pinia                  → 选上（状态管理必备）
│  ◻ Vitest                 → 不选（以后需要再加）
│  ◻ 端到端测试              → 不选（以后需要再加）
│  ◻ Linter                 → 选上（保证代码质量）
│  ◻ Prettier               → 选上（自动格式化）

cd vue-project
npm install # 安装依赖
npm run format  # 格式化代码
npm run dev # 启动项目
```

# 目录结构
```
vue-project/
├── public/                  # 静态资源，直接复制到构建输出目录
│   └── favicon.ico          # 网站图标
├── src/
│   ├── assets/              # 静态资源（如图片、字体、CSS）
│   │   └── logo.png
│   ├── components/          # 可复用的通用组件
│   │   └── CommonHeader.vue
│   ├── composables/         # 可复用的 Composition API 逻辑（可选）
│   │   └── useFetch.js
│   ├── router/              # 路由配置
│   │   └── index.js
│   ├── stores/              # Pinia 状态管理（或 store/ 用于 Vuex）
│   │   └── index.js
│   ├── utils/               # 工具函数（如请求封装、格式化）
│   │   └── request.js
│   ├── views/               # 页面级组件（对应路由页面）
│   │   ├── HomeView.vue
│   │   └── AboutView.vue
│   ├── App.vue              # 根组件
│   └── main.js              # 入口文件（创建 Vue 应用）
├── index.html               # HTML 入口模板
├── vite.config.js           # Vite 配置文件
├── package.json             # 项目依赖与脚本
├── .gitignore               # Git 忽略文件
├── .env                     # 环境变量（开发）
├── .env.production          # 环境变量（生产）
└── README.md                # 项目说明
```

## 目录解析

| 路径                   | 描述                                                         |
| :--------------------- | :----------------------------------------------------------- |
| public/                | 存放不会被构建工具处理的静态资源，直接复制到 dist 目录，常用于 favicon、robots.txt 等 |
| public/favicon.ico     | 网站图标（favicon）                                          |
| src/                   | 项目源代码主目录，所有开发代码放在这里                       |
| src/assets/            | 存放图片、字体、全局 CSS 等静态资源，会被 Vite 处理（支持导入） |
| src/components/        | 存放可复用的通用组件（如按钮、卡片、布局组件）               |
| src/composables/       | 存放可复用的 Composition API 逻辑函数（Vue 3 推荐的代码复用方式） |
| src/router/            | Vue Router 配置目录，通常包含 index.js 定义路由表            |
| src/stores/            | Pinia 状态管理目录（Vue 3 官方推荐），存放各个 store 模块    |
| src/utils/             | 存放工具函数，如 axios 封装、时间格式化、常量等              |
| src/views/             | 存放页面级组件，通常与路由一一对应（路由页面）               |
| src/App.vue            | Vue 应用的根组件，包含 `<router-view>` 等入口渲染点          |
| src/main.js            | 项目入口文件，创建 Vue 应用实例、挂载插件（router、pinia 等）并挂载到 #app |
| index.html             | HTML 模板文件，包含 `<div></div>` 挂载点                     |
| vite.config.js         | Vite 构建工具配置文件，可自定义插件、别名、代理等            |
| package.json           | 项目依赖、脚本命令（如 dev、build、preview）                 |
| .gitignore             | Git 忽略文件，通常忽略 node_modules、dist、.env 等           |
| .env / .env.production | 环境变量文件，用于不同环境配置 API 地址等（Vite 以 VITE_ 开头变量） |
| README.md              | 项目说明文档                                                 |

随着项目变大，还可能需要添加这些文件夹：

- **src/layouts/**：不同页面布局（如 AdminLayout.vue、GuestLayout.vue）。
- **src/plugins/**：自定义 Vue 插件（如全局组件自动注册）。
- **src/directives/**：自定义指令（如 v-loading）。
- **src/types/**：全局 TypeScript 类型声明。
- **tests/** 或 ***\*tests\**/**：单元/E2E 测试（Vitest + Vue Test Utils）。
- **src/api/**：分离 API 接口调用模块（比 utils/request 更细粒度）。

# 创建一个 Vue 应用

## 应用实例

每个 Vue 应用都是通过 [`createApp`](https://cn.vuejs.org/api/application.html#createapp) 函数创建一个新的 **应用实例**：

```
import { createApp } from 'vue'

const app = createApp({
  /* 根组件选项 */
})
```

## 挂载应用

应用实例必须在调用了 `.mount()` 方法后才会渲染出来。该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串：

```
<div id="app"></div>
```

```
app.mount('#app')
```

应用根组件的内容将会被渲染在容器元素里面。容器元素自己将**不会**被视为应用的一部分。

`.mount()` 方法应该始终在整个应用配置和资源注册完成后被调用。同时请注意，不同于其他资源注册方法，它的返回值是根组件实例而非应用实例。

# 基础语法

### 插值

Vue.js 使用双大括号 **{{ }}** 来表示文本插值：

```
<div>{{ message }}</div>
```

### 指令

指令是带有前缀 **v-** 的特殊属性，用于在模板中表达逻辑。

**v-bind**: 动态绑定一个或多个特性，或一个组件 prop。

```
<a v-bind:href="url">Link</a>
```

简写：

```
<a :href="url">Link</a>
```

**v-if / v-else-if / v-else**: 条件渲染。

```
<p v-if="visible">内容可见</p>
<p v-else>内容不可见</p>
```

**v-for**: 列表渲染。

```
<ul>
  <li v-for="item in items" :key="item.id">{{ item.text }}</li>
</ul>
```

**v-model**: 双向数据绑定。

```
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```

**v-on**: 事件监听器。

```
<button v-on:click="doSomething">Click me</button>
```

简写：

```
<button @click="doSomething">Click me</button>
```

## 事件处理

在 Vue.js 中，你可以使用 v-on 指令来监听 DOM 事件，并在触发时执行一些 JavaScript 代码。

```
<div id="app">
  <button @click="greet">Greet</button>
</div>

<script>
  createApp({
    methods: {
      greet() {
        alert('Hello!');
      }
    }
  }).mount('#app');
</script>
```

## 计算属性

```
<div id="app">
  <p>{{ reversedMessage }}</p>
</div>

<script>
  createApp({
    data() {
      return {
        message: 'Hello'
      };
    },
    computed: {
      reversedMessage() {
        return this.message.split('').reverse().join('');
      }
    }
  }).mount('#app');
</script>
```

## Props 和事件

Props 用于在组件之间传递数据。

```
<div id="app">
  <blog-post title="My journey with Vue"></blog-post>
</div>

<script>
  const app = createApp({
    data() {
      return {};
    }
  });

  app.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
  });

  app.mount('#app');
</script>
```

子组件通过 **$emit** 触发事件，父组件可以监听这些事件。

```
<div id="app">
  <button-counter @increment="incrementTotal"></button-counter>
  <p>Total clicks: {{ total }}</p>
</div>

<script>
  const app = createApp({
    data() {
      return {
        total: 0
      };
    },
    methods: {
      incrementTotal() {
        this.total++;
      }
    }
  });

  app.component('button-counter', {
    template: '<button @click="increment">You clicked me {{ count }} times.</button>',
    data() {
      return {
        count: 0
      };
    },
    methods: {
      increment() {
        this.count++;
        this.$emit('increment');
      }
    }
  });

  app.mount('#app');
</script>
```

