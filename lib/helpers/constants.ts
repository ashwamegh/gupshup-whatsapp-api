"use strict";

export const API_URL = "https://api.gupshup.io/sm/api/v1"

export function isNonNullObject(input) {
	return !!input && typeof input === "object" && !Array.isArray(input);
}

export function normalizeError(err) {
	throw {
		statusCode: err.response.status,
		error: err.response.data
	}
}