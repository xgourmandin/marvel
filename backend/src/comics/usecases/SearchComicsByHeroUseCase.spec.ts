import {SearchComicsByHeroUseCase} from "./SearchComicsByHeroUseCase";
import {ComicsSearcher} from "./ComicsSearcher";
import {instance, mock, verify, when} from "ts-mockito";

describe('Search comics by hero use case', () => {

  let comicsSearcher: ComicsSearcher
  let searchUseCase: SearchComicsByHeroUseCase;

  beforeEach(() => {
    comicsSearcher = mock<ComicsSearcher>();
    searchUseCase = new SearchComicsByHeroUseCase(instance(comicsSearcher));
  })

  it('should call a comics research with the correct parameters', async () => {
    when(comicsSearcher.searchHeroComics(123, 1, 15)).thenResolve();
    await searchUseCase.searchForComicsByHero(123);
    verify(comicsSearcher.searchHeroComics(123, 1 ,15)).once();
  })
})
