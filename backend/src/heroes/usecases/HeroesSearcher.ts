import {HeroesResponse} from "./HeroesResponse";

export interface HeroesSearcher {
  findHeroesByName(name: string, page?: number, limit?: number): Promise<HeroesResponse>;
}

export const HeroesSearcher = Symbol("HeroesSearcher");
