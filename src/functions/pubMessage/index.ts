import { handlerPath } from '@libs/handler-resolver'
import { AWS } from '@serverless/typescript'

export const pubMessage: AWS['functions'][''] = {
	handler: `${handlerPath(__dirname)}/handler.main`,
	events: [
		{
			http: {
				method: 'post',
				path: '/',
			},
		},
	],
}

export default pubMessage
