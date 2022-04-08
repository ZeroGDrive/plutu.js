import { Base, PlutuResponse } from '../base';
import { MoamalatPayRequest, MoamalatPayResult } from './types';

export class Moamalat extends Base {
  async payMoamalat(
    body: MoamalatPayRequest
  ): Promise<PlutuResponse<MoamalatPayResult>> {
    return this.request('transaction/moamalat/confirm', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }
}
