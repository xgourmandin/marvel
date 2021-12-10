import {Injectable, Logger} from "@nestjs/common";
import {HeroesSearcher} from "../usecases/HeroesSearcher";
import {HeroData, HeroesResponse} from "../usecases/HeroesResponse";
import {createHash} from 'crypto';
import {HttpService} from "@nestjs/axios";
import {firstValueFrom} from "rxjs";
import {MarvelApiQuerier} from "../../common/MarvelApiQuerier";

@Injectable()
export class HttpHeroesSearcher extends MarvelApiQuerier implements HeroesSearcher {

  private readonly logger = new Logger(HttpHeroesSearcher.name);

  constructor(private readonly httpService: HttpService) {
    super();
  }

  findHeroesByName(name: string, page = 1, limit = 15): Promise<HeroesResponse> {
      const queryParams = this.getCommonQueryParameters(page, limit);
      queryParams['nameStartsWith'] = name;
      return firstValueFrom(this.httpService.get('https://gateway.marvel.com:443/v1/public/characters', { params: queryParams }))
        .then(res => this.transform(res.data.data))
        .catch(err => {
          this.logger.error(err);
          return new HeroesResponse();
        });
  }

  private transform(data) {
    const response = new HeroesResponse();
    response.page = this.computePage(data.offset, data.limit);
    response.limit = data.limit;
    response.total = data.total;
    response.results = data.results.map(r => {
      const hero = new HeroData()
      hero.id = r.id;
      hero.name = r.name;
      hero.description = r.description;
      hero.thumbnail = r.thumbnail;
      return hero;
    })
    return response;
  }

}
