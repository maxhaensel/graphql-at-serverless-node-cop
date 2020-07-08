/** @format */
declare global {
  type context = {
    event: EventContext
    context: LambdaContext
    jwtToken: jwtToken
    jobsJwtToken?: jobsJwtToken
  }

  interface jwtToken {
    sub: string
    'cognito:groups': string[]
    email_verified: true
    'custom:department': string
    iss: string
    'cognito:username': string
    aud: string
    event_id: string
    'custom:userCompany': string
    token_use: string
    auth_time: number
    name: string
    exp: number
    iat: number
    email: string
    'custom:userCompanyId': string
  }

  interface jobsJwtToken {
    'cognito:username': string
    companies: string[]
    iat: number
    exp: number
  }

  interface LambdaContext {
    done: Function
    fail: Function
    succeed: Function
    getRemainingTimeInMillis: Function
    awsRequestId: string
    clientContext: {}
    functionName: string
    functionVersion: string
    identity: {}
    invokedFunctionArn: string
    logGroupName: string
    logStreamName: string
    memoryLimitInMB: number
    callbackWaitsForEmptyEventLoop: boolean
  }

  interface Headers {
    Host: string
    Connection: string
    'Content-Length': string
    accept: string
    Origin: string
    'User-Agent': string
    'content-type': string
    'Sec-Fetch-Site': string
    'Sec-Fetch-Mode': string
    Referer: string
    'Accept-Encoding': string
    'Accept-Language': string
  }
  interface EventContext<Headers = {}> {
    body: string
    headers: Headers
    httpMethod: string
    multiValueHeaders: {
      Host: string[]
      Connection: string[]
      'Content-Length': string[]
      accept: string[]
      Origin: string[]
      'User-Agent': string[]
      'content-type': string[]
      'Sec-Fetch-Site': string[]
      'Sec-Fetch-Mode': string[]
      Referer: string[]
      'Accept-Encoding': string[]
      'Accept-Language': string[]
    }
    multiValueQueryStringParameters: null
    path: string
    pathParameters: null
    queryStringParameters: null
    requestContext: {
      accountId: string
      apiId: string
      authorizer: {
        principalId: string
        claims: undefined
      }
      httpMethod: string
      identity: {
        accountId: string
        apiKey: string
        caller: string
        cognitoAuthenticationProvider: string
        cognitoAuthenticationType: string
        cognitoIdentityId: string
        cognitoIdentityPoolId: string
        sourceIp: string
        user: string
        userAgent: string
        userArn: string
      }
      protocol: string
      requestId: string
      requestTimeEpoch: number
      resourceId: string
      resourcePath: string
      stage: string
    }
    resource: string
    stageVariables: null
    isOffline: true
  }

  interface InfoContext {
    fieldName: string
    fieldNodes: [
      {
        kind: string
        alias: undefined
        name: any
        arguments: Array[]
        directives: []
        selectionSet: undefined
        loc: any
      },
    ]
    returnType: string
    parentType: any
    path: {prev: undefined; key: string}
    schema: {
      __validationErrors: []
      extensions: undefined
      astNode: undefined
      extensionASTNodes: undefined
      __allowedLegacyNames: Array[]
      _queryType: any
      _mutationType: any
      _subscriptionType: undefined
      _directives: any
      _typeMap: {
        Query: any
        String: String
        Mutation: Mutation
        __Schema: __Schema
        __Type: __Type
        __TypeKind: __TypeKind
        Boolean: Boolean
        __Field: __Field
        __InputValue: __InputValue
        __EnumValue: __EnumValue
        __Directive: __Directive
        __DirectiveLocation: __DirectiveLocation
        CacheControlScope: CacheControlScope
        Int: Int
      }
      _possibleTypeMap: any
      _implementations: any
      _extensionsEnabled: true
    }
    fragments: {}
    rootValue: undefined
    operation: {
      kind: string
      operation: string
      name: undefined
      variableDefinitions: []
      directives: []
      selectionSet: {kind: string; selections: [Array]; loc: [Object]}
      loc: {start: 0; end: 23}
    }
    variableValues: {}
    cacheControl: {setCacheHint: any; cacheHint: {maxAge: 0}}
  }
}
export {}
