import { IQuestion } from "./questioni";

export class Question implements IQuestion{
    constructor(public description:string, public known:boolean, public id?:number, public questionnaireId?:number){}
    value:number = 0
}
