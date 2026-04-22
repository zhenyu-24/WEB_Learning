# HTML 元素

------

HTML 文档由一系列 HTML 元素（Element）构成，是网页结构的基础。

------

## 什么是 HTML 元素？

HTML 元素是从**开始标签（start tag）**到**结束标签（end tag）**之间的完整结构。

| 开始标签               | 元素内容       | 结束标签 |
| :--------------------- | :------------- | :------- |
| <p>                    | 这是一个段落   | </p>     |
| <a href="default.htm"> | 这是一个链接   | </a>     |
| <br>                   | 换行（空元素） | 无       |

**说明：**

- 开始标签也称为 **起始标签（opening tag）**
- 结束标签也称为 **闭合标签（closing tag）**

------

## HTML 元素语法规则

- 元素以**开始标签**开始，以**结束标签**结束
- 元素内容位于开始标签与结束标签之间
- 部分元素为**空元素（empty element）**，没有内容
- 空元素通常在开始标签中自闭合（如 `<br />`）
- 大多数元素可以包含**属性（Attributes）**

**提示：**属性将在后续章节详细介绍。

------

## HTML 元素的嵌套

HTML 元素可以相互嵌套，形成树状结构：

- 一个元素可以包含其他元素
- HTML 文档本质上是一个嵌套结构（DOM 树）

------

## HTML 文档示例

```
<!DOCTYPE html>
<html>

  <body>
    <p>这是第一个段落。</p>
  </body>

</html>
```

该示例包含 3 个核心元素：`html`、`body`、`p`。

# HTML 属性

------

属性是 HTML 元素提供的附加信息。

属性通常出现在 HTML 标签的开始标签中，用于定义元素的行为、样式、内容或其他特性。

属性总是以 **name="value"** 的形式写在标签内，**name** 是属性的名称，**value** 是属性的值。

------

## HTML 属性

- HTML 元素可以设置**属性**
- 属性可以在元素中添加**附加信息**
- 属性一般描述于**开始标签**
- 属性总是以名称/值对的形式出现，**比如：name="value"**。

## HTML 属性参考手册

