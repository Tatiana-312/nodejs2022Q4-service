import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/users/Dtos/createUser.dto';
import { UpdatePasswordDto } from 'src/users/Dtos/updatePassword.dto';
import { User } from 'src/users/interfaces/user.interface';
import { UserService } from 'src/users/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]>{
    return this.userService.findAll();
  }

  @Get(':userId')
  findOne(@Param('userId') id: string) {
    return this.userService.findOne();
  }

  @Put(':userId')
  update(@Param('userId') id: string, @Body() updatePasswordDto: UpdatePasswordDto) {
    return this.userService.update();
  }

  @Delete(':userId')
  @HttpCode(204)
  remove(@Param('userId') id: string) {
    return this.userService.remove();
  }
};