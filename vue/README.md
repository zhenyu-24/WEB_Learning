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

# 声明式渲染

## 1、数据绑定

数据绑定是声明式渲染的核心。

通过绑定数据，Vue 可以自动更新 DOM 元素的内容，避免了传统的手动 DOM 操作。

### 插值表达式

插值表达式是通过双花括号 **{{ }}** 来将组件的数据插入到 HTML 模板中。

## 实例

```html
<template>
 <div>
  <h1>{{ message }}</h1>
 </div>
</template>

<script>
export **default** {
 data() {
  **return** {
   message: 'Hello, Vue 3!'
  };
 }
};
</script>
```

以上实例中，双花括号 **{{ message }}** 会渲染为 **Hello, Vue 3!**，并且当 message 的值改变时，视图会自动更新。

在双花括号中的内容并不只限于标识符或路径——我们可以使用任何有效的 JavaScript 表达式。

### 属性绑定

通过 **v-bind** 指令，你可以绑定 HTML 属性到组件的数据，这样可以使得 DOM 元素的属性（如 href、class、src）根据组件的状态动态更新。

```
<template>
  <div>
    <a v-bind:href="url">点我</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://www.runoob.com'
    };
  }
};
</script>
```

## 条件渲染

```
<template>
  <div>
    <p v-if="isVisible">这段文本是可见的</p>
    <button @click="toggleVisibility">切换可见性</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>
```

## 列表渲染

使用 v-for 指令可以渲染一个列表。

Vue 会根据数组的每一项渲染对应的 DOM 元素，并且在数组数据变化时，自动更新视图。

```
<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Vue 3' },
        { id: 2, name: 'JavaScript' },
        { id: 3, name: 'HTML' }
      ]
    };
  }
};
</script>
```

## 双向数据绑定

Vue 提供了 v-model 指令来实现表单元素（如 <input>）和组件数据之间的双向绑定，这样，表单元素的值与数据模型保持同步，用户输入时会自动更新数据，数据变化时会自动更新视图。

```
<template>
  <div>
    <input v-model="message" placeholder="输入一些文本" />
    <p>你输入了：{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    };
  }
};
</script>
```

## 事件处理

Vue 提供了 v-on 指令来监听 DOM 事件并在事件触发时执行方法，这种方式让你能够声明式地处理用户输入、点击等事件。

```
<template>
  <div>
    <button v-on:click="increment">点击我</button>
    <p>点击次数：{{ count }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count += 1;
    }
  }
};
</script>
```

## 计算属性

计算属性是 Vue 提供的一种声明式计算值的方式。

计算属性基于响应式数据，且只有在依赖的数据发生变化时才会重新计算。

```
<template>
  <div>
    <p>原始金额：{{ amount }}</p>
    <p>税后金额：{{ computedAmount }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 100
    };
  },
  computed: {
    computedAmount() {
      return this.amount * 1.1; // 假设税率为10%
    }
  }
};
</script>
```

# 监听属性

**watch** 的作用是用于监测响应式属性的变化，并在属性发生改变时执行特定的操作，它是 Vue 中的一种响应式机制，允许你在数据发生变化时做出相应的响应，执行自定义的逻辑。

**watch** 使得在响应式属性变化时能够有更多的控制权和灵活性，让你的组件能够更好地响应数据的变化并执行相应的逻辑。

以下实例通过使用 watch 实现计数器：

```
<div id = "app">
    <p style = "font-size:25px;">计数器: {{ counter }}</p>
    <button @click = "counter++" style = "font-size:25px;">点我</button>
</div>
   
<script>
const app = {
  data() {
    return {
      counter: 1
    }
  }
}
vm = Vue.createApp(app).mount('#app')
vm.$watch('counter', function(nval, oval) {
    alert('计数器值的变化 :' + oval + ' 变为 ' + nval + '!');
});
</script>
```

# Vue3 路由

Vue 路由允许我们通过不同的 URL 访问不同的内容。

通过 Vue 可以实现多视图的单页 Web 应用（single page web application，SPA）。

