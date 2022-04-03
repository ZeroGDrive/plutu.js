type Config = {
  apiKey: string;
  accessToken: string;
};

export abstract class Base {
  private apiKey: string;
  private accessToken: string;
  private basePath = 'https://api.plutus.ly/api/v1/';

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.accessToken = config.accessToken;
  }

  protected async request<T, K>(endpoint: string, body: K): Promise<T> {
    const url = this.basePath + endpoint;
    const headers = {
      'X-API-KEY': this.apiKey,
      Authorization: `Bearer ${this.accessToken}`,
    };

    const config = {
      headers,
      body: JSON.stringify(body),
    };

    return fetch(url, config)
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
        throw new Error(r.statusText);
      })
      .catch((e) => {
        return Promise.reject(e);
      });
  }
}
