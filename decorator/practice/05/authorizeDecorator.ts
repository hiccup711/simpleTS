namespace authorizeDecorator {
    const user = {
        name: 'ricky',
        isLogin: false
    }
    const AccessDecorator: MethodDecorator = (target, propertyKey,
                                                 descriptor: PropertyDescriptor) => {
        const method = descriptor.value;
        descriptor.value = () => {
            if(user.isLogin === true){
                return method();
            }
            alert('请先登录')
            location.href = 'https://google.com';
        }
    }
    class Article {
        @AccessDecorator
        show() {
            console.log('显示文章')
        }

        store() {
            console.log('保存文章')
        }
    }

    new Article().show()
}