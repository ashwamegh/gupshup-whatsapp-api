'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pkg = require('./../package.json');
var api_1 = __importDefault(require("./api"));
var message_1 = __importDefault(require("./resources/message"));
var optins_1 = __importDefault(require("./resources/optins"));
var Gupshup = /** @class */ (function () {
    function Gupshup(options) {
        if (options === void 0) { options = { apiKey: null }; }
        var apiKey = options.apiKey;
        if (!apiKey) {
            throw new Error('`apiKey` is mandatory');
        }
        this.apiKey = apiKey;
        this.api = new api_1.default({ apiKey: apiKey });
        this.addResources();
    }
    Gupshup.prototype.addResources = function () {
        this.message = message_1.default(this.api);
        this.optins = optins_1.default(this.api);
    };
    Gupshup.VERSION = pkg.version;
    return Gupshup;
}());
module.exports = Gupshup;
