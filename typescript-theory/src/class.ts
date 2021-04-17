export{};

class Person {
  name: string;
  constructor(name:string){
    this.name = name;
  }
  sayHello(){
    console.log(`안녕하세요 저는 ${this.name}`)
  }
}

//class extends default: public, protected, private #
class Programmer extends Person{
  constructor(name:string){
    super(name); //반드시 호출해야 함
  }
  sayHello(){
    super.sayHello();
    console.log("저는 프로그래머입니다.")
  }
}

class Doctor extends Person{
  constructor(name:string){
    super(name);
  }
  sayHello(){
    super.sayHello();
    console.log("저는 의사입니다.")
  }
}

const programmer = new Programmer('홍길동');
programmer.sayHello();


//readonly
class Person2{
  readonly name: string;
  private readonly age: number;
  constructor(name:string, age:number){
    this.name = name;
    this.age = age;
  }
}

const person = new Person2("name", 23);
// person.name = "감"  ! readonly

//automatic memeber variables
class Person3{
  constructor(public name:string, public age:number){}
}

const person2 = new Person3("sno", 123);
console.log(person2.name, person2.age);

// getter, setter
class Person4{
  private _name : string = "";

  get name(): string{
    console.log("getter called");
    return this._name;
  }

  set name(newName : string){
    if(newName.length >10 ){
      throw new Error("최대 길이를 넘었습니다.")
    }
    this._name = newName;
  }
}

let person3 = new Person4();
person3.name= "hong" // setter
console.log(person3.name); // getter "getter called", "hong"
person3.name = '123123123 123ㅇㄴㄹㄹ' //setter "최대 길이를 넘었습니다."

//static 객체와 상관없이 고정된 값
class Person5{
  static adultAge=20
  constructor(public name: string, public age: number){}
  sayHello(){
    console.log(`안녕하세요, 저는 ${this.name}입니다.`)
    console.log(Person5.getIsAdult(this.age) ? "성인입니다." :"성인이 아닙니다.")
  }

  static getIsAdult(age:number){
    return Person5.adultAge >= age;
  }
}

const person5 = new Person5("tk", 13);
person5.sayHello(); // 안녕하세요, 저는 tk입니다. 성인이 아닙니다.
console.log(`성인 판단 나이 : ${Person5.adultAge}`)

//abstract 추상 클래스
abstract class Person6{
  constructor(public name: string){}
  sayHello(){
    console.log(`안녕하세요, 저는 ${this.name}입니다.`)
  }
  abstract sayHello2():void;
}

class Programmer2 extends Person6{
  sayHello(){
    super.sayHello();
    console.log("저는 프로그래머 입니다.")
  }
  sayHello2(){console.log('nothing')}
}

// 추상 클래스는 객체를 생성할 수 없습니다.
// const person6 = new Person6(); 