import {Controller, Get, Param, Query} from "@nestjs/common";
import {SearchComicsByHeroUseCase} from "../usecases/SearchComicsByHeroUseCase";
import {ComicsPaginationQuery} from "./ComicsPaginationQuery";
import {ComicsResponse} from "../usecases/ComicsResponse";


@Controller('comics')
export class ComicsApi {

  constructor(private readonly searchComicsUseCae: SearchComicsByHeroUseCase) {
  }

  @Get('/:id')
  public async getHeroComics(@Param('id') heroId: number, @Query() paginationParams: ComicsPaginationQuery): Promise<ComicsResponse> {
    return this.searchComicsUseCae.searchForComicsByHero(heroId, paginationParams.page, paginationParams.limit);
  }
}
