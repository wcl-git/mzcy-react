fs 文件系统
引用： require('fs')
所有的方法都有异步和同步的形式，异步的最后一个参数都是回调函数，
传给回调函数的参数取决于方法，但是回调函数第一个参数都会保留给异常。如果操作成功完成，则第一个参数回事null或undefined
