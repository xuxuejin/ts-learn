// 函数有返回值，类型注解也要写上
function add(first: number, second: number): number {
  return first + second;
}

const total = add(1, 2);

// void 注解表示这个函数不应该有返回值
function say(): void {
  console.log(123);
  //   return 123;
}

// never 表示这个函数不可能完全执行完
function error(): never {
  throw new Error();
  console.log(123);
}

function errorEmitter(): never {
  while (true) {}
  console.log(123);
}

// 解构赋值的参数注解写法
function test({ a, b }: { a: number; b: number }): number {
  return a + b;
}

// 一个参数的解构赋值，注解的写法和多个参数的类似
function getNum({ num }: { num: number }): number {
  return num;
}
