### 作用：

ES 对象的每个Property的都会有一个相对应PropertyDescriptor对象（method是没有的）
此对象具有以下六个属性，被称为「属性的特性」，被用来控制property的访问控制。
1. value 
2. writable： 
3. confurable： property的删除及配置特性 
4. enumerable： 是否可以由for...in 进行遍历 
5. set：指向一个function,表示对属性写操作逻辑 
6. get：指向一个function,表示对属性读操作逻辑
set和get称为Accessor，它与value和writeable是互斥的（不可以同时设置）

### 工作过程：
js引擎对于对象的 `property` 进行访问时，将会动用相应的PropertyDescriptor的属性 `attribute` ：

* 取值时：`value` 和 `get` 起作用
* 写入时：`writable` 和 `set` 起作用
* 配置及delete时：`confurable` 起作用
* for...in遍历时：`enumerable` 起作用
