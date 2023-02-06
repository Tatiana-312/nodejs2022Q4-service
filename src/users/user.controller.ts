import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/Dtos/createUser.dto';
import { UpdatePasswordDto } from 'src/users/Dtos/updatePassword.dto';
import { UserEntity } from 'src/users/entities/userEntity';
import { UserService } from 'src/users/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createUserDto: CreateUserDto) {
    return new UserEntity(this.userService.create(createUserDto));
  }

  @Get()
  async findAll(): Promise<UserEntity[]> {
    const users = this.userService.findAll();
    return users.map((user) => new UserEntity(user));
  }

  @Get(':userId')
  async findOne(@Param('userId', ParseUUIDPipe) id: string) {
    return new UserEntity(this.userService.findOne(id));
  }

  @Put(':userId')
  async update(
    @Param('userId', ParseUUIDPipe) id: string,
    @Body() updatePasswordDto: UpdatePasswordDto,
  ) {
    return new UserEntity(this.userService.update(id, updatePasswordDto));
  }

  @Delete(':userId')
  @HttpCode(204)
  async remove(@Param('userId', ParseUUIDPipe) id: string) {
    return this.userService.remove(id);
  }
}
