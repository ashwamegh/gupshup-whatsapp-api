"use strict";

import Qs from 'querystring';

import { MessageBody } from '../types';

export default function(api) {
	return {
		async send(payload: MessageBody) {
			try {
				const { data } = await api.post({
					url: '/msg',
					data: Qs.stringify({
						...payload,
						message: JSON.stringify(payload.message)
					})
				})
				return data
			} catch (error) {
				throw error
			}
		}
	}
}