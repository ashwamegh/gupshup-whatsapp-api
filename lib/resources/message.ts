"use strict";

import { MessageBody } from '../types';
import { normalizeError } from './../helpers/constants';

export default function(api) {
	return {
		async send(payload: MessageBody) {
			try {
				return await api.post({
					url: '',
					data: payload
				})
			} catch (error) {
				return normalizeError(error)
			}
		}
	}
}