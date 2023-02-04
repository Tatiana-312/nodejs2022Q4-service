import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { FavoritesResponse } from './entities/favsResponse';
import { FavsService } from './favs.service';

@Controller('favs')
export class FavsController {
  constructor(private readonly favsService: FavsService) {}

  @Post('artist/:id')
  @HttpCode(201)
  async addArtist(@Param('id', ParseUUIDPipe) id: string) {
    return this.favsService.addArtist(id);
  }

  @Post('album/:id')
  @HttpCode(201)
  async addAlbum(@Param('id', ParseUUIDPipe) id: string) {
    return this.favsService.addAlbum(id);
  }

  @Post('track/:id')
  @HttpCode(201)
  async addTrack(@Param('id', ParseUUIDPipe) id: string) {
    return this.favsService.addTrack(id);
  }

  @Get()
  async findAll(): Promise<FavoritesResponse> {
    return this.favsService.findAll();
  }

  @Delete('artist/:id')
  @HttpCode(204)
  async removeArtist(@Param('id', ParseUUIDPipe) id: string) {
    return this.favsService.removeArtist(id);
  }

  @Delete('album/:id')
  @HttpCode(204)
  async removeAlbum(@Param('id', ParseUUIDPipe) id: string) {
    return this.favsService.removeAlbum(id);
  }

  @Delete('track/:id')
  @HttpCode(204)
  async removeTrack(@Param('id', ParseUUIDPipe) id: string) {
    return this.favsService.removeTrack(id);
  }
}
