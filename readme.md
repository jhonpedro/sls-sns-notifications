# SNS - Notifications

Just a sample of a creation and usage of a SNS topic.

This sample includes the creation and usage of SNS in AWS and offline with the help of [serverless-offline-sns](https://www.serverless.com/plugins/serverless-offline-sns).

We can simulate all of our SNS calls here offline with a simple `sls offline`

And the best is that we don't need to deploy to have the behavior of a SNS like service.

## Why /sa-east-1 and /us-east-1?

Just a simulation of two different projects in two different regions listening to the same SNS topic created in one of those services.

## How to work with a single topic in two different regions/projects offline?

I managed to work around this problem with enabling and disabling funtions, for example:

I have function `project-A-listen-to-topic-X` and `project-B-listen-to-topic-X` listening for topic `X`, and the `serverless-offline-sns` instance is running on `project-A`.

To make `project-B` listen to topic created in `project-A` I create another function in `project-A` who listen to the same topic, in this case, topic `X`, and that new function in `project-A` now invoke the other function in `project-B`, BUUUT, this happends only for development, in production, SNS will handle that cross region/project call.
