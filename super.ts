class Animal {
    constructor() {
        console.log('animal')
    }
    get() {
        console.log("吃饭")
    }
}

class Monkey extends Animal {
    constructor() {
        console.log("child---monkey")
        super()
    }
    get() {
        console.log("不吃饭")
    }
    init() {
        super.get()
        this.get()
    }
}

const monkey = new Monkey();
monkey.init();