import {HttpHeroesSearcher} from "./HttpHeroesSearcher";
import {HttpService} from "@nestjs/axios";
import {anything, capture, instance, mock, verify, when} from "ts-mockito";
import {AxiosRequestConfig} from "axios";
import {Observable} from "rxjs";
import exp from "constants";

describe('Marvel API Heroes searcher', () => {

  let searcher: HttpHeroesSearcher;
  let httpService: HttpService;

  beforeEach(() => {
    httpService = mock(HttpService);
    searcher = new HttpHeroesSearcher(instance(httpService));
  })

  it('should call correct URL', async () => {
    const axiosResponse = {
      data: {
        data: {
          results: []
        }
      },
      status: 200,
      statusText: 'ok',
      config: undefined,
      headers: undefined
    };
    when(httpService.get(anything(), anything())).thenReturn(new Observable(sub => sub.next(axiosResponse)));
    const marvelpublickey = 'publickey';
    process.env.MARVEL_PUBLIC_KEY = marvelpublickey;
    process.env.MARVEL_PRIVATE_KEY = 'privatekey';
    await searcher.findHeroesByName('test', 2, 15);
    const [url, config] = capture(httpService.get).last();
    expect(url).toBe('https://gateway.marvel.com:443/v1/public/characters');
    expect((config as AxiosRequestConfig).params.apikey).toBe(marvelpublickey);
    expect((config as AxiosRequestConfig).params.ts).toBeDefined();
    expect((config as AxiosRequestConfig).params.hash).toBeDefined();
    expect((config as AxiosRequestConfig).params.offset).toBe(15);
    expect((config as AxiosRequestConfig).params.limit).toBe(15);
  })

  it('should return correct response', async () => {
    let offset = 40;
    let limit = 20;
    let total = 75;
    let heroId = 132;
    let heroName = 'Test Man';
    let heroDesc = 'The super hero who tests like nobody else';
    let imgPath = 'thumb_path';
    let imgExt = 'svg';
    const axiosResponse = {
      data: {
        data: {
          offset: offset,
          limit: limit,
          total: total,
          results: [{
            id: heroId,
            name: heroName,
            description: heroDesc,
            thumbnail: {
              path: imgPath,
              extension: imgExt
            }
          }]
        }
      },
      status: 200,
      statusText: 'ok',
      config: undefined,
      headers: undefined
    };
    when(httpService.get(anything(), anything())).thenReturn(new Observable(sub => sub.next(axiosResponse)));
    process.env.MARVEL_PUBLIC_KEY = 'publickey';
    process.env.MARVEL_PRIVATE_KEY = 'privatekey';
    const result = await searcher.findHeroesByName('test', 2, 15);
    expect(result.total).toBe(total);
    expect(result.limit).toBe(limit);
    expect(result.page).toBe(2);
    expect(result.results).toHaveLength(1);
    let heroDatum = result.results[0];
    expect(heroDatum.id).toBe(heroId);
    expect(heroDatum.name).toBe(heroName);
    expect(heroDatum.description).toBe(heroDesc);
    expect(heroDatum.thumbnail.path).toBe(imgPath);
    expect(heroDatum.thumbnail.extension).toBe(imgExt);
  })
})
