import {Module} from '@nestjs/common';
import {HeroesModule} from "./heroes/heroes.module";
import {ComicsModule} from "./comics/comics.module";

@Module({
  imports: [HeroesModule, ComicsModule],
})
export class AppModule {

}
