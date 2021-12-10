import {MarvelResponseModel} from "../../common/MarvelResponseModel";
import {Thumbnail} from "../../common/Thumbnail";

export class HeroesResponse extends MarvelResponseModel {
  results: HeroData[];
}

export class HeroData {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail

}
