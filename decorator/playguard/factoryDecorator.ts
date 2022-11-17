namespace factoryDecorator {
    const SetNameDecorator = (firstname: string, lastname: string) => {
        const name = `${firstname} . ${lastname}`;
        return <T extends new (...args: any[]) => any>(target: T) => {
            return class extends target {

                _name: string = name;

                getName() {
                    return this._name;
                }
            }
        }
    }

    @SetNameDecorator('ricky', 'song')
    class UserService {
        getName() {}
    }

    const exp3 = () => {
        const user = new UserService();
        console.log(user.getName());
    }

    exp3();




    class A {

    }

    const aaa = () => {
        // 匿名类继承某个类，可以理解成一次性使用的类，和匿名函数类似
        return class extends A{

        }
    }

    console.log(aaa())
}