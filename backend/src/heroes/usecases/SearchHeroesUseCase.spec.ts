import {instance, mock, verify, when} from "ts-mockito";
import {HeroesSearcher} from "./HeroesSearcher";
import {SearchHeroesUseCase} from "./SearchHeroesUseCase";

describe('Search heroes use case', () => {

  let heroesSearcher: HeroesSearcher ;
  let searchHeroesUseCase: SearchHeroesUseCase ;

  beforeEach(() => {
    heroesSearcher = mock<HeroesSearcher>()
    searchHeroesUseCase = new SearchHeroesUseCase(instance(heroesSearcher));
  });

  it('should ask the searcher interface for heroes', async () => {
    when(heroesSearcher.findHeroesByName('test', 0, 20)).thenResolve();
    await searchHeroesUseCase.searchForHeroes('test');
    verify(heroesSearcher.findHeroesByName('test', 0, 20)).once();
  })

})
