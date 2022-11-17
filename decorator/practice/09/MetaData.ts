// 元数据
import 'reflect-metadata'
let meta = {
    name: 'ricky'
}


Reflect.defineMetadata('ricky', {url:'ricky.zone'}, meta, 'name');

const t = Reflect.getMetadata('ricky', meta, 'name');
console.log(t)