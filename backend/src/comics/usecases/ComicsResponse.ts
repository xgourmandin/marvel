import {Thumbnail} from "../../common/Thumbnail";
import {MarvelResponseModel} from "../../common/MarvelResponseModel";

export class ComicsResponse extends MarvelResponseModel{
  results: ComicData[];
}

export class ComicData {
  id: number;
  title: string;
  description: string;
  thumbnail: Thumbnail
}
