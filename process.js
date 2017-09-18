// process 对象是一个全局变量，提供有关信息，对node应用程序始终可用
// 这里只学重点

process.argv // 返回一个数组，这个数组包含了node.js进程是的命令行参数。
  // 第一个元素为process.execPath 获取 argv[0]
  // 第二个元素为当前执行的js文件路径。 argv[1] // 这点很有用
  // 剩余的元素为其他命令行参数

  process.cwd()//  返回Node进程当前工作的目录

  process.env //  返回一个包含用户环境信息的对象
  // 新增一个属性 
  process.env.test = null;
  process.env.TEST = 1
  ...


// 这里知道这些就行了

// lodash 通过使用 数字、对象、数组 、字符串 等方法 ，