Vue.js 路由需要载入 [vue-router 库](https://github.com/vuejs/router)

中文文档地址：[vue-router 文档](https://router.vuejs.org/zh/guide/)。

Vue Router 负责将 URL 路径与应用中的组件进行映射，当用户在应用中浏览时，URL 会更新，但页面不会重新加载，从而提供流畅的用户体验。

**两层级的嵌套路由结构**：

- **顶层 (`App.vue` 的 `<router-view>`)** 负责渲染**独立布局**（如 `Login.vue`）或**主框架布局**（`Layout.vue`）。
- **主框架布局 (`Layout.vue`)** 内部包含第二个 `<router-view>`，用于渲染**功能页面的子组件**（如 `Dashboard.vue`、`User.vue`），从而实现页头、侧边栏和页脚的持久化显示。
- 未匹配的路径最终会导向独立的 `page404.vue`。

### 核心组成部分

| 组成部分            | 描述                                                         | 选项式 API 访问 | 组合式 API 访问 |
| :------------------ | :----------------------------------------------------------- | :-------------- | :-------------- |
| **`router` 实例**   | 整个路由系统的实例，用于全局导航、添加路由等。               | `this.$router`  | `useRouter()`   |
| **`route` 对象**    | 当前激活的路由状态对象，包含当前 URL、参数、查询等信息。     | `this.$route`   | `useRoute()`    |
| **`<router-link>`** | 用于在应用中进行导航的组件，会被渲染成一个 `<a>` 标签，但可以阻止默认的页面刷新。 | -               | -               |
| **`<router-view>`** | 路由匹配到的组件将渲染在这个位置。                           | -               | -               |

### 基本应用

### 1、创建路由表

```
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
```

### 2、在应用中挂载

```
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```

### 3、页面出口

```
<router-view></router-view>
```

### 4、跳转

```
<router-link to="/about">About</router-link>
```

### 5、动态路由

```
{ path: '/user/:id', component: User }
```

访问 /user/10，$route.params.id === '10'。

### 6、懒加载

```
const About = () => import('../views/About.vue')
```

### 7、导航守卫（鉴权）

```
router.beforeEach((to, from, next) => {
  next()
})
```

### 8、重定向

```
{ path: '/old', redirect: '/' }
```

### 9、404

```
{ path: '/:pathMatch(.*)*', component: NotFound }
```

# Vue3 Ajax(axios)

Vue 版本推荐使用 axios 来完成 ajax 请求。

Axios 是一个基于 Promise 的 HTTP 库，可以用在浏览器和 node.js 中。

Github开源地址： https://github.com/axios/axios

### 使用方法

从 Axios 模块中导入默认导出的 axios 对象：

```
import axios from 'axios';
```

**1、发起 GET 请求**

为给定 ID 的用户发起请求：

```
axios.get('/user?ID=12345')
  .then(function (response) {
    // 成功处理
    console.log(response);
  })
  .catch(function (error) {
    // 错误处理
    console.log(error);
  })
  .finally(function () {
    // 总是执行
  });
```

或

```
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

**2、发起 POST 请求**

```
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

并发执行多个请求：

```
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

Promise.all([getUserAccount(), getUserPermissions()])
  .then(function (results) {
    const acct = results[0];
    const perm = results[1];
  });
```

使用 **response.data** 读取 JSON 数据：

```
div id="app">
  <h1>网站列表</h1>
  <div
    v-for="site in info"
  >
    {{ site.name }}
  </div>
</div>
<script type = "text/javascript">
const app = {
  data() {
    return {
      info: 'Ajax 测试!!'
    }
  },
  mounted () {
    axios
      .get('https://www.runoob.com/try/ajax/json_demo.json')
      .then(response => (this.info = response.data.sites))
      .catch(function (error) { // 请求失败处理
        console.log(error);
    });
  }
}
 
Vue.createApp(app).mount('#app')
</script>
```

### 并发

处理并发请求的助手函数：

```
axios.all(iterable)
axios.spread(callback)
```

### 请求配置项

下面是创建请求时可用的配置选项，注意只有 url 是必需的。如果没有指定 method，请求将默认使用 get 方法。

```
{
  // `url` 是用于请求的服务器 URL
  url: "/user",

  // `method` 是创建请求时使用的方法
  method: "get", // 默认是 get

  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: "https://some-domain.com/api/",

  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 "PUT", "POST" 和 "PATCH" 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [function (data) {
    // 对 data 进行任意转换处理

    return data;
  }],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理

    return data;
  }],

  // `headers` 是即将被发送的自定义请求头
  headers: {"X-Requested-With": "XMLHttpRequest"},

  // `params` 是即将与请求一起发送的 URL 参数
  // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
  params: {
    ID: 12345
  },

  // `paramsSerializer` 是一个负责 `params` 序列化的函数
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function(params) {
    return Qs.stringify(params, {arrayFormat: "brackets"})
  },

  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 "PUT", "POST", 和 "PATCH"
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  data: {
    firstName: "Fred"
  },

  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求花费了超过 `timeout` 的时间，请求将被中断
  timeout: 1000,

  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // 默认的

  // `adapter` 允许自定义处理请求，以使测试更轻松
  // 返回一个 promise 并应用一个有效的响应 (查阅 [response docs](#response-api)).
  adapter: function (config) {
    /* ... */
  },

  // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
  // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
  auth: {
    username: "janedoe",
    password: "s00pers3cret"
  },

  // `responseType` 表示服务器响应的数据类型，可以是 "arraybuffer", "blob", "document", "json", "text", "stream"
  responseType: "json", // 默认的

  // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
  xsrfCookieName: "XSRF-TOKEN", // default

  // `xsrfHeaderName` 是承载 xsrf token 的值的 HTTP 头的名称
  xsrfHeaderName: "X-XSRF-TOKEN", // 默认的

  // `onUploadProgress` 允许为上传处理进度事件
  onUploadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },

  // `onDownloadProgress` 允许为下载处理进度事件
  onDownloadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },

  // `maxContentLength` 定义允许的响应内容的最大尺寸
  maxContentLength: 2000,

  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
  validateStatus: function (status) {
    return status &gt;= 200 &amp;&amp; status &lt; 300; // 默认的
  },

  // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
  // 如果设置为0，将不会 follow 任何重定向
  maxRedirects: 5, // 默认的

  // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
  // `keepAlive` 默认没有启用
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // "proxy" 定义代理服务器的主机名称和端口
  // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
  // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
  proxy: {
    host: "127.0.0.1",
    port: 9000,
    auth: : {
      username: "mikeymike",
      password: "rapunz3l"
    }
  },

  // `cancelToken` 指定用于取消请求的 cancel token
  // （查看后面的 Cancellation 这节了解更多）
  cancelToken: new CancelToken(function (cancel) {
  })
}
```

### 响应结构

axios请求的响应包含以下信息：

```
{
  // `data` 由服务器提供的响应
  data: {},

  // `status`  HTTP 状态码
  status: 200,

  // `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: "OK",

  // `headers` 服务器响应的头
  headers: {},

  // `config` 是为请求提供的配置信息
  config: {}
}
```

### 配置的默认值

你可以指定将被用在各个请求的配置默认值。

全局的 axios 默认值：

```
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

自定义实例默认值：

```
// 创建实例时设置配置的默认值
var instance = axios.create({
  baseURL: 'https://api.example.com'
});

// 在实例已创建后修改默认值
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

# Pinia 入门教程

Pinia 是 Vue.js 的轻量级状态管理库，它让你能够在组件之间共享和管理状态，我们可以把 Pinia 想象成一个全局的数据仓库，所有组件都可以从这里获取数据或者更新数据。

本章节我们要介绍的是 Vue3 官方推荐的状态管理库 —— Pinia，相比 Vuex，Pinia 提供了更简洁、更符合 Vue3 组合式 API 思维的状态管理方案。

下图对比了两者的结构差异：

- Vuex 采用单仓库加多级模块的树状结构，层级固定，依赖 mutations，整体更重。
- Pinia 则由多个独立 store 组成，扁平、轻量、不分模块，无命名空间负担。

Pinia 有三部分：

- state：存数据
- getters：算派生数据
- actions：执行逻辑、修改 state

### 配置 Pinia

在 src/main.js 或 src/main.ts 中配置 Pinia：

```
*// main.js*
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

*// 创建 Pinia 实例*
**const** pinia = createPinia()
*// 创建 Vue 应用*
**const** app = createApp(App)

*// 使用 Pinia*
app.use(pinia)
app.mount('#app')
```

## 创建第一个 Store

Store 就是 Pinia 中的数据仓库，我们来创建一个简单的计数器 Store。

### 定义 Store

新建 src/stores/useCounter.js：

```
// stores/useCounter.js
import { defineStore } from 'pinia'

// 使用 defineStore 定义 store
// 第一个参数是 store 的唯一 ID
// 第二个参数是 store 的配置选项
export const useCounterStore = defineStore('counter', {
  // state: 定义 store 的状态数据
  state: () => ({
    count: 0,
    name: '我的计数器'
  }),

  // getters: 定义基于 state 的计算属性
  getters: {
    doubleCount: (state) => state.count * 2,
    // 使用 this 访问其他 getter
    doubleCountPlusOne() {
      return this.doubleCount + 1
    }
  },

  // actions: 定义修改 state 的方法
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    // 可以接收参数
    incrementBy(amount) {
      this.count += amount
    },
    // 异步 action
    async incrementAsync() {
      // 模拟异步操作
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.count++
    }
  }
})
```

### Store 的结构说明

让我们通过一个表格来理解 Store 的各个部分：

| 部分        | 作用                  | 示例                                    |
| :---------- | :-------------------- | :-------------------------------------- |
| **state**   | 定义存储的数据        | `count: 0`                              |
| **getters** | 基于 state 的计算属性 | `doubleCount: state => state.count * 2` |
| **actions** | 修改 state 的方法     | `increment() { this.count++ }`          |

## 在组件中使用 Store

### 基本使用

src/components/CounterComponent.vue 组件代码如下：

```
<!-- CounterComponent.vue -->
<template>
  <div class="counter">
    <h3>{{ store.name }}</h3>
    <p>当前计数: {{ store.count }}</p>
    <p>双倍计数: {{ store.doubleCount }}</p>
    <p>双倍加一: {{ store.doubleCountPlusOne }}</p>
   
    <button @click="store.increment()">+1</button>
    <button @click="store.decrement()">-1</button>
    <button @click="store.incrementBy(5)">+5</button>
    <button @click="store.incrementAsync()">异步 +1</button>
   
    <button @click="reset">重置</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/useCounter'

