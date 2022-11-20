/**
 * 属性装饰器：多用于通过 get set 方法在设置或访问时对属性进行一些自定义操作
 * 要求1：
 * 在设置 user 属性的 birthday 时，添加前缀 "出生于 "
 * 在访问 user 属性 birthday 时，添加后缀 " 农历"
 *
 * 要求2：
 * 可以自定义给属性添加前缀，后缀
 */
namespace propertyDecoratorPractice {
    const birthdayDecorator:PropertyDecorator = (target, propertyKey) => {
        let value:string;
        Object.defineProperty(target, propertyKey, {
            get(): any {
                return `${value} 农历`;
            },
            set(v: any) {
                value = `出生于 ${v}`;
            }
        })
    }
    class User {
        @birthdayDecorator
        private birthday: string = '';

        setBirthday(birthday:string = '1993-07-11') {
            this.birthday = birthday;
        }

        getBirthday() {
            return this.birthday
        }
    }

    const user = new User();
    user.setBirthday();
    console.log(user.getBirthday())

    const birthdayDecorator2 = (prefix: string, suffix:string):PropertyDecorator => {
        return (target, propertyKey) => {
            let value: string;
            Object.defineProperty(target, propertyKey, {
                get(): any {
                    return value + suffix;
                },
                set(v: any) {
                    value = prefix + v;
                }
            })
        }
    }


    class User2{
        @birthdayDecorator2('出生于', '阳历')
        private birthday:string = '';

        setBirthday(birthday: string = '1993-05-20') {
            this.birthday = birthday;
        }

        getBirthday(){
            return this.birthday;
        }
    }

    const user2 = new User2();
    user2.setBirthday();
    console.log(user2.getBirthday());
}