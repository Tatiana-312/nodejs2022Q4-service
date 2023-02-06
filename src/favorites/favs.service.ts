import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { AlbumEntity } from 'src/albums/entities/albumEntity';
import { ArtistEntity } from 'src/artists/entities/artistEntity';
import { DBService } from 'src/DB/db.service';
import { TrackEntity } from 'src/tracks/entities/trackEntity';
import { FavoritesResponse } from './entities/favsResponse';

@Injectable()
export class FavsService {
  constructor(private db: DBService) {}

  addArtist(id: string) {
    const artist = this.db.artists.filter(
      (artist: ArtistEntity) => artist.id === id,
    )[0];
    if (artist) {
      this.db.favs.artists.push(id);
      return artist;
    }
    throw new UnprocessableEntityException();
  }

  addAlbum(id: string) {
    const album = this.db.albums.filter(
      (album: AlbumEntity) => album.id === id,
    )[0];
    if (album) {
      this.db.favs.albums.push(id);
      return album;
    }
    throw new UnprocessableEntityException();
  }
  addTrack(id: string) {
    const track = this.db.tracks.filter(
      (track: TrackEntity) => track.id === id,
    )[0];
    if (track) {
      this.db.favs.tracks.push(id);
      return track;
    }
    throw new UnprocessableEntityException();
  }

  findAll(): FavoritesResponse {
    const arrOfArtists = this.db.favs.artists.map(
      (artistId) =>
        this.db.artists.filter(
          (artist: ArtistEntity) => artist.id === artistId,
        )[0],
    );
    const arrOfAlbums = this.db.favs.albums.map(
      (albumId) =>
        this.db.albums.filter((album: AlbumEntity) => album.id === albumId)[0],
    );
    const arrOfTracks = this.db.favs.tracks.map(
      (trackId) =>
        this.db.tracks.filter((track: TrackEntity) => track.id === trackId)[0],
    );
    return {
      artists: arrOfArtists,
      albums: arrOfAlbums,
      tracks: arrOfTracks,
    };
  }

  removeArtist(id: string) {
    const artistInFav = this.db.favs.artists.includes(id);
    if (artistInFav) {
      this.db.favs.artists = this.db.favs.artists.filter(
        (artistId) => artistId !== id,
      );
    } else {
      throw new NotFoundException();
    }
  }

  removeAlbum(id: string) {
    const albumInFav = this.db.favs.albums.includes(id);
    if (albumInFav) {
      this.db.favs.albums = this.db.favs.albums.filter(
        (albumId) => albumId !== id,
      );
    } else {
      throw new NotFoundException();
    }
  }

  removeTrack(id: string) {
    const trackInFav = this.db.favs.tracks.includes(id);
    if (trackInFav) {
      this.db.favs.tracks = this.db.favs.tracks.filter(
        (trackId) => trackId !== id,
      );
    } else {
      throw new NotFoundException();
    }
  }
}
