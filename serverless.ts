import type { AWS } from '@serverless/typescript'

import pubMessage from '@functions/pubMessage'
import subMessage from '@functions/subMessage'

const serverlessConfiguration: AWS = {
	service: 'message-creator',
	frameworkVersion: '3',
	useDotenv: true,
	plugins: ['serverless-esbuild', 'serverless-offline'],
	provider: {
		name: 'aws',
		region: 'us-east-1',
		runtime: 'nodejs14.x',
		apiGateway: {
			minimumCompressionSize: 1024,
			shouldStartNameWithService: true,
		},
		environment: {
			AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
			NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
			SNS_REGION: '${env:SNS_REGION}',
			SNS_MAIN_TOPIC_ARN: '${env:SNS_MAIN_TOPIC_ARN}',
		},
		iamRoleStatements: [
			{
				Effect: 'Allow',
				Action: ['SNS:Publish'],
				Resource: '*',
			},
		],
	},
	// import the function via paths
	functions: { pubMessage, subMessage },
	package: { individually: true },
	custom: {
		esbuild: {
			bundle: true,
			minify: false,
			sourcemap: true,
			exclude: ['aws-sdk'],
			target: 'node14',
			define: { 'require.resolve': undefined },
			platform: 'node',
			concurrency: 10,
		},
	},
	resources: {
		Resources: {
			NotificationsSNS: {
				Type: 'AWS::SNS::Topic',
				Properties: {
					TopicName: 'test-jhonpedro-sns',
				},
			},
		},
	},
}

module.exports = serverlessConfiguration
