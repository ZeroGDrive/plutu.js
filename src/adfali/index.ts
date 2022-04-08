import { Base, PlutuResponse } from '../base';
import {
  AdfaliConfirmRequest,
  AdfaliConfirmResult,
  AdfaliVerifyRequest,
  AdfaliVerifyResult,
} from './types';

export class Adfali extends Base {
  async verifyAdfali(
    body: AdfaliVerifyRequest
  ): Promise<PlutuResponse<AdfaliVerifyResult>> {
    return await this.request('transaction/edfali/verify', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  async confirmAdfali(
    body: AdfaliConfirmRequest
  ): Promise<PlutuResponse<AdfaliConfirmResult>> {
    return await this.request('transaction/edfali/confirm', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }
}
