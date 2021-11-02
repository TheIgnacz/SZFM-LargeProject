import { type } from "os";
import { Answer } from "src/answers/entities/answer.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @OneToMany(type => Answer, answer => answer.id)
    @JoinColumn()
    answers: Answer[];

}