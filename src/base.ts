import fetch from 'isomorphic-unfetch';

type Config = {
  apiKey: string;
  accessToken: string;
};

export type PlutuResponse<T> = {
  status: number;
  result: T;
  message: string;
};

export type ErrorResponse = {
  error: {
    status: number;
    code: string;
    message: string;
  };
};

export abstract class Base {
  private apiKey: string;
  private accessToken: string;
  private basePath = 'https://api.plutus.ly/api/v1/';

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.accessToken = config.accessToken;
  }

  protected async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<PlutuResponse<T>> {
    const url = this.basePath + endpoint;
    const headers = {
      'X-API-KEY': this.apiKey,
      Authorization: `Bearer ${this.accessToken}`,
      'Content-type': 'application/json',
    };

    const config = {
      ...options,
      headers,
    };

    return fetch(url, config)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then((error) => Promise.reject(error));
      })
      .catch((e) => {
        return Promise.reject(e);
      });
  }
}
