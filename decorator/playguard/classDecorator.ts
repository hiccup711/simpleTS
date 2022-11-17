namespace classDecorator {
    const HelloDecorator = <T extends new (...args: any[]) => any>(
        constructor: T,
    ) => {
        return class extends constructor {
            newProperty = 'new property';
            hello = 'override';

            sayHello() {
                return this.hello;
            }
        }
    }

    @HelloDecorator
    class Hello {
        /**
         * 这个配置可以避免在类访问装饰器的方法或属性时提示编译错误，但是也有一个弊端
         * 就是编译器不会再对 Hello 的属性进行合法性校验，只有在脚本运行时才会校验
         * 比如现在访问一个 Hello 的属性是 goodBye，但是装饰器和 Hello 类本身都没有这个属性：
         * 那么在编译时是不会提示错误的，只有当访问 hello.goodBye 才会报错。
         * 总之还是谨慎使用。
         */
        [key: string]: any;

        hello: string;

        constructor() {
            this.hello = 'test';
        }
    }

    let h = new Hello();
    console.log(h.sayHello());
}
