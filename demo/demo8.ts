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
  getName() {
    //
    return super.getName + 'Xu';
  }
}

const person5 = new Person();

console.log(person5.getName());
