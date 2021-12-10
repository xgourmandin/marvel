import {ComicsSearcher} from "../usecases/ComicsSearcher";
import {ComicData, ComicsResponse} from "../usecases/ComicsResponse";
import {Injectable, Logger} from "@nestjs/common";
import {HttpService} from "@nestjs/axios";
import {MarvelApiQuerier} from "../../common/MarvelApiQuerier";
import {firstValueFrom} from "rxjs";

@Injectable()
export class HttpComicsSearcher extends MarvelApiQuerier implements ComicsSearcher {

  private readonly logger = new Logger(HttpComicsSearcher.name);

  constructor(private readonly httpService: HttpService) {
    super();
  }

  searchHeroComics(heroId: number, page: number, limit: number): Promise<ComicsResponse> {
    const queryParams = this.getCommonQueryParameters(page, limit);
    return firstValueFrom(this.httpService.get(`https://gateway.marvel.com:443/v1/public/characters/${heroId}/comics`, { params: queryParams }))
      .then(res => this.transform(res.data.data))
      .catch(err => {
        this.logger.error(err);
        return new ComicsResponse();
      });
  }

  private transform(data) {
    const comicsResponse = new ComicsResponse();
    comicsResponse.page = this.computePage(data.offset, data.limit)
    comicsResponse.limit = data.limit;
    comicsResponse.total = data.total;
    comicsResponse.results = data.results.map(r => {
      const data = new ComicData();
      data.id = r.id;
      data.title = r.title;
      data.description = r.description;
      data.thumbnail = r.thumbnail;
      return data;
    })
    return comicsResponse;
  }
}
