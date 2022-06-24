const fetch = require('node-fetch');
const mongoClient = require('mongodb').MongoClient;

const dinoNames = [
  'Allosaurus',
  'Agnosphitys',
  'Apatosaurus',
  'Attenborosaurus',
  'Blikanasaurus',
  'Brachiosaurus',
  'Brontosaurus',
  'Camposaurus',
  'Dilophosaurus',
  'Diplodocus',
  'Drinker',
  'Eocarcharia',
  'Fukuiraptor',
  'Gallimimus',
  'Iguanodon',
  'Juravenator',
  'Megalosaurus',
  'Parasaurolophus',
  'Pterodactyl',
  'Rapator',
  'Stegosaurus',
  'Thanos',
  'Thecodontosaurus',
  'Triceratops',
  'Turiasaurus',
  'Tyrannosaurus',
  'Velociraptor',
];

const promisedDinos = dinoNames.map(dinoName => {
  return fetch(`https://dinosaurpictures.org/api/dinosaur/${dinoName}`)
  .then(response => response.json())
});

const stripDinos = dinosFromApi => {
  return dinosFromApi.map(dino => {
    if (dino.eats === '') {
      dino.eats = '(unknown)'
    }
    if (dino.period.includes('/')) {
      const splitPeriod = dino.period.split('/');
      dino.period = splitPeriod[0];
    } else if (dino.period.includes('Early') || dino.period.includes('Late')) {
      const splitPeriod = dino.period.split(' ');
      dino.period = splitPeriod[1];
    }
    delete dino.shouldShowMap;
    delete dino.refs;
    dino.pics.forEach(pic => {
      delete pic.votingUrl;
      delete pic.clickthrough_url;
      delete pic.thumbnail;
    });
    return dino;
  });
}

Promise.all(promisedDinos)
.then(data => {
  const simpleDinos = stripDinos(data);
  mongoClient
  .connect('mongodb://localhost:27017')
  .then(client => {
    const db = client.db('javasaurus');
    const dinosaursCollection = db.collection('dinosaurs');
    dinosaursCollection.insertMany(simpleDinos)
    .then(() => {
      client.close();
    });
  });
});
