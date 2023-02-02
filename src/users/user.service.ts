import { Injectable } from '@nestjs/common';
import { DBService } from 'src/DB/db.service';
import { CreateUserDto } from 'src/users/Dtos/createUser.dto';
import { User } from 'src/users/interfaces/user.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  constructor(private db: DBService) {}

  create(createUserDto: CreateUserDto): User {
    const user = {
      ...createUserDto,
      version: 0,
      createdAt: 1,
      updatedAt: 2,
      id: uuidv4(),
    };

    this.db.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.db.users;
  }
  findOne(): string {
    return 'This action returns one user';
  }

  update(): string {
    return 'This action updates user';
  }

  remove(): string {
    return 'This action deletes user';
  }
}
