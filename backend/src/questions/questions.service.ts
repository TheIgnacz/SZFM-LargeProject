import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionsService extends TypeOrmCrudService<Question> {

    constructor(@InjectRepository(Question) repository){
        super(repository);
    }
}
