import {Controller, Get, Query} from "@nestjs/common";
import {SearchHeroesUseCase} from "../usecases/SearchHeroesUseCase";
import {HeroesSearchQuery} from "./HeroesSearchQuery";
import {HeroesResponse} from "../usecases/HeroesResponse";

@Controller('heroes')
export class HeroesSearchApi {

  constructor(private readonly searchHeroesUseCase: SearchHeroesUseCase) {
  }

  @Get()
  public async findHeroes(@Query() searchQuery: HeroesSearchQuery): Promise<HeroesResponse> {
      return this.searchHeroesUseCase.searchForHeroes(searchQuery.name);
  }
}
