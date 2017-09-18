# React 组件之间的交流方式


## React 组件之间交流方式 可以分为三种

### 父组件向子组件传值
```
  这个经常用，主要是利用props来进行传递
  // 父组件
  class MyContainer extends React.Component{
    constructor(){
      this.state{
        checked: true
      }
    }
    render(){
      return (
        <ToggleButton text='Toggle me' checked='this.state.checked' />
      )
    }
  }

  <!-- 子组件  -->

  class ToggleButton extends React.Compoent{
    constructor(){
      super()
    }
    render(){
      let checked = this.props.checked
      let text = this.props.text
      return (
        <label>{text}: <input type="checkbox" checked={checked} /></lbel>
      )
    }
  }

  父组件调用子组件，必须传入 子组件需要的 状态值，所以，组件嵌套不应该太深。三层以内较好
  这种方式是最普通的

```

###  子组件向父组件传值
这种方式是子组件控制自己的 state 告诉父组件的状态，然后在父组件中展示出来，因此，添加change事件来交互
```
  // 父组件
class MyContainer extends Component {
  constructor () {
    super()
    this.state = {
      checked: false
    }
  }
  onChildChanged (newState) {

    this.setState(() => ({
      checked: newState
    }))
  }
  render () {
    var isChecked = this.state.checked ? 'yes' : 'no'
    return (
      <div>
        <div>Are you checked: {isChecked}</div>
        <ToggleButton text='Toggle me'
          initialChecked={this.state.checked}
          callbackParent={(e) => this.onChildChanged(e)}
          />
      </div>
    )
  }
}

// 子组件
class ToggleButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: this.props.initialChecked
    }
  }
  onTextChange () {
  // setState 是一个异步方法，所以需要回调函数，箭头函数最适合,es5不用

    let newState = !this.state.checked
    this.setState(() => ({
      checked: newState
    }))
    // 这里要注意：setState 是一个异步方法，所以需要操作缓存的当前值
    this.props.callbackParent(newState)
  }
  render () {
    // 从【父组件】获取的值
    let text = this.props.text
    // 组件自身的状态数据
    let checked = this.state.checked

    return (
      <label>{text}: <input type='checkbox' checked={checked} onChange={() => this.onTextChange()} /></label>
    )
  }
}
```


### 没有任何嵌套关系组件之间传值  较多的是兄弟之间传值




