import { Module } from '@nestjs/common';
import { ArtistModule } from './artists/artist.module';
import { Database } from './DB/db.module';
import { TrackModule } from './tracks/track.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [Database, UserModule, TrackModule, ArtistModule],
})
export class AppModule {}
