const {MongoClient, MongoErro} = require(`mongodb`);

const url = `mongodb://localhost:27017`;

const connectAndRead = async () => {
  const client = await MongoClient.connect(url);

  const db = client.db(`wizards-game`);

  const collection = db.collection(`wizards`);

  console.log(collection);

  client.close();
};

connectAndRead().catch((e) => {
  throw e;
});
