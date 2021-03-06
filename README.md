# 微信小程序设计文档 - 今天鲨鲨吃什么



> *小组成员：薛晴, 王禹轩*
>
> *文档编写：薛晴，王禹轩*



## 一、设计与分工

### 1.1 设计目标

本小程序项目的立项，缘由移动互联网这门课程的大作业要求。同时，本小程序也作为一个培养团队开发协作能力以及编程设计能力的初级项目，兼顾解决一定的实际需求问题。 

本小程序所期望能达到的目标在以下几点。

- 通过对本小程序项目的需求分析、设计规划、协作编写，能在一定程度上锻炼个人的编程能力以及团队间的协作能力；
- 明白一个完整的项目开发周期是怎么样的，清楚项目开发过程中每个步骤流程；
- 明晰数据库系统在实际项目开发过程中充当的角色以及如何调用数据库，完成前后端的交互等；
- 对微信小程序的设计和所能达到的功能有初步掌握。

基于明确以上需求的前提下，对项目的各块功能实现进行任务分配。

### 1.2 任务分配

本项目共由如下两人合作开发。

- 学生姓名：王禹轩
- 学生姓名：薛晴

分配的思想是将整个小程序项目拆解为不同的开发阶段，同时，遵照**个人意愿优先**和**分配任务复杂度相当**的原则，对每个开发阶段的任务进行不同侧重的分配。总体而言，该小程序项目的开发阶段分为如下几部分。

#### 设计阶段

设计阶段需要明确该小程序所需实现的功能以及页面基本布局的确定。该阶段**要求对小程序整的设计和功能有宏观上的规划和明确**，为后续过程中的实际开发阶段起到引导的作用。

该阶段由两人共同参与，仔细分工如下。

- 薛晴主导对小程序的整体功能和设计布局进行规划；
- 王禹轩负责对页面布局部分以及功能实现部分提出改进和修改。

最终参照两人的意见，由两人共同确定设计框架。

#### 开发阶段

开发阶段则是根据设计阶段定下的方向，进行实际的开发工作，继续细分程序的不同部分进行开发实现。**要求最终能使小程序达到预期且处于可用的状态**。

该阶段中，仔细分工如下：

- 王禹轩负责小程序不同前端页面的开发与设计，以及与前端关联的页面逻辑设计开发和部分与云服务数据库相关的逻辑设计开发等
  - 首页，选项页以及各餐厅二级页面的设计和美化。
  - 首页，选项页的前端相关逻辑设计，以及各餐厅二级页面的所有逻辑设计，包含事件监听，存储用户自定义信息等。
  - 选项页和各餐厅二级页面的数据库调用相关逻辑设计，通过调取数据库信息显示商家列表。
- 薛晴负责小程序云开发中数据库的维护和调用，主体功能“抽取吃什么”的设计与开发，首页的部分逻辑设计与维护等
  - 对首页中该小程序主体功能“抽取吃什么”的逻辑设计开发，包含对用户自定义信息筛选，抽取函数编写，相关数据库引用等。
  - 对云服务数据库的进行整体的维护与使用。
  - 首页中其他主要逻辑功能部分的设计与实现，包含复选框事件监听，抽取列表获取等。

#### 测试阶段

测试阶段则是在程序进行到一定程度开发后，具备基础且完善功能的前提下，对程序进行功能性的测试。受限于项目规模，该小程序项目的测试由两人共同完成。

#### 报告编写

实际项目过程中，报告编写又分为开发日志，使用手册等相关文档的编写。对于该小程序项目，主要进行设计文档（即本文档）的编写，以及汇报 PPT 的编辑。

- 王禹轩负责对设计文档进行编写，以及对 *Gitee* 上的 *README* 部分进行编辑。
- 薛晴负责对设计文档的修改，以及汇报 PPT 的设计和编辑。

整体上的分工如上所述，但实际开发中更需要强调相互之间的配合与协同以保障效率，因此，在开发过程中，要求成员都需要对整个项目概况有大致了解。

