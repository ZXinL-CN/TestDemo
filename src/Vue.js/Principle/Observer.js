import defineReactive from './defineReactive'

/**
 * Observer类会附加到每一个被侦测的object上。
 * 
 * 一旦被附上，Observer会将object的所有属性转换为getter/setter的形式
 * 来收集属性的依赖，并且当属性发生变化时会通知这些依赖
 * 
 */
export default class Observer {
    constructor(value) {
        this.value = value;
        if (!Array.isArray(value)) {
            this.walk(value);
        }
    }

    /**
     * walk会将每一个属性都转换成getter/setter的形式来侦测变化
     * 这个方法只有在数据类型为Object时被调用
     */

    walk(obj) {
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i], obj[keys[i]]);
        }
    }

}