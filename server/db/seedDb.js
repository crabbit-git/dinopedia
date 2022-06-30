const fetch = require('node-fetch');
const {MongoClient} = require('mongodb');

const dinoNames = [
  'Allosaurus',
  'Agnosphitys',
  'Ankylosaurus',
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

const promisedDinos = dinoNames.map(dinoName =>
  fetch(`https://dinosaurpictures.org/api/dinosaur/${dinoName}`)
  .then(response => response.json())
);

const stripDinos = dinosFromApi => {
  return dinosFromApi.map(dino => {
    if (dino.name === 'Attenborosaurus') {
      dino.regions[0] = 'Europe';
      dino.pics[2].url = 'https://ichef.bbci.co.uk/images/ic/640x360/p0bzpk6z.jpg';
    }
    if(dino.name === 'Camposaurus'){
      dino.mapUrl = 'https://osm.org/go/Tw4N--?m='
      dino.pics[2].url = 'http://images.dinosaurpictures.org/Camposaurus_799e.jpg';
    }
    if(dino.name === 'Brachiosaurus'){
      dino.pics[2].url = 'http://images.dinosaurpictures.org/papo_brachiosaurus_2012_cf3f.jpg';
    }
    if(dino.name === 'Blikanasaurus'){
      dino.pics[2].url = 'http://images.dinosaurpictures.org/blikanasaurus_cromptoni_by_teratophoneus-d4m7et6_7c92.jpg';
    }
    if(dino.name === 'Thecodontosaurus'){
      dino.pics[2].url = 'http://images.dinosaurpictures.org/thecodontosaurus_4c53.jpg';
    }
    if(dino.name === 'Eocarcharia'){
      dino.pics[2].url = 'http://images.dinosaurpictures.org/Eocarcharia-Ezequiel-Vera_f54e.jpg';
    }
    if(dino.name === 'Turiasaurus'){
      dino.pics[2].url = 'http://images.dinosaurpictures.org/Turiasaurus-Riodevensis_f10d.jpg';
    }
    if(dino.name === 'Rapator'){
      dino.pics[2].url = 'http://images.dinosaurpictures.org/__ridge_ripper____rapator___by_kunfuzzledful-d5n6ik2_5a51.jpg';
    }
    if(dino.name === 'Thanos'){
      dino.pics[2].url = 'https://images.dinosaurpictures.org/Thanos/Thanos_gr8ArQ0_0555.jpg';
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
