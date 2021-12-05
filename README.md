# node-redis-pooless
Redis pool less is a wrapper in redis client to handle connections in serverless and stateless environment. Servers running in stateless env such as google cloud functions, aws, serverless and kind of servers, can have this wrapper to open/close connection in a controlled env. 

# Install
`yarn add node-redis-pooless` or `npm install node-redis-pooless` 

# Important
* We don't use connection pool because it is stateful and serverless is stateless.
* As serverless is a quick way execution you must code the callback as simple as possible to return/execute the redis client call.
* A best scenario is to have unlimited connections once stateless doesn't work with connection pool. So you might want to work with no connection problems, if you can predict the number of connections, you might not have any problems with this wrapper.

# Code use example
`````
const value = await redis(async (client)=>{
  return client.get(key)
})

await redis(async (client)=>{
  return client.set(key,value)
})

`````

# Documentation
You may want to check https://github.com/redis/node-redis to find all redis functions available in client.

# Troubleshooting
* Check the url to connect to redis server is working under google cloud functions environment variables.
* To customize you can fork/clone this project and adapt to your necessity since it's lightweight by now.

# TODO (PR)
* Remove functions google cloud from code
* Get URL from other place
