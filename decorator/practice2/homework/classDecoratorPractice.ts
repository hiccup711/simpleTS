/**
 * 类装饰器，可以给类新增修改属性，新增方法，重载方法等
 * 要求1：
 * 重载 sayHello 方法，输出 user 属性的 name
 * 新增 goodBye 方法，输出 goodBye + user 属性的 name
 * 修改 age 属性为 20
 * 修改 name 属性为 ricky song
 *
 * 要求2:
 * 同样实现上述功能，但不再定义 name 和 age，而是在装饰器中使用参数传入
 */

namespace classDecoratorPractice {
    const ModifyClass = <T extends new (...args:any[]) => any>(target:T): T => {
        return class extends target {
            name = 'ricky song';
            age = 20;
            sayHello() {
                return `Hi, I'm ${this.name}, ${this.age} years old`;
            }
            goodBye() {
                return `GoodBye ${this.name}`;
            }
        }
    }

    @ModifyClass
    class User {
        [key: string]: any;
        private name: string = 'ricky';
        private age: number = 18;

        sayHello(){
            return 'Hello';
        }
    }

    console.log(new User().sayHello());
    console.log(new User().goodBye());

    const ModifyClass2 = (name: string, age: number) => {
        return <T extends new (...args:any[])=>any>(target: T) => {
            return class extends target {
                sayHello() {
                    return `Hello User2, I'm ${name}, ${age} years old`;
                }
                goodBye() {
                    return `GoodBye ${name}`;
                }
            }
        }
    }

    @ModifyClass2('ricky song', 21)
    class User2 {
        [key: string]: any;
        sayHello() {
            return 'Hello';
        }
    }

    console.log(new User2().sayHello());
    console.log(new User2().goodBye());
}