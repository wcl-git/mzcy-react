## 基本语法：
```
// 挂在组件后,组件已经呈现给DOM后，该钩子就会运行。这是一个建立定时器的好地方
  componentDidmount(){
    ajax请求后
    fetchPosts().then((response) => {
      this.setState({
        posts: response.posts
      })
    })

  } 
  componentWillUnmount(){} // 将要卸载组件
  this.setState({key: value}) 
  this.setState(() =>({key:value})) // 异步

```
