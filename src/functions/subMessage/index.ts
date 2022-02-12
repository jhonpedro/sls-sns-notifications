import { handlerPath } from '@libs/handler-resolver'
import { AWS } from '@serverless/typescript'

export const subMessage: AWS['functions'][''] = {
	handler: `${handlerPath(__dirname)}/handler.main`,
	events: [
		{
			sns: {
				arn: {
					Ref: 'NotificationsSNS',
				},
				topicName: 'test-jhonpedro-sns',
			},
		},
	],
}

export default subMessage
