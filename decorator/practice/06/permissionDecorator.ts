namespace permissionDecorator {
    const user = {
        name: 'ricky',
        isLogin: true,
        permissions: ['store','manage']
    }
    const PermissionDecorator = (keys: string[]): MethodDecorator => (target, propertyKey,
                                                 descriptor: PropertyDescriptor) => {
        const method = descriptor.value;

        const validate = () => keys.every(k => {
            return user.permissions.includes(k);
        })

        descriptor.value = () => {
            if(user.isLogin === true && validate()){
                alert('验证通过')
                return method();
            }
            alert('验证失败')
        }

    }
    class Article {
        show() {
            console.log('显示文章')
        }

        @PermissionDecorator(['store','manage'])
        store() {
            console.log('保存文章')
        }
    }

    new Article().store()
}