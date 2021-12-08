import {HeroesResponse} from "./HeroesResponse";

export interface HeroesSearcher {
  findHeroesByName(name: string, offset?: number, limit?: number): Promise<HeroesResponse>;
}

export const HeroesSearcher = Symbol("HeroesSearcher");
