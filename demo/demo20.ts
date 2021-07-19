// 泛型中 keyof 语法的使用
interface Person {
    name: string,
    age: number,
    gender: string
}

class Teacher {
    constructor(private info: Person) {
        
    }
    getInfo<T extends keyof Person>(key: T): Person[T] {
        return this.info[key]
    }
}

const teacher = new Teacher({
    name: 'shawn',
    age: 18,
    gender: 'male'
})

// 使用 keyof 语法，就能限定传入的参数是否属于 interface 定义的对象中的 key
const test1 = teacher.getInfo('hello');

// 另外，鼠标放在返回值上，能根据传入的参数，推断出对应的类型
// 而不是之前的 string｜number
const test2 = teacher.getInfo('name');
const test3 = teacher.getInfo('age');