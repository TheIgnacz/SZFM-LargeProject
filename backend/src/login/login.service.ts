import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
    adminpassword:String = "admin"
    inputpassword:String

    async set(password:String): Promise<void>{
         this.inputpassword = password;
         await null;
    }

}
