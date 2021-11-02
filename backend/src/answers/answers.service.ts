import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Answer } from './entities/answer.entity';

@Injectable()
export class AnswersService extends TypeOrmCrudService<Answer> {

    constructor(@InjectRepository(Answer) repository){
        super(repository);
    }
}
