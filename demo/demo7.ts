// interface 接口 用来定义通用的类型
// 类型别名也是可以的
// 一般能用接口就用接口来定义，其次才是用类型别名

interface Person {
  name: string;
  age: number;
}

const getName = (person: Person): string => {
  return person.name;
};

const setName = (person: Person, name: string): void => {};

// 这样会报错，因为 Person 里边需要 name 和 age，但是下面的数据只有 name
const person = {
  name: 'shawn',
};

getName(person);

// 一种方法就是按照接口规定的数据类型，传递正确的数据
// 还有一种方式就是更改接口定义的数据类型
interface Person2 {
  name: string;
  age?: number;
}
// ? 表示可有可无

// 除了上面的 ? 还有其它修饰符
// readonly 表示只读
// interface Person3 {
//   readonly name: string;
// }

const getName2 = (person: Person2): string => {
  return person.name;
};

const person2 = {
  name: 'shawn',
  sex: 'male',
};

// 参数类型注解里边没有 sex 字段
// 通过变量的方式写参数没有问题

getName2(person2);

// 注意：但是通过对象字面量的方式传参，ts 就会是强校验对象
getName2({
  name: 'shawn',
  sex: 'male',
});

// 那要怎么解决这种问题呢？因为可能有些属性还不能确定
// 解决方案：
interface Person3 {
  name: string;
  age?: number;
  [propName: string]: any;
}
// [propName: string]: any; 表示将来可能会有这个一个属性，属性名是个字符串，属性值是任意类型

const getName3 = (person: Person3): string => {
  return person.name;
};

const person3 = {
  name: 'shawn',
  sex: 'male',
};

getName3({
  name: 'shawn',
  sex: 'male',
});

// 除了属性 还可以有方法
interface Person4 {
  name: string;
  age?: number;
  [propName: string]: any;
  say(): string;
}

// 接口还可以应用到类上
// 一个类要是应用了一个接口，接口里存在的属性和方法，类里边要有
class Man implements Person4 {
  name: 'shawn';
  say() {
    return 'hello';
  }
}

// 接口可以继承
// Teacher 接口继承 Person4 接口的属性和方法
interface Teacher extends Person4 {
  teach(): string;
}

const getName4 = (person: Teacher): string => {
  return person.name;
};

const person4 = {
  name: 'shawn',
  say() {
    return '123';
  },
  // 如果不加 teach 方法，下面的调用就会报错
  teach() {
    return '456';
  },
};

getName4(person4);

// 接口可以定义函数
// 函数接受一个 string 类型的参数，同时返回值也是一个 string
interface sayHi {
  (word: string): string;
}

const sayWord: sayHi = (word: string) => {
  return word;
};
