欢迎使用StackEdit(栈书)!
===================


Hey! 这是你在**StackEdit**[^stackedit]的第一份Markdown文档. 不要把我删了, 我很有用! 如果不小心把我删了, 你也可以在<i class="icon-cog"></i>菜单>设置>工具将我找出来.

----------


文档
-------------

StackEdit 将你的文档保存在浏览器中, 这意味着你所有的文档都是保存在本地, 并且可以**离线!**访问

> **备注:**

> - StackEdit 在首次加载之后就可以离线访问了.
> - 你本地的文档将不会在不同浏览器或电脑之间共享.
> - 清除浏览器的数据可能会**删除你所有的本地文档!** 所以请确保你的文档同步到了**Google Drive** 或 **Dropbox** (详见 [<i class="icon-refresh"></i> 同步](#synchronization) section).

#### <i class="icon-file"></i> 创建文档

文档面板可以通过右上角的<i class="icon-folder-open"></i>按钮访问. 你可以通过点击<i class="icon-file"></i> **新建文档** 创建一个新文档.

#### <i class="icon-folder-open"></i> 切换到另一篇文档

文档面板列出本地所有的文档. 你可以通过点击不同文档进行切换, 切换快捷键 <kbd>Ctrl+[</kbd> and <kbd>Ctrl+]</kbd>.

#### <i class="icon-pencil"></i> 重命名文档

点击导航栏文档名称即可重命名.

#### <i class="icon-trash"></i> 删除文档

文档面板点击<i class="icon-trash"></i> **删除文档**.

#### <i class="icon-hdd"></i> 导出文档

通过点击<i class="icon-provider-stackedit"></i>菜单面板<i class="icon-hdd"></i> **导出到本地硬盘** 可以将文档导出为本地文件.

> **小贴士:** 详见 [<i class="icon-upload"></i> 发布文档](#publish-a-document) 有关于导出格式的描述.


### 表格


Item     | Value
-------- | ---
Computer | $1600
Phone    | $12
Pipe     | $1

可以通过冒号指定列的对齐方式:

| Item     | Value | Qty   |
| :------- | ----: | :---: |
| Computer | $1600 |  5    |
| Phone    | $12   |  12   |
| Pipe     | $1    |  234  |


### 定义型列表

名词 1
名词 2
:   定义 A
:   定义 B

名词 3

:   定义 C

:   定义 D

	> 定义D的部分内容


### 加强代码块


```
// Foo
var bar = 0;
```

### 脚注

你可以创建脚注 [^footnote].

  [^footnote]: 这是 **footnote** 的 *内容*.


### SmartyPants

SmartyPants converts ASCII punctuation characters into "smart" typographic punctuation HTML entities. For example:

|                  | ASCII                        | HTML              |
 ----------------- | ---------------------------- | ------------------
| Single backticks | `'Isn't this fun?'`            | 'Isn't this fun?' |
| Quotes           | `"Isn't this fun?"`            | "Isn't this fun?" |
| Dashes           | `-- is en-dash, --- is em-dash` | -- is en-dash, --- is em-dash |


### 目录

可以使用标记 `[TOC]` 插入文档目录:

[TOC]


### MathJax

你可以使用渲染**MathJax** *LaTeX* 的数学表达式 , 可以参考 [math.stackexchange.com][1]:

The *Gamma function* satisfying $\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$ is via the Euler integral

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

> **小贴士:** 为了确保你网站上的数学表达式能被正确显示, 记得在模板中包含**MathJax**:

```
<script type="text/javascript" src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML"></script>
```

> **备注:** 你可以获取更多有关**LaTeX** 数学表达式的信息 [here][4].


### UML 图

你可以得到序列图

```sequence
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
```

流程图

```flow
st=>start: Start
e=>end
op=>operation: My Operation
cond=>condition: Yes or No?

st->op->cond
cond(yes)->e
cond(no)->op
```

> **备注:** 你可以了解到更多的信息:

> - 有关 **序列图** 语法 [here][7],
> - 有关 **流程图** 语法 [here][8].

### Support StackEdit

[![](https://cdn.monetizejs.com/resources/button-32.png)](https://monetizejs.com/authorize?client_id=ESTHdCYOi18iLhhO&summary=true)

  [^stackedit]: [StackEdit](https://stackedit.io/) is a full-featured, open-source Markdown editor based on PageDown, the Markdown library used by Stack Overflow and the other Stack Exchange sites.


  [1]: http://math.stackexchange.com/
  [2]: http://daringfireball.net/projects/markdown/syntax "Markdown"
  [3]: https://github.com/jmcmanus/pagedown-extra "Pagedown Extra"
  [4]: http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference
  [5]: https://code.google.com/p/google-code-prettify/
  [6]: http://highlightjs.org/
  [7]: http://bramp.github.io/js-sequence-diagrams/
  [8]: http://adrai.github.io/flowchart.js/
