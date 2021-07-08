// 类 内部的 getter 和 setter

// class Person4 {
//     constructor(private name: string) {}
//     // 对 name 进行保护，不允许直接访问
//     // 对 name 做一些处理再暴露给外部
//     get getName() {
//         return this.name + ' Xu';
//     }
// }

// const person4 = new Person4('shawn')
// 因为上面的 name 有 private 关键字，直接访问是访问不到的
// console.log(person4.name)
// get 属性直接调用，后面不需要（）直接 . 调用就行
// console.log(person4.getName);

// 上面的一般这么写
// 私用属性前面一般加上 _
class Person4 {
    constructor(private _name: string) {}
    get name() {
        return this._name + ' Xu';
    }
    // 由于 name 是私有属性，直接赋值也是不行的
    // 通过 set 设置私有属性
    set name(name: string) {
        const realName = name.split(' ')[0]
        this._name = realName;
    }
}
const person4 = new Person4('Shawn')
// 调用
console.log(person4.name)
person4.name = 'Shawn Xu'
console.log(person4.name)

// ts 写一个单例模式
// 单例模式：一个类只允许生成一个类实例
// static 静态属性
class Demo {
    // 通过 private 规避了通过 new 创建实例的形式
    // 那么要怎么生成实例呢？
    private constructor() {}
    // 不能用 public 而应该用 static
    // static 表示把一个方法挂在类上，而不是类实例上
    static getInstance() {
        return new Demo()
    }

}
// 不允许这种形式生成多个实例
const demo1 = new Demo();
const demo2 = new Demo();
const demo3 = Demo.getInstance();
const demo4 = Demo.getInstance();

// 改进一下
class Demo2 {
    private static instance: Demo2;
    private constructor() {}
    static getInstance() {
        // 第一次执行 没有 instance 生成一个实例
        // 第二次执行 有实例 直接返回实例
        // 这样就保证了只生成一个实例
        if(!this.instance) {
            this.instance = new Demo2();
        }
        return this.instance
    }
}

const demo5= Demo.getInstance();
const demo6 = Demo.getInstance();