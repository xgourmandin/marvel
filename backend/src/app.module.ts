import {Module} from '@nestjs/common';
import {HeroesModule} from "./heroes/heroes.module";
import {ComicsModule} from "./comics/comics.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import {join} from 'path';

@Module({
  imports: [HeroesModule, ComicsModule,
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, 'client')
  })],
})
export class AppModule {

}
