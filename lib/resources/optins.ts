"use strict";

export default function(api) {
	return {
		async getUsers(appName: string) {
			try {
				return await api.get({
					url: `/users/${appName}`,
				})
			} catch (error) {
				throw error
			}
		},

		async sendUserOptinRequest(options: { appName: string, userMobileNumber: number }) {
			try {
				const { status } = await api.post({
					url: `/app/opt/in/${options.appName}`,
					data: JSON.stringify({
						user: options.userMobileNumber
					})
				})
				return {
					status
				}
			} catch (error) {
				throw error
			}
		}
	}
}