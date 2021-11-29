//Title is in provided in request body and string
const schema = {
  type:'object',
  properties: {
    queryStringParameters: {
      type: 'object',
      properties: {
        status: {
          type: 'string',
          enum: ['OPEN', 'CLOSED'],
          default: 'OPEN',
        },
      },
    },
  },
  required: [
    'queryStringParameters',
  ],
};

export default schema;