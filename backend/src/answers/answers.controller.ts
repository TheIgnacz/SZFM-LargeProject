import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { AnswersService } from './answers.service';
import { Answer } from './entities/answer.entity';

@Crud({
    model:{
        type:Answer
    },
    query:{
        join:{ 
            question:{
                eager: true
            },
            user:{
                eager: true
            }
        }
}})

@Controller('answers')
export class AnswersController implements CrudController<Answer> {
    constructor(public service: AnswersService){}
}
