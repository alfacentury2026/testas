const collectionDescriptions = {
  minimalistines:
    "Minimalistinės vidaus durys sukurtos vertinantiems švarias linijas ir subtilų dizainą. Šios kolekcijos puikiai dera moderniuose, skandinaviško stiliaus ir šiuolaikiniuose interjeruose. Paprastos formos bei lengvai pritaikomi dekorai leidžia duris integruoti į įvairias gyvenamąsias ir darbo erdves.",
  modernios:
    "Modernios vidaus durys išsiskiria šiuolaikišku dizainu, įvairiais modeliais ir plačiu dekorų pasirinkimu. Kolekcijos pritaikytos tiek butams, tiek namams, kur svarbus funkcionalumas, kokybė ir moderni estetika. Tai praktiškas sprendimas ieškantiems stilingų vidaus durų kasdieniam naudojimui.",
  frezuotos:
    "Frezuotos vidaus durys išsiskiria dekoratyviniais raštais ir išraiškingu dizainu. Frezavimo elementai suteikia durims charakterio ir padeda sukurti išskirtinį interjero vaizdą. Ši kategorija tinka ieškantiems elegantiškų bei vizualiai išskirtinių vidaus durų.",
  klasikines:
    "Klasikinio stiliaus vidaus durys pasižymi harmoningomis proporcijomis ir laiko patikrintu dizainu. Šios kolekcijos puikiai tinka tiek tradiciniams, tiek modernios klasikos interjerams. Elegantiška išvaizda ir universalumas leidžia durims išlikti aktualioms daugelį metų.",
  loft:
    "Loft tipo vidaus durys sukurtos moderniems ir industrinio stiliaus interjerams. Išraiškingos linijos, šiuolaikiški sprendimai ir išskirtinė estetika padeda sukurti charakteringą erdvės vaizdą. Šios durys puikiai dera loftuose, moderniuose butuose ir šiuolaikiniuose namuose.",
  stiklintos:
    "Stiklintos vidaus durys padeda išlaikyti natūralios šviesos sklaidą ir suteikia interjerui daugiau erdvės pojūčio. Stiklo elementai kuria lengvumo įspūdį, todėl šios durys puikiai tinka tiek gyvenamosioms, tiek darbo erdvėms. Tai praktiškas sprendimas norintiems suderinti estetiką ir funkcionalumą.",
};

type CollectionGroup = keyof typeof collectionDescriptions;

export const collectionFeatures: Record<CollectionGroup, readonly string[]> = {
  minimalistines: [
    "Švarios ir minimalistinės formos",
    "Tinka moderniems interjerams",
    "Lengvai derinami dekorai",
    "Universalus dizainas kasdienėms erdvėms",
  ],
  modernios: [
    "Šiuolaikiškas vidaus durų dizainas",
    "Įvairūs modelių variantai",
    "Populiariausi dekorų sprendimai",
    "Tinka namams ir butams",
  ],
  frezuotos: [
    "Išraiškingi frezavimo elementai",
    "Dekoratyvus ir išskirtinis dizainas",
    "Stiprus interjero akcentas",
    "Modernumo ir elegancijos derinys",
  ],
  klasikines: [
    "Klasikinio stiliaus estetika",
    "Subalansuotos proporcijos",
    "Laikui nepavaldus dizainas",
    "Tinka tradiciniams interjerams",
  ],
  loft: [
    "Industrinio stiliaus dizainas",
    "Moderni ir išskirtinė išvaizda",
    "Tinka loft tipo erdvėms",
    "Ryškus interjero akcentas",
  ],
  stiklintos: [
    "Daugiau natūralios šviesos",
    "Vizualiai lengvesnė erdvė",
    "Modernus stiklo dizainas",
    "Tinka gyvenamosioms ir darbo erdvėms",
  ],
};

type GalleryCollection = {
  title: string;
  group: CollectionGroup;
  description: string;
  features: readonly string[];
  gallery: {
    type: "decor";
    items: { name: string; image: string }[];
  };
};

