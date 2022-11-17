"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exp1 = void 0;
const createDecorator = (decorator) => (Model, key) => {
    const target = Model.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(target, key);
    decorator(target, key, descriptor);
};
const logger = (target, key, descriptor) => Object.defineProperty(target, key, Object.assign(Object.assign({}, descriptor), { value: (...args) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return descriptor.value.apply(this, args);
        }
        finally {
            const now = new Date().valueOf();
            console.log(`last logged in ${now}`);
        }
    }) }));
class User {
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('login success');
            yield new Promise((resolve) => {
                setTimeout(resolve, 100);
            });
        });
    }
}
const exp1 = () => {
    const loggerDecorator = createDecorator(logger);
    loggerDecorator(User, 'login');
    const user = new User();
    user.login();
};
exports.exp1 = exp1;
(0, exports.exp1)();
