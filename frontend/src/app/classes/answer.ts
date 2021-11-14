import { IAnswer } from "./answeri";

export class Answer implements IAnswer{
    constructor(public user:number, public question:number, public createdDate:Date, public value:number){}
}
