// 参数格式化配置
const parseConf: ((...args: any) => any)[] = [];

export const parse =
    (parseTo: (...args: any[]) => any) =>
        (target: any, propertyName: string, index: number) => {
            parseConf[index] = parseTo;
        };

export const parseDecorator = (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor,
): PropertyDescriptor => {
    console.log('开始格式化数据');
    return {
        ...descriptor,
        value(...args: any[]) {
            const newArgs = args.map((v, i) => {
                console.log(parseConf[i])
                console.log(parseConf[i](v))
                parseConf[i] ? parseConf[i](v) : v
            });
            console.log('格式化完毕');
            return descriptor.value.apply(this, newArgs);
        }
    }
}

export interface UserType {
    id: number;
    username: string;
}

class UserService {
    private users: UserType[] = [
        {id:1, username: 'admin'},
        {id:2, username: 'song'},
    ];

    getUsers() {
        return this.users;
    }

    @parseDecorator
    delete(@parse((arg: any) => Number(arg)) id: number) {
        this.users = this.users.filter((userObj) => userObj.id !== id)
        return this;
    }
}

export const exp78 = () => {
    const userService = new UserService();
    userService.delete(1);
    console.log(userService.getUsers());
}

exp78();