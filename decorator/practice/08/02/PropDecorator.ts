// 属性装饰器
namespace PropDecorator{
    const LowerDecorator: PropertyDecorator = (target,propertyKey) => {
        let value: string;
        Object.defineProperty(target, propertyKey, {
            get: () => {
                return value.toLowerCase();
            },
            set: (v) => {
                value = v;
            }
        })
    }

    class Hd {
        @LowerDecorator
        public title: string | undefined;
    }

    const obj = new Hd();
    obj.title = 'RickyZone';

    console.log(obj.title);
}