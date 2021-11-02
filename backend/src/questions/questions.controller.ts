import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Question } from './entities/question.entity';
import { QuestionsService } from './questions.service';

@Crud({
    model:{
        type:Question
    }
})

@Controller('questions')
export class QuestionsController implements CrudController<Question> {
    constructor(public service: QuestionsService){} 
}
