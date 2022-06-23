use javasaurus;
db.dropDatabase();

const dinosFromApi = [
  {
    "creatureType": "dinosaur",
    "name": "Agnosphitys",
    "period": "Triassic",
    "eats": "(unknown)",
    "regions": [
    "Europe"
    ],
    "pics": [
    {
    "votingUrl": "http://www.wikidino.com/wp-content/uploads/Agnosphitys-karkemish00.jpg",
    "url": "http://images.dinosaurpictures.org/Agnosphitys-karkemish00_ce7f.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Agnosphitys-karkemish00_ce7f.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.2J9H11HBgJZYZLNviIk93w&pid=15.1",
    "source": "http://www.wikidino.com/?tag=agnosphitys",
    "source_display": "www.wikidino.com/?tag=agnosphitys"
    },
    {
    "votingUrl": "http://4.bp.blogspot.com/-lZxT24HbOxw/T8JbH3jUZbI/AAAAAAAAAKg/vLLwmjz0y2Q/s1600/agnosphitys.jpg",
    "url": "http://images.dinosaurpictures.org/agnosphitys_31f3.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/agnosphitys_31f3.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.AKzFsyBCy6GEM%2bs7VazdQQ&pid=15.1",
    "source": "http://detodounpoco2907.blogspot.com/2012/05/dinosuarios-1-parte.html",
    "source_display": "detodounpoco2907.blogspot.com/2012/05/dinosuarios-1-parte.html"
    },
    {
    "votingUrl": "http://fc07.deviantart.net/fs71/i/2012/070/3/2/agnosphitys_cromhallensis_by_teratophoneus-d4seytw.jpg",
    "url": "http://images.dinosaurpictures.org/agnosphitys_cromhallensis_by_teratophoneus-d4seytw_20b7.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/agnosphitys_cromhallensis_by_teratophoneus-d4seytw_20b7.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.dUrG%2fes6jD5HU6ADm92Wmg&pid=15.1",
    "source": "http://www.datuopinion.com/agnosphitys",
    "source_display": "www.datuopinion.com/agnosphitys"
    },
    {
    "votingUrl": "http://images4.wikia.nocookie.net/__cb20120305144045/acam/es/images/7/7f/Agnosphitys.jpg",
    "url": "http://images.dinosaurpictures.org/Agnosphitys_8be3.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Agnosphitys_8be3.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.B7mPSd3s12hL72cd5jTcfQ&pid=15.1",
    "source": "http://elblogdelosdinos.blogspot.com/p/la-dinoguia.html",
    "source_display": "elblogdelosdinos.blogspot.com/p/la-dinoguia.html"
    }
    ],
    "shouldShowMap": true,
    "mapUrl": "/api/dinosaur/Agnosphitys/map",
    "refs": [
    "N. C. Fraser and K. Padian. 1995. Possible basal dinosaur remains from Britain and the diagnosis of the Dinosauria. Journal of Vertebrate Paleontology 15(3, suppl.):30A"
    ],
    "globeUrl": "http://dinosaurpictures.org/ancient-earth/#220"
    },
    
    {
    "creatureType": "dinosaur",
    "name": "Blikanasaurus",
    "period": "Triassic",
    "eats": "herbivore",
    "regions": [
    "Africa"
    ],
    "pics": [
    {
    "votingUrl": "http://fc08.deviantart.net/fs70/i/2012/013/a/d/blikanasaurus_cromptoni_by_teratophoneus-d4m7et6.jpg",
    "url": "http://images.dinosaurpictures.org/blikanasaurus_cromptoni_by_teratophoneus-d4m7et6_7c92.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/blikanasaurus_cromptoni_by_teratophoneus-d4m7et6_7c92.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.OwREw0phaCuRF%2fkV2egODw&pid=15.1",
    "source": "http://teratophoneus.deviantart.com/art/Blikanasaurus-cromptoni-279162042",
    "source_display": "teratophoneus.deviantart.com/art/Blikanasaurus-cromptoni-279162042"
    },
    {
    "votingUrl": "http://www.dinosaurfact.net/Pictures/Blikanasaurus.jpg",
    "url": "http://images.dinosaurpictures.org/Blikanasaurus_768d.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Blikanasaurus_768d.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.RvRAtZUt4%2f4t86Hy3dUG%2fw&pid=15.1",
    "source": "http://www.dinosaurfact.net/Triassic/Blikanasaurus.php",
    "source_display": "www.dinosaurfact.net/Triassic/Blikanasaurus.php"
    },
    {
    "votingUrl": "http://fc03.deviantart.net/fs42/i/2009/087/f/d/Blikanasaurus_cromptoni_by_EmperorDinobot.jpg",
    "url": "http://images.dinosaurpictures.org/Blikanasaurus_cromptoni_by_EmperorDinobot_384a.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Blikanasaurus_cromptoni_by_EmperorDinobot_384a.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.0YymsdbklPMJW41RZ6rTpA&pid=15.1",
    "source": "http://emperordinobot.deviantart.com/art/Blikanasaurus-cromptoni-117347022",
    "source_display": "emperordinobot.deviantart.com/art/Blikanasaurus-cromptoni-117347022"
    }
    ],
    "shouldShowMap": true,
    "mapUrl": "/api/dinosaur/Blikanasaurus/map",
    "refs": [
    "P. Ellenberger. 1970. Les niveaux paléontologiques de première apparition des mammifères primoridaux en Afrique du Sud et leur ichnologie.  Establissement de zones stratigraphiques detaillees dans le Stormberg du Lesotho (Afrique du Sud) (Trias Supérieur à Jurassique) [The paleontological levels of the first appearance of primordial mammals in southern Africa and their ichnology.  Establishment of detailed stratigraphic zones in the Stormberg of Lesotho (southern Africa) (Upper Triassic to Jurassic). In: S. H. Haughton (ed.), Second Symposium on Gondwana Stratigraphy and Paleontology, International Union of Geological Sciences.  Council for Scientific and Industrial Research, Pretoria ",
    "A. M. Yates. 2008. A second specimen of Blikanasaurus (Dinosauria: Sauropoda) and the biostratigraphy of the lower Elliot Formation. Palaeontologia africana 43:39-43"
    ],
    "globeUrl": "http://dinosaurpictures.org/ancient-earth/#220"
    },
    
    {
    "creatureType": "dinosaur",
    "name": "Blikanasaurus",
    "period": "Triassic",
    "eats": "herbivore",
    "regions": [
    "Africa"
    ],
    "pics": [
    {
    "votingUrl": "http://fc08.deviantart.net/fs70/i/2012/013/a/d/blikanasaurus_cromptoni_by_teratophoneus-d4m7et6.jpg",
    "url": "http://images.dinosaurpictures.org/blikanasaurus_cromptoni_by_teratophoneus-d4m7et6_7c92.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/blikanasaurus_cromptoni_by_teratophoneus-d4m7et6_7c92.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.OwREw0phaCuRF%2fkV2egODw&pid=15.1",
    "source": "http://teratophoneus.deviantart.com/art/Blikanasaurus-cromptoni-279162042",
    "source_display": "teratophoneus.deviantart.com/art/Blikanasaurus-cromptoni-279162042"
    },
    {
    "votingUrl": "http://www.dinosaurfact.net/Pictures/Blikanasaurus.jpg",
    "url": "http://images.dinosaurpictures.org/Blikanasaurus_768d.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Blikanasaurus_768d.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.RvRAtZUt4%2f4t86Hy3dUG%2fw&pid=15.1",
    "source": "http://www.dinosaurfact.net/Triassic/Blikanasaurus.php",
    "source_display": "www.dinosaurfact.net/Triassic/Blikanasaurus.php"
    },
    {
    "votingUrl": "http://fc03.deviantart.net/fs42/i/2009/087/f/d/Blikanasaurus_cromptoni_by_EmperorDinobot.jpg",
    "url": "http://images.dinosaurpictures.org/Blikanasaurus_cromptoni_by_EmperorDinobot_384a.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Blikanasaurus_cromptoni_by_EmperorDinobot_384a.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.0YymsdbklPMJW41RZ6rTpA&pid=15.1",
    "source": "http://emperordinobot.deviantart.com/art/Blikanasaurus-cromptoni-117347022",
    "source_display": "emperordinobot.deviantart.com/art/Blikanasaurus-cromptoni-117347022"
    }
    ],
    "shouldShowMap": true,
    "mapUrl": "/api/dinosaur/Blikanasaurus/map",
    "refs": [
    "P. Ellenberger. 1970. Les niveaux paléontologiques de première apparition des mammifères primoridaux en Afrique du Sud et leur ichnologie.  Establissement de zones stratigraphiques detaillees dans le Stormberg du Lesotho (Afrique du Sud) (Trias Supérieur à Jurassique) [The paleontological levels of the first appearance of primordial mammals in southern Africa and their ichnology.  Establishment of detailed stratigraphic zones in the Stormberg of Lesotho (southern Africa) (Upper Triassic to Jurassic). In: S. H. Haughton (ed.), Second Symposium on Gondwana Stratigraphy and Paleontology, International Union of Geological Sciences.  Council for Scientific and Industrial Research, Pretoria ",
    "A. M. Yates. 2008. A second specimen of Blikanasaurus (Dinosauria: Sauropoda) and the biostratigraphy of the lower Elliot Formation. Palaeontologia africana 43:39-43"
    ],
    "globeUrl": "http://dinosaurpictures.org/ancient-earth/#220"
    },
    
    {
    "creatureType": "dinosaur",
    "name": "Camposaurus",
    "period": "Triassic",
    "eats": "carnivore",
    "regions": [
    "North America"
    ],
    "pics": [
    {
    "votingUrl": "http://www.dinosaurfact.net/Pictures/Camposaurus.jpg",
    "url": "http://images.dinosaurpictures.org/Camposaurus_799e.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Camposaurus_799e.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.clHq3C7mxryyBh0NHl541g&pid=15.1",
    "source": "http://www.dinosaurfact.net/Triassic/Camposaurus.php",
    "source_display": "www.dinosaurfact.net/Triassic/Camposaurus.php"
    },
    {
    "votingUrl": "http://images2.wikia.nocookie.net/acam/es/images/f/fb/Camposaurus.png",
    "url": "http://images.dinosaurpictures.org/Camposaurus_609e.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Camposaurus_609e.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.TYejV%2bUdyBpyHvnfb7X%2baQ&pid=15.1",
    "source": "http://es.acam.wikia.com/wiki/Camposaurus",
    "source_display": "es.acam.wikia.com/wiki/Camposaurus"
    },
    {
    "votingUrl": "http://www.dinosaurfact.net/Pictures/Camposaurus3.jpg",
    "url": "http://images.dinosaurpictures.org/Camposaurus3_3cfd.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Camposaurus3_3cfd.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.YjQgTJvLZMjqExqHZ8p44w&pid=15.1",
    "source": "http://www.dinosaurfact.net/Triassic/Camposaurus.php",
    "source_display": "www.dinosaurfact.net/Triassic/Camposaurus.php"
    },
    {
    "votingUrl": "http://www.wikidino.com/wp-content/uploads/Camposaurus-wikidino.jpg",
    "url": "http://images.dinosaurpictures.org/Camposaurus-wikidino_8334.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Camposaurus-wikidino_8334.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.xRw5arJ8x2G1fi%2bNEzt9DQ&pid=15.1",
    "source": "http://www.wikidino.com/?attachment_id=20295",
    "source_display": "www.wikidino.com/?attachment_id=20295"
    }
    ],
    "shouldShowMap": false,
    "mapUrl": "/api/dinosaur/Camposaurus/map",
    "refs": [],
    "globeUrl": "http://dinosaurpictures.org/ancient-earth/#220"
    },
    
    {
    "creatureType": "dinosaur",
    "name": "Thecodontosaurus",
    "period": "Triassic",
    "eats": "herbivore",
    "regions": [
    "Europe"
    ],
    "pics": [
    {
    "votingUrl": "http://2.bp.blogspot.com/_t20nYP_aeuE/Swk5pfFNX6I/AAAAAAAABM4/gC8eIZzE8PA/s1600/thecodontosaurus.JPG",
    "url": "http://images.dinosaurpictures.org/thecodontosaurus_1b52.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/thecodontosaurus_1b52.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.0xe%2fuzjSPqbWKxIIcU2%2f0w&pid=15.1",
    "source": "http://subhumanfreak.blogspot.com/2009_11_01_archive.html",
    "source_display": "subhumanfreak.blogspot.com/2009_11_01_archive.html"
    },
    {
    "votingUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2b/NMW_-_Thecodontosaurus.jpg",
    "url": "http://images.dinosaurpictures.org/NMW_-_Thecodontosaurus_fa7c.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/NMW_-_Thecodontosaurus_fa7c.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.kQHjR3fo1H6Va8UIGF87WA&pid=15.1",
    "source": "https://commons.wikimedia.org/wiki/File:NMW_-_Thecodontosaurus.jpg",
    "source_display": "https://commons.wikimedia.org/wiki/File:NMW_-_Thecodontosaurus.jpg"
    },
    {
    "votingUrl": "http://0.tqn.com/d/dinosaurs/1/0/C/1/-/-/thecodontosaurus.jpg",
    "url": "http://images.dinosaurpictures.org/thecodontosaurus_e158.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/thecodontosaurus_e158.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.oQ1a1JB%2fY4Sy8L6cfUF2kQ&pid=15.1",
    "source": "http://dinosaurs.about.com/od/dinosaurpictures/ig/Prosauropod-Pictures/Thecodontosaurus.htm",
    "source_display": "dinosaurs.about.com/od/dinosaurpictures/ig/Prosauropod-Pictures..."
    },
    {
    "votingUrl": "http://www.prehistoric-wildlife.com/images/species/t/thecodontosaurus-size.jpg",
    "url": "http://images.dinosaurpictures.org/thecodontosaurus-size_660f.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/thecodontosaurus-size_660f.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.t4ckc5ZhxPGryE%2bBBVkZLQ&pid=15.1",
    "source": "http://www.prehistoric-wildlife.com/species/t/thecodontosaurus.html",
    "source_display": "www.prehistoric-wildlife.com/species/t/thecodontosaurus.html"
    },
    {
    "votingUrl": "http://fc09.deviantart.net/images/i/2003/46/2/d/Thecodontosaurus_caducus_h_A.png",
    "url": "http://images.dinosaurpictures.org/Thecodontosaurus_caducus_h_A_fe36.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Thecodontosaurus_caducus_h_A_fe36.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.DjxNqdvgo%2bltNaCeuXECRQ&pid=15.1",
    "source": "http://aspidel.deviantart.com/art/Thecodontosaurus-caducus-h-A-3860458",
    "source_display": "aspidel.deviantart.com/art/Thecodontosaurus-caducus-h-A-3860458"
    },
    {
    "votingUrl": "http://ayay.co.uk/backgrounds/dinosaurs/herbivore/thecodontosaurus.jpg",
    "url": "http://images.dinosaurpictures.org/thecodontosaurus_7557.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/thecodontosaurus_7557.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.79WYWtFmGuFrWTGGz%2fXlmw&pid=15.1",
    "source": "http://ayay.co.uk/background/dinosaurs/herbivore/thecodontosaurus/",
    "source_display": "ayay.co.uk/background/dinosaurs/herbivore/thecodontosaurus"
    },
    {
    "votingUrl": "http://island.geocities.jp/ateliersaurus/thecodontosaurus.jpg",
    "url": "http://images.dinosaurpictures.org/thecodontosaurus_4c53.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/thecodontosaurus_4c53.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.TZ5uQiKI8nGfdALF3IjPUA&pid=15.1",
    "source": "http://island.geocities.jp/ateliersaurus/thecodontosaurus.html",
    "source_display": "island.geocities.jp/ateliersaurus/thecodontosaurus.html"
    },
    {
    "votingUrl": "http://www.reptileevolution.com/images/archosauromorpha/diapsida/archosauriformes/dinosauromorpha/thecodontosaurus588.jpg",
    "url": "http://images.dinosaurpictures.org/thecodontosaurus588_5966.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/thecodontosaurus588_5966.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.1pD1U0pFqc4OKXxrclzlcQ&pid=15.1",
    "source": "http://www.club-balalaika.de/27/elliot-dinosaur",
    "source_display": "www.club-balalaika.de/27/elliot-dinosaur"
    },
    {
    "votingUrl": "http://fc08.deviantart.net/fs70/i/2014/222/c/1/thecodontosaurus_antiquus_by_emperordinobot-d7un4eh.jpg",
    "url": "http://images.dinosaurpictures.org/thecodontosaurus_antiquus_by_emperordinobot-d7un4eh_66aa.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/thecodontosaurus_antiquus_by_emperordinobot-d7un4eh_66aa.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.xxiiyUj3PZsnv9hTgMJegg&pid=15.1",
    "source": "http://dinotoyblog.com/forum/index.php?topic=733.20",
    "source_display": "dinotoyblog.com/forum/index.php?topic=733.20"
    },
    {
    "votingUrl": "http://critters.pixel-shack.com/WebImages/crittersgallery/Thecodontosaurus1.jpg",
    "url": "http://images.dinosaurpictures.org/Thecodontosaurus1_626b.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Thecodontosaurus1_626b.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.CezhT7ff9OlM0DWtwPS%2bFQ&pid=15.1",
    "source": "http://critters.pixel-shack.com/GalleryT.htm",
    "source_display": "critters.pixel-shack.com/GalleryT.htm"
    },
    {
    "votingUrl": "http://www.nenature.com/DinoImages/Thecodontosaurus089.jpg",
    "url": "http://images.dinosaurpictures.org/Thecodontosaurus089_c2e9.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Thecodontosaurus089_c2e9.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.teIIAIgLWKaV%2fQZyM4lHKQ&pid=15.1",
    "source": "http://www.nenature.com/Dinosaurs/Thecodontosaurus.htm",
    "source_display": "www.nenature.com/Dinosaurs/Thecodontosaurus.htm"
    },
    {
    "votingUrl": "http://critters.pixel-shack.com/WebImages/crittersgallery/Thecodontosaurus.jpg",
    "url": "http://images.dinosaurpictures.org/Thecodontosaurus_03e5.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Thecodontosaurus_03e5.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.oQYeWRCoJYzDI9vNt5TDTw&pid=15.1",
    "source": "http://critters.pixel-shack.com/GalleryT.htm",
    "source_display": "critters.pixel-shack.com/GalleryT.htm"
    },
    {
    "votingUrl": "http://1.bp.blogspot.com/-S7nYsyWtERk/TwpEqkv7BEI/AAAAAAAAAcE/pIOUxfSQbjs/s1600/Thecodontosaurus_NT.jpg",
    "url": "http://images.dinosaurpictures.org/Thecodontosaurus_NT_b6ea.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Thecodontosaurus_NT_b6ea.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.Ar3Nj6m9g84wKlu1tv%2bLXA&pid=15.1",
    "source": "http://paleoexhibit.blogspot.com/2012/01/late-triassic-dinosaurs-british-isles.html",
    "source_display": "paleoexhibit.blogspot.com/2012/01/late-triassic-dinosaurs-british..."
    },
    {
    "votingUrl": "http://www.dinosaurfact.net/Pictures/Thecodontosaurus.jpg",
    "url": "http://images.dinosaurpictures.org/Thecodontosaurus_62ea.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Thecodontosaurus_62ea.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.6D51qfMq%2ffzfPmnIR6rOBQ&pid=15.1",
    "source": "http://dinosaursfriend.blogspot.com/2009_12_01_archive.html",
    "source_display": "dinosaursfriend.blogspot.com/2009_12_01_archive.html"
    },
    {
    "votingUrl": "http://qilong.files.wordpress.com/2013/10/thecodontosaurus-antiquus-skeleton1.png",
    "url": "http://images.dinosaurpictures.org/thecodontosaurus-antiquus-skeleton1_5bde.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/thecodontosaurus-antiquus-skeleton1_5bde.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.5gDL2P9Ty0Qvc8cECStFew&pid=15.1",
    "source": "http://qilong.wordpress.com/2013/10/29/sauropod-from-under-bristol/",
    "source_display": "qilong.wordpress.com/2013/10/29/sauropod-from-under-bristol"
    },
    {
    "votingUrl": "http://3.bp.blogspot.com/-yuVXmtla5dw/UHR1oUlNi3I/AAAAAAAABfg/gE_wyvM8VUQ/s1600/Thecodontosaurus.jpg",
    "url": "http://images.dinosaurpictures.org/Thecodontosaurus_dff9.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Thecodontosaurus_dff9.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.euy41hcwlA2s8Oc0GZlzrQ&pid=15.1",
    "source": "http://chasmosaurs.blogspot.com/2012/10/vintage-dinosaur-art-more-from-age-of.html",
    "source_display": "chasmosaurs.blogspot.com/2012/10/vintage-dinosaur-art-more-from-age..."
    },
    {
    "votingUrl": "http://dinoidakos.w.interia.pl/zauropody/thecodontosaurus.gif",
    "url": "http://images.dinosaurpictures.org/thecodontosaurus_d327.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/thecodontosaurus_d327.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.RX6E0lI%2bDrErg1QyZB7%2fWA&pid=15.1",
    "source": "http://paleo-studies.tumblr.com/post/16841946067/thecodontosaurus-information-sheet",
    "source_display": "paleo-studies.tumblr.com/post/16841946067/thecodontosaurus..."
    },
    {
    "votingUrl": "http://www.dinosaurier-interesse.de/web/Bilder/Hille/Thecodontosaurus-bunt-500.gif",
    "url": "http://images.dinosaurpictures.org/Thecodontosaurus-bunt-500_2375.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Thecodontosaurus-bunt-500_2375.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.43wedMtH70XEpHwXXX6UiA&pid=15.1",
    "source": "http://www.dinosaurier-interesse.de/web/Saurierarten/Thecodontosaurus.html",
    "source_display": "www.dinosaurier-interesse.de/web/Saurierarten/Thecodontosaurus.html"
    },
    {
    "votingUrl": "http://www.palaeocritti.com/_/rsrc/1259372954237/by-group/dinosauria/sauropoda/thecodontosaurus/Thecodontosaurus_skel.jpg",
    "url": "http://images.dinosaurpictures.org/Thecodontosaurus_skel_e3ca.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Thecodontosaurus_skel_e3ca.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.NmOUmBFOV4lGuop83%2fWgag&pid=15.1",
    "source": "http://paleo-studies.tumblr.com/post/16841946067/thecodontosaurus-information-sheet",
    "source_display": "paleo-studies.tumblr.com/post/16841946067/thecodontosaurus..."
    }
    ],
    "shouldShowMap": true,
    "mapUrl": "/api/dinosaur/Thecodontosaurus/map",
    "refs": [
    "A. M. MacGregor. 1929. Fossil reptilian remains from Glen Curragh Farm, Nyamandhlovu District. Proceedings of the Rhodesia Scientific Association 29:6-7",
    "F. v. Huene. 1902. Übersicht über die Reptilien der Trias [Review of the Reptilia of the Triassic]. Geologische und Paläontologische Abhandlungen (Neue Serie). Gustav Fischer Verlag, Jena 6:1-84",
    "W. Buckland. 1824. Reliquiæ Diluvianæ; or, Observations on the Organic Remains Contained in Caves, Fissures, and Diluvial Gravel, and on Other Geological Phenomena, Attesting the Action of an Universal Deluge. Second Edition. John Murray, London ",
    "P. L. Robinson. 1957. The Mesozoic fissures of the Bristol Channel area and their vertebrate faunas. Zoological Journal of the Linnean Society 43:260-228",
    "J. E. A. Marshall and D. I. Whiteside. 1980. Marine influence in the Triassic \"uplands\". Nature 287:627-628",
    "J. J. Thomasset. 1930. Le bone-bed rhétien de la vallée de la Dheune [The Rhaetian bonebed of the Dheune valley]. Bulletin de la Société Géologique de France, 4e série 30(9):1115-1120",
    "P. Gervais. 1852. Zoologie et Paléontologie Françaises (Animaux Vertébrés) ou Nouvelles Recherches sur les Animaux Vivants et Fossiles de la France [French Zoology and Paleontology (Vertebrate Animals) or New Research on the Living and Fossil Animals of France] 1–3:1-274+",
    "M. J. Benton and P. S. Spencer. 1995. Fossil Reptiles of Great Britain. Chapman & Hall, London ",
    "F. v. Huene. 1905. Trias-Dinosaurier Europas [European Triassic dinosaurs]. Zeitschrift der Deutschen Geologischen Gesellschaft 57:345-349",
    "H. B. Maufe. 1916. (Discovery of dinosaurian remains in the Forest Sandstones of Southern Rhodesia). Transactions of the Geological Society of South Africa 17(Proceeding):xxxiii-xxxiv",
    "R. Owen. 1871. Fossil Mammalia of the Mesozoic formations. Palaeontographical Society Monographs 24(110):1-115",
    "P. Ellenberger. 1970. Les niveaux paléontologiques de première apparition des mammifères primoridaux en Afrique du Sud et leur ichnologie.  Establissement de zones stratigraphiques detaillees dans le Stormberg du Lesotho (Afrique du Sud) (Trias Supérieur à Jurassique) [The paleontological levels of the first appearance of primordial mammals in southern Africa and their ichnology.  Establishment of detailed stratigraphic zones in the Stormberg of Lesotho (southern Africa) (Upper Triassic to Jurassic). In: S. H. Haughton (ed.), Second Symposium on Gondwana Stratigraphy and Paleontology, International Union of Geological Sciences.  Council for Scientific and Industrial Research, Pretoria ",
    "A. S. Woodward. 1889. Catalogue of the Fossil Fishes in the British Museum (Natural History) Part 1 "
    ],
    "globeUrl": "http://dinosaurpictures.org/ancient-earth/#220"
    },
    
    {
    "creatureType": "dinosaur",
    "name": "Allosaurus",
    "period": "Jurassic",
    "eats": "carnivore",
    "regions": [
    "Africa",
    "Europe",
    "North America"
    ],
    "pics": [
    {
    "votingUrl": "http://3.bp.blogspot.com/-CR3BmQpu2wU/UNKMn-CrSjI/AAAAAAAAFNA/uFPlfmh0Yp4/s1600/AllosaurusSP2008.jpg",
    "url": "http://images.dinosaurpictures.org/AllosaurusSP2008_2689.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/AllosaurusSP2008_2689.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.H5w0DejIpEQ1xtFH8fylig&pid=15.1",
    "source": "http://thenaturalworld1.blogspot.com/2012/12/23-fact-tuesday-allosaurus.html",
    "source_display": "thenaturalworld1.blogspot.com/2012/12/23-fact-tuesday-allosaurus.html"
    },
    {
    "votingUrl": "http://brantworks.com/resources/Allosaurus/brANTS-Allo-Nov08-w-1000.jpg",
    "url": "http://images.dinosaurpictures.org/brANTS-Allo-Nov08-w-1000_dfb0.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/brANTS-Allo-Nov08-w-1000_dfb0.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.sqk7wwhXfP26tRHdAtmbOg&pid=15.1",
    "source": "http://brantworks.com/allosaurus-skeleton.php",
    "source_display": "brantworks.com/allosaurus-skeleton.php"
    },
    {
    "votingUrl": "http://www.dinosaurfact.net/Pictures/Allosaurus2.jpg",
    "url": "http://images.dinosaurpictures.org/Allosaurus2_e7af.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Allosaurus2_e7af.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.BD9UtYZST%2bDeSnhTHCgD4Q&pid=15.1",
    "source": "http://www.dinosaurfact.net/jurassic/Allosaurus.php",
    "source_display": "www.dinosaurfact.net/jurassic/Allosaurus.php"
    },
    {
    "votingUrl": "http://2.bp.blogspot.com/_unC-T-c_LsY/TMeulCQAQCI/AAAAAAAAAJ8/4g3U-PJNAj0/s1600/Allosaurus0003.jpg",
    "url": "http://images.dinosaurpictures.org/Allosaurus0003_091b.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Allosaurus0003_091b.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.xblvk2luiHjhAEekGMd05Q&pid=15.1",
    "source": "http://benr8tis.blogspot.com/2010/10/allosaurus-pronounced-lsrs-was-genus-of.html",
    "source_display": "benr8tis.blogspot.com/2010/10/allosaurus-pronounced-lsrs-was-genus..."
    },
    {
    "votingUrl": "http://www.dinosaurier-info.de/images/dinosaurs/dino_a/~allosaurus/allosaurus_berlin_614.jpg",
    "url": "http://images.dinosaurpictures.org/allosaurus_berlin_614_12ad.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/allosaurus_berlin_614_12ad.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.fFSGZW9j7%2fLBH4U%2fjAXwOg&pid=15.1",
    "source": "http://www.dinosaurier-info.de/animals/dinosaurs/pages_a/allosaurus.php",
    "source_display": "www.dinosaurier-info.de/animals/dinosaurs/pages_a/allosaurus.php"
    },
    {
    "votingUrl": "http://www.cmstudio.com/image/Allosaurus0004.jpg",
    "url": "http://images.dinosaurpictures.org/Allosaurus0004_bf3e.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Allosaurus0004_bf3e.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.rApLer0ybVD4kRlwOrjlqg&pid=15.1",
    "source": "http://www.cmstudio.com/allosaurus.html",
    "source_display": "www.cmstudio.com/allosaurus.html"
    },
    {
    "votingUrl": "http://www.dinosaurcollectorsitea.com/papo_files/allosaurus_papo.jpg",
    "url": "http://images.dinosaurpictures.org/allosaurus_papo_a699.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/allosaurus_papo_a699.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.k5iEQfmzmxz3bd03vGz4qg&pid=15.1",
    "source": "http://www.dinosaurcollectorsitea.com/papo.html",
    "source_display": "www.dinosaurcollectorsitea.com/papo.html"
    },
    {
    "votingUrl": "http://dinosaurioss.com/wp-content/uploads/2014/08/Allosaurus4.png",
    "url": "http://images.dinosaurpictures.org/Allosaurus4_d8ad.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Allosaurus4_d8ad.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.dVxrkZbXjW%2fObrIiRuNwUQ&pid=15.1",
    "source": "http://dinosaurioss.com/allosaurus/",
    "source_display": "dinosaurioss.com/allosaurus"
    },
    {
    "votingUrl": "http://upload.wikimedia.org/wikipedia/commons/5/51/Allosaurus_BW.jpg",
    "url": "http://images.dinosaurpictures.org/Allosaurus_BW_33f6.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Allosaurus_BW_33f6.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.nHbbVgQxPCoc4%2b0xxoBiKg&pid=15.1",
    "source": "http://commons.wikimedia.org/wiki/File:Allosaurus_BW.jpg",
    "source_display": "commons.wikimedia.org/wiki/File:Allosaurus_BW.jpg"
    },
    {
    "votingUrl": "http://fc01.deviantart.net/fs71/i/2011/145/a/1/allosaurus_5_by_baryonyx_walkeri-d3h7ha0.jpg",
    "url": "http://images.dinosaurpictures.org/allosaurus_5_by_baryonyx_walkeri-d3h7ha0_ba6d.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/allosaurus_5_by_baryonyx_walkeri-d3h7ha0_ba6d.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.v0ULEORFd05Mpy3QH%2f5kQg&pid=15.1",
    "source": "http://baryonyx-walkeri.deviantart.com/art/Allosaurus-5-210300984",
    "source_display": "baryonyx-walkeri.deviantart.com/art/Allosaurus-5-210300984"
    },
    {
    "votingUrl": "http://www.wikidino.com/wp-content/uploads/Allosaurus-unknown.jpg",
    "url": "http://images.dinosaurpictures.org/Allosaurus-unknown_dd34.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Allosaurus-unknown_dd34.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.i2E78ZU5Vn9MY%2fW%2fek7ryw&pid=15.1",
    "source": "http://www.wikidino.com/?page_id=84",
    "source_display": "www.wikidino.com/?page_id=84"
    },
    {
    "votingUrl": "http://upload.wikimedia.org/wikipedia/commons/9/9f/Allosaurus_in_Baltow_20060916_1500.jpg",
    "url": "http://images.dinosaurpictures.org/Allosaurus_in_Baltow_20060916_1500_5a0b.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Allosaurus_in_Baltow_20060916_1500_5a0b.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.yvAqre6%2fx0ZrIFRUhuhkLg&pid=15.1",
    "source": "http://en.wikipedia.org/wiki/File:Allosaurus_in_Baltow_20060916_1500.jpg",
    "source_display": "en.wikipedia.org/wiki/File:Allosaurus_in_Baltow_20060916_1500.jpg"
    },
    {
    "votingUrl": "http://www.juniorgeo.co.uk/images/allosaurus1500.jpg",
    "url": "http://images.dinosaurpictures.org/allosaurus1500_744e.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/allosaurus1500_744e.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.QRwFvygM1EuMcXkn277ytw&pid=15.1",
    "source": "http://www.juniorgeo.co.uk/shop/index.php?category=2&shop_category_id=7",
    "source_display": "www.juniorgeo.co.uk/shop/index.php?category=2&shop_category_id=7"
    },
    {
    "votingUrl": "http://www.dinosaurcollectorsitea.com/CSafari_files/ws_Allosaurus.jpg",
    "url": "http://images.dinosaurpictures.org/ws_Allosaurus_6de6.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/ws_Allosaurus_6de6.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.pu8PtPJqSXuVUIpx%2fh5cPg&pid=15.1",
    "source": "http://www.dinosaurcollectorsitea.com/WSafari.htm",
    "source_display": "www.dinosaurcollectorsitea.com/WSafari.htm"
    },
    {
    "votingUrl": "http://fc06.deviantart.net/fs70/i/2012/041/9/4/allosaurus_fragilis_by_ikessauro-d4pb4lr.png",
    "url": "http://images.dinosaurpictures.org/allosaurus_fragilis_by_ikessauro-d4pb4lr_96b9.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/allosaurus_fragilis_by_ikessauro-d4pb4lr_96b9.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.WlNG2ANltAnQgQ%2fYNk3mRQ&pid=15.1",
    "source": "http://ikessauro.deviantart.com/art/Allosaurus-fragilis-284374287",
    "source_display": "ikessauro.deviantart.com/art/Allosaurus-fragilis-284374287"
    },
    {
    "votingUrl": "http://www.cmstudio.com/image/Allosaurus.jpg",
    "url": "http://images.dinosaurpictures.org/Allosaurus_49cf.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Allosaurus_49cf.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.HyI3DMfcoxWKDqkrJI4oOg&pid=15.1",
    "source": "http://www.cmstudio.com/scale_models_4.html",
    "source_display": "www.cmstudio.com/scale_models_4.html"
    },
    {
    "votingUrl": "http://images3.wikia.nocookie.net/__cb20100806075012/dinocrisis/images/c/c3/Allosaurus.jpg",
    "url": "http://images.dinosaurpictures.org/Allosaurus_f1fb.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Allosaurus_f1fb.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.VN1oQHelMOG5S%2bGBDRwmVA&pid=15.1",
    "source": "http://dinocrisis.wikia.com/wiki/Allosaurus",
    "source_display": "dinocrisis.wikia.com/wiki/Allosaurus"
    },
    {
    "votingUrl": "http://www.rareresource.com/images/dinosaurs/allosaurus-dinosaur.png",
    "url": "http://images.dinosaurpictures.org/allosaurus-dinosaur_e761.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/allosaurus-dinosaur_e761.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.QzXnu0RkDYO7aXBjnk8VwA&pid=15.1",
    "source": "http://www.rareresource.com/allosaurus.htm",
    "source_display": "www.rareresource.com/allosaurus.htm"
    },
    {
    "votingUrl": "http://upload.wikimedia.org/wikipedia/commons/c/c3/Allosaurus.jpg",
    "url": "http://images.dinosaurpictures.org/Allosaurus_c4a0.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Allosaurus_c4a0.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.%2bS3nEnaPjtz8Go%2f5DmPYeA&pid=15.1",
    "source": "http://en.wikipedia.org/wiki/File:Allosaurus.jpg",
    "source_display": "en.wikipedia.org/wiki/File:Allosaurus.jpg"
    }
    ],
    "shouldShowMap": true,
    "mapUrl": "/api/dinosaur/Allosaurus/map",
    "refs": [
    "D. D. Gillette. 1991. Seismosaurus halli, gen. et sp. nov., a new sauropod dinosaur from the Morrison Formation (Upper Jurassic/Lower Cretaceous) of New Mexico, USA. Journal of Vertebrate Paleontology 11(4):417-433",
    "K. Carpenter and C. Miles. 1998. Skull of a Jurassic ankylosaur (Dinosauria). Nature 393:782-783",
    "C. A. Bjoraker and M. T. Naus. 1996. A summary of Morrison Formation (Jurassic: Kimmeridgian–Tithonian) geology and paleontology, with notice of a new dinosaur locality in the Bighorn Basin (USA).  In C. E. Bowen, S. C. Kirkwood, & T. S. Miller (eds.), Wyoming Geological Association Guidebook, Forty-Seventh Annual Field Conference. Resources of the Bighorn Basin ",
    "R. T. Bakker. 1998. Dinosaur mid-life crisis: the Jurassic-Cretaceous transition in Wyoming and Colorado.  In S. G. Lucas, J. I. Kirkland, and J. W. Estep (eds.), Lower and Middle Cretaceous Terrestrial Ecosystems, New Mexico Museum of Natural History and Science Bulletin 14:67-77",
    "B. Brown. 1934. How dinosaurs died 125,000,000 years ago. Science News Letter 26(694):51-52",
    "A. F. d.e. Lapparent and G. Zbyszewski. 1957. Les dinosauriens du Portugal [The dinosaurs of Portugal]. Mémoires des Services Géologiques du Portugal, nouvelle série 2:1-63",
    "P. M. Galton and J. A. Jensen. 1973. Skeleton of a hypsilophodontid dinosaur (Nanosaurus (?) rex) from the Upper Jurassic of Utah. Brigham Young University Geology Studies 20(4):137-157",
    "D. S. Jennings and B. F. Platt. 2006. Distribution of vertebrate trace fossils, Upper Jurassic Morrison Formation, Bighorn Basin, Wyoming, USA: implications for differentiating paleoecological and preservational bias.  In J. R. Foster & S. G. Lucas (ed.), Paleontology and Geology of the Upper Jurassic Morrison Formation. New Mexico Museum of Natural History and Science Bulletin 36:183-192",
    "A. L. Koch and F. Frost. 2006. Palaeontological discoveries at Curecanti National Recreation Area and Black Canyon of the Gunnison National Park, Upper Jurassic Morrison Formation, Colorado.  In J. R. Foster & S. G. Lucas (ed.), Paleontology and Geology of the Upper Jurassic Morrison Formation. New Mexico Museum of Natural History and Science Bulletin 36:35-38",
    "S. W. Williston. 1898. The sacrum of Morosaurus. Kansas University Quarterly 7:173-175",
    "E. L. Holt. 1940. The dinosaurs of the Grand River Valley. Journal of the Colorado-Wyoming Academy of Science 2(6):28-29",
    "Anonymous. 1973. The Great Dinosaur DIscovery ",
    "R. T. Bakker and J. Siegwarth. 1992. Edmarka rex, a new, gigantic theropod dinosaur from the middle Morrison Formation, Late Jurassic of the Como Bluff outcrop region. Hunteria 2(9):1-24",
    "W. Brasley. 1907. A carnivorous dinosaur: a reconstructed skeleton of a huge saurian. Scientific American 97(24):446",
    "D. J. Chure. 1994. Koparion douglassi, a new dinosaur from the Morrison Formation (Upper Jurassic) of Dinosaur National Monument; the oldest troodontid (Theropoda: Maniraptora). Brigham Young University Geology Studies 40:11-15",
    "D. K. Smith. 1997. Museum of Earth Science, Brigham Young University.  In P. J. Currie & K. Padian (ed.), Encyclopedia of Dinosaurs ",
    "S. G. Lucas and T. E. Williamson. 1996. Jurassic fossil vertebrates from New Mexico.  In M. Morales (ed.), The Continental Jurassic. Museum of Northern Arizona Bulletin 60:235-241",
    "P. Dodson and A. K. Behrensmeyer. 1980. Taphonomy and paleoecology of Upper Jurassic Morrison Formation. Paleobiology 6:208-232",
    "D. J. Chure and A. R. Fiorillo. 2000. Prey bone utilization by predatory dinosaurs in the Late Jurassic of North America, with comments on prey bone use by dinosaurs throughout the Mesozoic. Gaia 15:227-232",
    "H. E. Gregory. 1936. The San Juan country. A geographic and geologic reconnassance of southeastern Utah. United States Geological Survey Professional Paper 188:v-123",
    "R. T. Bakker. 1990. A new latest Jurassic vertebrate fauna, from the highest levels of the Morrison Formation at Como Bluff, Wyoming, with comments on Morrison biochronology. Part I. Biochronology. Hunteria 2(6):1-3",
    "A. R. Fiorillo. 1998. Bone modification features on sauropod remains (Dinosauria) from the Freezeout Hills Quarry N (Morrison Formation) of southeastern Wyoming and their contribution to fine-scale paleoenvironmental interpretation. Modern Geology 23(1-4):111-126",
    "C. W. Gilmore. 1920. Osteology of the carnivorous Dinosauria in the United States National Museum, with special reference to the genera Antrodemus (Allosaurus) and Ceratosaurus. Bulletin of the United States National Museum 110:1-154",
    "A. B. Heckert and J. A. Spielmann. 2003. An Upper Jurassic theropod dinosaur from the Section 19 Mine, Morrison Formation, Grants Uranium District. In: S. G. Lucas, S. C. Semken, W. Berglof, & D. Ulmer-Scholle (eds.), Geology of the Zuni Plateau.  New Mexico Geological Society, Fall Field Conference Guidebook 54:309-314",
    "J. W. Stovall. 1938. The Morrison of Oklahoma and its dinosaurs. Journal of Geology 46:583-600",
    "W. J. Holland. 1910. Section of Paleontology. Thirteenth Annual Report of the Director for the Year Ending March 31, 1910 ",
    "O. C. Marsh. 1871. On the geology of the eastern Uintah Mountains. The American Journal of Science and Arts, series 3 1:191-198",
    "F. J. Lisak. 1980. Allosaurus fragilis from the Late Jurassic of Southeastern Utah. Unpublished M.S. Thesis, Department of Zoology ",
    "O. C. Marsh. 1881. Discovery of a fossil bird in the Jurassic of Wyoming. American Journal of Science 31:341-342",
    "A. R. Fiorillo and C. L. May. 1996. Preliminary report on the taphonomy and depositional setting of a new dinosaur locality in the Morrison Formation (Brushy Basin Member) of Curecanti National Recreation Area, Colorado.  In M. Morales (ed.), The Continental Jurassic. Museum of Northern Arizona Bulletin 60:555-561",
    "S. G. Lucas and K. K. Kietzke. 1985. The Jurassic system in east-central New Mexico.  In S. G. Lucas & J. Zidek (ed.), New Mexico Geological Society, 36th Annual Fall Field Conference Guidebook, Santa Rosa, Tucumcari Region ",
    "W. J. Holland. 1905. The osteology of Diplodocus Marsh. With special reference to the restoration of the skeleton of Diplodocus carnegiei Hatcher, presented by Mr. Andrew Carnegie to the British Museum, May 12, 1905. Memoirs of the Carnegie Museum 2(6):225-264",
    "J. H. Ostrom and J. S. McIntosh. 1999. Marsh's Dinosaurs: The Collections from Como Bluff. Yale University Press, New Haven ",
    "J. S. McIntosh. 1981. Annotated catalogue of the dinosaurs (Reptilia, Archosauria) in the collections of the Carnegie Museum of Natural History. Bulletin of Carnegie Museum of Natural History 18:1-67",
    "M. K. Jesup. 1898. Department of Vertebrate Paleontology. Annual Report of the President, Treasurer's Report, List of Accessions, Act of Incorporation, Constitution, By-Laws and List of Members for the Year 1897 ",
    "P.-O. Mojon. 2001. Dinosauriens éocretacés des facies purbeckiens (Berriasien inférieur) du Jura méridional (S.-E. de la France) [Early Cretaceous dinosaurs from the Purbeck facies (lower Berriasian) of the southern Jura (SE France)]. Archives des Sciences Genève 54(1):1-5",
    "J. R. Foster. 1993. Sedminentology and taphonomy of the Little Houston Quarry, Morrison Formation (Upper Jurassic), northeast Wyoming. Journal of Vertebrate Paleontology 13(3, suppl.):38A",
    "H. F. Osborn and C. C. Mook. 1919. Camarasaurus, Amphicoelias, and other sauropods of Cope. Bulletin of the Geological Society of America 30:379-388",
    "C. Diedrich. 2011. Upper Jurassic tidal flat megatracksites of Germany—coastal dinosaur migration highways between European islands, and a review of the dinosaur footprints. Palaeobiodiversity and Palaeoenvironments 91:129-155",
    "E. D. Cope. 1877. On a carnivorous dinosaurian from the Dakota Beds of Colorado. Bulletin of the United States Geological and Geographical Survey 3(4):805-806",
    "R. R. Laws. 1993. A specimen of Allosaurus fragilis from Big Horn County, Wyoming exhibiting several pathologies. Journal of Vertebrate Paleontology 13(3, suppl.):46A",
    "J. R. Foster. 1996. Sauropod dinosaurs of the Morrison Formation (Upper Jurassic), Black Hills, South Dakota and Wyoming. Contributions to Geology, University of Wyoming 31(1):1-25",
    "J. I. Kirkland. 2006. Fruita Paleontological Area (Upper Jurassic, Morrison Formation), western Colorado: an example of terrestrial taphofacies analysis.  In J. R. Foster & S. G. Lucas (ed.), Paleontology and Geology of the Upper Jurassic Morrison Formation. New Mexico Museum of Natural History and Science Bulletin 36:67-95",
    "J. A. Wilson and M. B. Smith. 1996. New remains of Amphicoelias Cope (Dinosauria: Sauropoda) from the Upper Jurassic of Montana and diplodocoid phylogeny. Journal of Vertebrate Paleontology 16(3, suppl.):73A",
    "H. Galiano and R. Albersdörfer. 2010. A New Basal Diplodocoid Species, Amphicoelias brontodiplodocus from the Morrison Formation, Big Horn Basin, Wyoming, with Taxonomic Reevaluation of Diplodocus, Apatosaurus, Barosaurus and Other Genera. Dinosauria International (Ten Sleep, WY) Report for September 2010 ",
    "H. J. Armstrong and W. R. Averett. 1987. Mid-Mesozoic paleontology of the Rabbit Valley area, western Colorado. In W. R. Averett (ed.), Paleontology and Geology of the Dinosaur Triangle: Guidebook for 1987 Field Trip. Museum of Western Colorado, Grand Junction ",
    "O. C. Marsh. 1877. Notice of a new and gigantic dinosaur. American Journal of Science and Arts 14:87-88",
    "M. Tamura and Y. Okazaki. 1991. [Occurrence of carnosaurian and herbivorous dinosaurs from upper formation of Mifune Group, Japan]. Kumamoto Daigaku Kyiku Gakubu kiy. Shizen kagaku 40:31-45",
    "J. R. Foster. 2003. Paleoecological analysis of the vertebrate fauna of the Morrison Formation (Upper Jurassic), Rocky Mountain region, U.S.A. New Mexico Museum of Natural History and Science Bulletin 23:1-95",
    "K. Hunter and B. Breithaupt. 2005. Rising from the dust: an Allosaurus' journey to the 21st century. Journal of Vertebrate Paleontology 25(3, suppl.):72A-73A",
    "W. J. Holland. 1904. Section of Paleontology. Annual Report of the Director for the Year Ending March 31, 1904 ",
    "O. C. Marsh. 1877. A new order of extinct Reptilia (Stegosauria) from the Jurassic of the Rocky Mountains. American Journal of Science and Arts 14:513-514",
    "O. Mateus and A. Walen. 2006. The large theropod fauna of the Lourinhã Formation (Portugal) and its similarity to that of the Morrison Formation, with a description of a new species of Allosaurus.  In J. R. Foster & S. G. Lucas (ed.), Paleontology and Geology of the Upper Jurassic Morrison Formation. New Mexico Museum of Natural History and Science Bulletin 36:123-129",
    "D. E. Schmude and C. J. Weege. 1996. Stratigraphic relationship, sedimentology, and taphonomy of Meilyn, a dinosaur quarry in the basal Morrison Formation of Wyoming.  In M. Morales (ed.), The Continental Jurassic. Museum of Northern Arizona Bulletin 60:547-554",
    "O. C. Marsh. 1878. Principal characters of American Jurassic dinosaurs. Part I. American Journal of Science and Arts 16:411-416",
    "W. L. Stokes. 1964. Fossilized stomach contents of a sauropod dinosaur. Science 143:576-577",
    "A. M. Cartwright and T. P. Cleland. 2005. Aspects of the paleontology and stratigraphy of the lower Triassic-Lower Cretaceous strata of the eastern Bighorn Basin, WY. Geological Society of America Abstracts with Programs 37(7):302",
    "J. K., J.r. Rigby. 1982. Camarasaurus cf. supremus from the Morrison Formation near San Ysidro, New Mexico—the San Ysidro dinosaur.  In S. G. Wells, J. A. Grambling, & J. F. Callender (eds.), New Mexico Geological Society, 33th Field Conference, Albuquerque Country II 33:271-272",
    "J. D. Bump. 1939. Dinosaurs collected by the School of Mines. The Black Hills Engineer 25(4):228-229",
    "J. Ayer. 1999. The Howe Ranch Dinosaurs: 10 Years of Dinosaur Digging in Wyoming. Sauriermuseum, Aathal, Switzerland ",
    "H. F. Osborn. 1904. Fossil wonders of the west. The dinosaurs of the Bone-Cabin Quarry, being the first description of the greatest \"find\" of extinct animals ever made. Century Magazine 68:680-694",
    "B. P. Pérez-Moreno and D. J. Chure. 1999. On the presence of Allosaurus fragilis (Theropoda: Carnosauria) in the Upper Jurassic of Portugal: first evidence of an intercontinental dinosaur species. Journal of the Geological Society, London 156:449-452",
    "K. Carpenter. 1998. Vertebrate biostratigraphy of the Morrison Formation near Cañon City, Colorado. Modern Geology 23:407-426",
    "A. P. Hunt and M. G. Lockley. 1995. Jurassic vertebrate paleontology of Cactus Park, west-central Colorado. Geological Society of America Abstracts-with-Programs 27(4):15",
    "O. C. Marsh. 1878. Notice of new dinosaurian reptiles. American Journal of Science and Arts 15:241-244",
    "W. L. Stokes. 1944. Jurassic dinosaurs from Emery County, Utah. Proceedings of the Utah Academy of Sciences, Arts and Letters 21:11",
    "O. C. Marsh. 1890. Description of new dinosaurian reptiles. The American Journal of Science, series 3 39:81-86",
    "P. Reinheimer. 1938. Department of Vertebrate Paleontology. Annual Report of the Colorado Museum of Natural History for the Year 1937 ",
    "O. C. Marsh. 1899. Footprints of Jurassic dinosaurs. American Journal of Science 7:227-232",
    "B. Schumacher and G. Liggett. 2004. The dinosaurs of Picket Wire Canyonlands, a glimpse into the Morrison basin of southeastern Colorado. Journal of Vertebrate Paleontology 24(3, suppl.):110A",
    "J. I. Kirkland and H. J. Armstrong. 1992. Taphonomy of the Mygatt-Moore (M&M) Quarry, middle Brushy Basin Member, Morrison Formation (Upper Jurassic) western Colorado. Journal of Vertebrate Paleontology 12(3, suppl.):55A",
    "D. J. Chure and G. F. Engelmann. 1989. The fauna of the Morrison Formation in Dinosaur National Monument. In J. J. Flynn (ed.), Mesozoic/Cenozoic Vertebrate Paleontology: Classic Localities, Contemporary Approaches: Field Trip Guide Book T322. American Geophysical Union, Washington, DC ",
    "C. E. Turner and F. Peterson. 1999. Biostratigraphy of dinosaurs in the Upper Jurassic Morrison Formation of the Western Interior, U.S.A.  In D. D. Gillette (ed.), Vertebrate Paleontology in Utah, Utah Geological Survey Miscellaneous Publication 99-1:77-114",
    "J. R. Foster and J. B. McHugh. 2016. Major bonebeds in mudrocks of the Morrison Formation (Upper Jurassic), northern Colorado Plateau of Utah and Colorado. Geology of the Intermountain West 3:33-66",
    "P. M. Galton and J. A. Jensen. 1979. A new large theropod dinosaur from the Upper Jurassic of Colorado. Brigham Young University Geology Studies 26(1):1-12",
    "J. F. Hubert and D. J. Chure. 1992. Taphonomy of an Allosaurus quarry in the deposits of a Late Jurassic braided river with a gravel-sand bedload, Salt Wash Member of the Morrison Formation, Dinosaur National Monumnt, Utah.  In J. R. Wilson (ed.), Field Guide to Geologic Excursions in Utah and Adjacent Areas of Nevada, Idaho, and Wyoming. Utah Geological Survey Miscellaneous Publication 92-3:375-381",
    "C. A. Miles and D. W. Hamblin. 1999. Historical update: paleontological excavation in the Como Region. In J. H. Ostrom & J. S. McIntosh, Marsh's Dinosaurs. Yale University Press, New Haven ",
    "E. D. Cope. 1878. On the Saurians recently discovered in the Dakota Beds of Colorado. The American Naturalist 12(2):71-85",
    "O. C. Marsh. 1877. Notice of new dinosaurian reptiles from the Jurassic formation. American Journal of Science and Arts 14:514-516",
    "M. G. Lockley and C. A. Meyer. 1998. Theropod tracks from the Howe Quarry, Morrison Formation, Wyoming. Modern Geology 23(1-4):309-316",
    "O. C. Marsh. 1879. Notice of new Jurassic reptiles. American Journal of Science and Arts 18:501-505",
    "O. C. Marsh. 1896. The dinosaurs of North America. United States Geological Survey, 16th Annual Report, 1894-95 55:133-244",
    "R. L. Kolb and L. E. Davis. 1996. The theropod dinosaur Allosaurus Marsh from the upper part of the Brushy Basin Member of the Morrison Formation (Upper Jurassic) near Green River, Utah.  In A. C. Huffman Jr., W. R Lund, & L. H. Godwin (eds.), 1996 Field Symposium: Geology and Resources of the Paradox Basin. Utah Field Association Guidebook 25:339-349",
    "J. Leidy. 1870. [Remarks on Poikilopleuron valens, Clidastes intermedius, Macrosaurus proriger, Baptemys wyomingensis, and Emys stevensonianus]. Proceedings of the Academy of Natural Sciences of Philadelphia 22(1):3-5"
    ],
    "globeUrl": "http://dinosaurpictures.org/ancient-earth/#170"
    },
    
    {
    "creatureType": "dinosaur",
    "name": "Apatosaurus",
    "period": "Jurassic",
    "eats": "herbivore",
    "regions": [
    "North America"
    ],
    "pics": [
    {
    "votingUrl": "http://cdn01.wallconvert.com/_media/wallpapers_1920x1080/1/1/apatosaurus-9158.jpg",
    "url": "http://images.dinosaurpictures.org/apatosaurus-9158_9d10.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/apatosaurus-9158_9d10.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.13HTGsz%2fpnDNf0h4%2fWvh%2bQ&pid=15.1",
    "source": "http://www.wallconvert.com/wallpapers/animals/apatosaurus-9158.html",
    "source_display": "www.wallconvert.com/wallpapers/animals/apatosaurus-9158.html"
    },
    {
    "votingUrl": "http://psychosaurus.com/dino/images/apatosaurus.jpg",
    "url": "http://images.dinosaurpictures.org/apatosaurus_9b24.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/apatosaurus_9b24.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.yc3Lsna4DVvF7KxHbBbLYA&pid=15.1",
    "source": "http://psychosaurus.com/frames/dino/apatosaurus.html",
    "source_display": "psychosaurus.com/frames/dino/apatosaurus.html"
    },
    {
    "votingUrl": "http://www.sideshowtoy.com/assets/products/2001343-apatosaurus/lg/2001343-apatosaurus-007.jpg",
    "url": "http://images.dinosaurpictures.org/2001343-apatosaurus-007_8810.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/2001343-apatosaurus-007_8810.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.yuYDJxZV%2f6SZ6JZg3I7%2bzA&pid=15.1",
    "source": "http://www.sideshowtoy.com/collectibles/dinosauria-apatosaurus-sideshow-collectibles-2001343/",
    "source_display": "www.sideshowtoy.com/collectibles/dinosauria-apatosaurus-sideshow..."
    },
    {
    "votingUrl": "http://fc03.deviantart.net/fs71/i/2010/048/b/6/apatosaurus_by_ministerart.jpg",
    "url": "http://images.dinosaurpictures.org/apatosaurus_by_ministerart_bb44.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/apatosaurus_by_ministerart_bb44.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.St4FiqIZELYNBcOrLQXJNQ&pid=15.1",
    "source": "http://ministerart.deviantart.com/art/apatosaurus-154444575",
    "source_display": "ministerart.deviantart.com/art/apatosaurus-154444575"
    },
    {
    "votingUrl": "http://www.nenature.com/DinoImages/Apatosaurus036.jpg",
    "url": "http://images.dinosaurpictures.org/Apatosaurus036_23bb.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Apatosaurus036_23bb.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.QLHym%2bOg7AZ2UUIBdtHmJg&pid=15.1",
    "source": "http://www.nenature.com/Dinosaurs/Apatosaurus.htm",
    "source_display": "www.nenature.com/Dinosaurs/Apatosaurus.htm"
    },
    {
    "votingUrl": "http://img1.wikia.nocookie.net/__cb20131109114124/walkingwith/images/e/e8/ApatosaurusMain.jpg",
    "url": "http://images.dinosaurpictures.org/ApatosaurusMain_cc2b.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/ApatosaurusMain_cc2b.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.WGc0A92KIT%2b8TT1jIZ%2fobA&pid=15.1",
    "source": "http://walkingwith.wikia.com/wiki/Apatosaurus",
    "source_display": "walkingwith.wikia.com/wiki/Apatosaurus"
    },
    {
    "votingUrl": "http://0.tqn.com/d/dinosaurs/1/0/Z/C/-/-/apatosaurusVN.jpg",
    "url": "http://images.dinosaurpictures.org/apatosaurusVN_7a58.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/apatosaurusVN_7a58.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.MjQuWR1xxiRoiE0AuS0ndA&pid=15.1",
    "source": "http://dinosaurs.about.com/od/dinosaurbasics/tp/10-Facts-About-20-Dinosaurs.htm",
    "source_display": "dinosaurs.about.com/od/dinosaurbasics/tp/10-Facts-About-20..."
    },
    {
    "votingUrl": "http://www.jplegacy.org/encyc/novel-dinosaurs/Apatosaurus.jpg",
    "url": "http://images.dinosaurpictures.org/Apatosaurus_f486.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Apatosaurus_f486.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.KxkVQbpcXIWpBnSm7LlNsw&pid=15.1",
    "source": "http://www.jplegacy.org/jpencyclopedia/?p=578",
    "source_display": "www.jplegacy.org/jpencyclopedia/?p=578"
    },
    {
    "votingUrl": "http://0.tqn.com/d/dinosaurs/1/0/Y/C/-/-/apatosaurusSP.jpg",
    "url": "http://images.dinosaurpictures.org/apatosaurusSP_83dc.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/apatosaurusSP_83dc.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.CczBaezKoalhhd5zyEy6pw&pid=15.1",
    "source": "http://dinosaurs.about.com/od/dinosaurpictures/ig/Apatosaurus-Pictures/Apatosaurus.-2Gt.htm",
    "source_display": "dinosaurs.about.com/od/dinosaurpictures/ig/Apatosaurus-Pictures..."
    },
    {
    "votingUrl": "http://ichef.bbci.co.uk/naturelibrary/images/ic/credit/640x395/a/ap/apatosaurus/apatosaurus_1.jpg",
    "url": "http://images.dinosaurpictures.org/apatosaurus_1_6a5c.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/apatosaurus_1_6a5c.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.y7Nd7qsZ3xWIZVMgEaH%2fGA&pid=15.1",
    "source": "http://www.bbc.co.uk/nature/life/Apatosaurus",
    "source_display": "www.bbc.co.uk/nature/life/Apatosaurus"
    },
    {
    "votingUrl": "http://3.bp.blogspot.com/-jkQBn7G-QwQ/UA0Xok4Ju6I/AAAAAAAAEZo/LhAmlUxY6xU/s1600/Apatosaurus+images.jpg",
    "url": "http://images.dinosaurpictures.org/Apatosaurus%2Bimages_2747.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Apatosaurus%2Bimages_2747.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.LbH246E4xiNv6RD%2fwkRSLQ&pid=15.1",
    "source": "http://animaltheory.blogspot.com/2012/07/apatosaurus.html",
    "source_display": "animaltheory.blogspot.com/2012/07/apatosaurus.html"
    },
    {
    "votingUrl": "http://fc05.deviantart.net/fs71/i/2014/024/d/4/apatosaurus_by_paleopeter-d71faa2.jpg",
    "url": "http://images.dinosaurpictures.org/apatosaurus_by_paleopeter-d71faa2_547a.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/apatosaurus_by_paleopeter-d71faa2_547a.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.4bFBLIBCLeApx3yZB%2bdsMg&pid=15.1",
    "source": "http://paleopeter.deviantart.com/art/Apatosaurus-425656010",
    "source_display": "paleopeter.deviantart.com/art/Apatosaurus-425656010"
    },
    {
    "votingUrl": "http://www.sideshowtoy.com/assets/products/2001343-apatosaurus/lg/2001343-apatosaurus-003.jpg",
    "url": "http://images.dinosaurpictures.org/2001343-apatosaurus-003_f9a3.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/2001343-apatosaurus-003_f9a3.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.pQlKLIhnfT6kKDnjmGeuQw&pid=15.1",
    "source": "http://www.sideshowtoy.com/collectibles/dinosauria-apatosaurus-sideshow-collectibles-2001343/",
    "source_display": "www.sideshowtoy.com/collectibles/dinosauria-apatosaurus-sideshow..."
    },
    {
    "votingUrl": "http://img3.wikia.nocookie.net/__cb20141128030715/jurassicpark/images/7/74/Apatosaurus.png",
    "url": "http://images.dinosaurpictures.org/Apatosaurus_19ff.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Apatosaurus_19ff.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.Blv2WJ%2bsKPiB2Uq1JRTLYQ&pid=15.1",
    "source": "http://jurassicpark.wikia.com/wiki/Apatosaurus",
    "source_display": "jurassicpark.wikia.com/wiki/Apatosaurus"
    },
    {
    "votingUrl": "http://www.rareresource.com/photos/apatosaurus/c/l/apatosaurus.gif",
    "url": "http://images.dinosaurpictures.org/apatosaurus_33e1.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/apatosaurus_33e1.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.ZTwhkGwCFJmhxKiRNEqfpg&pid=15.1",
    "source": "http://trepacoqueiro.estarreja.net/structure/admin/apatosaurus-pictures&page=4",
    "source_display": "trepacoqueiro.estarreja.net/structure/admin/apatosaurus-pictures..."
    },
    {
    "votingUrl": "http://img3.wikia.nocookie.net/__cb20141216181248/dinosaurs/images/7/72/Apatosaurus_parvus_by_karkemish00.jpg",
    "url": "http://images.dinosaurpictures.org/Apatosaurus_parvus_by_karkemish00_7471.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Apatosaurus_parvus_by_karkemish00_7471.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.juHFBPyiREp5Hk4K3CJb6Q&pid=15.1",
    "source": "http://dinosaurs.wikia.com/wiki/Apatosaurus",
    "source_display": "dinosaurs.wikia.com/wiki/Apatosaurus"
    },
    {
    "votingUrl": "http://www.centredessciencesdemontreal.com/documents/csm/images/Dinos/Apatosaurus-2.jpg",
    "url": "http://www.centredessciencesdemontreal.com/documents/csm/images/Dinos/Apatosaurus-2.jpg",
    "clickthrough_url": "http://www.centredessciencesdemontreal.com/documents/csm/images/Dinos/Apatosaurus-2.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.zjZG90XPOwsHBZwmSdJDRQ&pid=15.1",
    "source": "http://www.centredessciencesdemontreal.com/expositions/dinosaures-redecouverts.html",
    "source_display": "www.centredessciencesdemontreal.com/expositions/dinosaures..."
    },
    {
    "votingUrl": "http://3.bp.blogspot.com/-7d255c5Vj2M/UC4w9xfVqBI/AAAAAAAAGGY/jGZ_hQB9frA/s1600/apatosaurus+wallpapers+7.jpg",
    "url": "http://images.dinosaurpictures.org/apatosaurus%2Bwallpapers%2B7_b147.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/apatosaurus%2Bwallpapers%2B7_b147.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.tnZHFffrDT0dWmFlfppO4w&pid=15.1",
    "source": "http://animaltheory.blogspot.com/2012/08/apatosaurus-wallpapers.html",
    "source_display": "animaltheory.blogspot.com/2012/08/apatosaurus-wallpapers.html"
    },
    {
    "votingUrl": "http://www.mes-figurines.fr/io/shop_produit/SP4cb6f30aa2ed0/image_Apatosaurus_large.jpg",
    "url": "http://images.dinosaurpictures.org/image_Apatosaurus_large_2f89.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/image_Apatosaurus_large_2f89.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.zKPkLzhQ3bkgtcdTnp4jWQ&pid=15.1",
    "source": "http://www.mes-figurines.fr/shop/prod/id/SP4cb6f30aa2ed0/Apatosaurus.html",
    "source_display": "www.mes-figurines.fr/shop/prod/id/SP4cb6f30aa2ed0/Apatosaurus.html"
    }
    ],
    "shouldShowMap": true,
    "mapUrl": "/api/dinosaur/Apatosaurus/map",
    "refs": [
    "K. Carpenter and C. Miles. 1998. Skull of a Jurassic ankylosaur (Dinosauria). Nature 393:782-783",
    "J. B. Hatcher. 1900. The Carnegie Museum Paleontological Expeditions of 1900. Science 12(306):718-720",
    "R. T. Bakker and J. Siegwarth. 1992. Edmarka rex, a new, gigantic theropod dinosaur from the middle Morrison Formation, Late Jurassic of the Como Bluff outcrop region. Hunteria 2(9):1-24",
    "S. G. Lucas and T. E. Williamson. 1996. Jurassic fossil vertebrates from New Mexico.  In M. Morales (ed.), The Continental Jurassic. Museum of Northern Arizona Bulletin 60:235-241",
    "R. T. Bakker. 1996. The real Jurassic park: dinosaurs and habitats at Como Bluff, Wyoming.  In M. Morales (ed.), The Continental Jurassic. Museum of Northern Arizona Bulletin 60:35-49",
    "A. R. Fiorillo. 1998. Bone modification features on sauropod remains (Dinosauria) from the Freezeout Hills Quarry N (Morrison Formation) of southeastern Wyoming and their contribution to fine-scale paleoenvironmental interpretation. Modern Geology 23(1-4):111-126",
    "J. W. Stovall. 1938. The Morrison of Oklahoma and its dinosaurs. Journal of Geology 46:583-600",
    "W. J. Holland. 1910. Section of Paleontology. Thirteenth Annual Report of the Director for the Year Ending March 31, 1910 ",
    "Anonymous. 1977. The Fruita Paleontological Report ",
    "J. R. Foster. 1996. Fossil vertebrate localities in the Morrison Formation (Upper Jurassic) of western South Dakota.  In M. Morales (ed.), The Continental Jurassic. Museum of Northern Arizona Bulletin 60:255-263",
    "M. K. Jesup. 1898. Department of Vertebrate Paleontology. Annual Report of the President, Treasurer's Report, List of Accessions, Act of Incorporation, Constitution, By-Laws and List of Members for the Year 1897 ",
    "W. J. Holland. 1905. The osteology of Diplodocus Marsh. With special reference to the restoration of the skeleton of Diplodocus carnegiei Hatcher, presented by Mr. Andrew Carnegie to the British Museum, May 12, 1905. Memoirs of the Carnegie Museum 2(6):225-264",
    "J. H. Ostrom and J. S. McIntosh. 1999. Marsh's Dinosaurs: The Collections from Como Bluff. Yale University Press, New Haven ",
    "A. R. Fiorillo and C. L. May. 1996. Preliminary report on the taphonomy and depositional setting of a new dinosaur locality in the Morrison Formation (Brushy Basin Member) of Curecanti National Recreation Area, Colorado.  In M. Morales (ed.), The Continental Jurassic. Museum of Northern Arizona Bulletin 60:555-561",
    "J. A. Jensen. 1987. New brachiosaur material from the Late Jurassic of Utah and Colorado. Great Britain Naturalist 47(4):592-608",
    "J. R. Foster. 1993. Sedminentology and taphonomy of the Little Houston Quarry, Morrison Formation (Upper Jurassic), northeast Wyoming. Journal of Vertebrate Paleontology 13(3, suppl.):38A",
    "C. A. Miles and D. W. Hamblin. 1999. Historical update: paleontological excavation in the Como Region. In J. H. Ostrom & J. S. McIntosh, Marsh's Dinosaurs. Yale University Press, New Haven ",
    "J. A. Wilson and M. B. Smith. 1996. New remains of Amphicoelias Cope (Dinosauria: Sauropoda) from the Upper Jurassic of Montana and diplodocoid phylogeny. Journal of Vertebrate Paleontology 16(3, suppl.):73A",
    "H. Galiano and R. Albersdörfer. 2010. A New Basal Diplodocoid Species, Amphicoelias brontodiplodocus from the Morrison Formation, Big Horn Basin, Wyoming, with Taxonomic Reevaluation of Diplodocus, Apatosaurus, Barosaurus and Other Genera. Dinosauria International (Ten Sleep, WY) Report for September 2010 ",
    "J. R. Foster. 2003. Paleoecological analysis of the vertebrate fauna of the Morrison Formation (Upper Jurassic), Rocky Mountain region, U.S.A. New Mexico Museum of Natural History and Science Bulletin 23:1-95",
    "W. J. Holland. 1904. Section of Paleontology. Annual Report of the Director for the Year Ending March 31, 1904 ",
    "B. Brown. 1934. How dinosaurs died 125,000,000 years ago. Science News Letter 26(694):51-52",
    "A. L. Koch and F. Frost. 2006. Palaeontological discoveries at Curecanti National Recreation Area and Black Canyon of the Gunnison National Park, Upper Jurassic Morrison Formation, Colorado.  In J. R. Foster & S. G. Lucas (ed.), Paleontology and Geology of the Upper Jurassic Morrison Formation. New Mexico Museum of Natural History and Science Bulletin 36:35-38",
    "Anonymous. 1973. The Great Dinosaur DIscovery ",
    "J. D. Bump. 1939. Dinosaurs collected by the School of Mines. The Black Hills Engineer 25(4):228-229",
    "J. Ayer. 1999. The Howe Ranch Dinosaurs: 10 Years of Dinosaur Digging in Wyoming. Sauriermuseum, Aathal, Switzerland ",
    "K. Carpenter. 1998. Vertebrate biostratigraphy of the Morrison Formation near Cañon City, Colorado. Modern Geology 23:407-426",
    "P. Watkins and D. Gray. 2005. Warm Springs Ranch dinosaur quarries from the upper Morrison Formation of north central Wyoming. Journal of Vertebrate Paleontology 25(3, suppl.):128A",
    "W. L. Stokes. 1944. Jurassic dinosaurs from Emery County, Utah. Proceedings of the Utah Academy of Sciences, Arts and Letters 21:11",
    "J. I. Kirkland and H. J. Armstrong. 1992. Taphonomy of the Mygatt-Moore (M&M) Quarry, middle Brushy Basin Member, Morrison Formation (Upper Jurassic) western Colorado. Journal of Vertebrate Paleontology 12(3, suppl.):55A",
    "C. E. Turner and F. Peterson. 1999. Biostratigraphy of dinosaurs in the Upper Jurassic Morrison Formation of the Western Interior, U.S.A.  In D. D. Gillette (ed.), Vertebrate Paleontology in Utah, Utah Geological Survey Miscellaneous Publication 99-1:77-114",
    "O. C. Marsh. 1877. Notice of new dinosaurian reptiles from the Jurassic formation. American Journal of Science and Arts 14:514-516",
    "D. J. Chure and A. R. Fiorillo. 2000. Prey bone utilization by predatory dinosaurs in the Late Jurassic of North America, with comments on prey bone use by dinosaurs throughout the Mesozoic. Gaia 15:227-232",
    "J. S. McIntosh. 1981. Annotated catalogue of the dinosaurs (Reptilia, Archosauria) in the collections of the Carnegie Museum of Natural History. Bulletin of Carnegie Museum of Natural History 18:1-67"
    ],
    "globeUrl": "http://dinosaurpictures.org/ancient-earth/#170"
    },
    
    {
    "creatureType": "dinosaur",
    "name": "Turiasaurus",
    "period": "Jurassic/Cretaceous",
    "eats": "herbivore",
    "regions": [
    "Europe"
    ],
    "pics": [
    {
    "votingUrl": "http://fc00.deviantart.net/fs70/i/2012/114/0/f/turiasaurus_riodevensis_by_teratophoneus-d4xfext.jpg",
    "url": "http://images.dinosaurpictures.org/turiasaurus_riodevensis_by_teratophoneus-d4xfext_4ff3.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/turiasaurus_riodevensis_by_teratophoneus-d4xfext_4ff3.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.A8LqvOkB3WkIs%2fXMdrjQmw&pid=15.1",
    "source": "http://teratophoneus.deviantart.com/art/Turiasaurus-riodevensis-298011233",
    "source_display": "teratophoneus.deviantart.com/art/Turiasaurus-riodevensis-298011233"
    },
    {
    "votingUrl": "http://fc08.deviantart.net/fs71/i/2012/015/c/f/turiasaurus_riodevensis_by_teratophoneus-d4mf1dw.jpg",
    "url": "http://images.dinosaurpictures.org/turiasaurus_riodevensis_by_teratophoneus-d4mf1dw_d460.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/turiasaurus_riodevensis_by_teratophoneus-d4mf1dw_d460.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.YaLldA%2bYNgMwEuA%2bzr17Fw&pid=15.1",
    "source": "http://teratophoneus.deviantart.com/art/Turiasaurus-riodevensis-279517892",
    "source_display": "teratophoneus.deviantart.com/art/Turiasaurus-riodevensis-279517892"
    },
    {
    "votingUrl": "http://th07.deviantart.net/fs71/PRE/f/2013/133/3/9/turiasaurus_card_by_eofauna-d654b1w.jpg",
    "url": "http://images.dinosaurpictures.org/turiasaurus_card_by_eofauna-d654b1w_9cc9.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/turiasaurus_card_by_eofauna-d654b1w_9cc9.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.xTgwhmXJPoar%2bkF%2bwzagsQ&pid=15.1",
    "source": "http://eofauna.deviantart.com/art/Turiasaurus-riodevensis-371396084",
    "source_display": "eofauna.deviantart.com/art/Turiasaurus-riodevensis-371396084"
    },
    {
    "votingUrl": "http://dinonews.net/wiki/images/7/71/Turiasaurus.jpeg",
    "url": "http://images.dinosaurpictures.org/Turiasaurus_8787.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Turiasaurus_8787.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.2gjdIs%2f9UUELJ0B2s37pnw&pid=15.1",
    "source": "http://www.dinosaure.wikibis.com/turiasaurus.php",
    "source_display": "www.dinosaure.wikibis.com/turiasaurus.php"
    },
    {
    "votingUrl": "http://2.bp.blogspot.com/-4_jkaA_bmdY/UaWLO7hsqvI/AAAAAAAADnM/iurJnhMxxDM/s1600/Turiasaurus_NT.jpg",
    "url": "http://images.dinosaurpictures.org/Turiasaurus_NT_b9ea.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Turiasaurus_NT_b9ea.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.9R6xs0geKEtVeaZMs12SPQ&pid=15.1",
    "source": "http://spinops.blogspot.com/2013/02/carcharodontosaurus-iguidensis.html",
    "source_display": "spinops.blogspot.com/2013/02/carcharodontosaurus-iguidensis.html"
    },
    {
    "votingUrl": "http://3.bp.blogspot.com/-NY9XcLCB6NY/TrE6CQti8DI/AAAAAAAAAeY/Mgcxxik5q9I/s1600/Turiasaurus-EmperorDinobot.jpg",
    "url": "http://images.dinosaurpictures.org/Turiasaurus-EmperorDinobot_62e9.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Turiasaurus-EmperorDinobot_62e9.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.FkrQK%2fH%2b8oZj6qXbmfT4aA&pid=15.1",
    "source": "http://hiurieosdinossauros.blogspot.com/2011/11/turiasaurus-riodevensis.html",
    "source_display": "hiurieosdinossauros.blogspot.com/2011/11/turiasaurus-riodevensis.html"
    },
    {
    "votingUrl": "http://www.prehistoric-wildlife.com/images/species/t/turiasaurus-size.jpg",
    "url": "http://images.dinosaurpictures.org/turiasaurus-size_566f.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/turiasaurus-size_566f.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.ackxLRKya7o%2fVArod6AybA&pid=15.1",
    "source": "http://www.prehistoric-wildlife.com/species/t/turiasaurus.html",
    "source_display": "www.prehistoric-wildlife.com/species/t/turiasaurus.html"
    },
    {
    "votingUrl": "http://fc01.deviantart.net/fs71/i/2012/297/7/4/082__turiasaurus_riodevensis_by_green_mamba-d5iv4u7.png",
    "url": "http://images.dinosaurpictures.org/082__turiasaurus_riodevensis_by_green_mamba-d5iv4u7_908a.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/082__turiasaurus_riodevensis_by_green_mamba-d5iv4u7_908a.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.wvM6OP%2fF8qP5IS5VC%2fk2eg&pid=15.1",
    "source": "http://green-mamba.deviantart.com/art/082-TURIASAURUS-RIODEVENSIS-334016575",
    "source_display": "green-mamba.deviantart.com/art/082-TURIASAURUS-RIODEVENSIS-334016575"
    },
    {
    "votingUrl": "http://fc05.deviantart.net/fs71/f/2013/170/8/3/turiasaurus_riodevensis_by_brolyeuphyfusion9500-d5dnr44.png",
    "url": "http://images.dinosaurpictures.org/turiasaurus_riodevensis_by_brolyeuphyfusion9500-d5dnr44_52fb.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/turiasaurus_riodevensis_by_brolyeuphyfusion9500-d5dnr44_52fb.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.YWYGzFT9x4NH0fxP1b4uXA&pid=15.1",
    "source": "http://brolyeuphyfusion9500.deviantart.com/art/Turiasaurus-riodevensis-325274116",
    "source_display": "brolyeuphyfusion9500.deviantart.com/art/Turiasaurus-riodevensis..."
    },
    {
    "votingUrl": "http://fc08.deviantart.net/fs71/f/2012/251/0/8/turiasaurus_riodevensis_by_brolyeuphyfusion9500-d5dnr44.png",
    "url": "http://images.dinosaurpictures.org/turiasaurus_riodevensis_by_brolyeuphyfusion9500-d5dnr44_bbc2.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/turiasaurus_riodevensis_by_brolyeuphyfusion9500-d5dnr44_bbc2.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.BRqLT8yZVnx29MbqqLI3yw&pid=15.1",
    "source": "http://brolyeuphyfusion9500.deviantart.com/art/Turiasaurus-riodevensis-325274116",
    "source_display": "brolyeuphyfusion9500.deviantart.com/art/Turiasaurus-riodevensis..."
    },
    {
    "votingUrl": "http://www.museosymonumentosvalencia.com/wp-content/uploads/2014/05/Turiasaurus-15.05.14-page-001-50.jpg",
    "url": "http://images.dinosaurpictures.org/Turiasaurus-15.05.14-page-001-50_61b9.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Turiasaurus-15.05.14-page-001-50_61b9.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.wI7qMSRgib81qoEvSdtmQg&pid=15.1",
    "source": "http://www.museosymonumentosvalencia.com/",
    "source_display": "www.museosymonumentosvalencia.com"
    },
    {
    "votingUrl": "http://fc06.deviantart.net/fs70/i/2012/248/8/7/turiasaurus_riodevensis_by_brolyeuphyfusion9500-d5dnr44.png",
    "url": "http://images.dinosaurpictures.org/turiasaurus_riodevensis_by_brolyeuphyfusion9500-d5dnr44_0f01.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/turiasaurus_riodevensis_by_brolyeuphyfusion9500-d5dnr44_0f01.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.mG%2fOJSYrLNSOji%2fRoGpwsA&pid=15.1",
    "source": "http://carnivoraforum.com/topic/9696455/1/",
    "source_display": "carnivoraforum.com/topic/9696455/1"
    },
    {
    "votingUrl": "http://www.cadenaser.com/recorte/20120713csrcsrsoc_8/XLCO/Ies/Turiasaurus-Riodevensis.jpg",
    "url": "http://images.dinosaurpictures.org/Turiasaurus-Riodevensis_f10d.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Turiasaurus-Riodevensis_f10d.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.9BcFWH4lkG45To5lp%2bPtmA&pid=15.1",
    "source": "http://www.cadenaser.com/sociedad/fotos/turiasaurus-riodevensis/csrcsrpor/20120713csrcsrsoc_8/Ies",
    "source_display": "www.cadenaser.com/sociedad/fotos/turiasaurus-riodevensis/csrcsrpor..."
    },
    {
    "votingUrl": "http://mega2015.jp/image/turiasaurus_p01.jpg",
    "url": "http://images.dinosaurpictures.org/turiasaurus_p01_0274.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/turiasaurus_p01_0274.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.HjZtoitFxqTxF46Q3qpxHg&pid=15.1",
    "source": "http://matome.naver.jp/odai/2139893630496549201",
    "source_display": "matome.naver.jp/odai/2139893630496549201"
    },
    {
    "votingUrl": "http://www.heraldo.es/uploads/imagenes/bajacalidad/2012/05/14/_turiasaurus_fd187ff0.jpg",
    "url": "http://images.dinosaurpictures.org/_turiasaurus_fd187ff0_3485.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/_turiasaurus_fd187ff0_3485.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.Q3x%2fYCCHXl4oUy7L319XLw&pid=15.1",
    "source": "http://www.heraldo.es/noticias/aragon/teruel_provincia/2012/05/14/dinopolis_expone_craneo_del_dinosaurio_mas_grande_europa_187730_1101027.html",
    "source_display": "www.heraldo.es/noticias/aragon/teruel_provincia/2012/05/14..."
    },
    {
    "votingUrl": "http://2.bp.blogspot.com/-KCRC96FJx-E/UD3sq7dk9JI/AAAAAAAABPc/dRKjg0a8ECA/s1600/Turiasaurus.JPG",
    "url": "http://images.dinosaurpictures.org/Turiasaurus_9133.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Turiasaurus_9133.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.xV7hsJ6fuMGVzekWnHG6pw&pid=15.1",
    "source": "http://geosfera-sgp.blogspot.com/2012_08_01_archive.html",
    "source_display": "geosfera-sgp.blogspot.com/2012_08_01_archive.html"
    },
    {
    "votingUrl": "http://dinonews.net/wiki/images/f/fc/Turiasaurus_4.jpg",
    "url": "http://images.dinosaurpictures.org/Turiasaurus_4_98e2.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Turiasaurus_4_98e2.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.N%2fhvhY81Lc%2bVhAm8x9aWdg&pid=15.1",
    "source": "http://dinonews.net/wiki/index.php?title=Fichier:Turiasaurus_4.jpg",
    "source_display": "dinonews.net/wiki/index.php?title=Fichier:Turiasaurus_4.jpg"
    },
    {
    "votingUrl": "http://www.dinosoria.com/dinosaures/turiasaurus.jpg",
    "url": "http://images.dinosaurpictures.org/turiasaurus_0c84.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/turiasaurus_0c84.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.Mdqd9jEB9pDmsSgVBB2mZg&pid=15.1",
    "source": "http://www.dinosoria.com/turiasaurus.htm",
    "source_display": "www.dinosoria.com/turiasaurus.htm"
    },
    {
    "votingUrl": "http://www.palaeocritti.com/_/rsrc/1291495246463/by-group/dinosauria/sauropoda/turiasaurus/Turiasaurus_skel.jpg",
    "url": "http://images.dinosaurpictures.org/Turiasaurus_skel_699d.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Turiasaurus_skel_699d.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.rFZMAovZ5WKkremgib%2bXSw&pid=15.1",
    "source": "http://www.palaeocritti.com/by-group/dinosauria/sauropoda/turiasaurus",
    "source_display": "www.palaeocritti.com/by-group/dinosauria/sauropoda/turiasaurus"
    }
    ],
    "shouldShowMap": true,
    "mapUrl": "/api/dinosaur/Turiasaurus/map",
    "refs": [
    "R. Royo-Torres and A. Cobos. 2008. Primeros restos directos de dinosaurios en la Sierra de Albarracín (Teruel) [First direct remains of dinosaurs in the Sierra de Albarracín (Teruel)]. In J. I. Ruiz-Omeñaca, L. Piñuela and J. C. García-Ramos (eds), XXIV Jornadas de la Sociedad Española de Paleontología, 15-18 October 2008, Museo del Jurásico de Asturias (MUJA), Colunga, Spain, Libro de Resúmenes ",
    "R. Royo-Torres and A. Cobos. 2006. A giant European dinosaur and a new sauropod clade. Science 314:1925-1927"
    ],
    "globeUrl": "http://dinosaurpictures.org/ancient-earth/#90"
    },
    
    {
    "creatureType": "dinosaur",
    "name": "Juravenator",
    "period": "Jurassic",
    "eats": "carnivore",
    "regions": [
    "Europe"
    ],
    "pics": [
    {
    "votingUrl": "http://upload.wikimedia.org/wikipedia/commons/5/5d/Juravenator_starkae.JPG",
    "url": "http://images.dinosaurpictures.org/Juravenator_starkae_83b8.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Juravenator_starkae_83b8.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.qmwFftStein3i4BCmFxNug&pid=15.1",
    "source": "http://theropoda.blogspot.com/2012_07_01_archive.html",
    "source_display": "theropoda.blogspot.com/2012_07_01_archive.html"
    },
    {
    "votingUrl": "http://upload.wikimedia.org/wikipedia/commons/0/0d/Juravenator_BW.jpg",
    "url": "http://images.dinosaurpictures.org/Juravenator_BW_4ca5.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Juravenator_BW_4ca5.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.DxNZ0SZ%2bVonZ9s8G%2fphS5A&pid=15.1",
    "source": "http://en.wikipedia.org/wiki/File:Juravenator_BW.jpg",
    "source_display": "en.wikipedia.org/wiki/File:Juravenator_BW.jpg"
    },
    {
    "votingUrl": "http://reptileevolution.com/images/archosauromorpha/diapsida/archosauriformes/dinosauromorpha/juravenator588.jpg",
    "url": "http://images.dinosaurpictures.org/juravenator588_54d8.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/juravenator588_54d8.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.93VU65w6ADf%2bFVOrMkxHig&pid=15.1",
    "source": "http://www.reptileevolution.com/juravenator.htm",
    "source_display": "www.reptileevolution.com/juravenator.htm"
    },
    {
    "votingUrl": "http://www.dinosaurfact.net/Pictures/Juravenator.jpg",
    "url": "http://images.dinosaurpictures.org/Juravenator_ada2.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Juravenator_ada2.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.i83gjcS3ouUp6n3m%2fN7KcA&pid=15.1",
    "source": "http://www.dinosaurfact.net/jurassic/Juravenator.php",
    "source_display": "www.dinosaurfact.net/jurassic/Juravenator.php"
    },
    {
    "votingUrl": "http://0.tqn.com/d/dinosaurs/1/0/w/I/-/-/juravenatorAB.jpg",
    "url": "http://images.dinosaurpictures.org/juravenatorAB_d505.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/juravenatorAB_d505.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.jmiI4jF9lGNGxFofMPUbJw&pid=15.1",
    "source": "http://dinosaurs.about.com/od/dinosaurpictures/ig/Dino-Bird-Pictures/Juravenator.htm",
    "source_display": "dinosaurs.about.com/od/dinosaurpictures/ig/Dino-Bird-Pictures..."
    },
    {
    "votingUrl": "http://fc06.deviantart.net/fs70/i/2011/082/1/0/juravenator_1_by_baryonyx_walkeri-d3cb4sl.jpg",
    "url": "http://images.dinosaurpictures.org/juravenator_1_by_baryonyx_walkeri-d3cb4sl_7339.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/juravenator_1_by_baryonyx_walkeri-d3cb4sl_7339.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.rm9hxREz6ZWa0pGLcHCa5g&pid=15.1",
    "source": "http://baryonyx-walkeri.deviantart.com/art/Juravenator-1-202073349",
    "source_display": "baryonyx-walkeri.deviantart.com/art/Juravenator-1-202073349"
    },
    {
    "votingUrl": "http://www.dinosaurfact.net/Pictures/Juravenator2.jpg",
    "url": "http://images.dinosaurpictures.org/Juravenator2_6bef.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Juravenator2_6bef.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.n%2fIMtEqXfOUMe0DlFrOkpw&pid=15.1",
    "source": "http://www.dinosaurfact.net/jurassic/Juravenator.php",
    "source_display": "www.dinosaurfact.net/jurassic/Juravenator.php"
    },
    {
    "votingUrl": "http://fc07.deviantart.net/fs70/i/2011/082/1/e/juravenator_2_by_baryonyx_walkeri-d3cb50c.jpg",
    "url": "http://images.dinosaurpictures.org/juravenator_2_by_baryonyx_walkeri-d3cb50c_e736.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/juravenator_2_by_baryonyx_walkeri-d3cb50c_e736.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.zXz6DidsdcHqR%2fdKVOVifA&pid=15.1",
    "source": "http://baryonyx-walkeri.deviantart.com/art/Juravenator-2-202073628",
    "source_display": "baryonyx-walkeri.deviantart.com/art/Juravenator-2-202073628"
    },
    {
    "votingUrl": "http://fc06.deviantart.net/fs11/i/2006/240/e/5/Juravenator_by_dustdevil.jpg",
    "url": "http://images.dinosaurpictures.org/Juravenator_by_dustdevil_0479.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Juravenator_by_dustdevil_0479.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.A3tqGHl1u8b1HfDxmwMJ6A&pid=15.1",
    "source": "http://dustdevil.deviantart.com/art/Juravenator-38812964",
    "source_display": "dustdevil.deviantart.com/art/Juravenator-38812964"
    },
    {
    "votingUrl": "http://www.dinosaurier-interesse.de/web/Bilder/Hille/Lupe-Ki/Juravenator-bunt.gif",
    "url": "http://images.dinosaurpictures.org/Juravenator-bunt_d519.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Juravenator-bunt_d519.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.%2fXvwrvB%2fqjl4gNxUioVz2g&pid=15.1",
    "source": "http://www.dinosaurier-interesse.de/web/Bilder/Hille/Lupe-Ki/juravenator.html",
    "source_display": "www.dinosaurier-interesse.de/web/Bilder/Hille/Lupe-Ki/juravenator.html"
    },
    {
    "votingUrl": "http://1.bp.blogspot.com/-t1etfBqrZNI/UVrRho2gepI/AAAAAAAAAsE/uCxRCjg_8l8/s1600/%E6%81%90%E7%AB%9C%E3%83%BB%E5%8F%A4%E7%94%9F%E7%89%A9%E3%83%BB%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%E3%83%BB%E3%82%B8%E3%83%A5%E3%83%A9%E3%83%99%E3%83%8A%E3%83%88%E3%83%AB%E3%83%BBJuravenator.jpg",
    "url": "http://images.dinosaurpictures.org/恐竜・古生物・イラスト・ジュラベナトル・Juravenator_896d.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/恐竜・古生物・イラスト・ジュラベナトル・Juravenator_896d.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.6kHInG2qXbRQ0XiphYjIsQ&pid=15.1",
    "source": "http://extinct-creatures.blogspot.jp/2013/04/juravenator.html",
    "source_display": "extinct-creatures.blogspot.jp/2013/04/juravenator.html"
    },
    {
    "votingUrl": "http://www.wikidino.com/wp-content/uploads/Juravenator-dustdevil.jpg",
    "url": "http://images.dinosaurpictures.org/Juravenator-dustdevil_f85d.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Juravenator-dustdevil_f85d.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.DNz%2f8ZVgBwCMh80vfmO56A&pid=15.1",
    "source": "http://www.wikidino.com/?attachment_id=3170",
    "source_display": "www.wikidino.com/?attachment_id=3170"
    },
    {
    "votingUrl": "http://fc06.deviantart.net/fs70/i/2013/194/f/c/juravenator_by_teddyblackbear2040-d6ddfap.jpg",
    "url": "http://images.dinosaurpictures.org/juravenator_by_teddyblackbear2040-d6ddfap_1a62.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/juravenator_by_teddyblackbear2040-d6ddfap_1a62.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.uPc2zn3klnsYguS807hnDg&pid=15.1",
    "source": "http://teddyblackbear2040.deviantart.com/art/Juravenator-385258417",
    "source_display": "teddyblackbear2040.deviantart.com/art/Juravenator-385258417"
    },
    {
    "votingUrl": "http://dinopedia.ru/img/dinoid/juravenator/juravenator_art/tr/big/juravenator_02.jpg",
    "url": "http://images.dinosaurpictures.org/juravenator_02_6259.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/juravenator_02_6259.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.Hf4w9KBhl7CbJcKbhZNXZA&pid=15.1",
    "source": "http://dinopedia.ru/albums_global.php?id=116",
    "source_display": "dinopedia.ru/albums_global.php?id=116"
    }
    ],
    "shouldShowMap": true,
    "mapUrl": "/api/dinosaur/Juravenator/map",
    "refs": [
    "G. Arratia. 2000. Remarkable teleostean fishes from the Late Jurassic of southern Germany and their phylogenetic relationships. Mitteilungen aus dem Museum für Naturkunde in Berlin, Geowissenschaften Reihe 3:137-179"
    ],
    "globeUrl": "http://dinosaurpictures.org/ancient-earth/#170"
    },

    {
    "creatureType": "dinosaur",
    "name": "Eocarcharia",
    "period": "Jurassic",
    "eats": "carnivore",
    "regions": [
    "Africa"
    ],
    "pics": [
    {
    "votingUrl": "http://images.wikia.com/archosauria/images/7/7b/Eocarcharia_dinops.png",
    "url": "http://images.dinosaurpictures.org/Eocarcharia_dinops_72c0.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Eocarcharia_dinops_72c0.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.wdMIPfDtgvsfXy3uqhRu1w&pid=15.1",
    "source": "http://www.carcabin.com/eocarcharia/5/",
    "source_display": "www.carcabin.com/eocarcharia/5"
    },
    {
    "votingUrl": "http://www.dinosaurier-info.de/images/dinosaurs/dino_e/~eocarcharia/Eocarcharia-Head-Todd-Marshall.jpg",
    "url": "http://images.dinosaurpictures.org/Eocarcharia-Head-Todd-Marshall_6984.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Eocarcharia-Head-Todd-Marshall_6984.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.fp6%2bI7GQyOUDx%2fRP3l17PA&pid=15.1",
    "source": "http://www.dinosaurier-info.de/art/marshall/todd_marshall.php",
    "source_display": "www.dinosaurier-info.de/art/marshall/todd_marshall.php"
    },
    {
    "votingUrl": "http://fc02.deviantart.net/fs70/i/2010/333/0/6/eocarcharia_dinops_by_cheungchungtat-d33v5qz.jpg",
    "url": "http://images.dinosaurpictures.org/eocarcharia_dinops_by_cheungchungtat-d33v5qz_c330.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/eocarcharia_dinops_by_cheungchungtat-d33v5qz_c330.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.psl%2bmFxTqz81gKlzZmJtYw&pid=15.1",
    "source": "http://cheungchungtat.deviantart.com/art/Eocarcharia-dinops-187891163",
    "source_display": "cheungchungtat.deviantart.com/art/Eocarcharia-dinops-187891163"
    },
    {
    "votingUrl": "http://fc02.deviantart.net/fs71/i/2011/079/8/4/eocarcharia_dinops_by_teratophoneus-d3c1s18.jpg",
    "url": "http://images.dinosaurpictures.org/eocarcharia_dinops_by_teratophoneus-d3c1s18_a6cd.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/eocarcharia_dinops_by_teratophoneus-d3c1s18_a6cd.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.9r%2f3nPGpsCDQWEYwQ7WorQ&pid=15.1",
    "source": "http://teratophoneus.deviantart.com/art/Eocarcharia-dinops-201636908",
    "source_display": "teratophoneus.deviantart.com/art/Eocarcharia-dinops-201636908"
    },
    {
    "votingUrl": "http://upload.wikimedia.org/wikipedia/commons/9/91/Eocarcharia_Sil3.PNG",
    "url": "http://images.dinosaurpictures.org/Eocarcharia_Sil3_c8e6.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Eocarcharia_Sil3_c8e6.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.6mTsQBPZmfgSUI1UkLYn%2bg&pid=15.1",
    "source": "http://en.wikipedia.org/wiki/File:Eocarcharia_Sil3.PNG",
    "source_display": "en.wikipedia.org/wiki/File:Eocarcharia_Sil3.PNG"
    },
    {
    "votingUrl": "http://img3.wikia.nocookie.net/__cb20101212234013/dinosaurkingfanon/images/thumb/8/83/Eocarcharia.png/500px-Eocarcharia.png",
    "url": "http://images.dinosaurpictures.org/500px-Eocarcharia_3859.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/500px-Eocarcharia_3859.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.CIdaBXH9560WA6hHcbv%2fiw&pid=15.1",
    "source": "http://dinosaurkingfanon.wikia.com/wiki/File:Eocarcharia.png",
    "source_display": "dinosaurkingfanon.wikia.com/wiki/File:Eocarcharia.png"
    },
    {
    "votingUrl": "http://bc02.rp-online.de/polopoly_fs/eocarcharia-dinops-ohai-daemmerung-grimmigem-blick-1.2102947.1317776944!/httpImage/3894408590.jpg_gen/derivatives/rpo_zoom1024/3894408590.jpg",
    "url": "http://images.dinosaurpictures.org/3894408590_c319.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/3894408590_c319.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.22STWwaOVzxTB7V5UVi5tA&pid=15.1",
    "source": "http://www.carcabin.com/eocarcharia/",
    "source_display": "www.carcabin.com/eocarcharia"
    },
    {
    "votingUrl": "http://3.bp.blogspot.com/-mp97MXA1z9Q/TmJN4sKszsI/AAAAAAAACEw/5lN4r0KpObw/s1600/eocarcharia1.jpg",
    "url": "http://images.dinosaurpictures.org/eocarcharia1_e814.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/eocarcharia1_e814.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.vSYib5gTYZxYfd9%2fR3y%2fGw&pid=15.1",
    "source": "http://evolucaodosdinossauros-enzo.blogspot.com/2012/06/eocarcharia.html",
    "source_display": "evolucaodosdinossauros-enzo.blogspot.com/2012/06/eocarcharia.html"
    },
    {
    "votingUrl": "http://polley3d.com/images/Eocarcharia/images/Eocarcharia_TurnAround_Concept_Color.jpg",
    "url": "http://images.dinosaurpictures.org/Eocarcharia_TurnAround_Concept_Color_5ce0.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Eocarcharia_TurnAround_Concept_Color_5ce0.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.MmrNnBylLghCHFA%2b2pZvvA&pid=15.1",
    "source": "http://www.carcabin.com/eocarcharia/",
    "source_display": "www.carcabin.com/eocarcharia"
    },
    {
    "votingUrl": "http://prehistoricsillustrated.com/uploads/galleries/sekr_eocarcharia_dinops.png",
    "url": "http://prehistoricsillustrated.com/uploads/galleries/sekr_eocarcharia_dinops.png",
    "clickthrough_url": "http://prehistoricsillustrated.com/uploads/galleries/sekr_eocarcharia_dinops.png",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.IBiaxIptwY3gZhXlBw0FrQ&pid=15.1",
    "source": "http://www.carcabin.com/eocarcharia/",
    "source_display": "www.carcabin.com/eocarcharia"
    },
    {
    "votingUrl": "http://www.wikidino.com/wp-content/uploads/Eocarcharia-Ezequiel-Vera.jpg",
    "url": "http://images.dinosaurpictures.org/Eocarcharia-Ezequiel-Vera_f54e.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Eocarcharia-Ezequiel-Vera_f54e.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.2saS6aTESNaJzuaP4F%2fk%2bg&pid=15.1",
    "source": "http://www.wikidino.com/?attachment_id=12630",
    "source_display": "www.wikidino.com/?attachment_id=12630"
    },
    {
    "votingUrl": "http://www.wikidino.com/wp-content/uploads/Eocarcharia-Vitor-Silva.jpg",
    "url": "http://images.dinosaurpictures.org/Eocarcharia-Vitor-Silva_35e3.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Eocarcharia-Vitor-Silva_35e3.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.5488XICQGVbDsRlhiznnuQ&pid=15.1",
    "source": "http://www.wikidino.com/?attachment_id=21813",
    "source_display": "www.wikidino.com/?attachment_id=21813"
    },
    {
    "votingUrl": "http://0.tqn.com/d/dinosaurs/1/0/Q/Q/-/-/Eocarcharia-dinops.jpg",
    "url": "http://images.dinosaurpictures.org/Eocarcharia-dinops_c9a9.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Eocarcharia-dinops_c9a9.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.9tENnmKIKg2fz6E6IqVJ9g&pid=15.1",
    "source": "http://dinosaurs.about.com/od/dinosaurpictures/ig/Theropod-Pictures/Eocarcharia.htm",
    "source_display": "dinosaurs.about.com/od/dinosaurpictures/ig/Theropod-Pictures..."
    },
    {
    "votingUrl": "http://www.paleospot.com/illustrations/eocarcharia_dinops.jpg",
    "url": "http://images.dinosaurpictures.org/eocarcharia_dinops_6359.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/eocarcharia_dinops_6359.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.MGffJSkufcm2S6T7l2%2byzQ&pid=15.1",
    "source": "http://www.paleospot.com/galerie_rubrique.php?rub=1",
    "source_display": "www.paleospot.com/galerie_rubrique.php?rub=1"
    },
    {
    "votingUrl": "http://www.wikidino.com/wp-content/uploads/Eocarcharia-Matthew-Rinka.jpg",
    "url": "http://images.dinosaurpictures.org/Eocarcharia-Matthew-Rinka_99a9.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Eocarcharia-Matthew-Rinka_99a9.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.MEin%2fzBYraL17bE73AOt1A&pid=15.1",
    "source": "http://www.wikidino.com/?attachment_id=19150",
    "source_display": "www.wikidino.com/?attachment_id=19150"
    }
    ],
    "shouldShowMap": true,
    "mapUrl": "/api/dinosaur/Eocarcharia/map",
    "refs": [
    "P. C. Sereno and S. L. Brusatte. 2008. Basal abelisaurid and carcharodontosaurid theropods from the Lower Cretaceous Elrhaz Formation of Niger. Acta Palaeontologica Polonica 53(1):15-46"
    ],
    "globeUrl": "http://dinosaurpictures.org/ancient-earth/#170"
    },
    
    {
    "creatureType": "dinosaur",
    "name": "Tyrannosaurus",
    "period": "Cretaceous",
    "eats": "carnivore",
    "regions": [
    "North America"
    ],
    "pics": [
    {
    "votingUrl": "http://wallpoper.com/images/00/33/67/45/dinosaurs-tyrannosaurus_00336745.jpg",
    "url": "http://images.dinosaurpictures.org/dinosaurs-tyrannosaurus_00336745_13a8.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/dinosaurs-tyrannosaurus_00336745_13a8.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.cgzijuns66l9V%2f%2bXJB7yNQ&pid=15.1",
    "source": "http://1ms.net/tyrannosaurus-dinosaurs-284222.html",
    "source_display": "1ms.net/tyrannosaurus-dinosaurs-284222.html"
    },
    {
    "votingUrl": "http://www.wallpaperden.com/pics/tyrannosaurus-rex.jpg",
    "url": "http://images.dinosaurpictures.org/tyrannosaurus-rex_21e8.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/tyrannosaurus-rex_21e8.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.2qPGlZw7UTAzA9G8szIxVg&pid=15.1",
    "source": "http://www.wallpaperden.com/tyrannosaurus-rex.shtml",
    "source_display": "www.wallpaperden.com/tyrannosaurus-rex.shtml"
    },
    {
    "votingUrl": "http://wallpoper.com/images/00/39/93/63/dinosaurs-tyrannosaurus_00399363.jpg",
    "url": "http://images.dinosaurpictures.org/dinosaurs-tyrannosaurus_00399363_347a.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/dinosaurs-tyrannosaurus_00399363_347a.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.qqrJ94auLRmDOLGWdnJwqA&pid=15.1",
    "source": "http://wallpoper.com/wallpaper/dinosaurs-tyrannosaurus-399363",
    "source_display": "wallpoper.com/wallpaper/dinosaurs-tyrannosaurus-399363"
    },
    {
    "votingUrl": "http://ichef.bbci.co.uk/naturelibrary/images/ic/credit/640x395/t/ty/tyrannosaurus/tyrannosaurus_1.jpg",
    "url": "http://images.dinosaurpictures.org/tyrannosaurus_1_6c56.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/tyrannosaurus_1_6c56.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.sJ2hT5%2fjTdq5jWFd8XV9Nw&pid=15.1",
    "source": "http://www.bbc.co.uk/nature/life/Tyrannosaurus",
    "source_display": "www.bbc.co.uk/nature/life/Tyrannosaurus"
    },
    {
    "votingUrl": "http://images2.wikia.nocookie.net/__cb20080319171220/dinocrisis/images/7/7f/Tyrannosaurus.jpg",
    "url": "http://images.dinosaurpictures.org/Tyrannosaurus_e9c1.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Tyrannosaurus_e9c1.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.UTRDjotcdZJCf%2baqo92rEw&pid=15.1",
    "source": "http://dinocrisis.wikia.com/wiki/Tyrannosaurus/history",
    "source_display": "dinocrisis.wikia.com/wiki/Tyrannosaurus/history"
    },
    {
    "votingUrl": "http://fc00.deviantart.net/fs71/i/2012/258/1/5/tyrannosaurus_rex_by_pheaston-d5eqqy9.jpg",
    "url": "http://images.dinosaurpictures.org/tyrannosaurus_rex_by_pheaston-d5eqqy9_9748.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/tyrannosaurus_rex_by_pheaston-d5eqqy9_9748.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.1T5c2cRvUGgTAyfrzcD%2fhQ&pid=15.1",
    "source": "http://pheaston.deviantart.com/art/Tyrannosaurus-rex-327093489",
    "source_display": "pheaston.deviantart.com/art/Tyrannosaurus-rex-327093489"
    },
    {
    "votingUrl": "http://www.theinformationarchives.com/Tyrannosaurus_Rex/images/36_t-rex-Wallpaper.jpg",
    "url": "http://images.dinosaurpictures.org/36_t-rex-Wallpaper_0c64.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/36_t-rex-Wallpaper_0c64.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.2ck1j9HKjNBlqz%2fKm9RbDA&pid=15.1",
    "source": "http://www.theinformationarchives.com/Tyrannosaurus_Rex/",
    "source_display": "www.theinformationarchives.com/Tyrannosaurus_Rex"
    },
    {
    "votingUrl": "http://0.tqn.com/d/dinosaurs/1/0/a/B/-/-/tyrannosaurusSP.jpg",
    "url": "http://images.dinosaurpictures.org/tyrannosaurusSP_a2fb.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/tyrannosaurusSP_a2fb.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.4ED6o28qnnEiAkX8oNeowA&pid=15.1",
    "source": "http://dinosaurs.about.com/od/dinosaurpictures/ig/T--Rex-Pictures/",
    "source_display": "dinosaurs.about.com/od/dinosaurpictures/ig/T--Rex-Pictures"
    },
    {
    "votingUrl": "http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2009/2/7/1234029223589/Model-of-a-Tyrannosaurus--004.jpg",
    "url": "http://images.dinosaurpictures.org/Model-of-a-Tyrannosaurus--004_fbd8.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Model-of-a-Tyrannosaurus--004_fbd8.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.iOWRAJdWiNok6fUKWO7izw&pid=15.1",
    "source": "http://www.theguardian.com/science/2009/feb/08/tyrannosaurus-rex-most-popular-dinosaur",
    "source_display": "www.theguardian.com/science/2009/feb/08/tyrannosaurus-rex-most..."
    },
    {
    "votingUrl": "http://fc01.deviantart.net/fs70/f/2010/165/c/b/Tyrannosaurus_rex_by_pabluratops.jpg",
    "url": "http://images.dinosaurpictures.org/Tyrannosaurus_rex_by_pabluratops_49dd.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Tyrannosaurus_rex_by_pabluratops_49dd.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.fBw1ttESiwTznvuRsEj3hw&pid=15.1",
    "source": "http://pabluratops.deviantart.com/art/Tyrannosaurus-rex-167635055",
    "source_display": "pabluratops.deviantart.com/art/Tyrannosaurus-rex-167635055"
    },
    {
    "votingUrl": "http://critters.pixel-shack.com/WebImages/crittersgallery/Tyrannosaurus.jpg",
    "url": "http://images.dinosaurpictures.org/Tyrannosaurus_78f2.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Tyrannosaurus_78f2.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.e6r0hxzuaUHHtCfL%2bsXPVg&pid=15.1",
    "source": "http://critters.pixel-shack.com/GalleryT.htm",
    "source_display": "critters.pixel-shack.com/GalleryT.htm"
    },
    {
    "votingUrl": "http://www.theinformationarchives.com/Tyrannosaurus_Rex/images/15_walters_tyrannosaurus.jpg",
    "url": "http://images.dinosaurpictures.org/15_walters_tyrannosaurus_060a.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/15_walters_tyrannosaurus_060a.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.MRXOyazUX58wVgGrPCNtRw&pid=15.1",
    "source": "http://www.theinformationarchives.com/Tyrannosaurus_Rex/",
    "source_display": "www.theinformationarchives.com/Tyrannosaurus_Rex"
    },
    {
    "votingUrl": "http://fc08.deviantart.net/fs71/i/2013/078/2/2/tyrannosaurus_rex_by_camusaltamirano-d50pogv.jpg",
    "url": "http://images.dinosaurpictures.org/tyrannosaurus_rex_by_camusaltamirano-d50pogv_dcc9.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/tyrannosaurus_rex_by_camusaltamirano-d50pogv_dcc9.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.sLtdWb7CIuIq%2fSKf7fmHjw&pid=15.1",
    "source": "http://camusaltamirano.deviantart.com/art/Tyrannosaurus-rex-303528991",
    "source_display": "camusaltamirano.deviantart.com/art/Tyrannosaurus-rex-303528991"
    },
    {
    "votingUrl": "http://www.cbv.ns.ca/marigold/history/dinosaurs/datafiles/tyrannosauruspic.jpg",
    "url": "http://images.dinosaurpictures.org/tyrannosauruspic_14f8.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/tyrannosauruspic_14f8.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.2mPMfPScuEzrkdmva3DWZw&pid=15.1",
    "source": "http://www.cbv.ns.ca/marigold/history/dinosaurs/datafiles/tyrannosaurus.html",
    "source_display": "www.cbv.ns.ca/marigold/history/dinosaurs/datafiles/tyrannosaurus.html"
    },
    {
    "votingUrl": "http://upload.wikimedia.org/wikipedia/commons/c/ce/Tyrannosaurus_Rex_colored.png",
    "url": "http://images.dinosaurpictures.org/Tyrannosaurus_Rex_colored_d804.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Tyrannosaurus_Rex_colored_d804.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.qxuifHhZ%2f243YCqy2lPnew&pid=15.1",
    "source": "http://commons.wikimedia.org/wiki/File:Tyrannosaurus_Rex_colored.png",
    "source_display": "commons.wikimedia.org/wiki/File:Tyrannosaurus_Rex_colored.png"
    },
    {
    "votingUrl": "http://www.theinformationarchives.com/Tyrannosaurus_Rex/images/16_t-rex2_1_.jpg",
    "url": "http://images.dinosaurpictures.org/16_t-rex2_1__f87e.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/16_t-rex2_1__f87e.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.Ol9KSCjpQ9bt89C0UkFXzA&pid=15.1",
    "source": "http://www.theinformationarchives.com/Tyrannosaurus_Rex/",
    "source_display": "www.theinformationarchives.com/Tyrannosaurus_Rex"
    },
    {
    "votingUrl": "http://www.wikidino.com/wp-content/uploads/Tyrannosaurus-M.Shiraishi.jpg",
    "url": "http://images.dinosaurpictures.org/Tyrannosaurus-M.Shiraishi_57f9.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Tyrannosaurus-M.Shiraishi_57f9.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.6jXzW17A90dXCii6d2xsAg&pid=15.1",
    "source": "http://www.wikidino.com/?page_id=1357",
    "source_display": "www.wikidino.com/?page_id=1357"
    },
    {
    "votingUrl": "http://upload.wikimedia.org/wikipedia/commons/a/a3/Tyrannosaurus_BW.jpg",
    "url": "http://images.dinosaurpictures.org/Tyrannosaurus_BW_8164.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Tyrannosaurus_BW_8164.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.aH56TsSUwtZ%2f6M2lc2EHKA&pid=15.1",
    "source": "http://en.wikipedia.org/wiki/File:Tyrannosaurus_BW.jpg",
    "source_display": "en.wikipedia.org/wiki/File:Tyrannosaurus_BW.jpg"
    },
    {
    "votingUrl": "http://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dino-directory/flash/tyrannosaurus.jpg",
    "url": "http://images.dinosaurpictures.org/tyrannosaurus_889a.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/tyrannosaurus_889a.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.8iwjoHDkKJ5NDPcHUKWFmw&pid=15.1",
    "source": "http://www.nhm.ac.uk/nature-online/life/dinosaurs-other-extinct-creatures/dino-directory/tyrannosaurus.html",
    "source_display": "www.nhm.ac.uk/nature-online/life/dinosaurs-other-extinct-creatures..."
    }
    ],
    "shouldShowMap": true,
    "mapUrl": "/api/dinosaur/Tyrannosaurus/map",
    "refs": [
    "J. P. Hunter and D. A. Pearson. 1996. First record of Lancian (Late Cretaceous) mammals from the Hell Creek Formation of southwestern North Dakota, USA. Cretaceous Research 17",
    "Currie. 1994. . ",
    "A. O. Averianov and A. A. Yarkov. 2004. Carnivorous dinosaurs (Saurischia, Theropoda) from the Maastrichtian of the Volga-Don interfluve, Russia. Paleontological Journal 38(1):78-82",
    "J. C. Mathews and S. L. Brusatte. 2009. The first Triceratops bonebed and its implications for gregarious behavior. Journal of Vertebrate Paleontology 29(1):286-290",
    "J. A. Lillegraven and J. J. Eberle. 1999. Vertebrate faunal changes through Lancian and Puercan time in southern Wyoming. Journal of Paleontology 73(4):691-710",
    "B. H. Breithaupt and E. H. Southwell. 2006. Dynamosaurus imperiosus and the earliest discoveries of Tyrannosaurus rex in Wyoming and the West.  In S. G. Lucas and R. M. Sullivan (eds.), Late Cretaceous Vertebrates from the Western Interior. New Mexico Museum of Natural History and Science Bulletin 35:257-258",
    "R. E. Molnar. 1991. The cranial morphology of Tyrannosaurus rex. Palaeontographica Abteilung A 217(4-6):137-176",
    "T. S. Kelly. 2014. Preliminary report on the mammals form Lane's Little Jaw Site Quarry: a latest Cretaceous (earliest Puercan?) local fauna, Hell Creek Formation, southeastern Montana. Paludicola 10(1):50-91",
    "J. R. MacDonald. 1966. The search for the king of the tyrant lizards. Los Angeles County Museum of Natural History Quarterly 4(3):18-22",
    "H. F. Osborn. 1905. Tyrannosaurus and other Cretaceous carnivorous dinosaurs. Bulletin of the American Museum of Natural History 21(14):259-265",
    "R. Estes. 1964. Fossil vertebrates from the Late Cretaceous Lance Formation, eastern Wyoming. University of California Publications in Geological Sciences 49:1-187",
    "R. E. Barrick and W. J. Showers. 1994. Thermophysiology of Tyrannosaurus rex; evidence from oxygen isotopes\r\n. Science 265(5169):222-224",
    "P. S. Hill. 1983. Haystack Butte surrenders terrible lizard. American West 20(2):22-29",
    "M. B. Goodwin and J. R. Horner. 1997. Morphological variation and ontogeny in the skull of Triceratops. Journal of Vertebrate Paleontology 17(3, suppl.):49A",
    "C. I. Serrano-Brañas and E. Torres-Rodríguez. 2014. Tyrannosaurid teeth from the Lomas Coloradas Formation, Cabullona Group (Upper Cretaceous) Sonora, México. Cretaceous Research 49:163-171",
    "C. Lupton and D. Gabriel. 1980. Paleobiology and depositional setting of a Late Cretaceous vertebrate locality, Hell Creek Formation, McCone County, Montana. Contributions to Geology, University of Wyoming 18(2):117-126",
    "K. Carpenter. 1979. Vertebrate fauna of the Laramie Formation (Maestrichtian), Weld County, Colorado. Contributions to Geology, University of Wyoming 17(1):37-49",
    "W. A. Clemens. 1964. Fossil mammals of the type Lance Formation, Wyoming. Part I. Introduction and Marsupialia. University of California Publications in Geological Sciences 48:1-105",
    "R. E. Molnar. 1978. A new theropod dinosaur from the Upper Cretaceous of central Montana. Journal of Paleontology 52(1):73-82",
    "M. G. Lockley and G. Nadon. 2003. A diverse dinosaur-bird footprint assemblage from the Lance Formation, Upper Cretaceous, eastern Wyoming; implications for ichnotaxonomy. Ichnos 11:229-249",
    "J. M. Wood and R.G. Thomas. 1988. Fluvial processes and vertebrate taphonomy: the Upper Cretaceous Judith River Formation, south-central Dinosaur Provincial Park, Alberta, Canada. Palaeogeography, Palaeoclimatology, Palaeoecology 66:127-143",
    "F. H. Knowlton. 1909. The stratigraphic relations and paleontology of the \"Hell Creek beds,\" Ceratops beds\" and equivalents, and their reference to the Fort Union Formation. Proceedings of the Washington Academy of Sciences 11(3):179-238",
    "K. Derstler. 1995. The Dragons' Grave: an Edmontosaurus bonebed containing theropod egg shells and juveniles, Lance Formation (uppermost Cretaceous), Niobrara County, Wyoming. Journal of Vertebrate Paleontology 15(3, suppl.):26A",
    "G. L. Cannon. 1888. On the Tertiary Dinosauria found in Denver beds. Proceedings of the Colorado Scientific Society 3:140-147",
    "W. G. Joyce and T. R. Lyson. 2016. New cranial material of Gilmoremys lancensis (Testudines, Trionychidae) from the Hell Creek Formation of southeastern Montana, U.S.A. Journal of Vertebrate Paleontology 36(6):e1225748:1-10",
    "R. P. Lozinsky and A. P. Hunt. 1984. Late Cretaceous (Lancian) dinosaurs from the McRae Formation, Sierra County, New Mexico. New Mexico Geology 6(4):72-77",
    "O. C. Marsh. 1892. Notice of new reptiles from the Laramie Formation. American Journal of Science 43:449-453",
    "D. A. Pearson and T. Schaefer. 2002. Vertebrate biostratigraphy of the Hell Creek Formation in southwestern North Dakota and northwestern South Dakota.  In J. H. Hartman, J. R. Johnson, and D. J. Nichols (eds.), The Hell Creek Formation and the Cretaceous-Tertiary Boundary in the Northern Great Plains: An Integrated Continental Record of the End of the Cretaceous, Geological Society of America Special Paper 361:145-167",
    "R. Gould and R. Larson. 2003. An allometric study comparing metatarsal II's in Edmontosaurus from a low-diversity hadrosaur bone bed in Corson Co., S. D. Journal of Vertebrate Paleontology 23(3, suppl.):56A",
    "K. Carpenter and D. B. Young. 2002. Late Cretaceous dinosaurs from the Denver Basin, Colorado. Rocky Mountain Geology 37(2):237-254",
    "M. T. Greenwald. 1971. The Lower Vertebrates of the Hell Creek Formation, Harding County, South Dakota ",
    "J. R. Horner and D. Lessem. 1993. The Complete T. rex ",
    "Z. Dong. 1977. On the dinosaurian remains from Turpan, Xinjiang. Vertebrata PalAsiatica 15(1):59-66",
    "D. A. Russell. 1970. Tyrannosaurs from the Late Cretaceous of western Canada. National Museum of Natural Sciences, Publications in Paleontology 1:1-34",
    "P. D. Gingerich and K. D. Rose. 1980. Early Cenozoic mammalian faunas of the Clark's Fork Basin-Polecat Bench area, northwestern Wyoming. University of Michigan Papers on Paleontology 24:51-68",
    "T. T. Tokaryk and H. N. Bryant. 2004. The fauna from the Tyrannosaurus rex excavation, Frenchman Formation (Late Maastrichtian), Saskatchewan. Summary of Investigations 2004, Volume 1. Saskatchewan Geological Survey, Saskatchewan Industry\r\nResources, Miscellaneous Report 2004-4 1:1-12",
    "R. L. Cifelli and R. L. Nydam. 1999. Vertebrate faunas of the North Horn Formation (Upper Cretaceous-Lower Paleocene), Emery and Sanpete Counties. Utah Geological Survey Miscellaneous Publication 99-1:377-388",
    "H. F. Osborn. 1909. Extinct mammals, birds, reptiles and fishes. Fortieth Annual Report of the American Museum of Natural History for the Year 1908 ",
    "A. R. Tabrum. 1970. Comments on new tyrannosaurid material from Montana. 1970 Meeting of the Southern California Academy of Sciences. Bulletin of the Southern California Paleontological Society 2(6):6",
    "D. A. Lawson. 1976. Tyrannosaurus and Torosaurus, Maestrichtian dinosaurs from Trans-Pecos, Texas. Journal of Paleontology 50(1):158-164",
    "P. A. Holroyd and J. H. Hutchison. 2002. Patterns of geographic variation in latest Cretaceous vertebrates: evidence from the turtle component. Geological Society of America Special Paper 361:177-190",
    "K. R. Johnson. 2002. Megaflora of the Hell Creek and lower Fort Union Formations in the western Dakotas: Vegetational response to climate change, the Cretaceous-Tertiary boundary event, and rapid marine transgression. The Hell Creek Formation and the Cretaceous-Tertiary boundary in the northern Great Plains: An integrated continental record of the end of the Cretaceous. 361:329-391",
    "J. S. McIntosh. 1981. Annotated catalogue of the dinosaurs (Reptilia, Archosauria) in the collections of the Carnegie Museum of Natural History. Bulletin of Carnegie Museum of Natural History 18:1-67"
    ],
    "globeUrl": "http://dinosaurpictures.org/ancient-earth/#90"
    },
    
    {
    "creatureType": "dinosaur",
    "name": "Velociraptor",
    "period": "Cretaceous",
    "eats": "carnivore",
    "regions": [
    "Asia"
    ],
    "pics": [
    {
    "votingUrl": "http://www.famouscutouts.com/images/detailed/0/1038-Velociraptor.jpg",
    "url": "http://images.dinosaurpictures.org/1038-Velociraptor_303a.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/1038-Velociraptor_303a.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.b1090oKc0er6sFRCsuERpw&pid=15.1",
    "source": "http://www.famouscutouts.com/raptor.html",
    "source_display": "www.famouscutouts.com/raptor.html"
    },
    {
    "votingUrl": "http://fwordsblog.files.wordpress.com/2012/03/velociraptor_12.jpg",
    "url": "http://images.dinosaurpictures.org/velociraptor_12_c4fd.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/velociraptor_12_c4fd.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.KL%2fixh448t0uG%2fK8roF4Xw&pid=15.1",
    "source": "http://fwords.co.uk/2012/03/09/25-things-to-do-in-a-dull-town-at-lunchtime-3-visit-the-library-and-learn-something-new/",
    "source_display": "fwords.co.uk/2012/03/09/25-things-to-do-in-a-dull-town-at-lunchtime..."
    },
    {
    "votingUrl": "http://images4.fanpop.com/image/photos/23500000/Velociraptor-dinosaurs-23564955-817-734.jpg",
    "url": "http://images.dinosaurpictures.org/Velociraptor-dinosaurs-23564955-817-734_5c51.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Velociraptor-dinosaurs-23564955-817-734_5c51.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.TXYFNUjnKbkTmWtma0Y%2f%2fg&pid=15.1",
    "source": "http://www.fanpop.com/clubs/dinosaurs/images/23564955/title/velociraptor-photo",
    "source_display": "www.fanpop.com/clubs/dinosaurs/images/23564955/title/velociraptor..."
    },
    {
    "votingUrl": "http://criptosito.altervista.org/dinosauri/terrfoto/velociraptor003.jpg",
    "url": "http://images.dinosaurpictures.org/velociraptor003_30d2.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/velociraptor003_30d2.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.US3zWDa15%2b2UvClXfCJO7Q&pid=15.1",
    "source": "http://criptosito.altervista.org/dinosauri/velociraptor.htm",
    "source_display": "criptosito.altervista.org/dinosauri/velociraptor.htm"
    },
    {
    "votingUrl": "http://images1.wikia.nocookie.net/__cb20101028183342/villains/images/9/97/JP-Velociraptors.jpg",
    "url": "http://images.dinosaurpictures.org/JP-Velociraptors_a6b9.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/JP-Velociraptors_a6b9.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.1IRKQ1PEbcxzNOzyxQhGcg&pid=15.1",
    "source": "http://villains.wikia.com/wiki/Velociraptors_(Jurassic_Park)",
    "source_display": "villains.wikia.com/wiki/Velociraptors_(Jurassic_Park)"
    },
    {
    "votingUrl": "https://lh6.googleusercontent.com/-j3o8C6Nep7w/TYSaFJzB-JI/AAAAAAAAAQc/Sj2g9aIjIUc/s1600/Velociraptor_J01-Dinosaur-Face.jpg",
    "url": "http://images.dinosaurpictures.org/Velociraptor_J01-Dinosaur-Face_ec42.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Velociraptor_J01-Dinosaur-Face_ec42.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.mNIkbWIJCXr4DtBwb4MUag&pid=15.1",
    "source": "http://monstersandbeasts.blogspot.com/2011/03/velociraptor.html",
    "source_display": "monstersandbeasts.blogspot.com/2011/03/velociraptor.html"
    },
    {
    "votingUrl": "http://australianmuseum.net.au/Uploads/Images/7090/Velociraptor_2_big.jpg",
    "url": "http://images.dinosaurpictures.org/Velociraptor_2_big_c7e8.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Velociraptor_2_big_c7e8.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.OcN1gFSTZq0TD2U7e5uPVg&pid=15.1",
    "source": "http://australianmuseum.net.au/image/velociraptor",
    "source_display": "australianmuseum.net.au/image/velociraptor"
    },
    {
    "votingUrl": "http://www.jplegacy.org/jpencyclopedia/wp-content/uploads/2011/06/velociraptor-small.jpg",
    "url": "http://images.dinosaurpictures.org/velociraptor-small_e8d8.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/velociraptor-small_e8d8.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.o08KqXur23y0jbFYqo6NYw&pid=15.1",
    "source": "http://www.jplegacy.org/jpencyclopedia/?p=101",
    "source_display": "www.jplegacy.org/jpencyclopedia/?p=101"
    },
    {
    "votingUrl": "http://images1.wikia.nocookie.net/__cb20080319170331/dinocrisis/images/d/d5/Velociraptor.JPG",
    "url": "http://images.dinosaurpictures.org/Velociraptor_4cf7.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Velociraptor_4cf7.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.JL%2f%2bUONhROTb2yBkWNrOCA&pid=15.1",
    "source": "http://dinocrisis.wikia.com/wiki/Velociraptor",
    "source_display": "dinocrisis.wikia.com/wiki/Velociraptor"
    },
    {
    "votingUrl": "http://images2.wikia.nocookie.net/__cb20120229190751/beastwarstransformers/images/6/6a/Velociraptor_Vue_3_0_img.jpg",
    "url": "http://images.dinosaurpictures.org/Velociraptor_Vue_3_0_img_585a.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Velociraptor_Vue_3_0_img_585a.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.OvIaX2TLBR2TuD2Zn6y%2fIA&pid=15.1",
    "source": "http://beastwarstransformers.wikia.com/wiki/Velociraptor",
    "source_display": "beastwarstransformers.wikia.com/wiki/Velociraptor"
    },
    {
    "votingUrl": "http://www.locolobo.org/files/1velociraptor.jpg",
    "url": "http://images.dinosaurpictures.org/1velociraptor_3bc6.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/1velociraptor_3bc6.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.pfnQB%2fuhlZ2utKKNbmjj5A&pid=15.1",
    "source": "http://myths-made-real.blogspot.com/2011/11/creature-feature-velociraptors.html",
    "source_display": "myths-made-real.blogspot.com/2011/11/creature-feature-velociraptors..."
    },
    {
    "votingUrl": "http://fc00.deviantart.net/fs71/i/2010/135/5/4/Velociraptor_by_julXart.jpg",
    "url": "http://images.dinosaurpictures.org/Velociraptor_by_julXart_ddfc.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Velociraptor_by_julXart_ddfc.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.2UVnjwqH7J35O2Q74zQuiQ&pid=15.1",
    "source": "http://julxart.deviantart.com/art/Velociraptor-164135011",
    "source_display": "julxart.deviantart.com/art/Velociraptor-164135011"
    },
    {
    "votingUrl": "http://fc09.deviantart.net/fs71/i/2010/199/b/8/Male_Velociraptor_Nublarensis__by_ebelesaurus.jpg",
    "url": "http://images.dinosaurpictures.org/Male_Velociraptor_Nublarensis__by_ebelesaurus_33ac.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Male_Velociraptor_Nublarensis__by_ebelesaurus_33ac.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.N4ToUPT%2bH%2fw6xLgbvcqaAA&pid=15.1",
    "source": "http://ebelesaurus.deviantart.com/art/Male-Velociraptor-Nublarensis-171789193",
    "source_display": "ebelesaurus.deviantart.com/art/Male-Velociraptor-Nublarensis-171789193"
    },
    {
    "votingUrl": "http://opinionatedalex.files.wordpress.com/2010/10/velociraptor.jpg",
    "url": "http://images.dinosaurpictures.org/velociraptor_4d16.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/velociraptor_4d16.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.fsk4%2fTQnbhzDaKMw%2faBXzA&pid=15.1",
    "source": "http://opinionatedalex.wordpress.com/2010/10/25/dmip-task-2-velociraptor-safety-training/",
    "source_display": "opinionatedalex.wordpress.com/2010/10/25/dmip-task-2-velociraptor..."
    },
    {
    "votingUrl": "http://healthstones.com/dinosaurdata/v/velociraptor/velociraptor.jpg",
    "url": "http://images.dinosaurpictures.org/velociraptor_caaf.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/velociraptor_caaf.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.4JOTFSVTog%2fRlRtfuoEd2w&pid=15.1",
    "source": "http://www.healthstones.com/dinosaurdata/v/velociraptor/velociraptor.html",
    "source_display": "www.healthstones.com/dinosaurdata/v/velociraptor/velociraptor.html"
    },
    {
    "votingUrl": "http://www.cmstudio.com/image/Velociraptor005.jpg",
    "url": "http://images.dinosaurpictures.org/Velociraptor005_0ecd.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Velociraptor005_0ecd.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.T1pa30uBXzW7F%2bWkXbZO7w&pid=15.1",
    "source": "http://www.cmstudio.com/velociraptor.html",
    "source_display": "www.cmstudio.com/velociraptor.html"
    },
    {
    "votingUrl": "http://4.bp.blogspot.com/_9py6IgNlFak/TEWpzzk3rGI/AAAAAAAAAgw/h4eYs-DWn9U/s1600/Velociraptor.jpg",
    "url": "http://images.dinosaurpictures.org/Velociraptor_4d71.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Velociraptor_4d71.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.%2bH%2bL1wuUhXERdnC4b8SKpw&pid=15.1",
    "source": "http://animaladay.blogspot.com/2010/07/velociraptor.html",
    "source_display": "animaladay.blogspot.com/2010/07/velociraptor.html"
    },
    {
    "votingUrl": "http://ayay.co.uk/backgrounds/dinosaurs/carnivore/velociraptor.jpg",
    "url": "http://images.dinosaurpictures.org/velociraptor_5f88.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/velociraptor_5f88.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.XhPAqQYH109Xc1GDbYUKFw&pid=15.1",
    "source": "http://ayay.co.uk/background/dinosaurs/carnivore/velociraptor/",
    "source_display": "ayay.co.uk/background/dinosaurs/carnivore/velociraptor"
    },
    {
    "votingUrl": "http://www.simnet.is/xpert/velociraptor.jpg",
    "url": "http://images.dinosaurpictures.org/velociraptor_4573.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/velociraptor_4573.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.PUe8BGw7xVt9DEib442k3g&pid=15.1",
    "source": "http://www.tamparacing.com/forums/pit-road/343260-velociraptor-moonshoes-eagle-jetpack.html",
    "source_display": "www.tamparacing.com/forums/pit-road/343260-velociraptor-moonshoes..."
    }
    ],
    "shouldShowMap": true,
    "mapUrl": "/api/dinosaur/Velociraptor/map",
    "refs": [
    "P. Godefroit and P. J. Currie. 2008. A new species of Velociraptor (Dinosauria: Dromaeosauridae) from the Upper Cretaceous of northern China. Journal of Vertebrate Paleontology 28(2):432-438",
    "W. Granger and W. K. Gregory. 1923. Protoceratops andrewsi, a pre-ceratopsian dinosaur from Mongolia, with an appendix on the structural relationships of the Protoceratops beds. American Museum Novitates 72:1-9",
    "M. A. Norell and P. J. Makovicky. 1999. Important features of the dromaeosaur skeleton II: information from newly collected specimens of Velociraptor mongoliensis. American Museum Novitates 3282:1-45",
    "A. Perle and M. A. Norell. 1993. Flightless bird from the Cretaceous of Mongolia. Nature 362:623-626",
    "B. Bohlin. 1945. History of the expedition in Asia 1927–1935. Part IV. General reports of travels and fieldwork. Palaeontological and geological researches in Mongolia and Kansu 1929-1933. Reports from the Scientific Expedition to the North-Western Provinces of China Under Leadership of Dr. Sven Hedin. The Sino-Swedish Expedition Publication 26:255-325",
    "M. Watabe and D. B. Weishampel. 1994. Results of Hayashibara Museum of Natural Sciences–Institute of Geology, Academy of Sciences of Mongolia Joint Paleontological Expedition to the Gobi Desert in 1993. Journal of Vertebrate Paleontology 14(3, suppl.):51A",
    "C.-C. Young. 1958. The first record of dinosaurian remains from Shansi. Vertebrata PalAsiatica 2(4):231-236",
    "R. Gradzinski and T. Jerzykiewicz. 1972. Additional geographical and geological data from the Polish-Mongolian Palaeontological Expeditions. Palaeontologia Polonica 27:17-306",
    "S. Suzuki and M. Watabe. 2000. Report on the Japan-Mongolia Joint Paleontological Expedition to the Gobi desert, 1995. Hayashibara Museum of Natural Sciences Research Bulletin 1:45-57",
    "S. Suzuki and M. Watabe. 2000. Report on the preliminary joint field excursion to the Gobi desert, 1992. Hayashibara Museum of Natural Sciences Research Bulletin 1:13-16",
    "M. A. Norell and P. J. Makovicky. 1997. Important features of the dromaeosaur skeleton: information from a new specimen. American Museum Novitates 3215:1-28",
    "A. N. Riabinin. 1937. O nakhodke shlemonosnykh form Dinosauria verkhnemelovykh otlozheniyakh yuzhnogo Kazakhstana [The discovery of crested forms of Upper Cretaceous dinosaurs in southern Kazakhstan]. Priroda 1937(9):91",
    "J. M. Wood and R.G. Thomas. 1988. Fluvial processes and vertebrate taphonomy: the Upper Cretaceous Judith River Formation, south-central Dinosaur Provincial Park, Alberta, Canada. Palaeogeography, Palaeoclimatology, Palaeoecology 66:127-143",
    "W. Watabe and S. Suzuki. 2000. Report on the Japan–Mongolia Joint Paleontological Expedition to the Gobi desert, 1994. Hayashibara Museum of Natural Sciences Research Bulletin 1:30-44",
    "R. Gradzinski and Z. Kielan-Jaworowska. 1977. Upper Cretaceous Djadokhta, Barun Goyot and Nemegt formations of Mongolia, including remarks on previous subdivisions. Acta Geologica Polonica 27(3):281-318",
    "K. Mikhailov and K. Sabath. 1994. Eggs and nests from the Cretaceous of Mongolia.  In K. Carpenter, K. F. Hirsch, and J. R. Horner (eds.), Dinosaur Eggs and Babies, Cambridge University Press, Cambridge ",
    "D. Dashzeveg and M. J. Novacek. 1995. Extraordinary preservation in a new vertebrate assemblage from the Late Cretaceous of Mongolia. Nature 374:446-449"
    ],
    "globeUrl": "http://dinosaurpictures.org/ancient-earth/#90"
    },

    {
    "creatureType": "dinosaur",
    "name": "Stegoceras",
    "period": "Cretaceous",
    "eats": "herbivore",
    "regions": [
    "North America"
    ],
    "pics": [
    {
    "votingUrl": "http://ayay.co.uk/backgrounds/dinosaurs/herbivore/stegoceras-sheep.jpg",
    "url": "http://images.dinosaurpictures.org/stegoceras-sheep_6b1b.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/stegoceras-sheep_6b1b.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.K%2bc9WJC19icgvd1wdec0vA&pid=15.1",
    "source": "http://ayay.co.uk/background/dinosaurs/herbivore/stegoceras-sheep/",
    "source_display": "ayay.co.uk/background/dinosaurs/herbivore/stegoceras-sheep"
    },
    {
    "votingUrl": "http://www.cmstudio.com/image/Stegoceras026.jpg",
    "url": "http://images.dinosaurpictures.org/Stegoceras026_a165.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Stegoceras026_a165.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.7ZJ7w6YcKtYMuDkMKb1eCg&pid=15.1",
    "source": "http://www.cmstudio.com/stegoceras.html",
    "source_display": "www.cmstudio.com/stegoceras.html"
    },
    {
    "votingUrl": "http://fc03.deviantart.net/fs70/i/2012/255/e/9/070__stegoceras_validum_by_green_mamba-d5eillh.png",
    "url": "http://images.dinosaurpictures.org/070__stegoceras_validum_by_green_mamba-d5eillh_315c.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/070__stegoceras_validum_by_green_mamba-d5eillh_315c.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.bi%2bVKUTHLEwkC%2fNWkAfDhQ&pid=15.1",
    "source": "http://green-mamba.deviantart.com/art/070-STEGOCERAS-VALIDUM-326713301",
    "source_display": "green-mamba.deviantart.com/art/070-STEGOCERAS-VALIDUM-326713301"
    },
    {
    "votingUrl": "http://images3.wikia.nocookie.net/__cb20120727055316/prehistrico/es/images/thumb/5/50/Stegoceras.jpg/500px-Stegoceras.jpg",
    "url": "http://images.dinosaurpictures.org/500px-Stegoceras_8bac.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/500px-Stegoceras_8bac.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.Tzg1pDpGpPeSiMQyrU%2ftWw&pid=15.1",
    "source": "http://es.prehistrico.wikia.com/wiki/Stegoceras",
    "source_display": "es.prehistrico.wikia.com/wiki/Stegoceras"
    },
    {
    "votingUrl": "http://images.fineartamerica.com/images-medium-large/stegoceras-validus-a-prehistoric-era-sergey-krasovskiy.jpg",
    "url": "http://images.dinosaurpictures.org/stegoceras-validus-a-prehistoric-era-sergey-krasovskiy_8852.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/stegoceras-validus-a-prehistoric-era-sergey-krasovskiy_8852.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.LdkiPDp8Jq6lbbrx4g7upg&pid=15.1",
    "source": "http://fineartamerica.com/featured/stegoceras-validus-a-prehistoric-era-sergey-krasovskiy.html",
    "source_display": "fineartamerica.com/featured/stegoceras-validus-a-prehistoric-era..."
    },
    {
    "votingUrl": "http://www.cmstudio.com/image/Stegoceras024.jpg",
    "url": "http://images.dinosaurpictures.org/Stegoceras024_86c2.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Stegoceras024_86c2.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.DRmVzig2X5RN3rng5Nv3YA&pid=15.1",
    "source": "http://www.cmstudio.com/stegoceras.html",
    "source_display": "www.cmstudio.com/stegoceras.html"
    },
    {
    "votingUrl": "http://www.cmstudio.com/image/Stegoceras.jpg",
    "url": "http://images.dinosaurpictures.org/Stegoceras_4a06.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Stegoceras_4a06.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.l0g3EblCLUcuO%2fL8GVAJ%2fQ&pid=15.1",
    "source": "http://www.cmstudio.com/scale_models_6.html",
    "source_display": "www.cmstudio.com/scale_models_6.html"
    },
    {
    "votingUrl": "http://wonjae.files.wordpress.com/2010/02/stegoceras.jpg",
    "url": "http://images.dinosaurpictures.org/stegoceras_c4fe.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/stegoceras_c4fe.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.2Lv1jszOtRGvqJ8mBhVaeQ&pid=15.1",
    "source": "http://wonjae.wordpress.com/2010/02/27/stegoceras/",
    "source_display": "wonjae.wordpress.com/2010/02/27/stegoceras"
    },
    {
    "votingUrl": "http://3.bp.blogspot.com/-jfoSn7kxkKE/TffoyYlPTII/AAAAAAAAB2s/vlB-7gaSkY4/s1600/stegoceras_by_baryonyx_walkeri-d3a8jhs.jpg",
    "url": "http://images.dinosaurpictures.org/stegoceras_by_baryonyx_walkeri-d3a8jhs_fc11.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/stegoceras_by_baryonyx_walkeri-d3a8jhs_fc11.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.LUH8XzLDpKNzQCyyIIIC9Q&pid=15.1",
    "source": "http://biologipedia.blogspot.com/2011/06/stegoceras.html",
    "source_display": "biologipedia.blogspot.com/2011/06/stegoceras.html"
    },
    {
    "votingUrl": "http://upload.wikimedia.org/wikipedia/commons/5/50/Stegoceras.jpg",
    "url": "http://images.dinosaurpictures.org/Stegoceras_05f1.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Stegoceras_05f1.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.0X2VOFE%2f4UiF3e%2b4PAXllw&pid=15.1",
    "source": "http://www.geol.umd.edu/~tholtz/G104/lectures/104margino.html",
    "source_display": "www.geol.umd.edu/~tholtz/G104/lectures/104margino.html"
    },
    {
    "votingUrl": "http://galeri.uludagsozluk.com/49/stegoceras_43718.jpg",
    "url": "http://images.dinosaurpictures.org/stegoceras_43718_95d5.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/stegoceras_43718_95d5.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.oN1KV4XM0h0EfC%2fni969QA&pid=15.1",
    "source": "http://galeri.uludagsozluk.com/r/adam-gibi-adam-atam-43718/",
    "source_display": "galeri.uludagsozluk.com/r/adam-gibi-adam-atam-43718"
    },
    {
    "votingUrl": "http://img2.wikia.nocookie.net/__cb20130310015308/dinosauralive/images/5/50/Stegoceras.jpg",
    "url": "http://images.dinosaurpictures.org/Stegoceras_d448.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Stegoceras_d448.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.LYaPoxhqBAZtgDMBxfCKHw&pid=15.1",
    "source": "http://dinosauralive.wikia.com/wiki/Stegoceras",
    "source_display": "dinosauralive.wikia.com/wiki/Stegoceras"
    },
    {
    "votingUrl": "http://upload.wikimedia.org/wikipedia/commons/b/bc/Stegoceras_Hendrickx.jpg",
    "url": "http://images.dinosaurpictures.org/Stegoceras_Hendrickx_47a2.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Stegoceras_Hendrickx_47a2.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.GPP%2bw2f9wshyNUUGl21eOg&pid=15.1",
    "source": "http://commons.wikimedia.org/wiki/File:Stegoceras_Hendrickx.jpg",
    "source_display": "commons.wikimedia.org/wiki/File:Stegoceras_Hendrickx.jpg"
    },
    {
    "votingUrl": "http://fc07.deviantart.net/fs8/i/2005/352/a/6/Stegoceras_validum_by_RSNature.jpg",
    "url": "http://images.dinosaurpictures.org/Stegoceras_validum_by_RSNature_c6ac.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Stegoceras_validum_by_RSNature_c6ac.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.5KmU%2fR4EbGqA%2fA8NrQQkUA&pid=15.1",
    "source": "http://rsnature.deviantart.com/art/Stegoceras-validum-26555478",
    "source_display": "rsnature.deviantart.com/art/Stegoceras-validum-26555478"
    },
    {
    "votingUrl": "http://mpm.panaves.com/nh/stegoceras_web.png",
    "url": "http://images.dinosaurpictures.org/stegoceras_web_8f1f.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/stegoceras_web_8f1f.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.dPvXnuVpNaWmYLjSnBVAYw&pid=15.1",
    "source": "http://mpm.panaves.com/nh/stegoceras.html",
    "source_display": "mpm.panaves.com/nh/stegoceras.html"
    },
    {
    "votingUrl": "http://www.dinosaurpicturesonline.com/images/dinosaurs/ceratopsians/Stegoceras.jpg",
    "url": "http://images.dinosaurpictures.org/Stegoceras_989d.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Stegoceras_989d.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.6pbSD%2f0HMRTCPnNnygOU%2fA&pid=15.1",
    "source": "http://www.dinosaurpicturesonline.com/1e_ceratopsians.htm",
    "source_display": "www.dinosaurpicturesonline.com/1e_ceratopsians.htm"
    },
    {
    "votingUrl": "http://fc07.deviantart.net/fs70/i/2012/042/4/3/stegoceras_validum_by_deinonychusempire-d489k7a.png",
    "url": "http://images.dinosaurpictures.org/stegoceras_validum_by_deinonychusempire-d489k7a_3966.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/stegoceras_validum_by_deinonychusempire-d489k7a_3966.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.bOazCVpGdE%2bBzDLP3Mj8tg&pid=15.1",
    "source": "http://deinonychusempire.deviantart.com/art/Stegoceras-validum-255747718",
    "source_display": "deinonychusempire.deviantart.com/art/Stegoceras-validum-255747718"
    },
    {
    "votingUrl": "http://www.prehistoric-wildlife.com/images/species/s/stegoceras-size.jpg",
    "url": "http://images.dinosaurpictures.org/stegoceras-size_3174.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/stegoceras-size_3174.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.JVgO3hVdvNDtrYaEUS2jZQ&pid=15.1",
    "source": "http://www.prehistoric-wildlife.com/species/s/stegoceras.html",
    "source_display": "www.prehistoric-wildlife.com/species/s/stegoceras.html"
    },
    {
    "votingUrl": "http://www.baystatereplicas2.com/wp-content/uploads/2013/03/pic_stegoceras.jpg",
    "url": "http://images.dinosaurpictures.org/pic_stegoceras_de98.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/pic_stegoceras_de98.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.JevmQpz6dxAVluScw0xm%2fg&pid=15.1",
    "source": "http://www.baystatereplicas2.com/product/stegoceras-skull/",
    "source_display": "www.baystatereplicas2.com/product/stegoceras-skull"
    }
    ],
    "shouldShowMap": true,
    "mapUrl": "/api/dinosaur/Stegoceras/map",
    "refs": [
    "R. M. Sullivan and S. G. Lucas. 2006. The pachycephalosaurid dinosaur Stegoceras validum from the Upper Cretaceous Fruitland Formation, San Juan Basin, New Mexico.  In S. G. Lucas and R. M. Sullivan (eds.), Late Cretaceous Vertebrates from the Western Interior. New Mexico Museum of Natural History and Science Bulletin 35:329-330",
    "W. P. Coombs. 1978. The families of the ornithischian dinosaur order Ankylosauria. Palaeontology 21(1):143-170",
    "M. Montellano. 1992. Mammalian fauna of the Judith River Formation (Late Cretaceous, Judithian), northcentral Montana. University of California Publications in Geological Sciences 136:1-115",
    "L. M. Lambe. 1902. New genera and species from the Belly River Series (mid-Cretaceous). Geological Survey of Canada Contributions to Canadian Palaeontology 3(2):25-81",
    "L. M. Lambe. 1918. The Cretaceous genus Stegoceras typifying a new family referred provisionally to the Stegosauria. Proceedings and Transactions of the Royal Society of Canada, series 3 12:23-36",
    "P. M. Galton and H.-D. Sues. 1983. New data on pachycephalosaurid dinosaurs (Reptilia: Ornithischia) from North America. Canadian Journal of Earth Sciences 20(3):462-472",
    "P. Dodson. 1984. Small Judithian ceratopsids, Montana and Alberta. In W.-E. Reif & F. Westphal (eds.), Third Symposium on Mesozoic Terrestrial Ecosystems, Short Papers. Attempto Verlag, Tübingen ",
    "W. P. Wall and P. M. Galton. 1979. Notes on pachycephalosaurid dinosaurs (Reptilia: Ornithischia) from North America, with comments on their status as ornithopods. Canadian Journal of Earth Sciences 16:1176-1186",
    "A. R. Fiorillo. 1989. The vertebrate fauna from the Judith River Formation (Late Cretaceous) of Wheatland and Golden Valley counties, Montana. Mosasaur 4:127-142",
    "P. J. Currie. 2005. History of research.  In P. J. Currie and E. B. Koppelhus (eds.), Dinosaur Provincial Park: A Spectacular Ancient Ecosystem Revealed. Indiana University Press, Bloomington ",
    "S. E. Jasinski and R. M. Sullivan. 2011. Re-evaluation of pachycephalosaurids from the Fruitland-Kirtland transition (Kirtlandian, late Campanian), San Juan Basin, New Mexico, with a description of a new species of Stegoceras and a reassessment of Texacephale langstoni.  In R. M. Sullivan, S. G. Lucas, & J. A. Spielmann (eds.), Fossil Record 3. New Mexico Museum of Natural History and Science Bulletin 53:202-215",
    "C. W. Gilmore. 1924. On Troodon validus, an orthopodous dinosaur from the Belly River Cretaceous of Alberta, Canada. Department of Geology, University of Alberta Bulletin 1:1-43",
    "J. E. Storer. 1993. Additions to the mammalian paleofauna of Saskatchewan. Modern Geology 18(4):475-487",
    "M. B. Goodwin. 1990. Morphometric landmarks of pachycephalosaurid cranial material from the Judith River Formation of northcentral Montana.  In K. Carpenter and P. J. Currie (eds.), Dinosaur Systematics: Perspectives and Approaches, Cambridge University Press, Cambridge ",
    "A. Sahni. 1972. The vertebrate fauna of the Judith River Formation, Montana. Bulletin of the American Museum of Natural History 147(6):321-412",
    "M. B. Goodwin. 1989. New occurrences of pachycephalosaurid dinosaurs from the Hell Creek Formation, Garfield County, Montana. Journal of Vertebrate Paleontology 9(3, suppl.):23A",
    "B. Brown and E. M. Schlaikjer. 1943. A study of the troödont dinosaurs with the description of a new genus and four new species. Bulletin of the American Museum of Natural History 82(5):115-150",
    "T. D. Carr and T. E. Williamson. 2000. A review of Tyrannosauridae (Dinosauria, Coelurosauria) from New Mexico.  In S. G. Lucas and A. B. Heckert (eds.), Dinosaurs of New Mexico. New Mexico Museum of Natural History and Science Bulletin 17:113-145"
    ],
    "globeUrl": "http://dinosaurpictures.org/ancient-earth/#90"
    },
    
    {
    "creatureType": "dinosaur",
    "name": "Rapator",
    "period": "Cretaceous",
    "eats": "carnivore",
    "regions": [
    "Australia"
    ],
    "pics": [
    {
    "votingUrl": "https://tsjok45.files.wordpress.com/2012/10/rapator.jpg",
    "url": "http://images.dinosaurpictures.org/rapator_987e.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/rapator_987e.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.G9rVftrcfzykReRbaPjerw&pid=15.1",
    "source": "http://tsjok45.wordpress.com/2012/10/02/dinosauricon-r/",
    "source_display": "tsjok45.wordpress.com/2012/10/02/dinosauricon-r"
    },
    {
    "votingUrl": "http://th06.deviantart.net/fs70/PRE/i/2012/339/d/3/__ridge_ripper____rapator___by_kunfuzzledful-d5n6ik2.png",
    "url": "http://images.dinosaurpictures.org/__ridge_ripper____rapator___by_kunfuzzledful-d5n6ik2_5a51.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/__ridge_ripper____rapator___by_kunfuzzledful-d5n6ik2_5a51.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.mF61m2rFUWPb3f7vpw8%2fkQ&pid=15.1",
    "source": "http://kunfuzzledful.deviantart.com/art/Ridge-Ripper-Rapator-341266034",
    "source_display": "kunfuzzledful.deviantart.com/art/Ridge-Ripper-Rapator-341266034"
    },
    {
    "votingUrl": "http://fc05.deviantart.net/fs24/i/2008/006/f/5/Rapator_ornitholestoides_Scale_by_Kawekaweau.jpg",
    "url": "http://images.dinosaurpictures.org/Rapator_ornitholestoides_Scale_by_Kawekaweau_9f60.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Rapator_ornitholestoides_Scale_by_Kawekaweau_9f60.jpg",
    "thumbnail": "http://ts4.mm.bing.net/th?id=JN.DaIw8WckwoRo8rl3yEqJlQ&pid=15.1",
    "source": "http://kawekaweau.deviantart.com/art/Rapator-ornitholestoides-Scale-73958527",
    "source_display": "kawekaweau.deviantart.com/art/Rapator-ornitholestoides-Scale-73958527"
    },
    {
    "votingUrl": "http://fc02.deviantart.net/fs11/i/2006/229/0/f/Rapator_ornitholestoides_by_EmperorDinobot.jpg",
    "url": "http://images.dinosaurpictures.org/Rapator_ornitholestoides_by_EmperorDinobot_a655.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Rapator_ornitholestoides_by_EmperorDinobot_a655.jpg",
    "thumbnail": "http://ts1.mm.bing.net/th?id=JN.G0kbXT%2fXWQj4TA44Pj7xIg&pid=15.1",
    "source": "http://emperordinobot.deviantart.com/art/Rapator-ornitholestoides-38207375",
    "source_display": "emperordinobot.deviantart.com/art/Rapator-ornitholestoides-38207375"
    },
    {
    "votingUrl": "http://www.dinosaurfact.net/Pictures/Rapator4.jpg",
    "url": "http://images.dinosaurpictures.org/Rapator4_04f3.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Rapator4_04f3.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.TZiSb7LS%2b6BWGrC1VxkSpQ&pid=15.1",
    "source": "http://www.dinosaurfact.net/Cretaceous/Rapator.php",
    "source_display": "www.dinosaurfact.net/Cretaceous/Rapator.php"
    },
    {
    "votingUrl": "http://www.rareresource.com/photos/Rapator.jpg",
    "url": "http://images.dinosaurpictures.org/Rapator_7f34.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Rapator_7f34.jpg",
    "thumbnail": "http://ts3.mm.bing.net/th?id=JN.EPSHl5%2fY2U%2bkdGYSwjG7sQ&pid=15.1",
    "source": "http://www.rareresource.com/Rapator-dinosaur.html",
    "source_display": "www.rareresource.com/Rapator-dinosaur.html"
    },
    {
    "votingUrl": "http://www.wikidino.com/wp-content/uploads/Rapator-dewlap.jpg",
    "url": "http://images.dinosaurpictures.org/Rapator-dewlap_f0df.jpg",
    "clickthrough_url": "http://images.dinosaurpictures.org/Rapator-dewlap_f0df.jpg",
    "thumbnail": "http://ts2.mm.bing.net/th?id=JN.gyw3xowrM42pCr1aUvG3Jg&pid=15.1",
    "source": "http://www.wikidino.com/?attachment_id=3922",
    "source_display": "www.wikidino.com/?attachment_id=3922"
    }
    ],
    "shouldShowMap": true,
    "mapUrl": "/api/dinosaur/Rapator/map",
    "refs": [
    "A. S. Woodward. 1910. On remains of a megalosaurian dinosaur from New South Wales. Report of the British Association for the Advancement of Science 79:482-483"
    ],
    "globeUrl": "http://dinosaurpictures.org/ancient-earth/#90"
    },

    {
    "creatureType": "dinosaur",
    "name": "Thanos",
    "period": "Cretaceous",
    "eats": "carnivore",
    "regions": [
    "South America"
    ],
    "pics": [
    {
    "votingUrl": "https://upload.wikimedia.org/wikipedia/commons/6/67/Thanos_simonattoi.png",
    "url": "https://images.dinosaurpictures.org/Thanos/Thanos_simonattoi_f018.jpg",
    "clickthrough_url": "https://images.dinosaurpictures.org/Thanos/Thanos_simonattoi_f018.jpg",
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh1dF3zKnqmEPKYsbdVIDY2QSRQkUozhWThh9ghiTUeMQz0azIaA&s",
    "source": "https://en.wikipedia.org/wiki/Thanos_simonattoi",
    "source_display": "en.wikipedia.org"
    },
    {
    "votingUrl": "https://vignette.wikia.nocookie.net/vsbattles/images/e/e5/1920px-Thanos_simonattoi.png/revision/latest?cb=20190701021522",
    "url": "https://images.dinosaurpictures.org/Thanos/Thanos_latest_050b.jpg",
    "clickthrough_url": "https://images.dinosaurpictures.org/Thanos/Thanos_latest_050b.jpg",
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQD1MQumKFPkWnw570hadeI39Kn7M6sv_OkXaFL3l-W6kE9dAwoQ&s",
    "source": "https://vsbattles.fandom.com/wiki/Thanos_Simonattoi",
    "source_display": "vsbattles.fandom.com"
    },
    {
    "votingUrl": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fefed16c-6699-41fd-b0a7-cc71363b0cb8/dcu8rjm-a0bec70d-e385-448f-bff3-52025e1cc6d4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZlZmVkMTZjLTY2OTktNDFmZC1iMGE3LWNjNzEzNjNiMGNiOFwvZGN1OHJqbS1hMGJlYzcwZC1lMzg1LTQ0OGYtYmZmMy01MjAyNWUxY2M2ZDQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qXpP6VBaeEN7FQjT0QoWJjBRuu_v0PLcXEKduJGZ_1k",
    "url": "https://images.dinosaurpictures.org/Thanos/Thanos_dcu8rjm-a0bec70d-e385-448f-bff3-52025e1cc6d4_627e.jpg",
    "clickthrough_url": "https://images.dinosaurpictures.org/Thanos/Thanos_dcu8rjm-a0bec70d-e385-448f-bff3-52025e1cc6d4_627e.jpg",
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtljCMOrpz0t4zQn1e7cQedOMml6WIwRdepOvdK5cd42rrLu0aWQ&s",
    "source": "https://www.deviantart.com/paleonerd01/art/The-Mad-Titan-Thanos-simonattoi-776391538",
    "source_display": "deviantart.com"
    },
    {
    "votingUrl": "https://i.imgur.com/gr8ArQ0.jpg",
    "url": "https://images.dinosaurpictures.org/Thanos/Thanos_gr8ArQ0_0555.jpg",
    "clickthrough_url": "https://images.dinosaurpictures.org/Thanos/Thanos_gr8ArQ0_0555.jpg",
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv42ZM7SHgR_Le30R3KKwruRUst2QLJi4R1g2NOLgtWNy4rW2Mlw&s",
    "source": "https://www.resetera.com/threads/how-big-can-thanos-grow.81822/",
    "source_display": "resetera.com"
    },
    {
    "votingUrl": "https://upload.wikimedia.org/wikipedia/commons/b/be/Thanos_simonattoi.jpg",
    "url": "https://images.dinosaurpictures.org/Thanos/Thanos_simonattoi_3b9b.jpg",
    "clickthrough_url": "https://images.dinosaurpictures.org/Thanos/Thanos_simonattoi_3b9b.jpg",
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-en-r16wDVeKMn7FHiryYVPxt7Q0eDyifCAwUcnG5sHNK8ESg&s",
    "source": "https://commons.wikimedia.org/wiki/File:Thanos_simonattoi.jpg",
    "source_display": "commons.wikimedia.org"
    },
    {
    "votingUrl": "https://i.redd.it/9a5f7wyaaus21.jpg",
    "url": "https://images.dinosaurpictures.org/Thanos/Thanos_9a5f7wyaaus21_7f83.jpg",
    "clickthrough_url": "https://images.dinosaurpictures.org/Thanos/Thanos_9a5f7wyaaus21_7f83.jpg",
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxGgydfZoXoGzpvvna3Lt2QI9BmIeNUeN1z09hciMlAj8EWWx&s",
    "source": "https://www.reddit.com/r/jurassicworldevo/comments/be8ty7/thanos_has_arrived/",
    "source_display": "reddit.com"
    },
    {
    "votingUrl": "http://sticknodes.com/thumbs/thanosdinosaurpack.jpg",
    "url": "https://images.dinosaurpictures.org/Thanos/thanosdinosaurpack_d158.jpg",
    "clickthrough_url": "https://images.dinosaurpictures.org/Thanos/thanosdinosaurpack_d158.jpg",
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksSFq0YobSSiLTq2JT2pk84b0UEYlDvte4OpOF3Os-dTX3ypVYA&s",
    "source": "http://sticknodes.com/sticks/thanos-dinosaur-pack-zip/",
    "source_display": "sticknodes.com"
    }
    ],
    "shouldShowMap": true,
    "mapUrl": "/api/dinosaur/Thanos/map",
    "refs": [
    "R. Delcourt and F. V. Iori. 2018. A new Abelisauridae (Dinosauria: Theropoda) from São José do Rio Preto Formation, Upper Cretaceous of Brazil and comments on the Bauru Group fauna. Historical Biology "
    ],
    "globeUrl": "http://dinosaurpictures.org/ancient-earth/#90"
    }
]

db.dinosaurs.insertMany(dinosFromApi);

// console.log(dinosFromApi);
