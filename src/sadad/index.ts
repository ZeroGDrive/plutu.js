import { Base, PlutuResponse } from '../base';
import {
  SadadConfirmRequest,
  SadadConfirmResult,
  SadadVerifyRequest,
  SadadVerifyResult,
} from './types';
export class Sadad extends Base {
  async verify(
    body: SadadVerifyRequest
  ): Promise<PlutuResponse<SadadVerifyResult>> {
    return this.request<SadadVerifyResult>('transaction/sadadapi/verify', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  async confirm(
    body: SadadConfirmRequest
  ): Promise<PlutuResponse<SadadConfirmResult>> {
    return this.request<SadadConfirmResult>('transaction/sadadapi/confirm', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }
}
