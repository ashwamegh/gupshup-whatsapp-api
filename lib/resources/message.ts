"use strict";

import Qs from 'querystring';

import { MessageBody } from '../types';
import { normalizeError } from './../helpers/constants';

export default function(api) {
	return {
		async send(payload: MessageBody) {
			try {
				return await api.post({
					url: '/',
					data: Qs.stringify({
						...payload,
						message: JSON.stringify(payload.message)
					})
				})
			} catch (error) {
				return normalizeError(error)
			}
		}
	}
}