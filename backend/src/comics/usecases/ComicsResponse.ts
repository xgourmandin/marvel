
class ComicData {
  id: number;
  title: string;
  description: string
}

export class ComicsResponse {
  results: ComicData[];
  offset: number;
  limit: number;
}
