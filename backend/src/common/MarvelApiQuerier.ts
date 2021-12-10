import {createHash} from "crypto";

export class MarvelApiQuerier {

  public getCommonQueryParameters(page: number, limit: number) {
    const timestamp = MarvelApiQuerier.getTimestamp();
    return {
      offset: MarvelApiQuerier.computeOffset(page, limit),
      limit: limit,
      ts: timestamp,
      apikey: process.env.MARVEL_PUBLIC_KEY,
      hash: MarvelApiQuerier.getHash(timestamp)
    };
  }

  public computePage(offset: number, limit: number) {
    return offset / limit + 1;
  }

  private static computeOffset(page: number, limit: number) {
    return (page > 0 ? page - 1: 0) * limit;
  }

  private static getTimestamp(): number {
    return Date.now();
  }

  private static getHash(ts: number): string {
    return createHash('md5').update(ts + process.env.MARVEL_PRIVATE_KEY + process.env.MARVEL_PUBLIC_KEY).digest("hex");
  }


 }
