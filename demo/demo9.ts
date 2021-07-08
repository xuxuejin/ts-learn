// 访问类型
// private protected public 
// public 允许在类内和类外被调用
// private 允许在类内被使用
// protected 允许在类内及继承的子类中使用

// 默认是 public

class Person {
    protected name:string;
    public sayHi() {
        this.name;
        console.log('hi')
    }
}

class Teacher extends Person {
    public sayBye() {
        this.name;
    }
}

const person = new Person();
// 因为是 protected 关键字
person.name = 'shawn';
person.sayHi();


// constructor new 一个实例的时候执行

class Person2 {
    public name: string;
    constructor(name:string) {
        this.name = name;
    }
}
const person2 = new Person2('shawn')

// 上面的类可以简化一下
// 直接在构造函数的参数前面加上 public
// class Person2 {
//     constructor(public name:string) {
//      初始化赋值
//     }
// }

class Person3 {
    constructor(public name:string) {}
}

class Teacher2 extends Person3 {
    // 父子继承，子类也有构造函数
    constructor(public age: number) {
        // 子类必须得调用一下 super 继承父类的属性和方法
        // 如果父类的构造函数接受参数，还要传个参数，不然也会报错
        // 如果父类没有构造函数 也需要调用 super，不然会报错
        super('shawn');
        // 如果不想传参，那么就要改一下父类构造函数的参数的写法，改成可传可不传
        // 改成 constructor(public name?:string) {}
    }
}
// 子类有构造函数，就要调用 super

const teacher = new Teacher2(28);