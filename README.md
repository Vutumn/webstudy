## 一个web初学者的心路历程


学习道路（不断更新中）：<br>初期：
编辑器的选择：webstorm（目前正在使用），vscode（即将尝试，插件开源化，全靠插件，通过插件能编写任何语言）。<br>系统性的学习：先学规范，css规范，文件命名，网易nec，张鑫旭博客，还有各种百度，仿写qq音乐。
在开始系统性的学习，买了两本书一本css secret还有一本精通css，css secret不推荐初学者购买，需要一定的基础，精通css推荐购买。js买了两本，犀牛书和红宝书，太厚了，长路慢慢。

看到个好的网站，关于介绍初学者如何入门的，写得很好。写了这么多天，感觉css这块最重要的还是布局这块。
http://www.cnblogs.com/dolphinX/p/5181660.html

推荐学习网址，css，js都有进阶练习
重点:百度前端技术学院的课程任务是由百度前端工程师专为对前端不同掌握程度的同学设计。我们尽力保证课程内容的质量以及学习难度的合理性，但即使如此，真正决定课程效果的，还是你的每一次思考和实践。
重点在于你自己的思考和实践。
http://ife.baidu.com/

如果说仿写是头脑中有个概念，那么ife课程就是整合这些东西，让你的只是系统化，在你自己动手的过程中去切身体会每个标签的用法，css的写法等等，当你心中有了个正确的模版后，你会思考为什么腾讯百度的那么写，我这么写会产生什么问题，有没有更好的办法等等。
所以要不断的重构你的知识结构树，让它更加的完善。

计划:学习markdown把readme.md格式美化一下，说实话有点丑。

### 12-19
更新精通css书上的内容和例子，这本书大致讲了些入门需要知道的知识点，感觉虽然全面但是粗略，需要初学者更加深入的去了解。

### 12-27
学习多媒体查询的布局方式，@media然后写上你要改变布局的屏幕宽度，min-width，max-width等等，可以随便去找个网站去看看。
然后学会了更深入的适应chorme审查元素工具，今天才发现能看padding和magin还有width，原来每次点击不同的元素呈现不同的颜色是这么个意思啊。。这个时候你会发现你的写的
上面很多黄色，原来是没有加reset样式的缘故，所以记得要清除你的元素上多余的padding还有margin。
第三个是box-sizing布局，与盒模型的区别在于，他的border-box属性的width和height是包含padding和margin的。

今天仿写网站的时候遇到个问题关于清除浮动的问题，
https://www.cnblogs.com/dolphinX/p/3508869.html

### 1-3
关于css样式加载顺序熟记规则，今天就遇到问题了，样式加载顺序不是按照class里面的排列顺序，也就是说class=''class1 class2'，并不是由这个顺序决定的，而是由在样式表中的顺序，排在前面的优先级低，这点在今天写响应式布局的时候就不知道，所以出问题了。
然后今天学到了一个好用的图片的插件font-awesome，用的是webfont伪元素加载。

接下来的工作开始下爱奇艺手机端了，想法来自于前端网的一个仿写，比较一下我们两之间的思路差别在哪，另外还有什么知识遗漏的地方。

附上网站
http://www.qdfuns.com/notes/48074/8b1782c9ce229e82b5dc755c7dabf8c5.html

### 1-4
今天遇到的是rem，rem是相对字体大小做的，做过iOS的会接触到按照屏幕比例计算，也就是说我们有一个基准，按照一个基准做出来的，其它的屏幕按照这个做比例换算即可。而rem远离和这个也类似，他是利用rem这个，然后利用js媒体查询动态改变html font大小，自然rem就变了。
webkit-box 和 box-sizing border box

webkit-box，主要是用来实现流布局的，类似于ios中的autolayout，只需要给出比例，距离即可自动计算，宽高。

这是对与在爱奇艺右上角下载app的疑问
.m-header .header-app .link-app {
    display: inline-block;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    height: .2rem;
    line-height: .19rem;
    width: .59rem;
    border: 1px solid #0bbe06;
    border-radius: .2rem;
    box-sizing: border-box;
    text-align: center;
    color: #0bbe06;
    font-size: .11rem;
}

实际效果可以去网页上看看，主要讲解下几个不怎么熟悉的属性，首先是display inline-box，宽高自适应，box是占一整行，然后是line-height和height的关系，这个可以看http://www.zhangxinxu.com/wordpress/2009/11/css%E8%A1%8C%E9%AB%98line-height%E7%9A%84%E4%B8%80%E4%BA%9B%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E5%8F%8A%E5%BA%94%E7%94%A8/，line-height实际就是文字的基线，一般用这个属性来实现垂直居中，当你的a标签设置为inline-box后，就可以
对它的宽高进行设置了，还有个box-sizing，这个主要区分是跟盒模型的区别，盒模型的宽度=width+border+padding,而border-box是宽度等于width
好处，比如我要一个元素的宽度严格是其父元素的某个百分比，但是又要给其子元素周边留出点空白，这样就很方便：box-sizing: border-box; width: xx%; padding: yyem;
而不需要计算间距啥的

### 1-5
相关问题:爱奇艺menu如何进行滑动，设置为white-space no-wrap和over-flow的区别，另外关于border-box的深度用法，用paddinig百分比的意义

### 1-8
关于borde-box的历史，好处等介绍
https://www.w3cplus.com/content/css3-box-sizing

