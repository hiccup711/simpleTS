/**
 * type 的作用和 interface 类似，都是用于约束类型，type 可以继承 interface，interface 也可以继承 type，type 也可以继承 type，
 * type 可以是一个方法，但 interface 格式固定，必须是一个接口类，interface 中也可以写方法，继承类必须实现它。
 */
type MyDecorator = (
    target: any,
    key: string
) => void;

type Z1 = {
    zz: string,
    zzz: number,
}

interface T1 extends Z1{
    target: any,
    key: string,
}

let a:T1 = {
    target: 'abc',
    key: 'aaa',
    zz: "111",
    zzz: 1234
};
console.log(a.key);

let b: MyDecorator = (target, key) => {
    console.log(target);
    console.log(key);
};

b("zzz", "1234");

let c: Z1 = {
    zz: "111",
    zzz: 222
}

console.log(c.zz)
console.log(c.zzz)