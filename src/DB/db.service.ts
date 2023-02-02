import { Injectable } from '@nestjs/common';
import { User } from 'src/users/interfaces/user.interface';

@Injectable()
export class DBService {
  users: User[] = [];
}
