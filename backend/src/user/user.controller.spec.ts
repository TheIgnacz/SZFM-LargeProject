import { Test } from '@nestjs/testing'
import { CrudRequest } from '@nestjsx/crud'
import { User } from '../user/entities/user.entity'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { Answer } from '../answers/entities/answer.entity'

describe('UserController', () => {
    let userController: UserController
    let userService: UserService
    const req: CrudRequest = { parsed: null, options: null }
    const dto: User = {
      id:1,
      name: "Teszt Tibor",
      answers: [new Answer()]
  }

    const mockUserService = {
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
            controllers: [UserController],
            providers: [UserService]
        })
            .overrideProvider(UserService)
            .useValue(mockUserService)
            .compile()

        userService = module.get<UserService>(UserService)
        userController = module.get<UserController>(UserController)
    })

    it('should be defined', async () => {
        expect(userController).toBeDefined()
    })

    it('should update one user', () => {
        expect(userController.service.updateOne(req, dto)).toEqual({
            ...dto
        })

        expect(mockUserService.updateOne).toHaveBeenCalled()
    })

    it('should delete one user', () => {
        expect(userController.service.deleteOne(req)).toEqual({
            ...dto
        })

        expect(mockUserService.deleteOne).toHaveBeenCalled()
    })

    it('should create many user', async () => {
        expect(userController.service.createMany(req, { bulk: [dto] })).toEqual([
            {
                ...dto
            }
        ])

        expect(mockUserService.createMany).toHaveBeenCalled()
    })
})