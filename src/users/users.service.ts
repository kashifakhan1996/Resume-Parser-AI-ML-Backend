import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    login(){
        return 'user has loggedin'
    }

    logout(){
        return 'user has loggedout'
    }
}
