import AWS from 'aws-sdk';
import commonMiddleWare from './lib/commonMiddleWare';
import createError from 'http-errors';

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function getAuctions(event, context) {
let auctions;
try {
const result=await dynamodb.scan(
    {TableName:process.env.AUCTIONS_TABLE_NAME }).promise();
    auctions=result.Items;
}
catch (e){
console.log(e)
throw new createError.InternalServerError(e)
}
  return {
    statusCode: 200,
    body: JSON.stringify(auctions),
  };
}

export const handler = commonMiddleWare(getAuctions)
