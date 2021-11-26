import { Answer } from "../../answers/entities/answer.entity";
import { Questionnaire } from "../../questionnaire/entities/questionnaire.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Question {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => Answer, answer => answer.question, {onDelete:'SET NULL'})
    @JoinColumn()
    answers: Answer[];

    @Column()
    description: string;

    @Column()
    known: boolean;

    @ManyToOne(type => Questionnaire, questionnaire => questionnaire.questions, {cascade: true})
    questionnaire: Questionnaire
}