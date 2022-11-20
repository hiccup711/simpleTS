// 属性装饰器，如果定义了 set，也要定义 get
namespace PropertyDecorator {
    const RandomColorDecorator = ():PropertyDecorator => (target, propertyKey) => {
        const colors = ['yellow', 'red', 'blue'];
        Object.defineProperty(target, propertyKey, {
            get(): any {
                return colors[Math.floor(Math.random() * colors.length)];
            }
        })
    }

    const SetDefaultTimeDecorator = (): PropertyDecorator => (target, propertyKey) => {
        Object.defineProperty(target, propertyKey, {
            get(): any {
                return propertyKey;
            },
            set(v: any) {
                propertyKey = new Date().toDateString();
            }
        })
    }


    class Draw {
        @RandomColorDecorator()
        public color: string | undefined;

        @SetDefaultTimeDecorator()
        public date: string | undefined;

        public draw() {
            this.date = '';
            document.body.insertAdjacentHTML('beforeend',`
                <div style="background-color: ${this.color}; width:100px; height:100px; float: left">
                    ${this.date}           
</div>
            `)
        }
    }

    const button = document.querySelector("button") as HTMLButtonElement;
    button.addEventListener<'click'>('click', function() {
        new Draw().draw();
    })
}