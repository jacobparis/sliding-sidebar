// const { MongoClient } = require('mongodb')
// const promiseRetry = require('promise-retry')

// const querystring = require('querystring')

exports.handler = async function sample(req) {
  /**
   * Handle the authorization header here
   */

  // const authorization = req.headers.authorization || ''

  // const [protocol, token] = authorization.split(' ')
  // if (protocol !== 'Bearer' || !validTokens.includes(token)) return {
  //   headers: {
  //     'WWW-Authenticate': 'Bearer'
  //   },
  //   statusCode: 401
  // }

  /**
   * Connect to mongo here
   *
   * Make a new user on Atlas
   */

  // const mongo = new MongoClient('mongodb+srv://user:pass@cluster0-shifn.mongodb.net/test?retryWrites=true&w=majority', {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // })

  // await promiseRetry((retry, number) => {
  //   console.info(`MongoClient connecting - attempt ${number}`)

  //   return mongo.connect()
  //   .catch(error => {
  //     console.error(error)

  //     retry()
  //   })
  //   .then(() => {
  //     console.log('MongoClient connected successfully')
  //   })
  // }, {
  //   retries: 3,
  //   minTimeout: 2000,
  //   maxTimeout: 3000,
  // })

  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'max-age=36000, immutable'
    },
    body: JSON.stringify({
      name: 'Sample Function',
      healthy: true
    })
  }
}
