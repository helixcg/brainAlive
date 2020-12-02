Function.prototype.apply = function (context, args = []) {
  context = context || window; // 参数默认值并不会排除null，所以重新赋值
  context.fn = this; // this是调用call的函数
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

// or

Function.prototype.apply = function (context, args) {
  // 判断是否是undefined和null
  if (typeof context === 'undefined' || context === null) {
    context = window
  }
  let fnSymbol = Symbol()
  context[fnSymbol] = this
  let fn = context[fnSymbol](...args)
  return fn
}
