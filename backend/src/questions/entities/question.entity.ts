import { type } from "os";
import { Answer } from "src/answers/entities/answer.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Question {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => Answer, answer => answer.id)
    @JoinColumn()
    answers: Answer[];

    @Column()
    description: string;

    @Column()
    known: boolean;
}