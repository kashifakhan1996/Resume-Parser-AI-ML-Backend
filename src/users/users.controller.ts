import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}

    @Get('login')
    login(){
        return this.userService.login()
    }

    @Get('logout')
    logout(){
        return this.userService.logout()
    }
}
