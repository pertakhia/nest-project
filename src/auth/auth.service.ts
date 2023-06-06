import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    async singUp() {
        return { message: 'i am sign up' };
    }

    async singIn() {
        return { message: 'i am sign in' };
    }
}
