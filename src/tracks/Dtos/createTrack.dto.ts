import { IsInt, IsNotEmpty, IsString } from 'class-validator';
export class CreateTrackDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  artistId: string;

  @IsString()
  albumId: string;

  @IsInt()
  @IsNotEmpty()
  duration: number;
}