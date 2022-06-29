use javasaurus;
db.dropDatabase();

db.creators.insertMany([

    {name: "Colette Dufficy", picture: "https://avatars.githubusercontent.com/u/90625181?v=4", linkedIn: "https://www.linkedin.com/in/colettedufficy/", GitHub: "https://github.com/ColetteDufficy"},
    {name: "Sean Johnson", picture: "https://avatars.githubusercontent.com/u/98856218?v=4", linkedIn: "https://www.linkedin.com/in/communicasean/", GitHub: "https://github.com/sjohns2020"},
    {name: "Xander Mackenzie", picture: "https://avatars.githubusercontent.com/u/98990717?v=4", linkedIn: "https://www.linkedin.com/in/xandermackenzie/", GitHub: "https://github.com/crabbit-git"},
    {name: "Heather Lamont", picture: "https://avatars.githubusercontent.com/u/98851496?v=4", linkedIn: "https://www.linkedin.com/in/heather-lamont-05aa3b46/", GitHub: "https://github.com/HeatherLamont"}
    
])

db.randomFacts.insertMany([
    {key: 1, comment: "Dinosaurs are a group of reptiles that have lived on Earth for about 245 million years."}, 
    {key: 2, comment: "In 1842, the English naturalist Sir Richard Owen coined the term Dinosauria, derived from the Greek deinos, meaning “fearfully great,” and sauros, meaning “lizard.”"},
    {key: 3, comment: "Dinosaur fossils have been found on all seven continents."},
    {key: 4, comment: "All non-avian dinosaurs went extinct about 66 million years ago."},
    {key: 5, comment: "There are roughly 700 known species of extinct dinosaurs."},
    {key: 6, comment: "Modern birds are a kind of dinosaur because they share a common ancestor with non-avian dinosaurs."},
    {key: 7, comment:  "Paleontologists use fossil evidence preserved in ancient rock to discover how long-extinct animals lived and behaved. "},
    {key: 8, comment: "In most cases, a fossilized bone is actually a rock made out of minerals, with no trace of the original bone material."},
    {key: 9, comment: "The discovery of dinosaur eggs and nests provided evidence for the behavior of some dinosaurs."},
    {key: 10, comment: "By comparing the skulls of Protoceratops of different ages (like in the image above), paleontologists can draw conclusions about how some dinosaurs grew."},
    {key: 11, comment: "To discover how organisms lived in the past, paleontologists look for clues preserved in ancient rocks—the fossilized bones, teeth, eggs, footprints, teeth marks, leaves, and even dung of ancient organisms."},
    {key: 12, comment: "Fossilized jaws, teeth, and dung provide important clues about what non-avian dinosaurs ate."},
    {key: 13, comment: "Series of fossilized footprints, called trackways, reveal some intriguing evidence about dinosaur behavior and locomotion."},
    {key: 14, comment: "Until recently it was believed that feathers were unique to birds. Recent discoveries, however, have unearthed evidence for feathered non-avian dinosaurs."}
  ])