import {ComicsSearcher} from "../usecases/ComicsSearcher";
import {ComicsResponse} from "../usecases/ComicsResponse";

export class HttpComicsSearcher implements ComicsSearcher {

  searchHeroComics(heroId: number, offset: number, limit: number): Promise<ComicsResponse> {
    return Promise.resolve(undefined);
  }

  private transform(data) {
    const comicsResponse = new ComicsResponse();
    
    return comicsResponse;
  }
}