查看完整的HTML属性列表: [HTML 标签参考手册](https://www.runoob.com/tags/html-reference.html)。

下面列出了适用于大多数 HTML 元素的属性：

| 属性名        | 适用元素                                          | 说明                                                         |
| :------------ | :------------------------------------------------ | :----------------------------------------------------------- |
| `id`          | 所有元素                                          | 为元素指定唯一的标识符。                                     |
| `class`       | 所有元素                                          | 为元素指定一个或多个类名，用于 CSS 或 JavaScript 选择。      |
| `style`       | 所有元素                                          | 直接在元素上应用 CSS 样式。                                  |
| `title`       | 所有元素                                          | 为元素提供额外的提示信息，通常在鼠标悬停时显示。             |
| `data-*`      | 所有元素                                          | 用于存储自定义数据，通常通过 JavaScript 访问。               |
| `href`        | `<a>`, `<link>`                                   | 指定链接的目标 URL。                                         |
| `src`         | `<img>`, `<script>`, `<iframe>`                   | 指定外部资源（如图片、脚本、框架）的 URL。                   |
| `alt`         | `<img>`                                           | 为图像提供替代文本，当图像无法显示时显示。                   |
| `type`        | `<input>`, `<button>`                             | 指定输入控件的类型（如 `text`, `password`, `checkbox` 等）。 |
| `value`       | `<input>`, `<button>`, `<option>`                 | 指定元素的初始值。                                           |
| `disabled`    | 表单元素                                          | 禁用元素，使其不可交互。                                     |
| `checked`     | `<input type="checkbox">`, `<input type="radio">` | 指定复选框或单选按钮是否被选中。                             |
| `placeholder` | `<input>`, `<textarea>`                           | 在输入框中显示提示文本。                                     |
| `target`      | `<a>`, `<form>`                                   | 指定链接或表单提交的目标窗口或框架（如 `_blank` 表示新标签页）。 |
| `readonly`    | 表单元素                                          | 使输入框只读。                                               |
| `required`    | 表单元素                                          | 指定输入字段为必填项。                                       |
| `autoplay`    | `<audio>`, `<video>`                              | 自动播放媒体。                                               |
| `onclick`     | 所有元素                                          | 当用户点击元素时触发 JavaScript 事件。                       |
| `onmouseover` | 所有元素                                          | 当用户将鼠标悬停在元素上时触发 JavaScript 事件。             |
| `onchange`    | 表单元素                                          | 当元素的值发生变化时触发 JavaScript 事件。                   |

### 全局属性

全局属性是所有 HTML 元素都可以使用的属性。

**id**：为元素指定唯一的标识符。

```
<div id="header">This is the header</div>
```

**class**：为元素指定一个或多个类名，用于 CSS 或 JavaScript 选择。

```
<p class="text highlight">This is a highlighted text.</p>
```

**style**：用于直接在元素上应用 CSS 样式。

```
<p style="color: blue; font-size: 14px;">This is a styled paragraph.</p>
```

**title**：为元素提供额外的提示信息，通常在鼠标悬停时显示。

```
<abbr title="HyperText Markup Language">HTML</abbr>
```

**data-\***：用于存储自定义数据，通常通过 JavaScript 访问。

```
<div data-user-id="12345">User Info</div>
```

### 特定元素的属性

某些属性仅适用于特定的 HTML 元素。

**`href`**（用于 `<a>` 和 `<link>` 元素）：指定链接的目标 URL。

```
<a href="https://www.example.com">Visit Example</a>
```

**`src`**（用于 `<img>`, `<script>`, `<iframe>` 等元素）：指定外部资源的 URL。

```
<img src="image.jpg" alt="An example image">
```

alt（用于 `<img>` 元素）：为图像提供替代文本，当图像无法显示时显示。

```
<img src="image.jpg" alt="An example image">
```

**`type`**（用于 `<input>` 和 `<button>` 元素）：指定输入控件的类型。

```
<input type="text" placeholder="Enter your name">
```

**`value`**（用于 `<input>`, `<button>`, `<option>` 等元素）：指定元素的初始值。

```
<input type="text" value="Default Value">
```

disabled（用于表单元素）：禁用元素，使其不可交互。

```
<input type="text" disabled>
```

**`checked`**（用于 `<input type="checkbox">` 和 `<input type="radio">`）：指定复选框或单选按钮是否被选中。

```
<input type="checkbox" checked>
```

**`placeholder`**（用于 `<input>` 和 `<textarea>` 元素）：在输入框中显示提示文本。

```
<input type="text" placeholder="Enter your email">
```

**`target`**（用于 `<a>` 和 `<form>` 元素）：指定链接或表单提交的目标窗口或框架。

```
<a href="https://www.example.com" target="_blank">Open in new tab</a>
```

### 布尔属性

布尔属性是指不需要值的属性，它们的存在即表示 true，不存在则表示 false。

**disabled**：禁用元素。

```
<input type="text" disabled>
```

**readonly**：使输入框只读。

```
<input type="text" readonly>
```

**required**：指定输入字段为必填项。

```
<input type="text" required>
```

**`autoplay`**（用于 `<audio>` 和 `<video>` 元素）：自动播放媒体。

```
<video src="video.mp4" autoplay></video>
```

# 标题、段落和文本格式化

[点击查看](./project1_base.html)

# 链接与图像

[点击查看](./project2_link.html)

### 基本语法

```
<a href="URL">链接文本</a>
```

- `<a>` 标签：定义了一个超链接（anchor）。它是 HTML 中用来创建可点击链接的主要标签。
- `href` 属性：指定目标 URL，当点击链接时，浏览器将导航到此 URL。

## HTML 链接属性

href 属性描述了链接的目标。

### 1、href：定义链接目标。

这是超链接最重要的属性，用来指定链接的目的地，可以是另一个网页、文件、邮件、电话号码或 JavaScript。

### 2、target：定义链接的打开方式。

- `_blank`: 在新窗口或新标签页中打开链接。
- `_self`: 在当前窗口或标签页中打开链接（默认）。
- `_parent`: 在父框架中打开链接。
- `_top`: 在整个窗口中打开链接，取消任何框架。

### 3、rel：定义链接与目标页面的关系。

**nofollow**: 表示搜索引擎不应跟踪该链接，常用于外部链接。

**noopener** 和 **noreferrer**: 防止在新标签中打开链接时的安全问题，尤其是使用 **target="_blank"** 时。

- `noopener`: 防止新的浏览上下文（页面）访问`window.opener`属性和`open`方法。
- `noreferrer`: 不发送referer header（即不告诉目标网站你从哪里来的）。
- `noopener noreferrer`: 同时使用`noopener`和`noreferrer`。例子: `<a href="https://www.example.com" rel="noopener noreferrer">安全链接</a>`

### 4、download：提示浏览器下载链接目标而不是导航到该目标。

如果指定了文件名，浏览器会提示下载并保存为指定文件名。

### 5、title：定义链接的额外信息，当鼠标悬停在链接上时显示的工具提示。

### 6、id：用于链接锚点，通常在同一页面中跳转到某个特定位置。

### 7、hreflang: 指定链接的目标URL的语言

### 8、type: 指定链接资源的MIME类型

### 9、class: 用于指定元素的类名（CSS中定义）

### 10、style: 直接在元素上定义CSS样式