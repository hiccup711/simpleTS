namespace functionDecorator{
    const loggerDecorator = () => {
        return function logMethod (
            target: any,
            propertyName: string,
            propertyDescriptor: PropertyDescriptor
        ): PropertyDescriptor {
            const method = propertyDescriptor.value;
            propertyDescriptor.value = function async(...args: any[]) {
                try {
                    return method.apply(this, args);
                } finally {
                    const now = new Date().valueOf();
                    console.log(`last logged in ${now}`);
                }
            };
            return propertyDescriptor;
        }
    }

    class UserService {
        @loggerDecorator()
        async login() {
            console.log('login success');
            await new Promise((resolve) => {
                setTimeout(resolve, 100);
            });
        }
    }

    export const exp6 = () => {
        const user = new UserService();
        user.login();
    }

    exp6()
}