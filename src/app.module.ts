import { Module } from '@nestjs/common';
import { AlbumModule } from './albums/album.module';
import { ArtistModule } from './artists/artist.module';
import { Database } from './DB/db.module';
import { TrackModule } from './tracks/track.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [Database, UserModule, TrackModule, ArtistModule, AlbumModule],
})
export class AppModule {}
