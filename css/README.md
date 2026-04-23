# 选择器
## 通配符选择器
选择页面中的所有元素（包括 <html>、<body>、<div>、<p>、<span> 等）

```css
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
```

### 含义

选择页面中的**所有元素**（包括 `<html>`、`<body>`、`<div>`、`<p>`、`<span>` 等）

### 作用

- `margin: 0` - 清除所有元素的默认外边距
- `padding: 0` - 清除所有元素的默认内边距
- `box-sizing: border-box` - 让所有元素的宽度计算包含 border 和 padding

## `body` - 选择器

```
body {
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    flex-wrap: wrap;
    padding: 80px 40px;
}
```

### 含义

选择 `<body>` 元素（网页主体）

| 属性              | 值                     | 作用                                      |
| :---------------- | :--------------------- | :---------------------------------------- |
| `font-family`     | `system-ui, ...`       | 设置页面默认字体（优先使用系统字体）      |
| `background`      | `linear-gradient(...)` | 紫色渐变背景（从 `#667eea` 到 `#764ba2`） |
| `min-height`      | `100vh`                | 最小高度占满整个视口（100% 窗口高度）     |
| `display`         | `flex`                 | 使用 Flex 布局                            |
| `justify-content` | `center`               | 子元素水平居中                            |
| `align-items`     | `center`               | 子元素垂直居中                            |
| `gap`             | `80px`                 | 子元素之间的间距为 80px                   |
| `flex-wrap`       | `wrap`                 | 子元素过多时自动换行                      |
| `padding`         | `80px 40px`            | 上下内边距 80px，左右内边距 40px          |

## id 选择器

CSS 中 id 选择器以 "#" 来定义
```css
#id {
}
```
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>菜鸟教程(runoob.com)</title> 
<style>
#para1
{
	text-align:center;
	color:red;
} 
</style>
</head>

<body>
<p id="para1">Hello World!</p>
<p>这个段落不受该样式的影响。</p>
</body>
</html>
```

## class 选择器
CSS 中 class 选择器以 "." 来定义
```css
.class {}
```
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>菜鸟教程(runoob.com)</title> 
<style>
.center
{
	text-align:center;
}
</style>
</head>

<body>
<h1 class="center">标题居中</h1>
<p class="center">段落居中。</p> 
</body>
</html>
```

## 元素选择器
CSS 中元素选择器以标签名来定义
```css
element {}
```
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"> 
        <title>菜鸟教程(runoob.com)</title>
        <style>
            p{
                text-align:center;
            }
        </style>
    </head>
    <body>
        <p>段落居中。</p>
    </body>
</html>
```

## 链式选择器
同时满足多个条件
```css
/* 选择既是 div 又拥有 class="box" 的元素 */
div.box {
    background: yellow;
}

/* 选择 class 同时包含 "btn" 和 "primary" 的元素 */
.btn.primary {
    background: blue;
}

/* 示例 HTML */
<div class="box">我有黄色背景</div>
<div>我没有背景</div>
<button class="btn primary">蓝色背景</button>
```

## 群组选择器
同时选择多个不相关的元素, 使用逗号来分隔, 如h1, h2, p等。
```css
/* 同时选择 h1、h2、h3 */
h1, h2, h3 {
    color: purple;
}

/* 示例 HTML */
<h1>标题1</h1>
<h2>标题2</h2>
<h3>标题3</h3>
<p>我不会变紫</p>
```

## 伪类选择器
伪类用于选择元素的特定状态或位置，以 : 开头。

### 动态伪类选择器
动态伪类选择器是根据用户的交互行为（如点击、悬停、访问状态）来应用样式，而不是基于文档结构。

| 伪类       | 含义         | 触发条件                   |
| :--------- | :----------- | :------------------------- |
| `:link`    | 未访问的链接 | 有 `href` 属性且未被访问过 |
| `:visited` | 已访问的链接 | 有 `href` 属性且已被访问过 |
| `:hover`   | 鼠标悬停     | 鼠标指针移动到元素上       |
| `:active`  | 激活状态     | 鼠标按下但未松开时         |
| `:focus`   | 获得焦点     | 表单元素被选中/输入框激活  |

```css
/* 链接样式顺序（LVHA） */
a:link { color: blue; }
a:visited { color: purple; }
a:hover { color: red; }
a:active { color: green; }

