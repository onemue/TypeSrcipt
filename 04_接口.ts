// NOTE 1. 什么是接口
// 接口就是一个规范
// 比如声明一个接口为国家[country]
interface Country {
  readonly name: string;
  readonly flag: string; // 假设一个国家必须有国旗[flag]并且国旗是不可以修改的
  readonly anthem: string; // 必须有国歌[anthem]同样的国歌也不允许修改
  conference: Array<string>; // 也必须有一些会议[conference]用来解决国家的问题
  enterprise?: any; //  但是企业[enterprise]不是国家必须的
  /**
   * attendMeeting 国家需要开会解决问题
   */
  attendMeeting(meetContent: string): string;

  /**
   * trade  贸易
   */
  trade(
    first: Country,
    second: Country,
    capital: number,
    content: string
  ): void;

  /**
   * trade  战争
   */
  warfare(first: Country, capital: number): boolean;
}

class BelligerentCountry implements Country {
  constructor(name: string, flag: string, anthem: string, enterprise?: any) {
    this.name = name;
    this.flag = flag;
    this.anthem = anthem;
    if (enterprise) {
      this.enterprise = enterprise;
    }
  }
  name: string;
  flag: string;
  anthem: string;
  conference: string[];
  enterprise?: any;
  attendMeeting(meetContent: string): string {
    throw new Error("Method not implemented.");
  }
  trade(
    first: Country,
    second: Country,
    capital: number,
    content: string
  ): void {
    console.log(
      `${first.name}促使${first.name}与${second.name}发生了[关于${content}]，涉及金额为${capital}`
    );
  }
  warfare(first: Country, capital: number): boolean {
    console.log(`${this.name}对${first.name}发动了战争，战争花费了${capital}`);
    let result = Math.random() >= 0.5 ? true : false;
    if (result) {
      this.trade(
        this,
        first,
        5000,
        `${this.name}战败，${this.name}对${first.name}战争赔款`
      );
    } else {
      this.trade(
        first,
        this,
        5000,
        `${first.name}战败，${first.name}对${this.name}战争赔款`
      );
    }
    return result;
  }
}

let A: Country = new BelligerentCountry("A", "A", "A anthem");
let B: Country = new BelligerentCountry("B", "B", "B anthem");

B.warfare(A, 600);

for (let index = 0; index < 3; index++) {
  A.warfare(B, 500);
}
