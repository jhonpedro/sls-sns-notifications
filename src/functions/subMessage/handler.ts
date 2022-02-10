import { middyfy } from '@libs/lambda'
import { SNSEvent } from 'aws-lambda'
import { inspect } from 'util'

const hello = async (event: SNSEvent) => {
	console.log(inspect(event.Records[0].Sns.Message, { depth: 100 }))
}

export const main = middyfy(hello)
