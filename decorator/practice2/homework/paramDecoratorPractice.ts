/**
 * 参数装饰器，多用于参数格式化，校验合法性
 * 要求：
 * 从 users 中删除指定 id 的数据，接参可以是任意类型的数据，需要通过方法装饰器转换为数字
 */
import 'reflect-metadata';
namespace paramDecoratorPractice {
    const parse = (parseTo:(arg:any) => any):ParameterDecorator => {
        return (target, propertyKey, parameterIndex) =>
        {
            const param = [];
            param[parameterIndex] = parseTo;
            Reflect.defineMetadata('parseParam', param, target, propertyKey);
        }
    }

    const parseDecorator: MethodDecorator =
        (target, propertyKey, descriptor:PropertyDescriptor): PropertyDescriptor => {
        return {
            ...descriptor,
            value(...args:any[]) {
                const param = Reflect.getMetadata('parseParam', target, propertyKey);
                const newArgs = args.map((v,i)=>{
                    return param[i] ? param[i](v) : v;
                })

                descriptor.value.apply(this, newArgs);
            }
        }
    }

    interface UserType {
        id: number,
        username: string
    }

    class UserService {
        private users: UserType[] = [
            {id: 1, username: 'admin'},
            {id: 2, username: 'user'}
        ]

        getUsers(){
            return this.users;
        }

        @parseDecorator
        delete(@parse((arg:any) => Number(arg)) id:any){
            this.users = this.users.filter((user) => user.id !== id);
            return this;
        }
    }

    const user = new UserService();
    user.delete('2');
    console.log(user.getUsers());
}