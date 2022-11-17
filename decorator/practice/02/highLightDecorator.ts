namespace highLightDecorator{
    const highLightDecorator:MethodDecorator = (target, propertyKey,
                                                descriptor: PropertyDescriptor)=> {
        let method = descriptor.value;
        descriptor.value = () => {
            return `<div style="color:#f00">${method()}</div>`;
        }
    }

    class HighLight {
        @highLightDecorator
        public response() {
            return 'ricky.zone';
        }
    }

    document.body.insertAdjacentHTML('beforeend', new HighLight().response());
}
