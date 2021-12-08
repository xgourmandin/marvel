import {Controller, Get, Param} from "@nestjs/common";


@Controller('comics')
export class ComicsApi {

  @Get('/:id')
  public getHeroComics(@Param('id') heroId: number) {

  }
}
