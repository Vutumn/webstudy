## 一个web初学者的心路历程


学习道路（不断更新中）：<br>初期：
编辑器的选择：webstorm（目前正在使用），vscode（即将尝试，插件开源化，全靠插件，通过插件能编写任何语言）。<br>系统性的学习：先学规范，css规范，文件命名，网易nec，张鑫旭博客，还有各种百度，仿写qq音乐。
在开始系统性的学习，买了两本书一本css secret还有一本精通css，css secret不推荐初学者购买，需要一定的基础，精通css推荐购买。js买了两本，犀牛书和红宝书，太厚了，长路慢慢。

### 12-19
更新精通css书上的内容和例子，这本书大致讲了些入门需要知道的知识点，感觉虽然全面但是粗略，需要初学者更加深入的去了解。

### 12-27
学习多媒体查询的布局方式，@media然后写上你要改变布局的屏幕宽度，min-width，max-width等等，可以随便去找个网站去看看。
然后学会了更深入的适应chorme审查元素工具，今天才发现能看padding和magin还有width，原来每次点击不同的元素呈现不同的颜色是这么个意思啊。。这个时候你会发现你的写的
上面很多黄色，原来是没有加reset样式的缘故，所以记得要清除你的元素上多余的padding还有margin。
第三个是box-sizing布局，与盒模型的区别在于，他的border-box属性的width和height是包含padding和margin的。

今天仿写网站的时候遇到个问题关于清除浮动的问题，
https://www.cnblogs.com/dolphinX/p/3508869.html

### 1.3
关于css样式加载顺序熟记规则，今天就遇到问题了，样式加载顺序不是按照class里面的排列顺序，也就是说class=''class1 class2'，并不是由这个顺序决定的，而是由在样式表中的顺序，排在前面的优先级低，这点在今天写响应式布局的时候就不知道，所以出问题了。
然后今天学到了一个好用的图片的插件font-awesome，用的是webfont伪元素加载。

接下来的工作开始下爱奇艺手机端了，想法来自于前端网的一个仿写，比较一下我们两之间的思路差别在哪，另外还有什么知识遗漏的地方。

附上网站
http://www.qdfuns.com/notes/48074/8b1782c9ce229e82b5dc755c7dabf8c5.html

### 1.4
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

看到个好的网站，关于介绍初学者如何入门的，写得很好。写了这么多天，感觉css这块最重要的还是布局这块。
http://www.cnblogs.com/dolphinX/p/5181660.html