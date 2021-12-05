const functions = require('firebase-functions')
const {createClient} = require('redis')

exports.redis = async (callback) => {
  let client = null
  try{
    client = createClient({ url: functions.config().viby.redis_cloud.url })
    await client.connect()
    return callback(client)
  }catch(e){
    console.log(e)
    return null
  }finally{
    if(client)client.quit()
  }
}

