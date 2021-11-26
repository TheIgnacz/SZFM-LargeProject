import { Test } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { CrudRequest } from '@nestjsx/crud'
import { Answer } from '../answers/entities/answer.entity'
import { Questionnaire } from '../questionnaire/entities/questionnaire.entity'
import { Question } from '../questions/entities/question.entity'
import { QuestionMockRepository } from './questionmockrepository'
import { QuestionsService } from './questions.service'

describe('The QuestionsService', () => {
    let questionsService: QuestionsService
    const req: CrudRequest = { parsed: null, options: null }
    const dto: Question = {
      id:1,
      known: true,
      answers: [new Answer()],
      description: "Teszt kérdés?",
      questionnaire: new Questionnaire()
  }

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                QuestionsService,
                {
                    provide: getRepositoryToken(Question),
                    useClass: QuestionMockRepository
                }
            ]
        }).compile()

        questionsService = module.get<QuestionsService>(QuestionsService)
    })

    it('should be defined', async () => {
        expect(questionsService).toBeDefined()
    })

    it('should be find questions', async () => {
        expect(await questionsService.find()).toEqual([
            {
                ...dto
            }
        ])
    })

    it('should be find one questions', async () => {
        expect(await questionsService.findOne()).toEqual({
            ...dto
        })
    })
})
