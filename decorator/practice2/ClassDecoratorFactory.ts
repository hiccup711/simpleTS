namespace MyClassDecoratorFactory {
    const MyClassDecoratorFactory = (name: string, age: number) => {
        return <T extends new(...args: any[]) => any>(
            target: T
        ) => {
            return class extends target {
                _name = name;
                _age = age;

                public sayHello() {
                    return `Hi, I'm ${this._name}, ${this._age} years old`;
                }

                public goodBye() {
                    return `GoodBye ${this._name}`;
                }
            }
        }
    }

    @MyClassDecoratorFactory('ricky song', 18)
    class User {
        [key:string]: any;

        public goodBye() {
            return `goodBye`;
        }
    }

    console.log(new User().sayHello())
    console.log(new User().goodBye())
}