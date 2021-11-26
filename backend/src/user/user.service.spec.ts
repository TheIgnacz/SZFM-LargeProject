import { Test } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { CrudRequest } from '@nestjsx/crud'
import { Answer } from '../answers/entities/answer.entity'
import { Question } from '../questions/entities/question.entity'
import { User } from '../user/entities/user.entity'
import { UserService } from './user.service'
import { UserMockRepository } from './usermockrepository'

describe('The UserService', () => {
    let userService: UserService
    const req: CrudRequest = { parsed: null, options: null }
    const dto: User = {
      id:1,
      name: "Teszt Tibor",
      answers: [new Answer()]
  }

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                UserService,
                {
                    provide: getRepositoryToken(User),
                    useClass: UserMockRepository
                }
            ]
        }).compile()

        userService = module.get<UserService>(UserService)
    })

    it('should be defined', async () => {
        expect(userService).toBeDefined()
    })

    it('should be find user', async () => {
        expect(await userService.find()).toEqual([
            {
                ...dto
            }
        ])
    })

    it('should be find one user', async () => {
        expect(await userService.findOne()).toEqual({
            ...dto
        })
    })
})