--------------



## 二、程序功能

### 2.1 功能概述

小程序鲨鲨今天吃什么旨在为解决大多数人都会遇到的世界难题诸如“中午吃什么？”、“晚上吃什么？”出一份力。

通过抽取的设计，可以在一众商家列表中选出一家商家供以参考，以解决“吃什么？”的难题。受限于成本和规模，目前该小程序的商家范围仅限于**西安电子科技大学南校区**校内。

### 2.2 详细功能介绍

#### 首页

首页中，可以进行商家的抽取，以及为了方便不同住宿区的同学们选择就近的就餐地点，**设定了可以按丁香餐厅、竹园餐厅、海棠餐厅以及综合楼四个不同区域选定一个或多个特定区域的商家加入抽取列表中**，如下图。

<img src="https://s4.ax1x.com/2021/12/24/TtiGjK.png" alt="image-20211224132602705" style="zoom: 50%;" />



通过勾选不同的餐厅区域，可以限定抽取列表中的商家范围，保证每位同学老师都可以在适合自己的就餐区域中选出合适的商家。

#### 选项页

考虑到老师同学们口味差异，存在特定不喜欢的商家，因此，在选项页中，点入不同餐厅的二级页面中，支持对餐厅中的所有商家进行自定义其是否在抽取列表中出现。对于口味对不上的商家，可以将其勾选。如下图。

<img src="https://s4.ax1x.com/2021/12/24/TticDS.png" alt="image-20211224133628098" style="zoom:50%;" />



通过如上设置，可以确保每一位使用该小程序的师生，都可以尽可能选出自己心仪的商家进行就餐。

---------------------------





## 三、设计思想

### 3.1 界面布置

作为一款轻量级的小程序产品，页面的审美和逻辑上都应该达到尽量的简约明了。为此，整个小程序的界面设计上，我们采用了一类简单但不失质感的蓝色系作为主色调。利用白色与不同的蓝色调配，使得整个小程序显得充满层次感得同时，对于重要功能的位置也不失醒目的提示。

##### 首页设计

在首页，我们对主体功能“抽取吃什么”的按钮进行了高亮布置，白色背景下采用偏向浅紫的蓝色作为按钮的背景，一方面可以凸显出整个小程序的主体功能，另一个方面可以结合整体的色彩设计，做到风格上的同一。

同时，对于首页最大篇幅的位置，我们采用了与整体颜色风格相符的可爱的动画形象小鲨鱼来作为背景，小鲨鱼背景在抽取商家过程中以及抽取成功后还会变换不同的形态。这也是我们的小程序名 “鲨鲨今天吃什么” 的由来。

<img src="https://s4.ax1x.com/2021/12/24/TtiREQ.png" alt="image-20211224134846578" style="zoom:50%;" />



##### 选项页

选项页也沿用了蓝色作为整体的主题色，搭配不同层次的蓝色系，创造出了风格和谐又不单调的效果。

<img src="https://s4.ax1x.com/2021/12/24/Tti4Cn.png" alt="image-20211224135059037" style="zoom:50%;" />



### 3.2 功能设计

作为一款以解决吃什么为卖点的小程序，首要的功能自然是帮助用户解决吃什么。因此，整个小程序最重要的功能就是抽取系统的设计。在当前版本中，抽取的设计还较为较基础，采用随机抽取的原则，对符合条件的商家中进行抽取。后序改进中，可以考虑加入口碑评价系统，或是用户偏好系统，做到具有对不同用户有不同权重的推荐，满足千人千面的口味需求。

其次，为了满足校内师生中，大家的住宿区不同且相距较远，特意设立了**可以从不同区域的商家中选择一个或多个区域的商家添加入抽取列表。**此举可以方便用户就近就餐，或是选择自己想去的位置进行就餐。

