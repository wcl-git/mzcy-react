// 解决重复代码

// 工厂模式：解决创建多个多项的问题，缺点，没有解决对象识别问题
function create (name, age, job) {
  let o = {}
  o.name = name
  o.age = age
  o.job = job
  o.sayName = function () {
    console.log(this.name)
  }
  return o
}
let create1 = create('hha', 23, '鸭子')
let create2 = create('oo', 24, 'ezi')

// 构造函数模式  区别工厂模式，没有显示创建 obj 没有return。构造函数还可以直接调 不用new
// 构造函数问题：每一个方法都要实例上重新创建一遍，

function Create (name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = function () {
    console.log(this.name)
  }
}
let new1 = new Create('hh', 34, '教师')
let new2 = new Create('fds', 22, '鸭子')
console.log(new1)

// 原型模式  缺点。所有实例都取得相同的值
// 创建的每一个函数都有一个 prototype 属性 。
function Create () {
}
Create.prototype.name = 'sjsadjd'
Create.prototype.age = 23
Create.prototype.job = '叫死'
Create.prototype.sayName = function () {
  console.log(this.name)
}

// 自面量 原型模式.确定，重写了 原型

function Create2 () {
}
Create2.prototype = {
  name: 'sjsadjd',
  age: 23,
  job: '叫死',
  sayName: function () {
    console.log(this.name)
  }
}

// 组合使用构造函数 和 原型模式

function Person (name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.friends = [1, 2, 3, 4]
}
Person.prototype = {
  constructor: Person,
  sayName: function () {
    console.log(this.name)
  }
}

// 动态原型模式

function Person (name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  if (typeof this.sayName !== 'function') {
    Person.prototype.sayName = function () {
      console.log(this.name)
    }
  }
}
// 寄生稳妥 免了


// 继承

原型链继承
缺点：引用类型原型属性容易被传该
在创建子类实例是不能像超类型构造函数中传参数


// 借用构造函数（这里有 call  apply 区别： 第二个参数 call 是一个值一个值，apply 是数组，或agruments 当参数大于三个时 apply性能更好）


function super(){
  this.color =['red','blue', 'green']
}
function Sub(){
  Super.call(this)
}
let instance1 = new Sub()
instance1.color.push('black')
console.log(instance1.color)

let instance2 = new Sub()
console.log(instance2.color)
// 两个输出是不一样的

// 传递参数

function Super(name){
  this.name = name
}
function Sub (){
  Super.call(this, 'Nidsd')
  this.age = 29
}

let instance = new SubType()
console.log(instance.name) // Nidsd



//  组合继承，原型链和借用构造函数结合
思路：使用原型链实现对原型属性方法的继承，通过借用构造函数对实例属性继承



