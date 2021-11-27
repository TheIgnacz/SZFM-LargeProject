import { Test } from '@nestjs/testing'
import { CrudRequest } from '@nestjsx/crud'
import { User } from '../user/entities/user.entity'
import { Question } from '../questions/entities/question.entity'
import { QuestionsController } from './questions.controller'
import { QuestionsService } from './questions.service'
import { Answer } from '../answers/entities/answer.entity'
import { Questionnaire } from '../questionnaire/entities/questionnaire.entity'

describe('QuestionsController', () => {
    let questionsController: QuestionsController
    let questionsService: QuestionsService
    const req: CrudRequest = { parsed: null, options: null }
    const dto: Question = {
      id:1,
      known: true,
      answers: [new Answer()],
      description: "Teszt kérdés?",
      questionnaire: new Questionnaire()
  }

    const mockQuestionsService = {
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
            controllers: [QuestionsController],
            providers: [QuestionsService]
        })
            .overrideProvider(QuestionsService)
            .useValue(mockQuestionsService)
            .compile()

        questionsService = module.get<QuestionsService>(QuestionsService)
        questionsController = module.get<QuestionsController>(QuestionsController)
    })

    it('should be defined', async () => {
        expect(questionsController).toBeDefined()
    })

    it('should update one questions', () => {
        expect(questionsController.service.updateOne(req, dto)).toEqual({
            ...dto
        })

        expect(mockQuestionsService.updateOne).toHaveBeenCalled()
    })

    it('should delete one questions', () => {
        expect(questionsController.service.deleteOne(req)).toEqual({
            ...dto
        })

        expect(mockQuestionsService.deleteOne).toHaveBeenCalled()
    })

    it('should create many questions', async () => {
        expect(questionsController.service.createMany(req, { bulk: [dto] })).toEqual([
            {
                ...dto
            }
        ])

        expect(mockQuestionsService.createMany).toHaveBeenCalled()
    })
})