配置各项的意义：
四个核心概念： 入口、出口、loader、插件。
其他概念： 配置、模块、模块解析、依赖图、构建目标、manifest、模块热替换

1.入口 entry ： 作用，告诉webpack从哪里开始，并根据依赖关系图确定需要打包的内容。APP第一个启动的文件
// 最基本配置，入口
module.exports = {
  entry:{
    app: './src/main.js',
    vendor: './src/vendor.js', //公共文件，可以用 CommonsChunkPlugin提取,这种场景最好不用。当然多页面是要这样做的。
    ...
  }
}
// 单个也可以这样简写
module.exports = {
  entry: './src/main.js'
}

// entry : [..] 数组也可以的


2. 出口 output: 作用，告诉webpack 在那里打包应用程序。
里面有一些属性：

path: 输出文件的路径。

filename：输出文件的名称。 如果想要文件具有唯一的名称  用[name]占位。其实就是到爆后的名字和 要打包的文件名一样。

publicPath: 指定资源引用的目录，编译好的文件，在服务器的路径，这是静态资源引用路径，本地'/'

chunkFilename: 非入口的文件名，用来打包 require.ensure引入的模块 。占位符 [id],[name],[chunkhash]:5
                对于不是require.ensure 引入的文件，改配置不生效

3. loader:webpack的loader 有两个目标： 
  1 识别出应该被对应的loader转换的那些文件。（test 属性）
  2 转换这些文件从而使其能够添加到依赖图中。(use 属性)
  exclude: 必不匹配选项
  include ： 必须匹配选项


  这点没什么好说的，重点是开发loader

4.插件 plugin loader仅在每个文件的基础上执行转换，而插件 更常用于 打包模块 编译，异步块生命周期执行操作和自定义功能。

  插件就是一个具有apply属性的js对象。apply属性会被webpack compiler调用，并且编译对象可以在整个生命周期访问

  用法：new 出来 

5. 解析 resolve

  alias: 
    创建 import require 的路径别名。确保引入模块变得简单。就是不再需要绝对路径，直接向模块一样引用。
    alias: {
      Utilities: path.resolve(__dirname, 'src/utilities/'),
      Templates: path.resolve(__dirname, 'src/templates/')
    }

  extensions： 自动解析扩展名


  别的参数用了再查
devserver 一般用中间件








