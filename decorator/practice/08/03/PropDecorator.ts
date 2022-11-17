namespace PropDecorator {
    const RandomColorDecorator: PropertyDecorator = (target, propertyKey) => {
        const colors: string[] = ['red', 'blue', 'yellow', 'green'];
        Object.defineProperty(target, propertyKey, {
            get() {
                return colors[Math.floor(Math.random() * colors.length)]
            }
        })
    }

    class Z {
        @RandomColorDecorator
        public color: string | undefined;

        public draw() {
            document.body.insertAdjacentHTML('beforeend',
            `<div style="height:200px; width:200px;background-color: ${this.color}; float: left"></div>`
            )
        }
    }

    const button = document.querySelector("#draw") as HTMLButtonElement;
    button.addEventListener<'click'>('click', () => {
        new Z().draw();
    })
}