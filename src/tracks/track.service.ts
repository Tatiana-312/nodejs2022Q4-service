import { Injectable, NotFoundException } from '@nestjs/common';
import { DBService } from 'src/DB/db.service';
import { v4 as uuidv4 } from 'uuid';
import { CreateTrackDto } from './Dtos/createTrack.dto';
import { UpdateTrackDto } from './Dtos/updateTrack.dto';
import { TrackEntity } from './entities/trackEntity';

@Injectable()
export class TrackService {
  constructor(private db: DBService) {}

  create(createTrackDto: CreateTrackDto): TrackEntity {
    const track = {
      ...createTrackDto,
      id: uuidv4(),
    };

    this.db.tracks.push(track);
    return track;
  }

  findAll(): TrackEntity[] {
    return this.db.tracks;
  }

  findOne(id: string): TrackEntity {
    const track = this.db.tracks.filter(
      (track: TrackEntity) => track.id === id,
    )[0];
    if (track) {
      return track;
    }
    throw new NotFoundException();
  }

  update(id: string, updateTrackDto: UpdateTrackDto) {
    const track = this.findOne(id);
    track.name = updateTrackDto.name;
    track.artistId = updateTrackDto.artistId;
    track.albumId = updateTrackDto.albumId;
    track.duration = updateTrackDto.duration;
    return track;
  }

  remove(id: string) {
    const track = this.findOne(id);
    if (track) {
      this.db.tracks = this.db.tracks.filter(
        (track: TrackEntity) => track.id !== id,
      );

      const trackInFav = this.db.favs.tracks.includes(id);
      if (trackInFav) {
        this.db.favs.tracks = this.db.favs.tracks.filter(
          (trackId) => trackId !== id,
        );
      }
    }
  }
}
