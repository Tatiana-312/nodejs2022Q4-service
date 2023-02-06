import { AlbumEntity } from 'src/albums/entities/albumEntity';
import { ArtistEntity } from 'src/artists/entities/artistEntity';
import { TrackEntity } from 'src/tracks/entities/trackEntity';

export class FavoritesResponse {
  artists: ArtistEntity[];
  albums: AlbumEntity[];
  tracks: TrackEntity[];
}
