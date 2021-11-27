import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ParsedBody } from '@nestjsx/crud';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {

    constructor(private loginService: LoginService){}
    
    @Get('/logged')
    async loggedin():Promise<boolean>{
        if (this.loginService.adminpassword == this.loginService.inputpassword){
            return await true;
        }
        return await false;
    }

    @Get(':password')
    async set(@Param('password') password:String){
       return await this.loginService.set(password)
    }
}
