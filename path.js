// 提供了一些工具函数，用于处理文件与目录的路径
// 路径结构： root dir base(name,ext) 理解

// 在任何操作系统 处理window  path.win32.basename('c:\\temp\\myfile.html') 获得路径得到一致的效果
// 在任何操作系统 处理POSIX  path.posix.basename('c:/temp/myfile.html') 获得路径得到一致的效果
// 返回：  myfile.html

path.basename(path[,ext]) // 返回一个path的最后一部分
例如：  // 第二个参数和 第一个参数后缀不一致，报错
path.basename('/foo/bar/baz/quux.html', '.html'); // 返回 quux
path.basename('/foo/bar/baz/quux.html'); // 返回 quux.html

path.delimiter  // 提供平台特定的路径分隔符：（比较少用）

path.dirname(path) // 返回一个path的目录名，最后一项 去掉，参数必须是字符串
例如：path.dirname('/foo/bar/bas/quux')// 返回 /foo/bar/bas  

path.extname(path) //返回path的扩展名，即path的最后一部分中的最后一个 . 字符到字符串结束。有. 返回‘.’, 没有返回：''

path.format() // 从一个对象返回一个路径字符串。path.parse()相反
例如：
 path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base:'file.html',
    ext: 'igoo'
 })
 返回：'/home/user/dir/file.html'

 // 没有指定dir 则 root会被使用
 // 有base ext被忽略，

 path.isAbsolute(path) //  判断是否是一个绝对路径

/*****/ path.join(...paths)  //  参数一个路径片段的字符串，把全部给定的path片段连接到一起，并规范生化成的路径。长度为零的会被忽略，从左到右
  path.join('/foo', 'bar', 'baz/asdf', 'quux', '..') // 返回 ‘/foo/bar/baz/asdf’  quux  解析的是文件名，因为 后面‘..’ 解析为'.'
 
 path.normalize(path) // 规范化给定的path 并解析 '..', '.'片段
  path.normalize('/foo/bar/baz/asdf/quux/..') // 返回‘/foo/bar/baz/asdf’ 


path.relative(form, to) // 返回从form 到to的相对路径
path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
// 返回: '../../impl/bbb'


path.resolve(..path) //  该方法会把一个路或路径片段的序列解析为一个绝对路径 从右到左 参数必须是字符串
例如：
path.resolve('/foo/bar', './baz');
// 返回: '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/');
// 返回: '/tmp/file'

/*******/ path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'); 
// 如果当前工作目录为 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'

path.sep  //  拿到路径片段分隔符







