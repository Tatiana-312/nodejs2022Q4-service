import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/users/entities/userEntity';

@Injectable()
export class DBService {
  users: UserEntity[] = [];
}
