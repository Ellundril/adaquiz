// ════════════════════════════════════════════
//   ADAQUIZ — script.js
//   Certaines fonctions sont déjà écrites.
//   Les fonctions marquées TODO sont à compléter.
// ════════════════════════════════════════════

// ── Sélection des éléments DOM ──────────────
// Ces lignes récupèrent les éléments HTML par leur id.
// Tu n'as pas besoin de les modifier.

// BOUTONS
const btnCommencer = document.querySelector(".commencer");
const btnSuivant = document.querySelector(".suivant");
const btnRejouer = document.querySelector(".rejouer");
// QUESTIONS - REPONSES
const numQuestion = document.querySelector(".titre-question");
const textQuestion = document.querySelector(".question");
const imgQuestion = document.querySelector(".image-question");
const listeReponses = document.querySelector(".liste-reponses");
const feedback = document.querySelector(".feedback-text");
// ECRANS
const ecranQuestion = document.querySelector("#ecran-question");
const ecranAccueil = document.querySelector("#ecran-accueil");
const ecranResultats = document.querySelector("#ecran-resultats");
// FIN DU QUIZ
const affichageScore = document.querySelector(".note");
const mention = document.querySelector(".mention");
const phraseFinale = document.querySelector(".phrase-finale");
const gif = document.querySelector(".gif");
//... Crée autant de constantes que d'éléments HTML à récupérer

// ── État du quiz ─────────────────────────────
// Ces variables stockent les données en cours de partie.
// Tu n'as pas besoin de les modifier.

let indexCourant = 0; // numéro de la question en cours (commence à 0)
let score = 0; // nombre de bonnes réponses
let boutonChatouille = "null";
let nbMouvement = 0;
// ── Navigation entre les écrans ──────────────
// Cette fonction est déjà écrite.
// Elle cache tous les écrans puis affiche celui qu'on lui donne.

const afficher = (ecran) => {
  ecranAccueil.classList.add("cache");
  ecranQuestion.classList.add("cache");
  ecranResultats.classList.add("cache");
  ecran.classList.remove("cache");
};

// ════════════════════════════════════════════
//   TODO — Fonctions à compléter
// ════════════════════════════════════════════

// ── TODO : afficherQuestion ──────────────────
// Cette fonction doit afficher la question en cours.
// Elle est appelée au début de chaque nouvelle question.
//
// Ce qu'elle doit faire :
//   1. Récupérer la question courante : questions[indexCourant]
//   2. Mettre à jour la barre de progression
//   3. Mettre à jour le compteur ("Question X / Y")
//   4. Afficher le texte de la question dans #texte-question
//   5. Cacher le bouton "Question suivante"
//   6. Vider #liste-reponses, puis créer un bouton pour chaque réponse
//      Chaque bouton doit appeler verifierReponse() au clic
//algo de fisher yates
const melange = (tab) => {
  let j;
  let temp;
  for (let i = tab.length - 1; i >= 1; i--) {
    j = Math.floor(Math.random() * i);
    temp = tab[j];
    tab[j] = tab[i];
    tab[i] = temp;
  }
  return tab;
};

//Fonction pour l'easter egg chatouiller le bouton
const indice = (bouton, index) => {
  const q = questions[indexCourant];
  if (index === q.bonne_reponse) {
    bouton.classList.add("indiceJuste");
  } else {
    bouton.classList.add("indiceFaux");
  }
};
const compteurMouvement = (bouton, index) => {
  if (nbMouvement <= 120) {
    console.log(nbMouvement);
    nbMouvement++;
  } else {
    indice(bouton, index);
  }
};
const chatouiller = (bouton, index) => {
  if (bouton !== "null")
    bouton.addEventListener("mousemove", () => {
      compteurMouvement(bouton, index);
    });
};

//Affichage des questions
const afficherQuestion = () => {
  const q = questions[indexCourant];
  numQuestion.textContent = `Question ${indexCourant + 1} /10`;
  textQuestion.textContent = q.question;
  imgQuestion.src = q.image;
  imgQuestion.alt = q.altImage;
  btnSuivant.classList.add("cache");
  feedback.classList.add("cache");
  listeReponses.innerHTML = "";
  q.reponses.forEach((reponse, index) => {
    const btn = document.createElement("button");
    btn.textContent = reponse;
    btn.classList.add("reponse");

    btn.addEventListener("mouseover", () => {
      boutonChatouille = btn;
      nbMouvement = 0;
      chatouiller(boutonChatouille, index);
    });

    btn.addEventListener("mouseout", () => {
      boutonChatouille = "null";
      nbMouvement = 0;
    });

    btn.addEventListener("click", () => {
      btn.classList.add("selectionne");
      verifierReponse(index, btn);
    });
    listeReponses.appendChild(btn);
  });
};

