import { Question } from "src/questions/entities/question.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Questionnaire {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: String

    @OneToMany(type => Question, question => question.id)
    questions: Question[];
}