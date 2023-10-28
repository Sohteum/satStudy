### 개발환경
___
- 타입스크립트 설치
  > npm i -g typescript
  > tsc -v
  > tsc -w  
- 번들러 사용시
  - PARCEL(javascript 번들러) 설치
    > npm install parcel
  - package.json 세팅
    > npm init -y
  - package.json 수정
    ```jvavascript
    "scripts" : {
      "dev" : "parcel ./index.html" ,
      "build" : "prcel build ./index.html"
    }
    ```
- tsConfig.json 생성 
  (프로젝트 폴더 내 ts파일이 존재하지 않으면 오류 출력)
  - 번들러 미사용시
    ```javascript
    {
      "compilerOptions": {
        "target" : "es6", //ES6스크립트형태로 컴파일
        "module" : "ESnext", //ESM 최신 모듈 사용
        "moduleResolution": "Node", //import 폴더경로의 index.js파일 생략 가능
        "esModuleInterop": true, //ESM방식과 commonJs(nodejs방식) 호환
        "isolatedModules": false, //모든 파일을 모듈화
        "lib" : ["ESNext","DOM"] ,//컴파일시 필요한 라이브러리 선언
        "strict": true //엄격한 오류 검사
      } 
    }
    ```
  - 번들러 사용시 compilerOptions하단에 include 배열 추가
    ```javascript
    "include" : [ //타입스크립트 폴더 경로 
      "script/*.ts", //script 폴더안의 모든 ts파일
      "script/**/*.ts" //script 폴더안의 모든 폴더안의 ts파일
    ], 
    ```
- vscode 
  > 환경설정 locale검색후 TypeScript:Locale옵션을 ko로 변경
  

    

### 기본타입
___
- #### string, number, boolean, 
  ```javascript
  let str: string = '1'
  let num: number = 1
  let result = str - num  // err
  let bool:boolean = 1 //err
  ``` 

- #### inference (타입추론)
  ```javascript
  let num = 1
  num += '1' // err
  let str:string ='str'
  str += 1 //'str1'
  ```

- #### union
  ```javascript
  let num: number|string = 1
  num += '1' //err 
  let n: number|string = 1
  n = n + '1' //2
  ```

- #### array
  ```javascript
  let arr: (string | number)[] = [1, 'one']
  arr.push(true) // err
  ```

- #### tuple
  ```javascript
    let arr : [numer, string] = [1,'string']
    ```

- #### object
  ```javascript
  /* 
  모든 참조형 변수는 object type에서 파생되므로 불확실성때문에 사용하지 않는다
  let obj : object = {}; let arr : object = []; let fn : function () {}
  */
  let person: {
    name: string  //use only multiline
    age: number
    gender? : string // 선택적 속성 (string or undefined)
  } = {
    name: 'hong',
    age: 20,
    email : 'mail@mail.net' //err
  }
  ```

- #### function
  ```javascript
    //usage1
    const fnAdd: (a: number, b: number) => number
      = (a, b) => {
        return a + b
    }
    console.log(fnAdd(1, 2))
    //usage2
    const fnSum = (a: number, b: number): void => {
      let result: number = a + b
      console.log(result)
    }
    //overloading (화살표 함수로 함수를 정의할 수 없음)
    function fn(num1: number, num2: number): number;
    function fn(str1: string, str2: string): string;
    function fn(a:any, b:any) {
      return a + b
    }
    fn('hello', 'world')
    fn('hello', 1) //error
    ```

### 타입가드 
___
- #### as assertion
  ```javascript
  const h1 = document.querySelector('h1') as HTMLElement
  console.log(h1.innerText);
  ```

- #### Non-null 단언 연산 (Non-null assertion operator)
  ```javascript
  let num:number|null
  console.log(num!.toFixed(2)); //값이 유효한 것으로 단언
  ```
  
- #### 확정 할당 어선셜(Definite Assignment Assertions)
  ```javascript
  let num!:number //값이 할당 된 것으로 단언
  console.log(num);
  ```

- #### Narrowing

### 선언형 타입
___
- #### alias (타입 별칭)
  ```javascript
  type TypeName = string | number | boolean
  let poo: TypeName = 'poo'
  //객체형
  type MemberType1 = {
    name: string
    age: number
  }
  type MemberType2 = {
    email : string[]
  }
  let member: MemberType1 & MemberType2 = {
    name: 'michle',
    age: 24,
    email :['a@a.net','b@b.com']
  }
  //함수형
  type fnType = (a:number, b:number) => number
  const fn:fnType = (num1, num2) => {
    return num1 + num2
  }
  fn(1,2)
  ```

- #### interface
  ```javascript
  //확장
  interface MemberName{ name: string}
  interface MemberAge extends MemberName { age: number}
  interface MemberGender extends MemberAge { gender?: string}
  interface Member extends MemberGender { email?: string}
  let obj: Member = {
    name: 'hong',
    age: 20,
    email: 'mail@mail.net',
  }
  //배열안 객체 사용시
  interface User {
    name: string
    age: number
  }
  let userArr: User[] = [
    {name:'michle', age: 24},
    {name:'john', age: 20},
  ]
  ```

- #### call signature (함수 호출 시그니처)
  ```javascript
  interface FnSum { //인터페이스 방식으로 함수의 타입을 선언
    (msg:string):string
  } 
  interface Calc{
    firstNum : number
    lastNum : number
    fnSum: FnSum
    //fnSum : (msg:string) => string
  }
  let calc: Calc = {
    firstNum : 1,
    lastNum : 2,ㄴ
    fnSum(msg:string) {
      return `${msg} ${this.firstNum+this.lastNum}`
    }
  }
  console.log(calc.fnSum('결과는'))
  ```

- #### indexing signature (배열 인덱스 시그니처)
  ```javascript
  interface User { //
    [key: string] : any
  }
  let user:User ={}
  user['name'] = 'michle'
  user['age'] = 24
  user['email'] = ['a@a.net','b@b.com']

  console.log(user);
  ```


  ```javascript
  const h1 = document.querySelector('h1') as HTMLElement
  h1.innerText = (h1?.innerText) && 'hello'
  ```


- #### generic
```javascript
  //함수
  const fn = <T>(a:number, b:T, c: T) => {
    //a + b 와 같은 연산은 사용불가능
    return [a , b]
  }
  fn<string>(1,'2','3')
  fn(1,'2','3')
  fn(1,2,'3')//errir
  //객체
  interface User <T> {
    name : string
    age : number
    etc? : T
  }
  const user1: User<string> = {
    name : 'micle',
    age : 24,
    etc : 'a@a.net',
  }
  const user2: User<boolean> = {
    name : 'micle',
    age : 24,
    etc : true,
  }
```
### 모듈
___
  - #### declare
  ```javascript
    //두개 이상의 타입스크립트 파일을 사용할 경우
    export {} //모든 변수를 지역변수화 한다
    let a: number = 1
    declare global{//글로벌 타입 선언, export문과 병렬 선언,
      type num = number
    }
  ```

  - #### fileName.d.ts
  ```javascript
    //공통적으로 사용하는 type을 정의
    export type Age = number
    export interface Members {
      name: string
      age: number
    }
  ```