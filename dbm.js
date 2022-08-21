const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "db url";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


module.exports=function(coll,callback){
  client.connect(async err => {
    if(err){
      console.error("DB Connection Err",err)
      return;
    }
    const collection = client.db("sample_restaurants").collection(coll);
    await callback(collection);
    client.close();
  });
}
