import { middyfy } from '@libs/lambda'
import { SNSEvent } from 'aws-lambda'
import { inspect } from 'util'

const subMessageSaEast1 = async (event: SNSEvent) => {
	console.log(inspect(event, { depth: 100 }))
}

export const main = middyfy(subMessageSaEast1)
