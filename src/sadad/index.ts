import { Base, SuccessResponse } from '../base';
import {
  ConfirmSadadRequest,
  ConfirmSadadResult,
  VerifySadadRequest,
  VerifySadadResult,
} from './types';
export class Sadad extends Base {
  async verify(
    body: VerifySadadRequest
  ): Promise<SuccessResponse<VerifySadadResult>> {
    return this.request<VerifySadadResult>('transaction/sadadapi/verify', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  async confirm(
    body: ConfirmSadadRequest
  ): Promise<SuccessResponse<ConfirmSadadResult>> {
    return this.request<ConfirmSadadResult>('transaction/sadadapi/confirm', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }
}
