  // 加法的精确算法
  numbePlus () {
    let len = 0
    let lengthArr = [] // 动态控制精度长度
    $.each(arguments, function (index, argu) {
      try {
        let arguLen = argu.toString().split('.')[1].length
        if (arguLen > len) {
          len = arguLen
          lengthArr.push(len)
        }
      } catch (e) {
        lengthArr.push(0)
      }
    })
    let n = 2
    if (lengthArr.length > 0) {
      n = Math.max.apply(Math, lengthArr) // 动态控制精度长度
    }
    let m = Math.pow(10, len)
    let val = 0
    $.each(arguments, function (index, element) {
      val += element * m
    })
    return (val / m).toFixed(n)
  }

// 减法精确计算

numbeReduce (arg1, arg2) {
  let r1
  let r2
  let m
  let n
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
   // 动态控制精度长度
  n = (r1 >= r2) ? r1 : r2
  return ((arg1 * m - arg2 * m) / m).toFixed(n)
}

// 乘法运算，避免数据相乘小数点后产生多位数和计算精度损失
window.numberMulti = (num1, num2) => {
  let baseNum = 0
  baseNum += num1.toString().indexOf('.')>0? num1.toString().split(".")[1].length: 0
  baseNum += num2.toString().indexOf('.')>0? num2.toString().split(".")[1].length: 0
  return Number(num1.toString().replace(".", "")) * Number(num2.toString().replace(".", "")) / Math.pow(10, baseNum)
}