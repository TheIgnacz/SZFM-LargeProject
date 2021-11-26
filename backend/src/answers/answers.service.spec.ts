import { Test } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { CrudRequest } from '@nestjsx/crud'
import { Question } from '../questions/entities/question.entity'
import { User } from '../user/entities/user.entity'
import { AnswersMockRepository } from './answermockrepository'
import { AnswersService } from './answers.service'
import { Answer } from './entities/answer.entity'

describe('The AnswersService', () => {
    let answersService: AnswersService
    const req: CrudRequest = { parsed: null, options: null }
    const dto: Answer = {
        id:1,
        createdDate: new Date('2021-08-24T13:38:05.750Z'),
        user: new User(),
        question: new Question,
        value:5
    }

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                AnswersService,
                {
                    provide: getRepositoryToken(Answer),
                    useClass: AnswersMockRepository
                }
            ]
        }).compile()

        answersService = module.get<AnswersService>(AnswersService)
    })

    it('should be defined', async () => {
        expect(answersService).toBeDefined()
    })

    it('should be find answers', async () => {
        expect(await answersService.find()).toEqual([
            {
                ...dto
            }
        ])
    })

    it('should be find one answers', async () => {
        expect(await answersService.findOne()).toEqual({
            ...dto
        })
    })
})
