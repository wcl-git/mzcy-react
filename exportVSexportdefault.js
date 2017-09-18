export 同一个文件中可以有多个 ，export default 只能有一个

引用 export时 名称要和 export 的名称对应  。
例如： export App = {}
import {App} from XXXXx // 

export default 时 import不需要名字相同  
例如: export default App = {..}

import hahaha form XXX //  名字可以随意定义
