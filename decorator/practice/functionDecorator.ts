namespace functionDecorator {
    const showDecorator: MethodDecorator = (target:Object, propertyKey:string|symbol,
                                            descriptor:PropertyDescriptor) => {
        descriptor.writable = false;
    }

    class User {
        @showDecorator
        public show() {
            console.log('hi there')
        }
        @showDecorator
        public static stShow() {
            console.log('Hahaha');
        }
    }

    let user = new User();
    user.show();

    User.stShow = () => {
        console.log('zzzzz')
    }

    User.stShow();
}