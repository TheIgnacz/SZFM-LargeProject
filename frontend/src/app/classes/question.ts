import { IQuestion } from "./questioni";

export class Question implements IQuestion{
    constructor(public description:string, public known:boolean, public id?:number,){}
    value:number = 0
}
