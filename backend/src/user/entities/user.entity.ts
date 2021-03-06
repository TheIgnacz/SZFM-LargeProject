import { Answer } from "../../answers/entities/answer.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @OneToMany(type => Answer, answer => answer.user)
    @JoinColumn()
    answers: Answer[];

}