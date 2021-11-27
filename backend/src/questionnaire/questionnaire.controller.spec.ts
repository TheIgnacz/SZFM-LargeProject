import { Test } from '@nestjs/testing'
import { CrudRequest } from '@nestjsx/crud'
import { User } from '../user/entities/user.entity'
import { Question } from '../questions/entities/question.entity'
import { QuestionnaireController } from './questionnaire.controller'
import { QuestionnaireService } from './questionnaire.service'
import { Questionnaire } from './entities/questionnaire.entity'

describe('QuestionnaireController', () => {
    let questionnaireController: QuestionnaireController
    let questionnaireService: QuestionnaireService
    const req: CrudRequest = { parsed: null, options: null }
    const dto: Questionnaire = {
      id:1,
      hide: true,
      name: "Teszt",
      questions: [new Question]
  }

    const mockQuestionnaireService = {
        createOne: jest.fn((req, dto) => {
            return {
                ...dto
            }
        }),

        getOne: jest.fn().mockImplementation(req => {
            return {
                ...dto
            }
        }),

        getMany: jest.fn().mockImplementation(req => {
            return [
                {
                    ...dto
                }
            ]
        }),

        updateOne: jest.fn().mockImplementation((req, dto) => {
            return {
                ...dto
            }
        }),

        deleteOne: jest.fn().mockImplementation(req => {
            return {
                ...dto
            }
        }),

        createMany: jest.fn().mockImplementation((req, { bulk: [dto] }) => {
            return [
                {
                    ...dto
                }
            ]
        })
    }

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [QuestionnaireController],
            providers: [QuestionnaireService]
        })
            .overrideProvider(QuestionnaireService)
            .useValue(mockQuestionnaireService)
            .compile()

        questionnaireService = module.get<QuestionnaireService>(QuestionnaireService)
        questionnaireController = module.get<QuestionnaireController>(QuestionnaireController)
    })

    it('should be defined', async () => {
        expect(questionnaireController).toBeDefined()
    })

    it('should update one questionnaire', () => {
        expect(questionnaireController.service.updateOne(req, dto)).toEqual({
            ...dto
        })

        expect(mockQuestionnaireService.updateOne).toHaveBeenCalled()
    })

    it('should delete one questionnaire', () => {
        expect(questionnaireController.service.deleteOne(req)).toEqual({
            ...dto
        })

        expect(mockQuestionnaireService.deleteOne).toHaveBeenCalled()
    })

    it('should create many questionnaire', async () => {
        expect(questionnaireController.service.createMany(req, { bulk: [dto] })).toEqual([
            {
                ...dto
            }
        ])

        expect(mockQuestionnaireService.createMany).toHaveBeenCalled()
    })
})