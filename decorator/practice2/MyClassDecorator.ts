namespace MyClassDecorator {
    const MyClassDecorator = <T extends new (...args:any[]) => any>(
        constructor: T
    ) => {
        return class extends constructor {
            name = "ricky song";
            age = 18;

            public sayHello() {
                return `Hi, I'm ${this.name}, ${this.age} years old`;
            }

            public goodBye() {
                return `GoodBye ${this.name}`;
            }
        }
    }

    @MyClassDecorator
    class User {
        [key: string]: any;

        name: string;
        age: number
        constructor() {
            this.name = ''
            this.age = 0
        }

        public goodBye() {
            return `goodBye`;
        }
    }

    console.log(new User().sayHello())
    console.log(new User().goodBye())
}