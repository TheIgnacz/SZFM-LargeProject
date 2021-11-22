import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Override } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Questionnaire } from './entities/questionnaire.entity';



@Injectable()
export class QuestionnaireService extends TypeOrmCrudService<Questionnaire> {

    constructor(@InjectRepository(Questionnaire) repository){
        super(repository);
    }
}