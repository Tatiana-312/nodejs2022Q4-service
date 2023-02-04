import { Injectable } from '@nestjs/common';
import {
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { DBService } from 'src/DB/db.service';
import { CreateUserDto } from 'src/users/Dtos/createUser.dto';
import { UserEntity } from 'src/users/entities/userEntity';
import { v4 as uuidv4 } from 'uuid';
import { UpdatePasswordDto } from './Dtos/updatePassword.dto';

@Injectable()
export class UserService {
  constructor(private db: DBService) {}

  create(createUserDto: CreateUserDto): UserEntity {
    const user = {
      ...createUserDto,
      version: 1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      id: uuidv4(),
    };

    this.db.users.push(user);
    return user;
  }

  findAll(): UserEntity[] {
    return this.db.users;
  }

  findOne(id: string): UserEntity {
    const user = this.db.users.filter((user: UserEntity) => user.id === id)[0];
    if (user) {
      return user;
    }
    throw new NotFoundException();
  }

  update(id: string, updatePasswordDto: UpdatePasswordDto) {
    const user = this.findOne(id);
    if (user.password === updatePasswordDto.oldPassword) {
      user.password = updatePasswordDto.newPassword;
      user.version += 1;
      user.updatedAt = Date.now();
      return user;
    }
    throw new ForbiddenException();
  }

  remove(id: string) {
    const user = this.findOne(id);
    if (user) {
      this.db.users = this.db.users.filter(
        (user: UserEntity) => user.id !== id,
      );
    }
  }
}
