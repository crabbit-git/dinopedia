const express = require('express');
const app = express();
const {MongoClient} = require('mongodb');
const cors = require('cors');

app.use(cors());
app.use(express.json()); 

const ObjectId = require('mongodb').ObjectId;
const createRouter = collection => {

  const router = express.Router();

  //INDEX
  router.get('/', (req, res) => {
    collection
      .find()
      .sort({"era":-1})
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  // TRYING TO REDIRECT (currently failing miserably)
  // router.get('/?q=tyrannosaurus', (req, res) => {
  //   res.redirect('https://www.google.com/');
  // });

  //SHOW (modals?)
  // router.get('/:id', (req, res) => {
  //   const id = req.params.id;
  //   collection
  //     .findOne({ _id: ObjectId(id) })
  //     .then((doc) => res.json(doc))
  //     .catch((err) => {
  //       console.error(err);
  //       res.status(500);
  //       res.json({ status: 500, error: err });
  //     });
  // });

  return router;
};

MongoClient.connect('mongodb://localhost:27017') 
  .then((client) => { 
    const db = client.db('javasaurus'); 
    const dinosaursCollection = db.collection('dinosaurs'); 
    const dinosaursRouter = createRouter(dinosaursCollection); 
    app.use('/api/dinosaurs', dinosaursRouter);
  })
  .catch(console.err); 

app.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
