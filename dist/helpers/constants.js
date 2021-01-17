"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeError = exports.isNonNullObject = exports.API_URL = void 0;
exports.API_URL = "https://api.gupshup.io/sm/api/v1";
function isNonNullObject(input) {
    return !!input && typeof input === "object" && !Array.isArray(input);
}
exports.isNonNullObject = isNonNullObject;
function normalizeError(err) {
    throw {
        statusCode: err.response.status,
        error: err.response.data
    };
}
exports.normalizeError = normalizeError;