/* 按钮交互 */
button:hover { background: #0056b3; }
button:active { transform: scale(0.98); }
input:focus { outline: 2px solid blue; }
```

### 结果伪类选择器
基于元素在 DOM 树中的位置来选择。

| 伪类                 | 含义                       | 示例                   |
| :------------------- | :------------------------- | :--------------------- |
| `:first-child`       | 父元素的第一个子元素       | `li:first-child`       |
| `:last-child`        | 父元素的最后一个子元素     | `li:last-child`        |
| `:nth-child(n)`      | 父元素的第 n 个子元素      | `li:nth-child(2)`      |
| `:nth-last-child(n)` | 父元素的倒数第 n 个子元素  | `li:nth-last-child(1)` |
| `:first-of-type`     | 父元素中第一个该类型元素   | `p:first-of-type`      |
| `:last-of-type`      | 父元素中最后一个该类型元素 | `p:last-of-type`       |
| `:nth-of-type(n)`    | 父元素中第 n 个该类型元素  | `p:nth-of-type(2)`     |
| `:only-child`        | 父元素中唯一的子元素       | `span:only-child`      |
| `:only-of-type`      | 父元素中唯一该类型的元素   | `li:only-of-type`      |
| `:empty`             | 没有子元素的元素           | `div:empty`            |

```
/* 表格隔行变色 */
tr:nth-child(even) { background: #f2f2f2; }

/* 第一个段落去掉上边距 */
p:first-child { margin-top: 0; }

/* 每行第3个元素右边距归零 */
.item:nth-child(3n) { margin-right: 0; }
```

### 表单伪类选择器

针对表单元素的**状态**。

| 伪类                 | 含义                  | 示例                      |
| :------------------- | :-------------------- | :------------------------ |
| `:checked`           | 被选中的复选框/单选框 | `input:checked`           |
| `:disabled`          | 被禁用的元素          | `input:disabled`          |
| `:enabled`           | 可用的元素            | `input:enabled`           |
| `:required`          | 必填字段              | `input:required`          |
| `:optional`          | 非必填字段            | `input:optional`          |
| `:valid`             | 验证通过的表单        | `input:valid`             |
| `:invalid`           | 验证失败的表单        | `input:invalid`           |
| `:in-range`          | 值在范围内的输入框    | `input:in-range`          |
| `:out-of-range`      | 值超出范围的输入框    | `input:out-of-range`      |
| `:read-only`         | 只读字段              | `input:read-only`         |
| `:read-write`        | 可写字段              | `input:read-write`        |
| `:placeholder-shown` | 显示占位符的输入框    | `input:placeholder-shown` |

```css
/* 选中状态样式 */
input:checked + label { color: green; }

/* 禁用状态样式 */
input:disabled { background: #f0f0f0; cursor: not-allowed; }

/* 验证失败样式 */
input:invalid { border-color: red; }
input:valid { border-color: green; }
```

### 伪元素

伪元素用于选择元素的**特定部分**或**插入虚拟内容**，以 `::` 开头（CSS3 规范）。

| 伪元素                   | 含义               | 必须属性  | 示例                          |
| :----------------------- | :----------------- | :-------- | :---------------------------- |
| `::before`               | 在元素内容前面插入 | `content` | `.icon::before`               |
| `::after`                | 在元素内容后面插入 | `content` | `.tip::after`                 |
| `::first-letter`         | 第一个字母         | 不需要    | `p::first-letter`             |
| `::first-line`           | 第一行             | 不需要    | `p::first-line`               |
| `::selection`            | 用户选中的文本     | 不需要    | `::selection`                 |
| `::placeholder`          | 输入框占位符       | 不需要    | `input::placeholder`          |
| `::marker`               | 列表项标记         | 不需要    | `li::marker`                  |
| `::backdrop`             | 对话框背景层       | 不需要    | `dialog::backdrop`            |
| `::file-selector-button` | 文件上传按钮       | 不需要    | `input::file-selector-button` |

```css
/* 1. 插入内容 */
.required::before {
    content: "*";
    color: red;
}

.link::after {
    content: " →";
}

/* 2. 首字母大写 */
p::first-letter {
    font-size: 2em;
    font-weight: bold;
}

/* 3. 首行样式 */
p::first-line {
    color: blue;
    font-weight: bold;
}

/* 4. 选中文本样式 */
::selection {
    background: yellow;
    color: black;
}

/* 5. 占位符样式 */
input::placeholder {
    color: gray;
    font-style: italic;
}

/* 6. 列表标记样式 */
li::marker {
    color: red;
    font-size: 1.2em;
}

/* 7. 对话框背景 */
dialog::backdrop {
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(4px);
}

/* 8. 文件上传按钮 */
input::file-selector-button {
    background: blue;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
}

/* 9. 组合使用：悬停时显示 after 内容 */
.button::after {
    content: " →";
    opacity: 0;
    transition: opacity 0.3s;
}

.button:hover::after {
    opacity: 1;
}
```

## 嵌套选择器

### 后代选择器
选择所有后代元素（不限制层级）
```css
/* 选择 div 内部的所有 p 元素（不限层级） */
div p {
    color: red;
}

/* 示例 HTML */
<div>
    <p>我会变红</p>
    <span>
        <p>我也会变红</p>
    </span>
</div>
```

### 子选择器
只选择直接子元素（仅限一层）
```css
/* 选择 div 的直接子元素 p */
div > p {
    color: blue;
}

/* 示例 HTML */
<div>
    <p>我会变蓝（直接子元素）</p>
    <span>
        <p>我不会变蓝（不是直接子元素）</p>
    </span>
</div>
```

### 相邻兄弟选择器（+）
选择紧邻的下一个兄弟元素
```css
/* 选择紧跟在 h2 后面的第一个 p */
h2 + p {
    font-weight: bold;
}

/* 示例 HTML */
<h2>标题</h2>
<p>我会加粗（紧邻）</p>
<p>我不会加粗（不是紧邻）</p>
```

### 通用兄弟选择器（~）
选择之后所有的兄弟元素
```css
/* 选择 h2 后面所有的 p 兄弟 */
h2 ~ p {
    color: green;
}

/* 示例 HTML */
<h2>标题</h2>
<p>我会变绿</p>
<div>我不会变绿</div>
<p>我也会变绿</p>
```