再者，针对不同用户的口味不同问题，在选项页中，**用户可以对哪些商家会出现在抽取列表中进行个性化的修改和定制。**美中不足在于，修改目前还没有做到按用户信息进行保存，每次打开小程序需要重新进行设置。这也是下一次迭代中，首要的改进。

通过多种功能的设计，鲨鲨吃什么小程序基本上可以解决校内师生选择就餐商家的问题。同时，提供了较为丰富的自定义选项，满足了不同人有不同的推荐清单。

----------------



## 四、关键技术点

### 抽取功能的实现

作为本产品的核心，抽取功能的实现逻辑关系到整个产品的使用体验。我们的想法在于，通过生成随机数列，不断从获取的商家清单中选取一名商家，实时地显示在屏幕上，同时一直高速重复这个动作，直到用户再次点击按钮，选取出一个特定的商家。这样可以达到一种类似于 “抽奖” 的效果，能实现产品功能的同时，还不失趣味性。

#### 所遇到问题

初期实现，仅使用了内置的按时间长度进行循环的函数**setInterval**来实现本功能。具体表现为，按下抽取按钮后，从数据库拉取商家列表，结合用户自定义和地区限制做条件判断，最后得出抽取列表，在函数内重复抽取。

后面的开发过程中，发现有许多细节上的东西需要注意，比如按一下按钮后，按钮需要从 “试试运气” 转变为 “就吃这个吧！”，再次按下按钮，则需要变成 “不满意，再来！”；以及也涉及到小鲨鱼背景图片的切换，和数据库抓取需要时间，若网络不好会导致抽取过程中没有商家显示在屏幕上，导致抽取过程中得 “空转” 现象。这些细节上的问题获取不影响实际的功能实现，但从注重用户体验的角度出发，还是需要加以完善。

#### 1. 使用分支逻辑对不同情况进行处理

为了满足对**未抽取**，**抽取中**，**已抽取**三种情况下，按钮上所显示的文字和小鲨鱼背景图片有所区别，采用状态变量记录当前状态和进行分支逻辑判断使程序执行不同的语句段，最终，在保证效率的前提下达成了所需的效果。核心逻辑代码（*lottery.js*）如下。

``` js
if(flag == false){
    this.data.interval = setInterval(function(){
        var num = Math.floor(Math.random()*that.data.arr.length);
        var food = "";
        if(that.data.arr == undefined || that.data.arr[num] == undefined){
            that.setData({
                click: "请稍等..."
            })
        }else{
            that.setData({
                pic:"/images/SearchingFood.png",
                food: that.data.arr[num].name,
                click: " 就吃这个吧 !"
            })
        }
        // console.log("Here");
    },50)
}else{
    this.setData({
        pic:"/images/HaveDinner.jpg",
        click: "  不满意，再来！"
    })
    clearInterval(this.data.interval);
}
```



#### 2. 对商家列表判空做特殊处理以及预处理，重新设定加载数据库和限定商家列表的时机

##### 列表判空

考虑到网络条件差的情形下，加载数据库出现延时时，会导致抽取过程中空转的情况。为此，做了两点优化操作。其一，在用户点下抽取按钮，在**正式抽取前，对数据库拉取得商家列表做不断地判空操作**，直到不为空才进行正式的抽取，否则则显示 “请稍等...”。

``` js
if(that.data.arr == undefined || that.data.arr[num] == undefined){
    that.setData({
        click: "请稍等..."
    })
}
```

##### 预处理减少延时

其二，将**加载数据库的过程从按下按钮开始抽取切换为首次加载页面时就加载数据库**。同时，**对商家列表位置限定的处理也从按下按钮后处理转化为当用户勾选不同地区餐厅时就进行实时的更新**。结果两项预处理操作，测试发现，按下抽取按钮后，基本可以即刻显示出抽取的商家，而不会再出现空转现象。

``` js
/**
* 生命周期函数--监听页面加载
*/
onLoad: function (options) {
    // 读入数据库数据
    const db = wx.cloud.database();
    const food = db.collection('food');
    const _ = db.command;
    this.setData({
        db_food:food,
        _:_
    })
},
```



