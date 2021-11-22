import { IAnswer } from "./answeri";
import { Question } from "./question";
import { IQuestionaire } from "./questionnairei";

export class Questionnaire implements IQuestionaire{
    constructor(public name:string, public hide:boolean, public questions:Question[], public id:number){}
}
