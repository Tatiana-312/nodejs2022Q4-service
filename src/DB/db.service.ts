import { Injectable } from '@nestjs/common';
import { AlbumEntity } from 'src/albums/entities/albumEntity';
import { ArtistEntity } from 'src/artists/entities/artistEntity';
import { FavoritesEntity } from 'src/favorites/entities/favsEntity';
import { TrackEntity } from 'src/tracks/entities/trackEntity';
import { UserEntity } from 'src/users/entities/userEntity';

@Injectable()
export class DBService {
  users: UserEntity[] = [];
  tracks: TrackEntity[] = [];
  artists: ArtistEntity[] = [];
  albums: AlbumEntity[] = [];
  favs: FavoritesEntity = {
    artists: [],
    albums: [],
    tracks: [],
  };
}
