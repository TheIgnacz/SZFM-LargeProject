import { Test } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { CrudRequest } from '@nestjsx/crud'
import { Question } from '../questions/entities/question.entity'
import { Questionnaire } from './entities/questionnaire.entity'
import { QuestionnaireService } from './questionnaire.service'
import { QuestionnaireMockRepository } from './questionnairemockrepository'

describe('The QuestionnaireService', () => {
    let questionnaireService: QuestionnaireService
    const req: CrudRequest = { parsed: null, options: null }
    const dto: Questionnaire = {
      id:1,
      hide: true,
      name: "Teszt",
      questions: [new Question]
  }

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                QuestionnaireService,
                {
                    provide: getRepositoryToken(Questionnaire),
                    useClass: QuestionnaireMockRepository
                }
            ]
        }).compile()

        questionnaireService = module.get<QuestionnaireService>(QuestionnaireService)
    })

    it('should be defined', async () => {
        expect(questionnaireService).toBeDefined()
    })

    it('should be find questionnaire', async () => {
        expect(await questionnaireService.find()).toEqual([
            {
                ...dto
            }
        ])
    })

    it('should be find one questionnaire', async () => {
        expect(await questionnaireService.findOne()).toEqual({
            ...dto
        })
    })
})
