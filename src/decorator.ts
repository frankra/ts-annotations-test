export function classDecorator(data){
    return function (target){
        console.log(data, target);
    }

}

export function attributeDecorator(data) {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor?: PropertyDescriptor) {
        console.log("f(): called");
        return target;
    }
}
