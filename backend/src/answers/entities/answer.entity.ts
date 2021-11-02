import { Question } from "src/questions/entities/question.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Answer {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.id)
    user: User; 

    @ManyToOne(type => Question, question => question.id)
    question: Question;

    @Column()
    createdDate: Date;

    @Column()
    value: number;
}