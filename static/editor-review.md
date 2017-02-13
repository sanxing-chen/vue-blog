一直想写一篇文章总结一下我折腾编辑器的一些琐事。在 macOS 下我向来习惯 shell+vim 的工作环境，倒也自在。但近来新入 windows 平台，我花费了很长的一段时间也没有找到习惯的感觉，索性转换一下思路顺带体验一下近来势头强劲、风声水起的几款编辑器。于是有此文。

### about me

因为每个人使用 editor 完成的工作不同，所以我认为很有必要在开头就简述一下我对 editor 的需求：

1.  简单 cpp 程序编写和编译，满足 acm 比赛需要
2.  web 开发
3.  markdown 支持，满足博文需要
4.  版本控制
5.  我用 HHKB，对方向键的需求很强
6.  其他一些未来的可能，能都支持最好

以下对编辑器的看法均基于以上几种使用环境。

## Vim vs Emacs

自上古时代至今，这对老冤家的对决就没有停过。虽说 Vim 能够「帮助乌干达的贫困儿童」这一优势让 Emacs 无法还击，但是 Emacs 作为一个「操作系统」的地位也还算超然。作为一个 vim 党，我简单介绍一下 vim 的优势。

### Vim

就像很多人给 vim 的评价一样，vim 几乎能做任何事情，适应任何开发任务。自带的 vimscript 能让我们 diy 出自己需要的任何功能。

vim 使用的 hjkl 移动命令一旦学会能让你瞬间放弃使用箭头方向键的念头，vim 的其他一些简便的操作也大大提高了编辑的效率。

