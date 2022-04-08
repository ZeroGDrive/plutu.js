import { Base } from './base';
import { Sadad } from './sadad';
import { applyMixins } from './utils';

class Plutu extends Base {}
interface Plutu extends Sadad {}
applyMixins(Plutu, [Sadad]);

export default Plutu;
