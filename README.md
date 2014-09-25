# Jiantuo

Doc, are you telling me that you built a time machine out of a delorean.

app:以前的前端页面
config:数据库配置文件
models:后端开发要用到的模型
node_modules:node要用到的包
public:最新的前端页面
routes:后端访问路由与控制，返回JSON或者状态码
service:曹哥写的对后端处理
test:单元测试
	运行:grunt test将测试下面的所有文件
	参考其中的例子编写 
views:页面，现已通过app.js文件指定了静态页面
.bowerrc:指定bower install配置
	 如:"directory": "public/bower_components" 指定安装目录 
.gitignore:git配置文件
	可指定只提交文件类型
app.js：node服务器启动相关配置
bower.json:指定要用到的bower安装的包，通过bower根据此文件安装 
Gruntfile.js:启动，测试配置文件
package.json:node服务要用到的包配置

首次运行
	npm install
	grunt server
	grunt test