// 在 setup 中使用 store
const store = useCounterStore()

// 重置状态的方法
function reset() {
  store.$reset() // $reset 方法可以重置 state 到初始值
}
</script>
```

## Pinia API

| 分类           | API                                           | 说明                                                 |
| :------------- | :-------------------------------------------- | :--------------------------------------------------- |
| 创建           | `defineStore`                                 | 定义一个独立的 store，包含 state / getters / actions |
| 实例化         | `createPinia`                                 | 创建 Pinia 根实例，用于 app.use()                    |
| 组件使用       | `useStore()`（用户自定义，如 `useUserStore`） | 调用某个 store，返回响应式 state、getter、action     |
| 状态           | `state`                                       | 返回一个对象函数，用于定义可变全局状态               |
| 状态操作       | `store.$state`                                | 直接读写整个 state（对象级）                         |
| 状态操作       | `store.$patch()`                              | 批量修改 state，支持对象和函数两种模式               |
| 状态替换       | `store.$reset()`                              | 重置为初始 state，仅在 setup 方式定义时可用          |
| 状态订阅       | `store.$subscribe()`                          | 监听 state 变化，适合本地持久化                      |
| Action 调用    | `store.$onAction()`                           | 监听 action 调用前后，可做日志、埋点                 |
| Getter         | `getters`                                     | 派生数据，基于 state 自动缓存                        |
| 插件           | `pinia.use()`                                 | 注册插件，扩展 store 能力                            |
| 定义方式       | `defineStore(id, options)`                    | Options API 写法                                     |
| 定义方式       | `defineStore(id, () => {...})`                | Setup 写法，返回 state / getter / action             |
| Store 属性     | `store.$id`                                   | 当前 store 的唯一标识                                |
| Store 属性     | `store.$ready`（部分版本）                    | Store 初始化完成后的状态标记                         |
| 持久化（插件） | `persist`                                     | 启用存储插件（如 localStorage）                      |
| 工具函数       | `storeToRefs()`                               | 将 state / getter 转为 refs，保留响应式              |

## 最佳实践和注意事项

### 1. Store 命名规范

```
// 好的命名
export const useUserStore = defineStore('user', { /* ... */ })
export const useProductStore = defineStore('products', { /* ... */ })

// 避免的命名
export const userStore = defineStore('user', { /* ... */ }) // 缺少 use 前缀
```

### 2. 状态初始化

```
// 推荐：使用函数返回初始状态
state: () => ({
  items: [],
  loading: false,
  error: null
})

// 不推荐：直接使用对象
state: {
  items: []  // 这会导致所有实例共享同一个数组！
}
```

### 3. 异步操作处理

```
actions: {
  async fetchUserData(userId) {
    this.loading = true
    this.error = null
   
    try {
      const response = await api.getUser(userId)
      this.user = response.data
    } catch (error) {
      this.error = error.message
    } finally {
      this.loading = false
    }
  }
}
```

