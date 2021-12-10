import {ComicsResponse} from "./ComicsResponse";

export interface ComicsSearcher {
  searchHeroComics(heroId: number, page: number, limit: number): Promise<ComicsResponse>;
}

export const ComicsSearcher = Symbol("ComicsSearcher");
