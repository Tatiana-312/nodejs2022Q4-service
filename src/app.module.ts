import { Module } from '@nestjs/common';
import { Database } from './DB/db.module';
import { TrackModule } from './tracks/track.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [Database, UserModule, TrackModule],
})
export class AppModule {}
