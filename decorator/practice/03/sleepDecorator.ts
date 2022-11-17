namespace SleepDecorator {
    const SleepDecorator = (times: number):MethodDecorator =>
        (...args: any[]) => {
        const [,,descriptor] = args
        const method = descriptor.value;
        descriptor.value = () => {
            setTimeout(() => method(), times)
        }
    }

    class Sleep {
        @SleepDecorator(0)
        public response() {
            console.log("Delay apply")
        }
    }

    new Sleep().response();
}