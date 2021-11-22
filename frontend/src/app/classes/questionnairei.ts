import { Question } from "./question";

export interface IQuestionaire{
    id:number
    name: string,
    hide: boolean,
    questions:Question[]
}