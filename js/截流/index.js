function throttle(func, ms = 1000) {
  let canRun = true
  return function (...args) {
    if (!canRun) {
      return
    }
    canRun = false
    setTimeout(() => {
      func.apply(this, args)
      canRun = true
    }, ms)
  }
}

// 每隔一段时间，只执行一次函数。

const taskj = () => {
  console.log('run task')
}

const throttleTask = throttle(taskj, 1000)
window.addEventListener('scroll', throttleTask)