利用white-space实现元素不换行和overflow实现不换行滑动
ul float:left一般和white-space no-wrap结合起来使用实现元素li同一行排列不换行的效果，overflow-hidden实现同一屏幕的效果。

一、h1用来修饰网页的主标题，一般是网页的标题，文章标题，h1中部署主关键词。h1尽量靠近在html中的body标签，越近越好，以便让搜索引擎最快的领略主题。

二、h2表示一个段落的标题，或者说副标题，部署长尾关键词

三、h3表示段落的小节标题，h3效果跟Strong差不多，一般是用在段落小节

四、h4-h6基本很少用到，是告诉搜索引擎这些不是很重要的内容，单一篇文章内容较多的时候，可以用来说明一些内容是不很重要的。

### 1-9
百度ife，今天开始学习这个吧，也不知道接下来仿写什么网站比较好一点，就百度了下，感觉这个网站还不错，起码能知道前端一个流程从psd到完成页面。
https://github.com/ecomfe这个是百度前端的规范，可以参考下

### 1-10
关于task02踩坑的点我写在简书了。
https://www.jianshu.com/p/c6646db27d1e

### 1-11
task03
https://www.jianshu.com/p/a2777bae4862

### 1-12
task04，关于居中的问题，可以看这个网站https://css-tricks.com/centering-css-complete-guide/，先思考在看答案。
基本各种情况都涉及到了
以下是task4的感悟，关于垂直居中刚开始用的是absolute加margin位移，发现效果不太好，在浏览器缩小到一定尺寸，div并不是一直垂直居中的，它其实有个固定的margin在那，后来改用transform能实现动态改变的效果，但是两者都其实要设置一个浏览器最低的缩放宽高。

absolute(绝对定位)和fixed(固定定位)。其中static和relative会占据文档流空间，他们并不是脱离文档的。absolute和fixed是脱离文档流的，不会占据文档流空间。
文档流：将窗体自上而下分成一行行, 并在每行中按从左至右的顺序排放元素,块状元素独占一行，内联元素不独占一行；

CSS中脱离文档流，也就是将元素从普通的布局排版中拿走，其他盒子在定位的时候，会当做脱离文档流的元素不存在而进行定位。需要注意的是，使用float脱离文档流时，其他盒子会无视这个元素，但其他盒子内的文本依然会为这个元素让出位置，环绕在周围。而对于使用absolute positioning脱离文档流的元素，其他盒子与其他盒子内的文本都会无视它。

关于absolute详情看
http://www.zhangxinxu.com/study/201012/position-absolute-replace-method-2.html
left top都是相对与跟本身position最相关的元素来确定的，这点可以看我写的例子task04。


### 1-15
task06问题集锦
1.无链接文字用什么标签。

2.设置文字对齐的时候，文字在div中底部对齐的时候的问题
特别提醒：vertical-align只对行内元素有效，对块级元素无效。或者用position：absolute来做

3.html中dl,dt,dd,ul,li,ol标签区别和使用
https://zhuanlan.zhihu.com/p/23240817
https://www.zhihu.com/question/20532360

4.文字是有高度的，而且这个高度还有空隙，如何让他们自适应。
关于宽度这点可以用，text-indent首行缩进来做，高度可以用line-height来做。

5.利用inline-block布局的时候，没有对齐。

以上两个问题都和line-height有关，先介绍下line-height吧。
line-height用在文字上就是它的高度，但是跟显示没关系，显示只跟font-size有关，而且line-height还决定它的位置，可以说是垂直中心点，所以有用line-height实现垂直居中.
http://www.zhangxinxu.com/wordpress/2010/05/%E6%88%91%E5%AF%B9css-vertical-align%E7%9A%84%E4%B8%80%E4%BA%9B%E7%90%86%E8%A7%A3%E4%B8%8E%E8%AE%A4%E8%AF%86%EF%BC%88%E4%B8%80%EF%BC%89/
可以先看这个理解vertical-aligin的定义，这里有个line-box的定义，line-box这里有介绍，看这里http://www.zhangxinxu.com/wordpress/2010/01/css-float%E6%B5%AE%E5%8A%A8%E7%9A%84%E6%B7%B1%E5%85%A5%E7%A0%94%E7%A9%B6%E3%80%81%E8%AF%A6%E8%A7%A3%E5%8F%8A%E6%8B%93%E5%B1%95%E4%B8%80/
当我们改变line-height的时候，能影响到设置了vertical-algin的元素，而改变height，line-height纹丝不动，这点可以自行验证，可见line-height和vertical-algin有微妙的关系.

一个inline-block元素，如果里面没有inline内联元素，或者overflow不是visible，则该元素的基线就是其margin底边缘，否则，其基线就是元素里面最后一行内联元素的基线。
基线位置和文字底部距离有关，和line-height无关。

### 1-16
button和input button的区别。
http://blog.csdn.net/lee_sire/article/details/50312301

关于这个div的设计，碰到一个问题就是如果有内容标题这种格式的，如何设计div，我一般就p，h3，或者特殊点的加个div，但是p和h3外面是否要套一个div，这点得参考大佬的写法，感觉这样直接写不好。

### 2-28
关于task08，bootstap12分栏的设计，主要是用于百分比内容，根据网页宽度自动调整内容的宽度。这里面要求里面的组件全是百分比宽度，根据内容板块设置应该均分城几块。然后根据媒体查询设置在不同的网页宽度下的比例和展示内容。
