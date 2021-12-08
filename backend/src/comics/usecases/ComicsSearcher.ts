import {ComicsResponse} from "./ComicsResponse";

export interface ComicsSearcher {
  searchHeroComics(heroId: number, offset: number, limit: number): Promise<ComicsResponse>;
}

export const ComicsSearcher = Symbol("ComicsSearcher");
