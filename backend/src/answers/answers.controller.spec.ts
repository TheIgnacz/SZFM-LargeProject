import { Test } from '@nestjs/testing'
import { CrudRequest } from '@nestjsx/crud'
import { User } from '../user/entities/user.entity'
import { Question } from '../questions/entities/question.entity'
import { AnswersController } from './answers.controller'
import { AnswersService } from './answers.service'
import { Answer } from './entities/answer.entity'

describe('AnswersController', () => {
    let answersController: AnswersController
    let answersService: AnswersService
    const req: CrudRequest = { parsed: null, options: null }
    const dto: Answer = {
        id:1,
        createdDate: new Date('2021-08-24T13:38:05.750Z'),
        user: new User(),
        question: new Question,
        value:5
    }

    const mockAnswersService = {
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
            controllers: [AnswersController],
            providers: [AnswersService]
        })
            .overrideProvider(AnswersService)
            .useValue(mockAnswersService)
            .compile()

        answersService = module.get<AnswersService>(AnswersService)
        answersController = module.get<AnswersController>(AnswersController)
    })

    it('should be defined', async () => {
        expect(answersController).toBeDefined()
    })

    it('should update one answers', () => {
        expect(answersController.service.updateOne(req, dto)).toEqual({
            ...dto
        })

        expect(mockAnswersService.updateOne).toHaveBeenCalled()
    })

    it('should delete one answers', () => {
        expect(answersController.service.deleteOne(req)).toEqual({
            ...dto
        })

        expect(mockAnswersService.deleteOne).toHaveBeenCalled()
    })

    it('should create many answers', async () => {
        expect(answersController.service.createMany(req, { bulk: [dto] })).toEqual([
            {
                ...dto
            }
        ])

        expect(mockAnswersService.createMany).toHaveBeenCalled()
    })
})