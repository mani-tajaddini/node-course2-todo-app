const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err) {
    return console.log("Unable to connc=ect to db server");
  }
  console.log("Connected to db server");

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if(err) {
      return console.log("Unable to insert todo");
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })

  db.collection('Users').insertOne({
    name: 'Mani',
    age: 26,
    location: 'Ankara'
  }, (err, result) => {
    if(err) {
      return console.log("Unable to insert user");
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  })

  db.close();
});
