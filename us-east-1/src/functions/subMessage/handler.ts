import { middyfy } from '@libs/lambda'
import { SNSEvent } from 'aws-lambda'
import { inspect } from 'util'
import { Lambda } from '@aws-sdk/client-lambda'

const hello = async (event: SNSEvent) => {
	console.log('\n\n')
	console.log(inspect(event.Records[0].Sns.Message, { depth: 100 }))
	console.log('\n\n')
}

export const main = middyfy(hello)

const subMessageOffline = async (event: SNSEvent) => {
	const saEast1SnsClient = new Lambda({
		region: 'sa-east-1',
		endpoint: 'http://localhost:4001',
	})

	await saEast1SnsClient.invoke({
		FunctionName: 'message-sub-dev-subMessage',
		Payload: JSON.stringify(event) as any,
	})
}

export const offline = middyfy(subMessageOffline)
