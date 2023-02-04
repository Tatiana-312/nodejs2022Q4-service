import { Injectable } from '@nestjs/common';
import { TrackEntity } from 'src/tracks/entities/trackEntity';
import { UserEntity } from 'src/users/entities/userEntity';

@Injectable()
export class DBService {
  users: UserEntity[] = [];
  tracks: TrackEntity[] = [];
}
