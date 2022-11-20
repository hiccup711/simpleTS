// 方法装饰器，记录用户登录时间，判断是否登录，来决定是否重载 login() 方法
namespace MethodDecoratorPractice {
    const user = {
        name: 'ricky',
        isLogin: true
    }

    const RecordLastLoginTimeDecorator: MethodDecorator = (target, propertyKey, descriptor:PropertyDescriptor) => {
        console.log(new Date().toString())
    }

    const AccessDecorator: MethodDecorator = (target, propertyKey, descriptor:PropertyDescriptor) => {
        const method = descriptor.value;

        if(user.isLogin) {
            method();
        } else {
            descriptor.value = function () {
                function login() {
                    return `登录失败`;
                }
                return login.apply(this)
            }
        }
    }

    class User {
        @AccessDecorator
        @RecordLastLoginTimeDecorator
        public login() {
            return `登录成功 ${user.name}`;
        }
    }

    console.log(new User().login());
}