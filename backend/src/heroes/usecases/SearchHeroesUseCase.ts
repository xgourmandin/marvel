import {Inject, Injectable} from "@nestjs/common";
import {HeroesSearcher} from "./HeroesSearcher";
import {HeroesResponse} from "./HeroesResponse";

@Injectable()
export class SearchHeroesUseCase {
  constructor(@Inject(HeroesSearcher) private readonly searcher: HeroesSearcher) {
  }

  public async searchForHeroes(name: string, page = 1, limit= 15): Promise<HeroesResponse> {
    return this.searcher.findHeroesByName(name, page, limit);
  }

}