### 用户自定义功能的实现

由于我们的小程序设计要求满足用户可以在选项页中自定义哪些商家会出现在抽取列表中，因此，对于用户自定义操作的记录和实际抽取过程中的交互成了一个问题。直观的体现就在于如果用户不喜欢商家 A，用户在选项页中勾选了商家 A，那么如何在抽取列表中将商家 A 剔除。

结果多次查阅资料和实际测试，最终敲定的实现想法为在 *app.js* 中定义一个全局二维数组 `disableBusiness:[Array("","")]`，用于记录用户在选项页中勾选的商家，最后在抽签过程中引用该数组，与商家列表中的商家进行比对，对列表中的选定的部分商家作剔除处理。`disablebusiness[i]` 数组表示第 `i` 个个区域中勾选的商家，在目前版本中一共有 *4* 个区域。

``` js
globalData:{
    // 0 综合楼，1 竹园，2 海棠，3 丁香
    disableBusiness:[Array("","")]
},
```

在选项页的各餐厅二级页面下，通过监听复选框事件，对该数组进行实时的更新。

``` js
checkboxChange:function(e){
    getApp().globalData.disableBusiness[1]=e.detail.value;
}
```

由此，通过以上的设计，程序可以正常达到我们所需要的功能。

----------------



## 五、有待完善的功能以及后续开发前瞻

目前，经过测试，“鲨鲨吃什么” 小程序已经具备实际的可用性。由于小鲨鱼背景的版权问题，上线版本更改了程序中的图片，改用颜文字，同时对应更改了一些文字。上线小程序名为**“下顿吃什么”**，可通过微信小程序搜索到。不过，该版本小程序中仍存在不少可以改进的问题。这些问题或许是未来新功能的探索，也或许是目前功能所还存在缺陷。在此进行一个汇总与前瞻总结。

- **每次都保存不同用户的个性化设置**

虽然已经实现了支持用户进行对哪些商家不出现个性化的设置，但这一信息仍然没有和用户本身关联起来。换句话来说，每次用户重新打开小程序，都需要重新在此进行个性化设置，这一点是比较不人性的。后续版本的更迭中，首要解决的就是这一问题。

实现起来也并不困难，思路大体为获取用户的登录 `uid`，关联 `uid` 与其对应的 `disableBusiness` 数组，将其存储至服务器端。每当用户再次登录时，将其从云端重新加载，即可做到保存用户个性化设置的效果。

至于这么简单的而又比较必要的功能为什么还没有实装，实在是因为临近期末考试，deadline 要赶不完了，后续有空了再继续做迭代更新吧。



- **引入商家评价功能**

开放用户对商家评价的功能，可以令用户自由对各个商家进行自己的评价。同时，在抽取到相应商家时，用户可以点进去进一步查看其他用户对该商家的评价，做到提供的就餐建议更有指导性、客观性。



- **抽取动画的改进**

进一步的，不仅仅通过按钮进行抽取，而是可以通过上下滑动这一更符合当代人操作习惯的操作来取代按钮的逻辑，实现更方便更美观的抽取效果。



- **抽取逻辑的改进**

抽取逻辑上，目前采用的伪随机抽取。进一步的改进想法，可以是结合历史数据中用户重抽、最后一抽的操作，记录用户的喜好，按用户的喜好为不同商家设置不同的抽取权重。通过这样，可以实现满足用户们千人千面的口味需求。



- **补足数据库中的商家数据**

因为人力和时间精力优先，数据库中仅收录了部分校内较为知名的商家。更多的商家数据仍需要补足。



- **不局限于西电校内，推广为适合各个校园以及商圈的小程序**

这一点可以通过获取用户位置信息，同时为不同位置的校园 / 商圈设置不同的商家列表解决，所需要的资源比较多，开发消耗比较大，但如果小程序需要进一步推广，这是不可或缺的一步。