namespace syncRequestDecorator {
    const RequestDecorator = (url: string): MethodDecorator => {
        return (target, propertyKey, descriptor: PropertyDescriptor) => {
            const method = descriptor.value;
            new Promise<object[]>(resolve => {
                setTimeout(() => {
                    resolve([{name: 'ricky'}, {name: 'zone'}])
                }, 2000)
            }).then((users) => {
                method(users);
            })
        }
    }

    class User {
        @RequestDecorator('https://users')
        public all(users: object[]) {
            console.log(users);
        }
    }
}