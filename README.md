# etrade-pc

> the PC version of etrade-platform

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 项目目录结构
	root/ 
		├── build  生产文件
		├── config webpack配置文件
		├── node-modules  node
		├── src
		|   ├── api    借口文件
		|   ├── assets 静态文件
		|   ├── components 组件区域
		|			├── common      公用组件
		|			├── ...
		|   ├── page  页面入口文件
		|			├── cart     购物车页面入口文件夹
		|				├── cart.vue       文件
		|			├── ...
		|   ├── router 路由配置文件
		|   ├── utils 工具文件
		|   ├── vuex  vuex状态管理
		|			├── modules
		|				├── shopcart.js  购物车模型
		|				├── ...
		|			├── mutaion-types.js   行为变量
		|			├──store.js  包装 vuex 建立store 
		|			├── ...
		|   ├── App.vue   应用生成文件
		|   ├── main.js   入口文件
		|	 
		├── static
		├── index.html   模板文件
		├── package.json 配置文件
		├── README.md    readme
		└── ...


		后面需要添加功能时再补充