// ── TODO : verifierReponse ───────────────────
// Cette fonction est appelée quand une apprenante clique sur une réponse.
// Elle reçoit en paramètre l'index de la réponse choisie (0, 1, 2 ou 3).
//
// Ce qu'elle doit faire :
//   1. Récupérer la question courante
//   2. Désactiver tous les boutons de réponse
//   3. Colorier en vert la bonne réponse (ajouter la classe "correcte")
//   4. Si la réponse choisie est mauvaise, la colorier en rouge ("incorrecte")
//   5. Si la réponse est bonne, incrémenter le score
//   6. Afficher le bouton "Question suivante"

const verifierReponse = (index, btn) => {
  // Écris ton code ici
  const q = questions[indexCourant];
  const bonneReponse = q.bonne_reponse;
  const boutons = document.querySelectorAll(".reponse");
  boutons.forEach((bouton) => {
    bouton.disabled = true;
  });

  if (index === q.bonne_reponse) {
    score++;
    btn.classList.add("bonne");
    feedback.textContent = "Bonne réponse ! ✅";
  } else {
    feedback.textContent = "Mauvaise réponse ! ❌";
    btn.classList.add("mauvaise");
    boutons[bonneReponse].classList.add("bonne");
  }
  feedback.classList.remove("cache");
  btnSuivant.classList.remove("cache");
  indexCourant++;
};

// ── TODO : afficherResultats ─────────────────
// Cette fonction est appelée quand toutes les questions ont été répondues.
//
// Ce qu'elle doit faire :
//   1. Afficher le score dans #score-final (ex. "4 / 7")
//   2. Afficher un message dans #message-fin selon le score
//   3. Appeler afficher(ecranResultats) pour passer à l'écran résultats

const afficherResultats = () => {
  affichageScore.textContent = `Score : ${score}/10`;
  if (score < 5) {
    mention.textContent = "Pas terrible 🫤";
    phraseFinale.textContent = "Un peu de révisions et ce sera mieux !";
    gif.src = "gifs/foot_fail.webp";
  } else if (score < 7) {
    mention.textContent = "Ca passe 😅";
    phraseFinale.textContent = "Ouf c'est au moins la moyenne";
    gif.src = "gifs/homer_gym.webp";
  } else if (score < 10) {
    mention.textContent = "Bien joué 👍";
    phraseFinale.textContent = "De bonnes connaissances !";
    gif.src = "gifs/dunk.gif";
  } else {
    mention.textContent = "Excellent 🎉";
    phraseFinale.textContent = "Tu es incroyable !";
  }
  // Écris ton code ici
};

// ── TODO : écouteurs d'événements ───────────
// Branche les boutons sur les bonnes fonctions.
//
// À faire :
//   - btn-commencer → afficher l'écran question + appeler afficherQuestion()
//   - btn-suivant   → passer à la question suivante ou aux résultats
//   - btn-rejouer   → remettre indexCourant et score à 0, revenir à l'accueil

btnCommencer.addEventListener("click", () => {
  indexCourant = 0;
  score = 0;
  melange(questions);
  afficher(ecranQuestion);
  afficherQuestion();
});

btnSuivant.addEventListener("click", () => {
  if (indexCourant < 10) {
    afficherQuestion();
  } else {
    afficher(ecranResultats);
    afficherResultats();
  }
});

btnRejouer.addEventListener("click", () => {
  indexCourant = 0;
  score = 0;
  afficher(ecranAccueil);
});

//anti-triche

window.addEventListener("blur", () => {
  afficher(ecranAccueil);
  alert("N'essaie pas de tricher, tu peux tout recommencer du début !");
});

//easter egg php
window.addEventListener("keydown", (event) => {
  phpOlivier(event);
});

let touches = "";
const phpOlivier = (e) => {
  const objectif = "php";
  switch (e.code) {
    case "KeyP":
      touches += "p";
      break;
    case "KeyH":
      touches += "h";
      break;
    default:
      touches = "";
      break;
  }
  if (touches === objectif) {
    alert("Olivier sort de cet app !");
    touches = "";
  }
};
