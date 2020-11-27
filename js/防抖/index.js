function debounce(e, time = 1000) {
  let timer
  return function (...arg) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      e.apply(this, arg)
    }, time);
  }
}

/**
 * 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
 * 把多个信号合并为一个信号
 */

const taskf = () => {
  console.log('run')
}

const debounceTask = debounce(taskf, 1000)
window.addEventListener('scroll', debounceTask)