import {Injectable} from "@nestjs/common";
import {HeroesSearcher} from "../usecases/HeroesSearcher";
import {HeroData, HeroesResponse} from "../usecases/HeroesResponse";
import {createHash} from 'crypto';
import {HttpService} from "@nestjs/axios";

@Injectable()
export class HttpHeroesSearcher implements HeroesSearcher {

  constructor(private readonly httpService: HttpService) {
  }


  findHeroesByName(name: string, offset = 0, limit = 20): Promise<HeroesResponse> {
    return new Promise<HeroesResponse>((resolve, reject) => {
      let timestamp = HttpHeroesSearcher.getTimestamp();
      this.httpService.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&offset=${offset}&limit=${limit}&ts=${timestamp}&apikey=${process.env.MARVEL_PUBLIC_KEY}&hash=${HttpHeroesSearcher.getHash(timestamp)}`).subscribe(res => {
        if (res.status != 200) {
          reject(Error(res.statusText))
        }
        resolve(this.transform(res.data.data));
      });
    })
  }

  private static getTimestamp(): number {
    return Date.now();
  }

  private static getHash(ts: number): string {
    return createHash('md5').update('' + ts + process.env.MARVEL_PRIVATE_KEY + process.env.MARVEL_PUBLIC_KEY).digest("hex");
  }

  private transform(data) {
    const response = new HeroesResponse();
    response.offset = data.offset;
    response.limit = data.limit;
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
