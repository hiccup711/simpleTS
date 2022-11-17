namespace errorDecorator {
    const ErrorDecorator = (message: string = 'ricky.zone', fontSize: string = '16px'): MethodDecorator => {
        return (target, propertyKey, descriptor:PropertyDescriptor) => {
            const method = descriptor.value;
            descriptor.value = () => {
                try{
                    method();
                } catch (error) {
                    console.log(`%c${message}`,`color:green;font-size:${fontSize}`)
                    console.log(`%c${(error as any).message}`, `color:red; font-size:${fontSize}`)
                }
            }
        }
    }

    class User{
        @ErrorDecorator('Hello ZZ','12px')
        show() {
            throw new Error("出错了");
        }
    }

    new User().show();
}