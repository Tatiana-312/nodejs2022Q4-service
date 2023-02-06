import { Injectable, NotFoundException } from '@nestjs/common';
import { DBService } from 'src/DB/db.service';
import { CreateAlbumDto } from './Dtos/createAlbum.dto';
import { v4 as uuidv4 } from 'uuid';
import { AlbumEntity } from './entities/albumEntity';
import { UpdateAlbumDto } from './Dtos/updateAlbum.dto';
import { TrackEntity } from 'src/tracks/entities/trackEntity';

@Injectable()
export class AlbumService {
  constructor(private db: DBService) {}

  create(createAlbumDto: CreateAlbumDto): AlbumEntity {
    const album = {
      ...createAlbumDto,
      id: uuidv4(),
    };

    this.db.albums.push(album);
    return album;
  }

  findAll(): AlbumEntity[] {
    return this.db.albums;
  }

  findOne(id: string): AlbumEntity {
    const album = this.db.albums.filter(
      (album: AlbumEntity) => album.id === id,
    )[0];
    if (album) {
      return album;
    }
    throw new NotFoundException();
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto) {
    const album = this.findOne(id);
    album.name = updateAlbumDto.name;
    album.year = updateAlbumDto.year;
    album.artistId = updateAlbumDto.artistId;
    return album;
  }

  remove(id: string) {
    const album = this.findOne(id);
    if (album) {
      this.db.albums = this.db.albums.filter(
        (album: AlbumEntity) => album.id !== id,
      );
      const track = this.db.tracks.filter(
        (track: TrackEntity) => track.albumId === id,
      )[0];
      if (track) {
        track.albumId = null;
      }

      const albumInFav = this.db.favs.albums.includes(id);
      if (albumInFav) {
        this.db.favs.albums = this.db.favs.albums.filter(
          (albumId) => albumId !== id,
        );
      }
    }
  }
}
