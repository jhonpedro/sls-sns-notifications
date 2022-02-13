import { SNS } from '@aws-sdk/client-sns'

export const snsClient = new SNS({
	region: 'us-east-1',
	endpoint: process.env.IS_OFFLINE
		? 'http://127.0.0.1:4002'
		: 'https://sns.us-east-1.amazonaws.com',
})
