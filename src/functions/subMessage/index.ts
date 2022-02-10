import { handlerPath } from '@libs/handler-resolver'
import { AWS } from '@serverless/typescript'

export const subMessage: AWS['functions'][''] = {
	handler: `${handlerPath(__dirname)}/handler.main`,
	events: [
		{
			sns: {
				arn: {
					'Fn::Join': [
						':',
						[
							'arn:aws:sns',
							{ Ref: 'AWS::Region' },
							{ Ref: 'AWS::AccountId' },
							'test-jhonpedro-sns',
						],
					],
				},
				topicName: 'test-jhonpedro-sns',
			},
		},
	],
}

export default subMessage
