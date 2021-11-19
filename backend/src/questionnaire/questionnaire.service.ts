import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Questionnaire } from './entities/questionnaire.entity';



@Injectable()
export class QuestionnaireService extends TypeOrmCrudService<Questionnaire> {

    constructor(@InjectRepository(Questionnaire) repository){
        super(repository);
    }
}