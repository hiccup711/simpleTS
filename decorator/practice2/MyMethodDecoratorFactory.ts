// 方法装饰器工厂
namespace MyMethodDecoratorFactory {
    const user = {
        name: 'ricky',
        isLogin: true
    }

    const RecordLastLoginTimeDecorator = (timestamp?: number): MethodDecorator =>
        (target, propertyKey, descriptor: PropertyDescriptor) => {
            if (timestamp) {
                console.log('登录时间' + new Date(timestamp).toString());
            } else {
                console.log('登录时间' + new Date().toString())
            }
        }

    const AccessDecorator = (isLogin: boolean = false): MethodDecorator =>
        (target, propertyKey, descriptor: PropertyDescriptor) => {
            if (isLogin) {
                descriptor.value();
            } else {
                descriptor.value = function () {
                    function loginFail() {
                        return '登录失败';
                    }

                    return loginFail.apply(this);
                }
            }
        }


    class User {
        @AccessDecorator(user.isLogin)
        @RecordLastLoginTimeDecorator()
        public login() {
            return `欢迎回来 ${user.name}`;
        }
    }

    console.log(new User().login());
}