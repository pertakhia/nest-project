import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('singup')
    async singUp() {
        return this.authService.singUp();
    }



    @Post('singin')
    async singIn() {
        return this.authService.singIn();
    }

}
