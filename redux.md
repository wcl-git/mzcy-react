## Redux核心  
### state 储存状态的对象
### action  根据 type 改变 state  ，其中 type 是必须的
### reducer  一个函数 参数是 state ， action ，把 state 和 action 连起来的 方法 

## 下面重头开始

### Redux三大原则
单一数据源
```
整个应用的state被储存在一棵object tree中，并且这个object tree只存在于唯一一个store中
``` 
state是只读的

```
  唯一改变state的方法 就是触发action，action是一个用于面熟已经发生事件的普通对象
```

使用纯函数来执行修改
```
  为了描述action 如何改变 state tree，你需要编写reducers。 

  reducer只是一个函数 state ，action 是其参数 ，返回新的state
```

## Action
```
 Action是把数据应用传到store的有效载荷。他是store唯一来源。
  一般通过 store.dispatch()将action传到store
  本质上是JavaScript对象。
  规定 action内必须使用一个字符串类型的 type 字段来表示要执行的动作。
```

##  Action


```
   一般用 store.dispatch() 将action传到 store。
   action内必须使用字符串类型 type 字段。一般为常量。
   action 创建函数 就是生成action的方法。 action和action创建函数 注意区分

   例如： addTodo(text) 这是一个 action 创建函数   只需要 dispatch(addTodo(text)) 就可以触发一次dispatch过程
   store能直接store.dispatch() 调用dispatch（）但是一般 用connect（）来完成调用
```
## Reducer

```
action 描述发生了事情这一事实。而 reducer 指明 如何跟新 state  。
处理reducer 尽量避免数据相互引用。
 reducer 就是一个纯函数，接受旧的 state 和 action  返回新的state。
 保持reducer 纯净。
里面会用到 Object.assign  ，注意第一个参数一定要{}空对象 。

写reducer 最后 运用 redux 提供的combineReducers（）工具将 reducer函数 统一成一个。
 import { combineReducers } from 'redux'
 const TotalReducer = combineReducers({
    visibilityApp,
    todos,
    ...
 })
 export default todoApp 
 也可以 
 export default function TotalReducer(state={}, action){
  return {
    visibilityApp: visibilityApp(state.visibilityFilter, action),
    todos: todos(state.todos, action)
    ...
  }
 }
...
```

## Store
```
  首先，action：描述发生了什么，reducer：根据action 更新 state 。
  store ：就是把他们联系到一起的 对象，store职责：
  1、提供getState（）方法获取state
  2、提供 dispatch（action）方法 更新 state
  3、提供 subscribe（listener）注册监听器
  4、通过 subscribe（listener）返回的函数注销监听器

  注意： Redux 应用只有一个单一的 store ，当需要拆分数据处理逻辑时，应该使用reducer 组合，而不是创建多个store


  根据reducer创建 store
  例如：
  import {createStore} from 'redux'
  import todoApp from './reducer' // reducer  JS
  let store = createStore(todoApp)
  这里 createStore（）有第二个参数。作用是设置state 的初始值，一般不用


```







