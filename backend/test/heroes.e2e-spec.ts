import * as request from 'supertest';
import {INestApplication} from "@nestjs/common";
import {HeroesModule} from "../src/heroes/heroes.module";
import {Test} from "@nestjs/testing";
import {HttpService} from "@nestjs/axios";
import {Observable} from "rxjs";

describe('Heroes search', () => {
  let app: INestApplication;
  let mockHttpService = {
    get: () => new Observable(sub => sub.next(axiosResponse))
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [HeroesModule],
    })
      .overrideProvider(HttpService)
      .useValue(mockHttpService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET Heroes`, () => {
    return request(app.getHttpServer())
      .get('/heroes?name=Iron Man')
      .expect(200)
      .expect(JSON.parse(expectedResponse));
  });

  afterAll(async () => {
    await app.close();
  });
});

const marvelApiResponse = `
{
  "code": 200,
  "status": "Ok",
  "copyright": "© 2021 MARVEL",
  "attributionText": "Data provided by Marvel. © 2021 MARVEL",
  "attributionHTML": "<a href=\\"http://marvel.com\\">Data provided by Marvel. © 2021 MARVEL</a>",
  "etag": "31474e44fa84be0841d02cfa495bddf1c3647707",
  "data": {
    "offset": 0,
    "limit": 15,
    "total": 1,
    "count": 1,
    "results": [
      {
        "id": 1017104,
        "name": "Iron Man/Tony Stark (MAA)",
        "description": "Tony Stark is the genius inventor/billionaire/philanthropist owner of Stark Industries. With his super high-tech Iron Man suit, he is practically indestructible, able to fly, and has a large selection of weapons to choose from - but it's Tony's quick thinking and ability to adapt and improvise that make him an effective leader of the Avengers.        ",
        "modified": "2013-09-18T15:49:18-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/d0/5232190d42df2",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017104",
        "comics": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017104/comics",
          "items": [],
          "returned": 0
        },
        "series": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017104/series",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017104/stories",
          "items": [],
          "returned": 0
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017104/events",
          "items": [],
          "returned": 0
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/characters/29/iron_man?utm_campaign=apiRef&utm_source=389a96f473c791018407134dc46b4c22"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1017104/iron_mantony_stark_maa?utm_campaign=apiRef&utm_source=389a96f473c791018407134dc46b4c22"
          }
        ]
      }
    ]
  }
}`

const axiosResponse = {
  data: JSON.parse(marvelApiResponse),
  status: 200,
  statusText: 'ok',
  config: undefined,
  headers: undefined
};

const expectedResponse = `
{
    "page": 1,
    "limit": 15,
    "total": 1,
    "results": [
        {
            "id": 1017104,
            "name": "Iron Man/Tony Stark (MAA)",
            "description": "Tony Stark is the genius inventor/billionaire/philanthropist owner of Stark Industries. With his super high-tech Iron Man suit, he is practically indestructible, able to fly, and has a large selection of weapons to choose from - but it's Tony's quick thinking and ability to adapt and improvise that make him an effective leader of the Avengers.        ",
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/d0/5232190d42df2",
                "extension": "jpg"
            }
        }
    ]
}
`
