import {Module} from '@nestjs/common';
import {HeroesModule} from "./heroes/heroes.module";
import {ComicsModule} from "./comics/comics.module";
import {ServeStaticModule} from "@nestjs/serve-static";

@Module({
  imports: [HeroesModule, ComicsModule,
  ServeStaticModule.forRoot({

  })],
})
export class AppModule {

}
