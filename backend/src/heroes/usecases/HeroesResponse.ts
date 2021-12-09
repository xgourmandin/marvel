export class HeroesResponse {
  results: HeroData[];
  offset: number;
  limit: number;
  total: number;
}

class Thumbnail {
  path: string;
  extention: string;
}

export class HeroData {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail

}
