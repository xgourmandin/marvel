import {Inject, Injectable} from "@nestjs/common";
import {ComicsSearcher} from "./ComicsSearcher";
import {ComicsResponse} from "./ComicsResponse";

@Injectable()
export class SearchComicsByHeroUseCase {

  constructor(@Inject(ComicsSearcher) private readonly comicsSearcher: ComicsSearcher) {
  }

  public searchForComicsByHero(heroId: number, offset = 0, limit = 20): Promise<ComicsResponse> {
    return this.comicsSearcher.searchHeroComics(heroId, offset, limit);
  }

}
