import { Answer } from '../answers/entities/answer.entity'
import { Questionnaire } from '../questionnaire/entities/questionnaire.entity'
import { User } from './entities/user.entity'

export class UserMockRepository<T> {
    public dto: User = {
        id:1,
        name: "Teszt Tibor",
        answers: [new Answer()]
    }

    public createQueryBuilder = jest.fn(() => this.queryBuilder)

    public manager = { transaction: a => Promise.resolve(a()) }
    public metadata = { connection: { options: { type: null } }, columns: [], relations: [] }

    public save = jest.fn()
    public delete = jest.fn()
    public update = jest.fn()
    public findOne = jest.fn().mockReturnValue(this.dto)
    public findOneOrFail = jest.fn()
    public find = jest.fn().mockReturnValue([this.dto])
    public getMany = jest.fn()

    public queryBuilder = {
        offset: jest.fn().mockReturnThis(),
        take: jest.fn().mockReturnThis(),
        orderBy: jest.fn().mockReturnThis(),
        skip: jest.fn().mockReturnThis(),
        limit: jest.fn().mockReturnThis(),
        from: jest.fn().mockReturnThis(),
        addFrom: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnThis(),
        andWhere: jest.fn().mockReturnThis(),
        innerJoinAndSelect: jest.fn().mockReturnThis(),
        leftJoinAndSelect: jest.fn().mockReturnThis(),
        getManyAndCount: jest.fn(),
        getMany: jest.fn(),
        getOne: jest.fn(),
        delete: jest.fn().mockReturnThis(),
        execute: jest.fn().mockReturnThis()
    }
}
