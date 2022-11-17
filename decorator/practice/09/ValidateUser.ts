import 'reflect-metadata';
namespace ValidateUser {
    const ParamDecorator: ParameterDecorator = (target, propertyKey, parameterIndex) => {
        let requireParams: number[] = []
        requireParams.push(parameterIndex)

        Reflect.defineMetadata('required', requireParams, target, propertyKey);
    }

    const ValidateDecorator: MethodDecorator = (target, propertyKey, descriptor:PropertyDescriptor) => {
        const method = descriptor.value;
        descriptor.value = function() {
            const requiredParams: number[] =
            Reflect.getMetadata('required', target, propertyKey) || [];

            requiredParams.forEach(index => {
                if(index > arguments.length || arguments[index] === undefined) {
                    throw new Error('请传递必要的参数')
                }
            })
            return method.apply(this, arguments)
        }
    }

    class User {
        @ValidateDecorator
        find(name:string, @ParamDecorator id: number){
            console.log(id)
        }
    }

    new User().find('111aa', 11);
}