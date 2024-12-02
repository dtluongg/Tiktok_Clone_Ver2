import {S3} from "aws-sdk";

export const s3bucket = new S3({
    accessKeyId: 'AKIA5CBGTQAHL7F7ZOC7',
    secretAccessKey: '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',
    region: process.env.EXPO_PUBLISH_AWS_REGION,
}) 