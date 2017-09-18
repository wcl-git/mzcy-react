 全局变量在所有模块中均可使用，但是一下变量的作用域只在模块内
 __dirname
 __filename
 exports
 module
 require()

 以下对象是特定于node.js的。有一些是js语言本身的一部分，也是全局的

Buffer // 用于处理二进制数据

__dirname // 当前模块的文件名等同于 __filename  的 path.dirname()  的值

   例如： 运行位于/User/mjr目录下的example.js文件
   console.log(__dirname) // /User/mjr

__filename // 当前模块的文件名称  ---- 解析后的绝对路径
    例如： /User/mjr 目录下执行 example.js 
    console.log(__filename) // /User/mjr/example.js
    console.log(__dirname) // /User/mjr

console  /// 和js没啥区别

exports 是在模块文件级别作用域内有效，他被赋予 module.exports 的值

module 导出模块 。 对当前模块的引用 module.exports 用于指定模块所导出的内容。

process  node进程  记住 process.cwd() 工作目录 process.argv 命令行参数   process.env 环境信息对象

require 引入模块


setImmediate node定时器，相当于 setTimeout(fn,0) 

