// ts 中类的概念

class Person {
  name = 'shawn';
  getName() {
    return this.name;
  }
}

class Teacher extends Person {
  getTeacherName() {
    return 'Teacher';
  }
  // 类重写
  getName() {
    // super 可以理解为指代父类
    // 把父类的方法重写了，这时候还想调用父类的方法，就可以 super
    return super.getName + 'Xu';
  }
}

const person5 = new Person();

console.log(person5.getName());
