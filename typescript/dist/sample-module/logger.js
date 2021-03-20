"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logs = exports.log = void 0;
function logger(param) {
    console.log(param);
}
exports.default = logger;
function log(t, param) {
    console[t](param);
}
exports.log = log;
exports.logs = [
    'info',
    'error',
    'dir',
    'debug'
];
console.debug();
