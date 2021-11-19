import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AnswersModule } from './answers/answers.module';
import { QuestionsModule } from './questions/questions.module';
import { Answer } from './answers/entities/answer.entity';
import { Question } from './questions/entities/question.entity';
import { User } from './user/entities/user.entity';
import { QuestionnaireController } from './questionnaire/questionnaire.controller';
import { QuestionnaireModule } from './questionnaire/questionnaire.module';
import { Questionnaire } from './questionnaire/entities/questionnaire.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'db',
      entities: [User, Answer, Question, Questionnaire],
      synchronize: true,
    }),
    UserModule,
    AnswersModule,
    QuestionsModule,
    QuestionnaireModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
