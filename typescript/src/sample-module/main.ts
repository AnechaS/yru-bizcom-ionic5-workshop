import _ from 'lodash';
import People from './People';
import logger, { log, logs } from './logger';

const obj = new People();
console.log(obj.find());

console.log(obj.find({ name: 'Somchai Gigi' }));

console.log(obj.get('2'));

logger('Hello');
log('dir', 'Hi');
logger(logs)

console.log(_.isString('Hello'));