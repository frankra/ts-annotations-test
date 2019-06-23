"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function classDecorator(data) {
    return function (target) {
        console.log(data, target);
    };
}
exports.classDecorator = classDecorator;
function attributeDecorator(data) {
    console.log("f(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("f(): called");
        return target;
    };
}
exports.attributeDecorator = attributeDecorator;
//# sourceMappingURL=decorator.js.map