import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Questionnaire } from './entities/questionnaire.entity';
import { QuestionnaireService } from './questionnaire.service';

@Crud({
    model:{
        type:Questionnaire
    }
})


@Controller('questionnaire')
export class QuestionnaireController implements CrudController<Questionnaire> {
    constructor(public service: QuestionnaireService){}
}
