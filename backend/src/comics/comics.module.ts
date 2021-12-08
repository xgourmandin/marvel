import {Module} from "@nestjs/common";
import {ComicsApi} from "./adapters/ComicsApi";
import {HttpComicsSearcher} from "./adapters/HttpComicsSearcher";
import {ComicsSearcher} from "./usecases/ComicsSearcher";
import {HttpModule} from "@nestjs/axios";
import {SearchComicsByHeroUseCase} from "./usecases/SearchComicsByHeroUseCase";


@Module({
  imports: [HttpModule],
  providers: [SearchComicsByHeroUseCase, {
    provide: ComicsSearcher,
    useClass: HttpComicsSearcher
  }],
  controllers: [ComicsApi]
})
export class ComicsModule{}
