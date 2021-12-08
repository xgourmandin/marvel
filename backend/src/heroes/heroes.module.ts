import {Module} from "@nestjs/common";
import {HttpModule} from "@nestjs/axios";
import {SearchHeroesUseCase} from "./usecases/SearchHeroesUseCase";
import {HttpHeroesSearcher} from "./adapters/HttpHeroesSearcher";
import {HeroesSearchApi} from "./adapters/HeroesSearchApi";
import {HeroesSearcher} from "./usecases/HeroesSearcher";

@Module({
  imports: [HttpModule],
  providers: [SearchHeroesUseCase, {
    provide: HeroesSearcher,
    useClass: HttpHeroesSearcher
  }],
  controllers: [HeroesSearchApi]
})
export class HeroesModule {
}
