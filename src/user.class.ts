import { classDecorator, attributeDecorator } from "./decorator"

@classDecorator({test: true})
export class User {

    @attributeDecorator({ad:true})
    public id: number;

    public name: string;
    public createdAt: Date;

}