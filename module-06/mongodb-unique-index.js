const {MongoClient} = require(`mongodb`);
const assert = require(`assert`);

const url = `mongodb://localhost:27017`;

const wizards = [
  {name: `Пендальф`},
  {name: `Радагаст`},
  {name: `Гарри Поттер`}
];

const connectAndRead = async () => {
  const client = await MongoClient.connect(url);
  const db = client.db(`wizards`);

  const collection = db.collection(`find`);
  collection.createIndex({name: -1}, {unique: true, collation: {strength: 2}});

  const result = await collection.insertOne(wizards[0]);
  assert.equal(3, result.insertedCount);

  const itemCursor = collection.find({name: `Радагаст`});
  const items = await itemCursor.skip(1).limit(1).toArray();

  assert.equal(1, items.length);
  client.close();
};

connectAndRead().catch((e) => {
  console.log(e)
});
