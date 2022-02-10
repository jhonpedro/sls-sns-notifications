import { SNS } from '@aws-sdk/client-sns'

export const snsClient = new SNS({
	region: process.env.SNS_REGION,
})
