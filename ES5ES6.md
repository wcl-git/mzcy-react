# ES5 ES6 react 区别

## 引用

ES5、ES6
```
//ES5
var React = require('react')
var {
  Component,
  ProTypes
} = React // 引用React抽象组件
var ReactNative = require('react-native')
var {
  Image,
  Text
} = ReactNative // 引用具体的React Native组件

在ES6里，import写法更为标准 
注意：大括号内的名字是模块里的名字，大括号外的名称是引用这随便命名

// ES6
import React, {
  Component,
  ProTypes
} from 'react'
import{
  Image,
  Text
} from 'react-native'
```

## 导出单个类

在es5里，要导出一个类给别的模块用，一般通过module.exports

```
//ES5
var myComponent = React.createClass({
  ...
})
//ES6
export default class MyComPonent extends Conponent{
  ...
}

 引用时候也类似：

 var MyComponent  = require('./MyComponent')

 import MyComponent from './MyComponent'

 导入和导出的写法必须配套，不能混用
```

## 定义组件

在ES5里

```
  var photo = React.createClass({
    render: function(){
      return(
        <Image suorce={this.prop.source} />
      )
    },
    ...
  })

  在ES6里
  class Photo extends React.Conponent{
    render(){
      return (
        <Image source={this.props.source} />
      )
    }
    ...
  }

  从上面可以看出 组件内定义方法 不再用名字：function()方法，而是直接用名字（）在方法最后也不用逗号了
```

## 定义自检的属性类型和默认属性

```
  //ES5
  var Video = React.createClass({
    getDefaultProps: function(){
      return {
        autoPlay: false,
        maxLoops: 10
      }
    },

    propTypes: {
      autoPlay: React.PropTypes.bool.isRequired,
      maxLoops: React.PropTypes.number.isRequired
    },
    render: function(){
      return (
        <View />
      )
    }
  })

  //ES6

  class Video extends React.Component {
    static defaultProps = {
      autoPlay: false,
        maxLoops: 10,
    }
    static proTypes = {
      autoPlay: React.PropTypes.bool.isRequired,
      maxLoops: React.PropTypes.number.isRequired
    }
    render(){
      return (
        <View />
      )
    }
  }

  写在外面也行了：
  Video.defaultProps = {
    autoPlay: false,
    maxLoops: 10,
  };
```

## 初始化 state
```
// ES5
var Video = React.Component({
  getInintialState: function(){
    return {
      loopsRemaining: this.props.maxLoops
    }
  }
})

// ES6  写法有两种
//  写法一 不推荐
class Video extends React.Component{
  state = {
    loopsRemaining: this.props.maxLops
  }
}

写法二   这里 props 不可以省略、因为constructor里面用了
class Video extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      loopsRemaing: this.props.maxLoops
    }
  }
}

```
## 把方法作为回调提供
ES5
```
  ES5
  var PostInfo = React.createClass({
    handleClick: function(){
      this.setState(showModal: true)
    },
    render:function(){
      return (
        <Touch onPress={this.handleClick}>
          <Text>{this.props.label}</Text>
        </Touch>
      )
   }
  })

   在ES5下，React.createClass会吧所有的方法都bind一遍，这样可以体检到任何的地方作为回调函数，而this不会变化。
```
ES6
```
  在ES6下，你需要通过bind来绑定this引用，或者使用箭头函数 来调用

  class PostInfo extends React.Component{
    handleClick: function(){
      this.setState(showModal: true)
    }
    render(){
      return (
        <Touch 
        onPress={this.handleClick.bind(this)} 或者
        onPress={(e) => this.handleClick(e)}

        >
          <Text>{this.props.label}</Text>
        </Touch>
      )
   }
  }
```






