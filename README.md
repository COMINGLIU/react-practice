# react-practice
react网站首页模拟

## 1.目录详解：
* ### app： 未压缩包
  * #### css
    * reset.css
    * index.css
    * reset.css
  * #### js
    * ##### commonJs：公用js<br/>
      * ajax.js
    * ##### components：组件们<br/>
      * content<br/>
        * search.js<br/>
        * sidebar.js<br/>
        * banner.js<br/>
        * listItem.js<br/>
        * featureCatBanner.js<br/>
        * partner.js<br/>
        * latest.js<br/>
    * ##### footer<br/>
      * linkList.js
      * secFlo.js
    * ##### top.js<br/>
    * ##### header.js<br/>
    * ##### content.js<br/>
    * ##### footer.js<br/>
    * ##### container.js<br/>
    * ##### cart.js<br/>
  * #### index.html<br/>
* ### dist: 压缩包<br/>
* ### node_modules： 依赖包<br/>
* ### gulpfile.js： gulp打包代码<br/>

## 2.运行环境搭建

### (1)安装依赖包

1.安装react: npm install react --save(--save表示开发环境) <br/>
2.安装react-dom: npm install react-dom --save

### (2)安装gulp压缩依赖包
npm install --save-dev gulp gulp-browserify gulp-concat gulp-react 
		gulp-connect loadash reactify

### (3)运行
gulp serve
