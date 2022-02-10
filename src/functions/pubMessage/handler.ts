import { PublishCommand } from '@aws-sdk/client-sns'
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway'
import { formatJSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import { snsClient } from '@libs/sns'

const hello: ValidatedEventAPIGatewayProxyEvent<{ message: string }> = async (
	event
) => {
	const pub = await snsClient.send(
		new PublishCommand({
			Message: JSON.stringify({ message: event.body.message }),
			TopicArn: process.env.SNS_MAIN_TOPIC_ARN,
		})
	)

	return formatJSONResponse({
		sent: true,
		messageId: pub.MessageId,
	})
}

export const main = middyfy(hello)
