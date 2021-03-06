import { Question } from "../../questions/entities/question.entity";
import { User } from "../../user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Answer {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.answers)
    user: User; 

    @ManyToOne(type => Question, question => question.answers, {onDelete: 'SET NULL'})
    question: Question;

    @Column()
    createdDate: Date;

    @Column()
    value: number;
}