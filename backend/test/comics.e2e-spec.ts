import * as request from 'supertest';
import {INestApplication} from "@nestjs/common";
import {HeroesModule} from "../src/heroes/heroes.module";
import {Test} from "@nestjs/testing";
import {HttpService} from "@nestjs/axios";
import {Observable} from "rxjs";
import {ComicsModule} from "../src/comics/comics.module";

describe('Comics search', () => {
  let app: INestApplication;
  let mockHttpService = {
    get: () => new Observable(sub => sub.next(axiosResponse))
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ComicsModule],
    })
      .overrideProvider(HttpService)
      .useValue(mockHttpService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET Comics`, () => {
    return request(app.getHttpServer())
      .get('/comics/1009368?limit=1')
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
  "etag": "a6f6e51c985e8cc990f4647afdf71d2a16e09b21",
  "data": {
    "offset": 0,
    "limit": 1,
    "total": 2593,
    "count": 1,
    "results": [
      {
        "id": 27238,
        "digitalId": 0,
        "title": "Wolverine Saga (2009) #7",
        "issueNumber": 7,
        "variantDescription": "",
        "description": null,
        "modified": "-0001-11-30T00:00:00-0500",
        "isbn": "",
        "upc": "5960606814-00711",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/27238",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/27238/wolverine_saga_2009_7?utm_campaign=apiRef&utm_source=389a96f473c791018407134dc46b4c22"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/8086",
          "name": "Wolverine Saga (2009)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2029-12-31T00:00:00-0500"
          },
          {
            "type": "focDate",
            "date": "2009-06-11T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 0
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "images": [],
        "creators": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/27238/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
              "name": "Jeff Youngquist",
              "role": "editor"
            }
          ],
          "returned": 1
        },
        "characters": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/27238/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
              "name": "Iron Man"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
              "name": "Wolverine"
            }
          ],
          "returned": 2
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/27238/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/59792",
              "name": "Cover #59792",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/59793",
              "name": "Interior #59793",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/27238/events",
          "items": [],
          "returned": 0
        }
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
    "limit": 1,
    "total": 2593,
    "results": [
        {
            "id": 27238,
            "title": "Wolverine Saga (2009) #7",
            "description": null,
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                "extension": "jpg"
            }
        }
    ]
}
`
