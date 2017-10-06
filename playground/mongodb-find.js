const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err) {
    return console.log("Unable to connc=ect to db server");
  }
  console.log("Connected to db server");

  db.collection('Todos').find().toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log("Unable to fetch todos", err);
  })

  // db.collection('Users').insertOne({
  //   name: 'Mani',
  //   age: 26,
  //   location: 'Ankara'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log("Unable to insert user");
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // })

  db.close();
});
