/**
 * 方法装饰器，用于方法重载，方法执行权限判断，校验方法参数合法性
 * 要求1：
 * 判断 user 属性的 isLogin 值确定用户是否已经登录，如果已经登录，打印返回 user 属性的 name + 登录时间，否则返回登录失败
 *
 * 要求2:
 * 完成上述功能，装饰器接收一个当前时间参数，如果有传当前时间参数，打印传递参数，否则打印当前时间
 * 通过参数判断是否登录，不再取 user 属性的 isLogin 值
 */
namespace MethodDecorator {
    const user = {
        name: 'ricky song',
        isLogin: true
    }
    const LoginDecorator:MethodDecorator = (target, propertyKey, descriptor:PropertyDescriptor) => {
        let login;
        if(user.isLogin) {
            login = () => {
                return `欢迎回来 ${user.name}，现在时间是` + new Date().toDateString();
            }
        } else {
            login = () => {
                return '登录失败';
            }
        }
        descriptor.value = login;
    }

    class User {
        @LoginDecorator
        login() {

        }
    }

    console.log(new User().login())

    const loginDecoratorFactory = (isLogin:boolean, date?: number): MethodDecorator => {
        return (target, propertyKey, descriptor:PropertyDescriptor) => {
            let login;
            let time = date ? new Date(date).toDateString() : new Date().toDateString();
            if(user.isLogin) {
                login = () => {
                    return `欢迎回来 ${user.name}，现在时间是 ${time}`;
                }
            } else {
                login = () => {
                    return '登录失败';
                }
            }
            descriptor.value = login;
        }
    }

    class User2 {
        @loginDecoratorFactory(user.isLogin)
        login() {

        }

        @loginDecoratorFactory(user.isLogin, 1668832787)
        login2() {

        }
    }

    console.log(new User2().login())
    console.log(new User2().login2())
}