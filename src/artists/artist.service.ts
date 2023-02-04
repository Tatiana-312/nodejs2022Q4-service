import { Injectable, NotFoundException } from '@nestjs/common';
import { DBService } from 'src/DB/db.service';
import { TrackEntity } from 'src/tracks/entities/trackEntity';
import { v4 as uuidv4 } from 'uuid';
import { CreateArtistDto } from './Dtos/createArtist.dto';
import { UpdateArtistDto } from './Dtos/updateArtist.dto';
import { ArtistEntity } from './entities/artistEntity';

@Injectable()
export class ArtistService {
  constructor(private db: DBService) {}

  create(createArtistDto: CreateArtistDto): ArtistEntity {
    const artist = {
      ...createArtistDto,
      id: uuidv4(),
    };

    this.db.artists.push(artist);
    return artist;
  }

  findAll(): ArtistEntity[] {
    return this.db.artists;
  }

  findOne(id: string): ArtistEntity {
    const artist = this.db.artists.filter(
      (artist: ArtistEntity) => artist.id === id,
    )[0];
    if (artist) {
      return artist;
    }
    throw new NotFoundException();
  }

  update(id: string, updateArtistdDto: UpdateArtistDto) {
    const artist = this.findOne(id);
    artist.name = updateArtistdDto.name;
    artist.grammy = updateArtistdDto.grammy;
    return artist;
  }

  remove(id: string) {
    const artist = this.findOne(id);
    if (artist) {
      this.db.artists = this.db.artists.filter(
        (artist: ArtistEntity) => artist.id !== id,
      );
      const track = this.db.tracks.filter(
        (track: TrackEntity) => track.artistId === id,
      )[0];
      if (track) {
        track.artistId = null;
      }

      const artistInFav = this.db.favs.artists.includes(id);
      if (artistInFav) {
        this.db.favs.artists = this.db.favs.artists.filter(
          (artistId) => artistId !== id,
        );
      }
    }
  }
}
