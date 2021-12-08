import * as request from 'supertest';
import {INestApplication} from "@nestjs/common";
import {HeroesModule} from "./heroes.module";
import {HttpHeroesSearcher} from "./adapters/HttpHeroesSearcher";
import {Test} from "@nestjs/testing";

describe('Cats', () => {
  let app: INestApplication;
  let mockMarvelService = {
    findHeroesByName: () => JSON.parse(marvelApiResponse)
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [HeroesModule],
    })
      .overrideProvider(HttpHeroesSearcher)
      .useValue(mockMarvelService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET cats`, () => {
    return request(app.getHttpServer())
      .get('/cats')
      .expect(200)
      .expect({
        offset: 0,
      });
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
  "etag": "7ba4fc88a604ef66b7d4c4c5f8d29e2251a21960",
  "data": {
    "offset": 0,
    "limit": 20,
    "total": 7,
    "count": 7,
    "results": [
      {
        "id": 1009368,
        "name": "Iron Man",
        "description": "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
        "modified": "2016-09-28T12:08:19-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
        "comics": {
          "available": 2593,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009368/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/43495",
              "name": "A+X (2012) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/43506",
              "name": "A+X (2012) #7"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/22461",
              "name": "Adam: Legend of the Blue Marvel (2008) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/22856",
              "name": "Adam: Legend of the Blue Marvel (2008) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/23733",
              "name": "Adam: Legend of the Blue Marvel (2008) #5"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/76359",
              "name": "Aero (2019) #11"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/76360",
              "name": "Aero (2019) #12"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/30090",
              "name": "Age of Heroes (2010) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/33566",
              "name": "Age of Heroes (2010) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/30092",
              "name": "Age of Heroes (2010) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/30093",
              "name": "Age of Heroes (2010) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/67603",
              "name": "Age of Innocence: The Rebirth of Iron Man (1996) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/38524",
              "name": "Age of X: Universe (2011) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/38523",
              "name": "Age of X: Universe (2011) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/21280",
              "name": "All-New Iron Manual (2008) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/55363",
              "name": "All-New, All-Different Avengers (2015) #10"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/55364",
              "name": "All-New, All-Different Avengers (2015) #11"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/12653",
              "name": "Alpha Flight (1983) #113"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/12668",
              "name": "Alpha Flight (1983) #127"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/55311",
              "name": "The Amazing Spider-Man (2015) #13"
            }
          ],
          "returned": 20
        },
        "series": {
          "available": 638,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009368/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
              "name": "A+X (2012 - 2014)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/6079",
              "name": "Adam: Legend of the Blue Marvel (2008)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/27392",
              "name": "Aero (2019 - 2020)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/9790",
              "name": "Age of Heroes (2010)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/24380",
              "name": "Age of Innocence: The Rebirth of Iron Man (1996)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/13896",
              "name": "Age of X: Universe (2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/4897",
              "name": "All-New Iron Manual (2008)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/20443",
              "name": "All-New, All-Different Avengers (2015 - 2016)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
              "name": "Alpha Flight (1983 - 1994)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
              "name": "Amazing Spider-Man (1999 - 2013)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
              "name": "Amazing Spider-Man Annual (1964 - 2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1489",
              "name": "AMAZING SPIDER-MAN VOL. 10: NEW AVENGERS TPB (2005)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/318",
              "name": "Amazing Spider-Man Vol. 6 (2004)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/23446",
              "name": "Amazing Spider-Man: Worldwide Vol. 2 (2017)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/6056",
              "name": "ANNIHILATION CLASSIC HC (2008)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/14818",
              "name": "Annihilators: Earthfall (2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/14779",
              "name": "Art of Marvel Studios TPB Slipcase (2011 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/9792",
              "name": "Astonishing Spider-Man & Wolverine (2010 - 2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/6792",
              "name": "Astonishing Tales (2009)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/6697",
              "name": "Astonishing Tales: Iron Man 2020 Digital Comic (2009)"
            }
          ],
          "returned": 20
        },
        "stories": {
          "available": 3919,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009368/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/670",
              "name": "X-MEN (2004) #186",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/892",
              "name": "THOR (1998) #81",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/960",
              "name": "3 of ?",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/982",
              "name": "Interior #982",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/984",
              "name": "Interior #984",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/986",
              "name": "Interior #986",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/988",
              "name": "Interior #988",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/990",
              "name": "Interior #990",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/992",
              "name": "Interior #992",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/994",
              "name": "Interior #994",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/996",
              "name": "Interior #996",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/998",
              "name": "Interior #998",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1000",
              "name": "Interior #1000",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1002",
              "name": "AVENGERS DISASSEMBLED TIE-IN! Still reeling from recent traumas, Iron Man must face off against his evil doppelganger. Meanwhile",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1004",
              "name": "\\"THE SINGULARITY\\" CONCLUSION! PART 4 (OF 4) The battle rages on between Iron Man and his doppelganger, but only one of them can ",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1018",
              "name": "Amazing Spider-Man (1999) #500",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1024",
              "name": "Avengers (1998) #80",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1026",
              "name": "Avengers (1998) #81",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1041",
              "name": "Avengers (1998) #502",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1051",
              "name": "Interior #1051",
              "type": "interiorStory"
            }
          ],
          "returned": 20
        },
        "events": {
          "available": 31,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009368/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
              "name": "Acts of Vengeance!"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/303",
              "name": "Age of X"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/231",
              "name": "Armor Wars"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
              "name": "Atlantis Attacks"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
              "name": "Avengers Disassembled"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
              "name": "Avengers VS X-Men"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
              "name": "Chaos War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
              "name": "Civil War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/239",
              "name": "Crossing"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
              "name": "Dark Reign"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/245",
              "name": "Enemy of the State"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/249",
              "name": "Fatal Attractions"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
              "name": "Fear Itself"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/251",
              "name": "House of M"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
              "name": "Infinity"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
              "name": "Infinity War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/317",
              "name": "Inhumanity"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
              "name": "Initiative"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
              "name": "Maximum Security"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
              "name": "Onslaught"
            }
          ],
          "returned": 20
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/characters/1009368/iron_man?utm_campaign=apiRef&utm_source=389a96f473c791018407134dc46b4c22"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Iron_Man_(Anthony_Stark)?utm_campaign=apiRef&utm_source=389a96f473c791018407134dc46b4c22"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1009368/iron_man?utm_campaign=apiRef&utm_source=389a96f473c791018407134dc46b4c22"
          }
        ]
      },
      {
        "id": 1017320,
        "name": "Iron Man (Iron Man 3 - The Official Game)",
        "description": "",
        "modified": "2013-09-18T11:05:44-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/03/5239c1408c936",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017320",
        "comics": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017320/comics",
          "items": [],
          "returned": 0
        },
        "series": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017320/series",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017320/stories",
          "items": [],
          "returned": 0
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017320/events",
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
            "url": "http://marvel.com/comics/characters/1017320/iron_man_iron_man_3_-_the_official_game?utm_campaign=apiRef&utm_source=389a96f473c791018407134dc46b4c22"
          }
        ]
      },
      {
        "id": 1017294,
        "name": "Iron Man (LEGO Marvel Super Heroes)",
        "description": "",
        "modified": "2013-09-18T17:03:08-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/90/5239c3cc8a259",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017294",
        "comics": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017294/comics",
          "items": [],
          "returned": 0
        },
        "series": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017294/series",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017294/stories",
          "items": [],
          "returned": 0
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017294/events",
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
            "url": "http://marvel.com/comics/characters/1017294/iron_man_lego_marvel_super_heroes?utm_campaign=apiRef&utm_source=389a96f473c791018407134dc46b4c22"
          }
        ]
      },
      {
        "id": 1017310,
        "name": "Iron Man (Marvel Heroes)",
        "description": "",
        "modified": "2013-09-18T10:53:29-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/40/5239be60a67da",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017310",
        "comics": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017310/comics",
          "items": [],
          "returned": 0
        },
        "series": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017310/series",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017310/stories",
          "items": [],
          "returned": 0
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017310/events",
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
            "url": "http://marvel.com/comics/characters/1017310/iron_man_marvel_heroes?utm_campaign=apiRef&utm_source=389a96f473c791018407134dc46b4c22"
          }
        ]
      },
      {
        "id": 1017326,
        "name": "Iron Man (Marvel War of Heroes)",
        "description": "",
        "modified": "2013-09-18T10:59:29-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/f0/5239bfbfeea88",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017326",
        "comics": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017326/comics",
          "items": [],
          "returned": 0
        },
        "series": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017326/series",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017326/stories",
          "items": [],
          "returned": 0
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017326/events",
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
            "url": "http://marvel.com/comics/characters/1017326/iron_man_marvel_war_of_heroes?utm_campaign=apiRef&utm_source=389a96f473c791018407134dc46b4c22"
          }
        ]
      },
      {
        "id": 1010935,
        "name": "Iron Man (Ultimate)",
        "description": "",
        "modified": "2014-03-05T13:37:05-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/90/53176e7785d95",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010935",
        "comics": {
          "available": 76,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010935/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/18479",
              "name": "Ultimate Adventures (2002) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/18480",
              "name": "Ultimate Adventures (2002) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/18482",
              "name": "Ultimate Adventures (2002) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/18483",
              "name": "Ultimate Adventures (2002) #5"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/160",
              "name": "Ultimate Adventures (2002) #6"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/1934",
              "name": "Ultimate Adventures Vol. 1: One Tin Soldier (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/1204",
              "name": "Ultimate Adventures Vol. I (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/27663",
              "name": "Ultimate Armor Wars (2009) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/36129",
              "name": "Ultimate Avengers Vs. New Ultimates (2011) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/27660",
              "name": "Ultimate Armor Wars (2009) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/27661",
              "name": "Ultimate Armor Wars (2009) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/27662",
              "name": "Ultimate Armor Wars (2009) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/38503",
              "name": "Ultimate Avengers Vs. New Ultimates (2011) #2 (HITCH VARIANT)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/45715",
              "name": "Ultimate Comics Iron Man (2012) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/45421",
              "name": "Ultimate Comics Iron Man (2012) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/46544",
              "name": "Ultimate Comics Iron Man (2012) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/30600",
              "name": "Ultimate Comics New Ultimates (2010) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/30602",
              "name": "Ultimate Comics New Ultimates (2010) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/37461",
              "name": "Ultimate Comics Spider-Man (2009) #150"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/37520",
              "name": "Ultimate Comics Spider-Man (2009) #150 (WRAPAROUND VARIANT)"
            }
          ],
          "returned": 20
        },
        "series": {
          "available": 28,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010935/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/469",
              "name": "Ultimate Adventures (2002 - 2003)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1173",
              "name": "Ultimate Adventures Vol. 1: One Tin Soldier (2005)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/261",
              "name": "Ultimate Adventures Vol. I (2003)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/8845",
              "name": "Ultimate Armor Wars (2009)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/12615",
              "name": "Ultimate Avengers Vs. New Ultimates (2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/16739",
              "name": "Ultimate Comics Iron Man (2012 - 2013)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/9026",
              "name": "Ultimate Comics New Ultimates (2010 - 2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/8509",
              "name": "Ultimate Comics Spider-Man (2009 - 2012)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/11272",
              "name": "Ultimate Comics Thor (2010 - 2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/13936",
              "name": "Ultimate Comics Ultimates (2011 - 2013)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/13108",
              "name": "Ultimate Comics X-Men (2010 - 2013)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/759",
              "name": "Ultimate Extinction (2006)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/702",
              "name": "Ultimate Fantastic Four (2003 - 2009)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2223",
              "name": "Ultimate Galactus Trilogy (2007)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/3421",
              "name": "Ultimate Human (2008)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/761",
              "name": "Ultimate Iron Man (2005)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/3179",
              "name": "Ultimate Iron Man II (2007 - 2008)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1275",
              "name": "Ultimate Iron Man Vol. 1 (2006)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2311",
              "name": "Ultimate Marvel Team-Up (2001 - 2002)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1823",
              "name": "Ultimate Marvel Team-Up Ultimate Collection (2006)"
            }
          ],
          "returned": 20
        },
        "stories": {
          "available": 92,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010935/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1298",
              "name": "Ultimate Adventures (2002) #6",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1334",
              "name": "Ultimate Spider-Man (2000) #70",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1460",
              "name": "Ultimate X-Men (2001) #64",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1461",
              "name": "4 of 5 - Magnetic North",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3548",
              "name": "Ultimate Extinction (2006) #2",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3549",
              "name": "2 of 5 - 5XLS",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3550",
              "name": "Ultimate Extinction (2006) #3",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3551",
              "name": "3 of 5 - 5XLS",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3552",
              "name": "Ultimate Extinction (2006) #4",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3553",
              "name": "4 of 5 - 5XLS",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3554",
              "name": "Ultimate Extinction (2006) #5",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3555",
              "name": "5 of 5 - 5XLS",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3566",
              "name": "ULTIMATE IRON MAN (2005) #1",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3570",
              "name": "ULTIMATE IRON MAN (2005) #2",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3572",
              "name": "ULTIMATE IRON MAN (2005) #3",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3574",
              "name": "ULTIMATE IRON MAN (2005) #4",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3576",
              "name": "ULTIMATE IRON MAN (2005) #5",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4312",
              "name": "4 of 4 - 4XLS",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/5364",
              "name": "Cover #5364",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/5708",
              "name": "ULTIMATE WOLVERINE VS. HULK (2005) #2",
              "type": "cover"
            }
          ],
          "returned": 20
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010935/events",
          "items": [],
          "returned": 0
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/characters/29/iron_man?utm_campaign=apiRef&utm_source=389a96f473c791018407134dc46b4c22"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Iron_Man_%28Ultimate%29?utm_campaign=apiRef&utm_source=389a96f473c791018407134dc46b4c22"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1010935/iron_man_ultimate?utm_campaign=apiRef&utm_source=389a96f473c791018407134dc46b4c22"
          }
        ]
      },
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
}`;
