import { IQuestion } from "./questioni";

export class Question implements IQuestion{
    constructor(public description:string, public known:boolean){}
    value:number = 0
}
