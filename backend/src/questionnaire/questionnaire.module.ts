import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Questionnaire } from './entities/questionnaire.entity';
import { QuestionnaireController } from './questionnaire.controller';
import { QuestionnaireService } from './questionnaire.service';

@Module({
  imports:[TypeOrmModule.forFeature([Questionnaire])],
  controllers: [QuestionnaireController],
  providers: [QuestionnaireService]
})
export class QuestionnaireModule {}
