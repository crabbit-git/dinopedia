const fetch = require('node-fetch');
const {MongoClient} = require('mongodb');

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
    if (dino.name === 'Attenborosaurus') {
      dino.regions[0] = 'Europe';
    }
    if (dino.regions.length === 0) {
      dino.regions[0] = 'unknown'
    }
    if (dino.eats === '') {
      dino.eats = 'unknown';
    }
    if (dino.eats === '(unknown)') {
      dino.eats = 'unknown';
    }
    if (dino.period.includes('/')) {
      const splitPeriod = dino.period.split('/');
      dino.period = splitPeriod[0];
    } else if (dino.period.includes('Early') || dino.period.includes('Late')) {
      const splitPeriod = dino.period.split(' ');
      dino.period = splitPeriod[1];
    }
    if (dino.period === 'Triassic') {
      dino.era = '237 - 201 million years ago'
    } else if (dino.period === 'Jurassic') {
      dino.era = '201 - 145 million years ago'
    } else if (dino.period === 'Cretaceous') {
      dino.era = '145 - 66 million years ago'
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
  MongoClient
  .connect('mongodb://localhost:27017')
  .then(client => {
    client.db('javasaurus').collection('dinosaurs')
    .insertMany(stripDinos(data))
    .then(() => client.close());
  });
});
