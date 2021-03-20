"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var People = /** @class */ (function () {
    function People() {
        this.data = [
            {
                id: '1',
                name: 'Somchai Gigi',
                gender: 'male',
            },
            {
                id: '2',
                name: 'Nanah Hoo',
                gender: 'female',
            },
        ];
    }
    People.prototype.find = function (query) {
        if (query === void 0) { query = {}; }
        if (!Object.keys(query)) {
            return this.data;
        }
        var results = [];
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var item = _a[_i];
            var isMatch = true;
            for (var key in query) {
                if (typeof item[key] !== 'undefined') {
                    if (item[key] !== query[key]) {
                        isMatch = false;
                        break;
                    }
                }
            }
            if (isMatch) {
                results.push(item);
            }
        }
        return results;
    };
    People.prototype.get = function (id) {
        return this.find({ id: id })[0];
    };
    return People;
}());
exports.default = People;
