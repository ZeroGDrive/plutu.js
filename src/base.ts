import { Config } from './types/config';

export abstract class Base {
  private apiKey: string;
  private accessToken: string;

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.accessToken = config.accessToken;
  }
}
