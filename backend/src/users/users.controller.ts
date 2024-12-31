import { Body, Controller, Post } from '@nestjs/common'
import { CreateUserRequest } from './dto/create-user.request';

@Controller('users')
export class UsersController {
  @Post()
  createUser(@Body() request: CreateUserRequest) {}
}
