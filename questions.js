const questions = [
  {
    id: 1,
    question:
      "Quelle athlète Française a réalisé le doublé olympique sur 200 m et 400 m aux Jeux d’Atlanta en 1996 ?",
    reponses: [
      "Floria Gueï",
      "Christine Arron",
      "Muriel Hurtis",
      "Marie-José Pérec",
    ],
    bonne_reponse: 3,
  },
  {
    id: 2,
    question:
      "Quelle cycliste Française a remporté la médaille d’or olympique en VTT cross-country aux Jeux de Paris 2024 ?",
    reponses: [
      "Pauline Ferrand-Prévot",
      "Juliette Labous",
      "Marion Rousse",
      "Jeannie Longo",
    ],
    bonne_reponse: 0,
  },
  {
    id: 3,
    question:
      "Quelle escrimeuse Française a remporté l’or au sabre individuel féminin aux Jeux olympiques de Paris 2024 ?",
    reponses: [
      "Laura Flessel",
      "Marie-Florence Candassamy",
      "Ysaora Thibus",
      "Manon Apithy-Brunet",
    ],
    bonne_reponse: 3,
  },
  {
    id: 4,
    question:
      "Quel nageur français a remporté quatre médailles d’or aux Jeux olympiques de Paris 2024 ?",
    reponses: [
      "Yannick Agnel",
      "Léon Marchand",
      "Camille Lacourt",
      "Florent Manaudou",
    ],
    bonne_reponse: 1,
  },
  {
    id: 5,
    question:
      "Quel judoka français a remporté deux médailles d’or aux Jeux de Paris 2024, en individuel et par équipes mixtes ?",
    reponses: [
      "Joan-Benjamin Gaba",
      "Teddy Riner",
      "David Douillet",
      "Teddy Tamgho",
    ],
    bonne_reponse: 1,
  },
  {
    id: 6,
    question:
      "Quelle boxeuse française est devenue championne olympique des poids légers aux Jeux de Rio en 2016 ?",
    reponses: [
      "Sofiane Oumiha",
      "Maïva Hamadouche",
      "Estelle Mossely",
      "Sarah Ourahmoune",
    ],
    bonne_reponse: 2,
  },
  {
    id: 7,
    question:
      "Quelle Française a remporté l’or olympique en triathlon féminin à Paris en 2024 ?",
    reponses: [
      "Léonie Périault",
      "Cassandre Beaugrand",
      "Jeanne Lehair",
      "Emmie Charayron",
    ],
    bonne_reponse: 1,
  },
  {
    id: 8,
    question:
      "Quel Français a remporté l’or en canoë monoplace slalom aux Jeux de Paris 2024 ?",
    reponses: [
      "Tony Estanguet",
      "Denis Gargaud Chanut",
      "Sébastien Combot",
      "Nicolas Gestin",
    ],
    bonne_reponse: 3,
  },
  {
    id: 9,
    question:
      "Quel volleyeur Français,double champion olympique, est reconnu comme l'un des meilleurs libéros au monde ?",
    reponses: [
      "Antoine Brizard",
      "Jenia Grebennikov",
      "Jean Patry",
      "Earvin Ngapeth",
    ],
    bonne_reponse: 1,
  },
  {
    id: 10,
    question:
      "En 2024, Victor Wembanyama est entré dans l’histoire de la NBA en remportant un prestigieux trophée individuel. Lequel ?",
    reponses: [
      "meilleur joueur",
      "meilleur marqueur",
      "meilleur défenseur",
      "meilleur débutant",
    ],
    bonne_reponse: 3,
  },
];

console.log(questions.length + " questions")


questions.forEach((question, index) => {
  console.log("Question " + (index + 1) + " : " + question.question)
  console.log("Bonne réponse : " + question.reponses[question.bonne_reponse])
})