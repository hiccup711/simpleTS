/**
 * 类装饰器
 * 可以给一个类添加方法，或者进行方法重载，为类添加或复写属性
 */
namespace ClassDecoratorPractice {
    const MyDecorator = (name: string) => {
        // T 是一个任意的类，可以在实例化时向构造函数传入任意参数，返回的实例可以包含任意属性和方法
        return <T extends new (...args: any[]) => any>(
            constructor: T
        ) => {
            // target 指向调用装饰器的类本身
            return class extends constructor {
                // 此处 this 指向的是 target， class 是一个匿名类

                // 此处会覆写调用装饰器的 User 类的 name 属性
                name = name;

                // 添加方法
                public sayHello() {
                    return this.name;
                }

                // 重载方法
                public goodBye() {
                    return this.name + ' goodbye';
                }
            }
        }
    }

    @MyDecorator('ricky')
    class User {
        [key: string]: any;

        name: string;

        age: number;

        constructor() {
            this.name = 'hello';
            this.age = 19;
        }

        public goodBye() {
            return 'goodbye';
        }
    }

    console.log(new User().goodBye());
}
