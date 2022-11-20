namespace MyClassDecoratorFactory {
    const MyClassDecoratorFactory = (name: string, age: number) => <T extends new (...args:any[]) => any>(
        target: T
    ) => {
        return class extends target {
            public sayHello() {
                return `Hi, I'm ${name}, ${age} years old`;
            }

            public goodBye() {
                return `goodBye ${name}`;
            }

            gender = 'male';
        }
    }

    @MyClassDecoratorFactory('ricky song', 30)
    class User {
        [key: string]: any;
    }

    console.log(new User().sayHello());
    console.log(new User().goodBye());
    console.log(new User().gender);
}