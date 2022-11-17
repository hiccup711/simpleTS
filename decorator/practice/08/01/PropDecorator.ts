// 属性装饰器
namespace PropDecorator {
    const PropDecorator: PropertyDecorator = (...args: any[]) => {
        console.log(args)
    }
    const ParamsDecorator: ParameterDecorator = (...args: any[]) => {
        console.log(args)
    }
    class Hd {
        @PropDecorator
        public name: string | undefined

        public show(id: number = 1, @ParamsDecorator content: string) {

        }
    }
}