我对 vim 的插件研究不是很多，一直使用[spf13](https://github.com/spf13/spf13-vim)这一个项目，看 star 数就知道有多强了。比较常见的一些 complete 插件和 nerd tree 这样的文件树插件都涵盖在其中。

在使用 vim 的过程中，我个人体会到了一些缺点：

1.  需要一定的配置。上次观看 ACM WF 的时候就能看到许多选手非常熟练地使用 vim，但却不得不把比赛开始的前几分钟花费在配置`.vimrc`文件上。编写算法这样轻量的程序尚需一段时间配置，更不用提其他重应用了。
2.  无法准确缩进一些混合文件，例如 html 代码中内嵌的 js 代码，php 代码中内嵌的 html 代码
3.  vimscript 本身的晦涩难懂

由于常见的 linux 发行版都自带 vim，ACM 现场赛也保证会提供 vim，这使得 vim 就像一把无需随身携带就随处可得的瑞士军刀，方便又强大，值得一学。

### Emacs

对 emacs 的了解很少，仅限于移动，退出，帮助文档和贪吃蛇

据说 emacs 的 orgmode 十分强大易用，被很多人安利过，值得研究一下

## Sublime

Sublime 是我在 macOS 上除了 vim 以外经常使用的一款编辑器。很长一段时间以来我向所有不喜欢命令行的人都推荐 sublime，轻量、易用、扩展性强是它的主要优势。它的一些特性，比如 command palette 被后续的一些编辑器效仿，就足以说明它的成功。

Sublime 自带 vim-mode（默认关闭，需要在配置文件中开启），可以很好的延续我在 vim 下的使用习惯，这对我来说是至关重要的。

Sublime 在最新的版本中将 package control 的安装整合进了菜单栏中，sublime 至今已经有了近 4000 个插件（见[links](https://packagecontrol.io/stats)），相信可以满足常见的各种需求。

但这也不是说 sublime 就全是优点没有问题，下面我以 markdown 的使用环境为例，探讨一下其中的一些问题。

在 Sublime 对 markdown 的插件中最为人们所熟知的是[Markdown Preview](https://packagecontrol.io/packages/Markdown%20Preview)和[Markdown Editing](https://packagecontrol.io/packages/MarkdownEditing)这两个插件。

*   Markdown Editing 最让我厌恶的是它必须使用其自带的主题，不能使用我原本的主题，这使我在编辑 Markdown 文件和其他文件时面对两种不同风格的配色，这是我很难接受的。所以我在使用几周后就删除了它。
*   Markdown Preview 需要在浏览器中开一个窗口来预览，每次变动还得重新生成 html，而且生成的效率也不高。但这对我来说是刚需，所以我只能一直使用它。

还有就是 Sublime 对中英文混排的 wrap（换行）支持很差，经常出现换行空了大半行的情况，很影响写作。

如果你只用过 sublime 来编辑 markdown，那你可能对以上几点不便不会有太多感觉，但一旦你用过了 Atom 的 markdown 编辑，你就能感受到巨大的差距。

值得一提的是，sublime 是闭源的付费软件，只不过针对个人私用是可以无限期试用的，公用的话理应购买。而我一向对自由软件更具热情，这使我没有满足于 sublime，而是去探索更具潜力的开源编辑器。

## Atom vs VSCode

在讨论这两个编辑器之前，我想先阐述一下，我将它俩放在一起的理由。就是因为他们在底层是同源的，也正是因为这个原因，它们在外表前端上也有许多相似的部分。这也直接将它们带到了同一个擂台上，针锋相对。

### Electron

> Build cross platform desktop apps  
> with JavaScript, HTML, and CSS

[electron](http://electron.atom.io/)是一个由 GitHub 主导开发的开源的多平台开发库。它由[Chromium](https://www.chromium.org/Home) 和[Node.js](https://nodejs.org/en/)驱动，得益于这些前端环境，所以它可以用前端的开发方法来开发桌面的应用。这样一来，前端蓬勃的生态就迅速延伸到了桌面领域，同时带来了它的优势和劣势。

> 嗯，Javascript 终将统治世界。

### Atom

[Atom](https://atom.io/)是由 GitHub 主导开发的开源编辑器，基于 electron。Atom 可以称得上开箱即用，相比 sublime 等一些其他编辑器，其自带主题已经可以让人接受，自带 markdown 支持也达到让我满意的程度。

使用过程中，atom 主要让人诟病的缺点是——慢：以我自己的使用经验，我在双平台 pcie-SSD 的情况下仍需要 2-3s 的时间 load 窗口，以及 download package 的慢（这一点大家都懂的，用全局模式可能会好一点）。

还有一点我认为可以改进的是 Keybinding 过于复杂的问题，很多 package 自带非常多的快捷键，甚至覆盖掉了原有的快捷键，虽然你能通过编辑 cson 文件指定快捷键，但学习成本较高，需要花费一些精力。已经有人提出 issue 希望能支持各个快捷键的单独开关，就不知道什么时候能 close 了。在那之前，如需更改，我建议直接去改插件的源文件，注释掉。这比去纠结作用域和覆盖优先级要轻松得多。

接下来我和大家分享一些我在 atom 下使用的 package 和一些小 tips。

#### markdown

除了自带的[markdown-preview](https://atom.io/packages/markdown-preview)以外，我还使用[markdown-scroll-sync](https://atom.io/packages/markdown-scroll-sync)这款插件，它能让你在预览长 md 文档的时候同步滚动编辑 pane 和预览 pane，实现类似 MacDown、Mou 等软件的编写体验。

![markdown](https://sxing.xyz/wp-content/uploads/2016/10/markdown.png)

得益于 atom 的 chromium 内核，其对 markdown 的支持十分顺畅，也可以直接预览 html。你甚至可以直接使用开发者工具（快捷键`ctrl+alt+i`）查看渲染的方式，或者在预览区域右键把 preview 的 html 文档复制出来，粘贴到如 wordpress 等平台上。

![atomconsole](https://sxing.xyz/wp-content/uploads/2016/10/atomConsole.png)

atom 上 markdown 的代码高亮主题是完全和其他语言一致的，甚至连预览的主题也是一致的，视觉上给人很好的统一感。

#### g++

c++的编译器主要有 clang 和 gcc 两个派系，但是虽然相较而言 clang 有着一些优势，但是其对 windows 的支持并不是很好，在我的电脑上就出现了头文件错乱的现象，很难解决。索性使用 gcc 编译器。这一部分的配置上，Atom、Sublime 和 VSCode 很大程度上是一致的，所以我把主要部分写在这里。

###### 编译器

1.  安装 Code::Blocks。
    *   这一点纯粹是因为直接下载 windows 上的 gcc——MinGW 速度太慢，所以我们曲线救国，下载包含了完整 MinGW 的 CB，再将 MinGW 添加到系统环境中。
2.  将 MinGW 目录添加到系统的环境变量中。以下给出 win10 下的操作：
    1.  右击 Win 徽标，选择“系统（Y）”
    2.  在左边栏中点击“高级系统设置”
    3.  单击“环境变量（N）”。在“系统变量（S）”部分中，找到并选择 Path 环境变量。单击“编辑（I）”。如果 Path 环境变量不存在，请单击新建。
    4.  在编辑系统变量（或新建系统变量）窗口中，指定 Path 环境变量的值（可以将 MinGW 文件夹复制一份，将环境变量指定为该拷贝的路径，以免将来卸载 CB 连带 MinGW 一起不能用了）。单击确定。通过单击确定关闭所有剩余窗口。![path](https://sxing.xyz/wp-content/uploads/2016/10/path.png)
    5.  打开命令行输入 g++,如果出现`g++.exe: fatal error: no input files  
        compilation terminated.`则说明环境变量配置成功。

###### 插件

我使用的是[atom-shell-commands](https://atom.io/packages/atom-shell-commands)这款插件，虽然需要一些配置，但总体来说还是给人很好的体验。具体过程如下：

我们需要编辑 atom 的配置文件`config.cson`。

1.  打开 Setting
2.  点击左侧栏中的 OPEN CONFIG FOLDER
3.  在左侧栏文件树中找到并打开`config.cson`
4.  在尾部添加

    以上操作会在 atom 中加入一个快捷键为`ctrl+2`的编译 c++程序的指令，编译完成后会在该文件目录中生成一个`.exe`文件，执行即可。

如果你觉得这样还要去文件夹里执行一个文件，不够方便，可以按照[atom-shell-commands](https://atom.io/packages/atom-shell-commands)主页中的操作添加一个可以直接执行的操作，我已经这样做了。

###### linter

喜欢实时语法提示的童鞋可以使用[linter-gcc](https://atom.io/packages/linter-gcc)这一款插件（需要[linter](https://atom.io/packages/linter)配合），相似的，需要配置一下 gcc 的目录。

#### vim-mode

使用 atom 官方的[vim-mode](https://atom.io/packages/vim-mode)这款插件已经足以满足我对 vim 习惯的操作，如果你希望更多的 feature 可以使用[vim-mode-plus](https://atom.io/packages/vim-mode-plus)这款插件。

配合[ex-mode](https://atom.io/packages/ex-mode)食用，可以使用`:w`、`:q`等操作，很有 native vim 的感觉。

#### sync

因为同时在 macOS 和 windows 双平台下使用 Atom，所以我希望它们能同步起来。

使用[sync-setting](https://atom.io/packages/sync-settings)可以满足这个需求，需要 github 授权和 gist 授权。

#### git

使用[git-plus](https://atom.io/packages/git-plus)配合 atom 自带的 git 功能食用十分方便，可以一键 add+commit+push，atom 会调用自身填写 commit message，save 后就 push 上去了。

在 git 控目录下，atom 有许多方便的特性，诸如一键回到 HEAD，git-diff 等。

![atomgit](https://sxing.xyz/wp-content/uploads/2016/10/atomGit.png)

#### regex

使用[regex-railroad-diagram](https://atom.io/packages/regex-railroad-diagram)这个插件可以实现正则表达式可视化。

![regex](https://sxing.xyz/wp-content/uploads/2016/10/regex.png)

相较而言，VSCode 目前不支持零宽断言。

#### powermode

最后说一下很多人喜欢的[powermode](https://atom.io/packages/activate-power-mode)，我装了又因为太耗费性能卸载了，拿来装 X 倒是合适。

关于 Atom，分享一篇知乎的[回答](https://www.zhihu.com/question/22867204/answer/90728790)，答主就是前面 shell-command 插件的作者。

> 希望 atom 可以努力优化一下性能，不要因为性能败给 VSCode，失去广大低性能机型用户。

### VSCode

出身微软的[Monaco](https://microsoft.github.io/monaco-editor/index.html)项目的 VSCode 吸收了 electron 中前端技术的精华，微软证明了做一个 editor 对他们只是小菜一碟。VSCode 使用微软自家 typescript 来架构，某种程度上增强了性能。不同于 atom 加载时的几秒卡顿，它在我的两台 pcie-SSD 机器上几乎都是秒开。同时 VSCode 还集成了 VS 擅长的一些特性，比如语法识别，比如 debug，比如自带启动 cmd 的功能，这使得其在 windows 平台更具优势。

#### debug/g++

通过简单填写参数，就可以实现在 VSCode 里 debug 了。建议参考这篇[博文](http://blog.csdn.net/c_duoduo/article/details/51615381)。

如果不需要 debug 这种 IDE 级的功能，而是有如我一样 acm 之类轻量需求，那么只需在配置 gcc 环境变量之后，直接启动 VSCode 内部的集成终端用命令行编译并执行就可以了，整体性也很强。

![vscodeacm](https://sxing.xyz/wp-content/uploads/2016/10/VSCodeAcm.png)

#### js/ts

依靠内核的 typescript 引擎，VSCode 可以实现真正的 parse，带给 js 和 ts 使用者 IDE 级的编程体验，所谓的[Editing Evolved](https://code.visualstudio.com/docs/editor/editingevolved)。

这种体验是 sublime 这样的编辑器不可能实现的。

#### git

VSCode 同样自带[git 版本控制](https://code.visualstudio.com/docs/editor/versioncontrol)，还有一款不错的[gitlog](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)插件，可以很直观看到 merge 等信息。

![vscodegit](https://sxing.xyz/wp-content/uploads/2016/10/VSCodeGit.png)

#### markdown

VSCode 同样自带 markdown preview（快捷键`ctrl+shift+v`,因为按钮在右上角不明显故提一下）。但是默认新开一个 Tab 打开，而不是新开一个 Pane，所以需要我们先点右上角拆分编辑器，再在其中一个编辑器里 preview，修改是同步的。然而我暂时没有找到类似 atom 的滚动插件，这一点上 atom 的体验更好，所以本文也是在 atom 上写成的。VSCode 的 git-diff 功能是自动滚屏的，按理说在 markdown 上实现也并不难。这里有一篇[博文](http://www.jianshu.com/p/18876655b452)，可以参考配置。

![vscodemd](https://sxing.xyz/wp-content/uploads/2016/10/VSCodeMd.png)

#### vim-mode

很好的集成了 vim 下的键位操作，并在一个插件内就集成了 atom 两个插件的功能。

特别夸一下 VSCode 的 command palette，集成了很多功能,不像 Atom 选一个 Language syntax 还得用另一个快捷键呼另一个 palette（记那么多快捷键我容易吗）。

推荐一篇配置VSCode的[文章](https://github.com/kaiye/kaiye.github.com/issues/14)。

> 对于以上两个编辑器的选择还是很让人纠结的。两款编辑器从技术到外表很相似，都可以满足大多数人（特别是前端工程师）的需求。由于使用的时长还不多，我建议需要 debug 功能的选择 VSCode，没有固态硬盘的也选择 VSCode，其他的可以都尝试一下再自己决定。而我还会继续尝试追踪下去。

## End

编辑器是程序员之间长久争论不休的话题，我也常常耗费大量时间在编辑器的配置和选择上。有时我也会想，这是否有点舍本逐末，但是「工欲善其事，必先利其器」，必要地花费一些时间寻找一个适合自己的编辑器在我看来是磨刀不误砍柴工的。

很多人对编辑器的误解其实来源于一些热衷于将编辑器和编译器分开的人对 IDE 的贬低。其实编辑器和 IDE 都是必要的，只不过在它们应用来处理不同的工作：

编辑器往往追求一个平台同时适应多项轻量的文本编辑，在这点上 IDE 不适合，举个很简单的例子，你会去用 Code::Blocks 写 markdown 文档吗。

如果你写一些大型工程还坚持不用 IDE 那便是被意识形态绑架，自寻烦恼了。自己把编辑器装成一个 IDE 往往拖慢编辑器的运行速度，而中间付出的时间和精力更是得不偿失。

另一点就是，没必要对自己习惯的编辑器过于推崇，每个编辑器都有自己的优缺点，也各自有适合的对象，很多时候还仅限于个人的偏好问题。

</div>