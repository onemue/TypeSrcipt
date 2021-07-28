// NOTE 1. boolean
let boolean: boolean = true;

// NOTE 2. number
let number: number = 0;

// NOTE 3. string
// tips: 可以使用模版字符串
let string: string = "hello word";

// NOTE 4. Array 数组
// 内部存放相同的数据类型

// NOTE 4.1 可以在元素类型后面接上[]声明数组
let numberArray: number[] = [1, 2, 3, 4];

// NOTE 4.2 也可以是用数组泛型，Array<元素类型>
let stringArray: Array<string> = ["C", "Java", "JavaScript", "TypeScript"];
// NOTE 4.3 也可以使用new 创建数组
let newNumberArray = new Array<number>(4);
console.log(newNumberArray.length);
// NOTE 4.4 极端的解决办法 接口的key设置number类型也可以是个数组
interface NumberArray {
  [index: number]: number;
}
let numberArrayInterface: NumberArray = [0, 1, 2, 3]; // 过于极端 不建议使用 反正打死我我也不会用  除非月薪 5w+

// NOTE 5. Tuple 元组
// 内部可以存放不同的数据类型
let Tuple: [string, number];
Tuple = [string, number]; // 此处的string变量和number变量在[1. string]和[2. number]中声明了
// 但访问已知索引获得的正确的类型
console.log(string);

// NOTE 6. any 任意值
// 我们可以在不知的变量类型的时候使用任意值
let notSure: any = 0;
console.log(notSure);
notSure = "this is string";
console.log(notSure);
notSure = new Array<number>(3);
console.log(notSure);

// NOTE 7. void 空值
// 某种意义上来说 void 和 any是相反的
// 当一个函数没有返回值时，你通常会见到其返回值类型是void
// 声明一个值为 void 类型的变量没有意义 因为你只能赋予它undefined和null
// 所以不要声明 void 类型的变量 除非你傻
function showTips(tips: string): void {
  console.log(tips);
}
showTips("aaa");

// NOTE 8. null && undefined
// 默认情况下 null && undefined 是所有类型的子类型
// 也就是你可把 null && undefined 复制给任意类型的值

let nullNumber: number = null;
let undefinedNumber: number = undefined;
// 或者说 你只声明变量 不赋值 默认是undefined
let defaultUndefinedNUmber: number;
console.log("undefinedNumber:", undefinedNumber);
console.log("defaultUndefinedNUmber:", defaultUndefinedNUmber);
console.log("==:", undefinedNumber == defaultUndefinedNUmber);
console.log("===:", undefinedNumber === defaultUndefinedNUmber);

// NOTE 9. Never 用不存在
// never类型表示的是那些永不存在的值
// never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使any也不可以赋值给never。

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}
error("this is never");

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {}
}

// NOTE 10. 类型断言
// 什么是类型断言？ -- 告诉编译器：“相信我，我知道自己在干什么”

// NOTE 10.1 尖括号用法
let anyValue: any = "this is string";

let anyValueLength: number = (<string>anyValue).length;
// NOTE 10.2 as 用法
let asAnyValue: any = "this is string";

let asANyValueLength: number = (asAnyValue as string).length;
// tips:当你在TypeScript里使用JSX时，只有as语法断言是被允许的。所以还是使用as语法吧。
