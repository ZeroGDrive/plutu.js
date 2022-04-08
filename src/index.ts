import { Adfali } from './adfali/index';
import { Base } from './base';
import { Moamalat } from './moamalat/index';
import { Sadad } from './sadad';
import { applyMixins } from './utils';

class Plutu extends Base {}
interface Plutu extends Sadad, Adfali, Moamalat {}
applyMixins(Plutu, [Sadad, Adfali, Moamalat]);

export default Plutu;
