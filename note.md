#  vue ssr



### 成熟框架


next   nuxt


###  手动搭建




###  ssr

一套代码既可以运行在服务端，也可以运行在客户端

spa  seo不友好

ssr  首屏直出

优点
seo非常好  更快的内容到达时间

缺点
开发条件受限
配置复杂
服务器压力相对


服务端渲染
    - 首屏渲染快
    - SEO友好
    - 服务器压力比较大，每次都需要重新请求资源
    - 可见不一定可操作


客户端渲染
    - 不利于SEO
    - 白屏时间长
    - 可见即可操作
    - 切换非常流畅




###  技术栈

webpack5  vue3  vue-router4  vuex4
koa全家桶

### 目录结构


### 接下来要做的事情

    - 客户端代码编写
        - vuex
        - router
    - 配置webpack
        - loader
            - vue-loader
            - css-loader
            - css提取loader  mini-css-extract-plugin
            - babel-loader
        - plugin
            - html-webpack-plugin
        - entry
        - output
        - devserver
    - 搭建服务器
        - koa
        - router
        - static
    - ssr 处理
        - 路由处理
        - 请求处理，数据预请求


###  客户端代码编写

###  配置webpack

###  数据预请求

    url -> 请求服务端 -> 服务端返回html -> js加载完毕 -> 发起ajax请求 -> 内容请求再渲染到页面

    url -> 请求服务端 -> 服务端返回html+异步请求的内容

    注水脱水
