let user = {
    uname: 'ricky'
}

let unameDesc = Object.getOwnPropertyDescriptor(user, 'uname');

for (let pn in unameDesc) {
    console.log(pn, unameDesc[pn])
}

/**
 *   value: 'ricky',
 *   writable: true,
 *   enumerable: true,
 *   configurable: true
 */

Object.defineProperty(user, 'age', {
    enumerable: true,
    configurable: true,
    set: function (newAge) {
        this._age = newAge
    },
    get: function () {
        return this._age
    }
})