function createCollection(
  title: string,
  folder: string,
  group: CollectionGroup,
  filenames: string[],
): GalleryCollection {
  return {
    title,
    group,
    description: collectionDescriptions[group],
    features: collectionFeatures[group],
    gallery: {
      type: "decor",
      items: filenames.map((filename) => ({
        name: filename
          .replace(/\.[^.]+$/, "")
          .replace(/_(\d+)$/, (_, copyNumber: string) =>
            ` ${Number(copyNumber) + 1}`,
          )
          .replace(/[-_]+/g, " ")
          .replace(/\b[a-z]/g, (letter) => letter.toUpperCase()),
        image: `/collections/${folder}/${filename}`,
      })),
    },
  };
}

export const collections = {
  kano: {
    title: "Kano",
    group: "klasikines",
    description: collectionDescriptions.klasikines,
    features: collectionFeatures.klasikines,
  },

  uvero: {
    title: "Uvero",
    group: "modernios",
    description: collectionDescriptions.modernios,
    features: collectionFeatures.modernios,
  },

  fado: {
    title: "Fado",
    group: "klasikines",
    description: collectionDescriptions.klasikines,
    features: collectionFeatures.klasikines,
  },

  rumba: {
    title: "Rumba",
    group: "klasikines",
    description: collectionDescriptions.klasikines,
    features: collectionFeatures.klasikines,
  },

  della: {
    title: "Della",
    group: "modernios",
    description: collectionDescriptions.modernios,
    features: collectionFeatures.modernios,
  },

  arte: {
    title: "Arte",
    group: "frezuotos",
    description: collectionDescriptions.frezuotos,
    features: collectionFeatures.frezuotos,
    gallery: {
      type: "decor" as const,
      items: [
        { name: "Arte 10 - Baltas mat", image: "/collections/arte/arte-10-bialy-mat.jpg" },
        { name: "Arte 20 - Baltas mat", image: "/collections/arte/arte-20-bialy-mat.jpg" },
        { name: "Arte 20 - Still", image: "/collections/arte/arte-20-still.jpg" },
        { name: "Arte 30 - Indigo", image: "/collections/arte/arte-30-indygo.jpg" },
        { name: "Arte 40 - Cashmere", image: "/collections/arte/arte-40-cashmere.jpg" },
        { name: "Arte 50 - Still", image: "/collections/arte/arte-50-still.jpg" },
        { name: "Arte 60 - Clay", image: "/collections/arte/arte-60-clay.jpg" },
        { name: "Arte 60 - Grau", image: "/collections/arte/arte-60-grau.jpg" },
        { name: "Arte 70 - Cashmere", image: "/collections/arte/arte-70-cashmere.jpg" },
        {
          name: "Arte 80 - Indigo",
          image:
            "/collections/arte/arte-80-indygo-uklad-frezowany-staly-wraz-ze-zmiana-szerokosci-skrzydla-zmienia-sie-dlugosc-frezowania-od-strony-zawiasowej.jpg",
        },
        { name: "Arte 90 - Cashmere", image: "/collections/arte/arte-90-cashmere.jpg" },
        { name: "Arte 90 - Clay", image: "/collections/arte/arte-90-clay.jpg" },
        { name: "Arte 90 - Indigo", image: "/collections/arte/arte-90-indygo.jpg" },
      ],
    },
  },

  "arte-black": {
    title: "Arte Black",
    group: "frezuotos",
    description: collectionDescriptions.frezuotos,
    features: collectionFeatures.frezuotos,
    gallery: {
      type: "decor" as const,
      items: [
        {
          name: "Arte Black 60 - Clay",
          image: "/collections/arte black/arte-black-60-clay.jpg",
        },
        {
          name: "Arte Black 60 - Grau",
          image: "/collections/arte black/arte-black-60-grau.jpg",
        },
        {
          name: "Arte Black 70 - Cashmere",
          image: "/collections/arte black/arte-black-70-cashmere.jpg",
        },
        {
          name: "Arte Black 80 - Indigo",
          image: "/collections/arte black/arte-black-80-indygo.jpg",
        },
      ],
    },
  },

  aklinos: createCollection("Aklinos", "aklinos", "minimalistines", [
    "pelne-biale-lak.jpg",
    "pelne-dab-bielony-lak.jpg",
    "pelne-dab-sandynawski-lak.jpg",
    "pelne-dab-srebrny-lak.jpg",
  ]),
  "aklinos-h2112": createCollection(
    "Aklinos H2112",
    "aklinos h2112",
    "minimalistines",
    [
    "pelne-gladkie-h2112-dab-alpin.jpg",
    "pelne-gladkie-h2112-dab-bawaria.jpg",
    "pelne-gladkie-h2112-still.jpg",
    ],
  ),
  antares: createCollection("Antares", "antares", "modernios", [
    "antares-10--dab-olejowany.jpg",
    "antares-20--dab-olejowany.jpg",
    "antares-30--dab-olejowany.jpg",
    "antares-40--dab-olejowany.jpg",
    "antares-50--dab-olejowany.jpg",
  ]),
  bello: createCollection("Bello", "bello", "modernios", [
    "bello-10--dab-latte.jpg",
    "bello-20--dab-latte.jpg",
  ]),
  bergamo: createCollection("Bergamo", "bergamo", "modernios", [
    "bergamo-10--bialy-mat.jpg",
    "bergamo-10--dab-bawaria.jpg",
    "bergamo-10--dab-cpl.jpg",
    "bergamo-20--bialy-mat.jpg",
    "bergamo-20--dab-cpl.jpg",
    "bergamo-30--bialy-mat.jpg",
    "bergamo-30--dab-cpl.jpg",
    "bergamo-40--bialy-mat.jpg",
    "bergamo-40--dab-cpl.jpg",
    "bergamo-50--bialy-mat.jpg",
    "bergamo-50--dab-cpl.jpg",
    "bergamo-60--bialy-mat.jpg",
    "bergamo-60--dab-cpl.jpg",
    "bergamo-70--bialy-mat.jpg",
    "bergamo-70--dab-cpl.jpg",
  ]),
  brandy: createCollection("Brandy", "brandy", "modernios", [
    "brandy-10--dab-stary.jpg",
    "brandy-20--dab-norweski.jpg",
    "brandy-20--dab-piaskowy.jpg",
    "brandy-30--dab-bawaria.jpg",
    "brandy-30--dab-norweski.jpg",
    "brandy-40--dab-norweski.jpg",
    "brandy-50--dab-norweski.jpg",
    "brandy-60--dab-norweski.jpg",
    "brandy-70--dab-norweski.jpg",
    "brandy-80--dab-norweski.jpg",
  ]),
  classic: createCollection("Classic", "classic", "klasikines", [
    "classic-10-cashmere.jpg",
    "classic-20-cashmere.jpg",
  ]),
  duo: createCollection("Duo", "duo", "modernios", [
    "duo-10--czarny-mat-dab-piaskowy.jpg",
    "duo-20--bialy-mat.jpg",
    "duo-20--czarny-mat.jpg",
    "duo-20--czarny-mat-bialy-mat.jpg",
    "duo-20--czarny-mat-miedz.jpg",
  ]),
  etna: createCollection("Etna", "etna", "modernios", [
    "etna-10--bialy-mat.jpg",
    "etna-10--dab-latte.jpg",
    "etna-10--dab-olejowany.jpg",
    "etna-10--orzech-wloski.jpg",
    "etna-20--orzech-muscato.jpg",
    "etna-20--orzech-wloski.jpg",
    "etna-30--orzech-muscato.jpg",
    "etna-30--orzech-wloski.jpg",
    "etna-40--orzech-muscato.jpg",
    "etna-40--orzech-wloski.jpg",
    "etna-50--orzech-muscato.jpg",
    "etna-50--orzech-wloski.jpg",
    "etna-60--orzech-muscato.jpg",
    "etna-60--orzech-wloski.jpg",
    "etna-70--bialy-mat.jpg",
    "etna-70--orzech-muscato.jpg",
    "etna-70--orzech-wloski.jpg",
  ]),
  evi: createCollection("Evi", "evi", "modernios", [
    "evi-10--dab-latte.jpg",
    "evi-10--dab-latte_1.jpg",
    "evi-10--grau.jpg",
    "evi-10--grau_1.jpg",
    "evi-20--cashmere.jpg",
    "evi-20--cashmere_1.jpg",
    "evi-30--dab-bawaria.jpg",
    "evi-30--dab-bawaria_1.jpg",
  ]),
  incanto: createCollection("Incanto", "incanto", "klasikines", [
    "incanto-10-indygo.jpg",
    "incanto-20-indygo.png",
    "incanto-30-indygo.jpg",
    "incanto-40-indygo.jpg",
    "incanto-50-indygo.jpg",
  ]),
  intarsja: createCollection("Intarsja", "intarsja", "frezuotos", [
    "intarsja-100-czarny-mat.jpg",
    "intarsja-60-orzech-palermo.jpg",
    "intarsja-70-czarny-mat.jpg",
    "intarsja-80-dab-bawaria.jpg",
    "intarsja-90-grau.jpg",
  ]),
  kampo: createCollection("Kampo", "kampo", "modernios", [
    "kampo-10--grau.jpg",
    "kampo-10--grau_1.jpg",
    "kampo-20--grau.jpg",
    "kampo-20--grau_1.jpg",
    "kampo-30--grau.jpg",
    "kampo-30--grau_1.jpg",
    "kampo-40--grau.jpg",
    "kampo-40--grau_1.jpg",
    "kampo-50--grau.jpg",
    "kampo-50--grau_1.jpg",
    "kampo-60--grau.jpg",
    "kampo-60--grau_1.jpg",
  ]),
  lamane: createCollection("Lamane", "lamane", "modernios", [
    "drzwi-lamane-cashmere.jpg",
  ]),
  lamelo: createCollection("Lamelo", "lamelo", "modernios", [
    "lamelo-dab-bawaria.jpg",
  ]),
  latino: createCollection("Latino", "latino", "modernios", [
    "latino-10--akacja-morava.jpg",
    "latino-10--orzech-wloski.jpg",
    "latino-20--bialy-mat.jpg",
    "latino-20--bialy-mat_1.jpg",
    "latino-20--dab-montana.jpg",
    "latino-30--akacja-morava.jpg",
    "latino-30--dab-piaskowy.jpg",
    "latino-40--akacja-morava.jpg",
    "latino-50--akacja-morava.jpg",
    "latino-60--akacja-morava.jpg",
    "latino-70--akacja-morava.jpg",
  ]),
  "loft-h240": createCollection("Loft H240", "loft h240", "loft", [
    "loft-h240-model-110-szklo-transparentne.jpg",
    "loft-h240-model-120-szklo-transparentne-grafit.jpg",
    "loft-h240-model-130-szklo-vsg-biale.jpg",
  ]),
  lugo: createCollection("Lugo", "lugo", "modernios", [
    "lugo-10--antracyt.jpg",
    "lugo-10--dab-bawaria.jpg",
    "lugo-20--antracyt.jpg",
    "lugo-20--dab-montana.jpg",
    "lugo-30--antracyt.jpg",
    "lugo-30--dab-olejowany.jpg",
    "lugo-40--antracyt.jpg",
  ]),
  lupus: createCollection("Lupus", "lupus", "modernios", [
    "lupus-10--antracyt.jpg",
    "lupus-10--dab-arctic.jpg",
    "lupus-10--dab-montana.jpg",
    "lupus-10--orzech-wloski.jpg",
    "lupus-20--cashmere.jpg",
  ]),
  magnetic: createCollection("Magnetic", "magnetic", "modernios", [
    "skrzydlo-magnetic-l-z-dlugim-pochwytem.jpg",
    "skrzydlo-magnetic-l-z-dlugim-pochwytem-bialy-mat.jpg",
    "skrzydlo-magnetic-s.jpg",
    "skrzydlo-magnetic-s-dab-arctic.jpg",
  ]),
  mars: createCollection("Mars", "mars", "modernios", [
    "mars-10--dab-olejowany.jpg",
    "mars-10--dab-olejowany_1.jpg",
    "mars-20--dab-olejowany.jpg",
    "mars-20--dab-olejowany_1.jpg",
    "mars-30--dab-olejowany.jpg",
    "mars-30--dab-olejowany_1.jpg",
    "mars-40--dab-olejowany.jpg",
    "mars-40--dab-olejowany_1.jpg",
  ]),
  mediolan: createCollection("Mediolan", "mediolan", "modernios", [
    "mediolan-10--bialy-mat.jpg",
    "mediolan-10--czarny-mat.jpg",
    "mediolan-10--czarny-mat_1.jpg",
    "mediolan-10--dab-olejowany.jpg",
    "mediolan-20--bialy-mat.jpg",
    "mediolan-20--czarny-mat.jpg",
    "mediolan-20--czarny-mat_1.jpg",
    "mediolan-30--bialy-mat.jpg",
    "mediolan-30--czarny-mat.jpg",
    "mediolan-30--czarny-mat_1.jpg",
  ]),
  mobi: createCollection("Mobi", "mobi", "modernios", [
    "mobi-10--bialy-mat.jpg",
    "mobi-10--bialy-mat_1.jpg",
    "mobi-20--bialy-mat.jpg",
    "mobi-20--bialy-mat_1.jpg",
    "mobi-30--bialy-mat.jpg",
    "mobi-30--bialy-mat_1.jpg",
    "mobi-40--bialy-mat.jpg",
    "mobi-40--bialy-mat_1.jpg",
    "mobi-50--bialy-mat.jpg",
    "mobi-50--bialy-mat_1.jpg",
  ]),
  moderno: createCollection("Moderno", "moderno", "modernios", [
    "intarsja-40-cashmere.jpg",
    "intarsja-40-clay.jpg",
    "intarsja-40-orzech-wloski.jpg",
    "moderno-10-dab-piaskowy-cpl.jpg",
    "moderno-40-cieply-bez-cpl.jpg",
    "moderno-50-cieply-bez-cpl.jpg",
  ]),
  murano: createCollection("Murano", "murano", "modernios", [
    "murano-10--dab-olejowany.jpg",
    "murano-10--dab-olejowany_1.jpg",
    "murano-20--dab-olejowany.jpg",
    "murano-20--dab-olejowany_1.jpg",
    "murano-30--dab-olejowany.jpg",
    "murano-30--dab-olejowany_1.jpg",
  ]),
  piano: createCollection("Piano", "piano", "loft", [
    "piano-10--caschmere.jpg",
    "piano-10-czarny-mat.jpg",
    "piano-20-clay.jpg",
    "piano-30-bialy-mat.jpg",
    "piano-30--grau.jpg",
    "piano-40-cashmere.jpg",
    "piano-40--dab-bawaria.jpg",
    "piano-40-grau.jpg",
    "piano-50--clay.jpg",
    "piano-50-dab-bawaria.jpg",
    "piano-60--grau.jpg",
  ]),
  plato: createCollection("Plato", "plato", "stiklintos", [
    "plato-10-szyba-transparentna.jpg",
    "plato-20-szyba-mleczna.jpg",
    "plato-30-szyba-grafit-transparentna.jpg",
    "plato-40-szyba-transparentna-z-aplikacja.jpg",
    "plato-50-szyba-mleczna-z-aplikacja.jpg",
    "plato-60-szyba-transparentna-z-aplikacja.jpg",
    "plato-70-szyba-mleczna-z-aplikacja.jpg",
  ]),
  prix: createCollection("Prix", "prix", "modernios", [
    "prix-10--bialy.jpg",
    "prix-10--dab-aurea.jpg",
    "prix-10--dab-latte.jpg",
    "prix-10--dab-olejowany.jpg",
    "prix-30--bialy.jpg",
    "prix-30--dab-cpl.jpg",
    "prix-30--dab-olejowany.jpg",
    "prix-50--bialy.jpg",
    "prix-50--dab-aurea.jpg",
    "prix-50--dab-olejowany.jpg",
    "prix-50--dab-oregon.jpg",
  ]),
  rocco: createCollection("Rocco", "rocco", "modernios", [
    "rocco-20--dab-bawaria.jpg",
    "rocco-30--dab-carbon.jpg",
    "rocco-30--dab-latte.jpg",
    "rocco-40--dab-montana.jpg",
    "rocco-50--orzech-wloski.jpg",
  ]),
  "sara-pro": createCollection("Sara Pro", "sara pro", "minimalistines", [
    "sara-pro-h220-czarny-mat.jpg",
    "sara-pro-h220-grau.jpg",
    "sara-pro-h240-bialy-mat.jpg",
    "sara-pro-h240-clay.jpg",
    "sara-pro-h240-dab-bawaria.jpg",
    "sara-pro-h240-grau.jpg",
  ]),
  tago: createCollection("Tago", "tago", "klasikines", [
    "tago-pelne--bialy.jpg",
    "tago-pelne--clay.png",
    "tago-pelne--czarny-mat.jpg",
    "tago-pelne--grau.jpg",
    "tago-z-lustrem--clay.png",
    "tago-z-lustrem--czarny-mat.jpg",
  ]),
  toledo: createCollection("Toledo", "toledo", "modernios", [
    "toledo-10--dab-cpl.jpg",
    "toledo-10--dab-cpl_1.jpg",
    "toledo-20--dab-cpl.jpg",
    "toledo-20--dab-cpl_1.jpg",
    "toledo-30--dab-cpl.jpg",
    "toledo-30--dab-cpl_1.jpg",
    "toledo-40--dab-cpl.jpg",
    "toledo-40--dab-cpl_1.jpg",
    "toledo-50--dab-cpl.jpg",
    "toledo-50--dab-cpl_1.jpg",
  ]),
  vanilla: createCollection("Vanilla", "vanilla", "modernios", [
    "vanilla-10--dab-bawaria.jpg",
    "vanilla-10--dab-bawaria_1.jpg",
    "vanilla-10--dab-polarny-cpl.png",
    "vanilla-20--dab-bawaria.jpg",
    "vanilla-20--dab-polarny-cpl.jpg",
    "vanilla-30--dab-bawaria.jpg",
    "vanilla-30--dab-polarny-cpl.jpg",
    "vanilla-40--dab-bawaria.jpg",
    "vanilla-40--dab-polarny-cpl.jpg",
    "vanilla-50--dab-bawaria.jpg",
    "vanilla-50--dab-polarny-cpl.jpg",
    "vanilla-60--dab-bawaria.jpg",
    "vanilla-60--dab-polarny-cpl.jpg",
    "vanilla-70--dab-bawaria.jpg",
    "vanilla-70--dab-polarny-cpl.jpg",
    "vanilla-80--dab-bawaria.jpg",
    "vanilla-80--dab-polarny-cpl.jpg",
  ]),
  varadero: createCollection("Varadero", "varadero", "klasikines", [
    "varadero-10--cashmere.jpg",
    "varadero-10--cashmere-czarne-oslonki-na-zawiasy.jpg",
    "varadero-10--dab-karmelowy.jpg",
    "varadero-10--dab-karmelowy-zawiasy-srebrne.jpg",
    "varadero-20--bialy-mat-czarne-oslonki-na-zawiasy.jpg",
    "varadero-20--clay.jpg",
    "varadero-20--grau.jpg",
    "varadero-20--grau-zawiasy-srebrne.jpg",
    "varadero-30--indygo-szklo-mlecznehartowane-zawiasy-srebrne.jpg",
    "varadero-40--still-szklo-dark-grey-zawiasy-srebrne.jpg",
  ]),
  vicar: createCollection("Vicar", "vicar", "modernios", [
    "vicar-10--clay.jpg",
    "vicar-10--orzech-wloski.jpg",
    "vicar-20--orzech-palermo.jpg",
    "vicar-30--cashmere.jpg",
    "vicar-30--dab-alpin.jpg",
    "vicar-40--grau.jpg",
  ]),
  vinci: createCollection("Vinci", "vinci", "modernios", [
    "vinci-10--bialy.jpg",
    "vinci-10--bialy-mat.jpg",
    "vinci-10--dab-bawaria.jpg",
    "vinci-10--dab-bawaria_1.jpg",
    "vinci-20--dab-bawaria.jpg",
    "vinci-20--dab-bawaria_1.jpg",
    "vinci-30--dab-bawaria.jpg",
    "vinci-30--dab-bawaria_1.jpg",
    "vinci-40--dab-bawaria.jpg",
    "vinci-40--dab-bawaria_1.jpg",
    "vinci-50--dab-bawaria.jpg",
    "vinci-50--dab-bawaria_1.jpg",
  ]),
  zitron: createCollection("Zitron", "zitron", "modernios", [
    "zitron-10--bialy.jpg",
    "zitron-20--dab-cpl.jpg",
    "zitron-30--bialy.jpg",
    "zitron-40--bialy.jpg",
    "zitron-50--bialy.jpg",
    "zitron-60--bianco.jpg",
    "zitron-70--bianco.jpg",
    "zitron-80--bianco.jpg",
  ]),
};
