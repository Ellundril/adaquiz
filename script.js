// ════════════════════════════════════════════
//   ADAQUIZ — script.js
//   Certaines fonctions sont déjà écrites.
//   Les fonctions marquées TODO sont à compléter.
// ════════════════════════════════════════════


// ── Sélection des éléments DOM ──────────────
// Ces lignes récupèrent les éléments HTML par leur id.
// Tu n'as pas besoin de les modifier.

//... Crée autant de constantes que d'éléments HTML à récupérer


// ── État du quiz ─────────────────────────────
// Ces variables stockent les données en cours de partie.
// Tu n'as pas besoin de les modifier.

// let questions = []   // tableau des questions chargées depuis le JSON
let indexCourant = 0    // numéro de la question en cours (commence à 0)
let score = 0    // nombre de bonnes réponses


// ── Chargement du JSON ───────────────────────
// Cette fonction est déjà écrite.
// Elle charge le fichier questions.json et remplit l'écran d'accueil.

/* fetch('questions.json')
  .then(response => response.json())
  .then(data => {
    questions = data
    titreQuiz.textContent = 'AdaQuiz'
    descriptionQuiz.textContent = 'Ton quiz personnalisé'
    nbQuestions.textContent = questions.length + ' questions'
  }) */


// ── Navigation entre les écrans ──────────────
// Cette fonction est déjà écrite.
// Elle cache tous les écrans puis affiche celui qu'on lui donne.

const afficher = (ecran) => {
  ecranAccueil.classList.add('cache')
  ecranQuestion.classList.add('cache')
  ecranResultats.classList.add('cache')
  ecran.classList.remove('cache')
}


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

const afficherQuestion = () => {
  const q = questions[indexCourant]
  titreQuestion.textContent = `Question ${q.id} /10`
  textQuestion.textContent = q.question
  btnSuivant.classList.add("cache")
  listeReponses.innerHTML = ""
  q.reponses.forEach((reponse, index) => {
    const btn = document.createElement("button")
    btn.textContent = reponse
    btn.classList.add("reponse")
    btn.addEventListener("click", () => {
      verifierReponse(index, btn)
      const stop = listeReponses.querySelectorAll(".reponse")
      stop.forEach((boutton) => {
      boutton.disabled = true
      })
    })
    listeReponses.appendChild(btn)
  })
}


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


// ── TODO : afficherResultats ─────────────────
// Cette fonction est appelée quand toutes les questions ont été répondues.
//
// Ce qu'elle doit faire :
//   1. Afficher le score dans #score-final (ex. "4 / 7")
//   2. Afficher un message dans #message-fin selon le score
//   3. Appeler afficher(ecranResultats) pour passer à l'écran résultats

const afficherResultats = () => {
  titreResultats.textContent = `Score : ${score}/10`;
  if (score < 5) {
    mention.textContent = "Pas terrible 🫤";
    phraseFinale.textContent = "Un peu de révisions et ce sera mieux !";
  } else if (score < 7) {
    mention.textContent = "Ca passe 😅";
    phraseFinale.textContent = "Ouf c'est au moins la moyenne";
  } else if (score < 10) {
    mention.textContent = "Bien joué 👍";
    phraseFinale.textContent = "De bonnes connaissances !";
  } else {
    mention.textContent = "Excellent 🎉";
    phraseFinale.textContent = "Tu es incroyable !";
  }
  // Écris ton code ici
}


// ── TODO : écouteurs d'événements ───────────
// Branche les boutons sur les bonnes fonctions.
//
// À faire :
//   - btn-commencer → afficher l'écran question + appeler afficherQuestion()
//   - btn-suivant   → passer à la question suivante ou aux résultats
//   - btn-rejouer   → remettre indexCourant et score à 0, revenir à l'accueil

btnCommencer.addEventListener("click", () => {
  afficher(ecranQuestion)
  afficherQuestion()
})

btnSuivant.addEventListener("click", () => {
  indexCourant++
  if (indexCourant < questions.length) {
    afficherQuestion()
  } else {
    afficher(ecranResultats)
    afficherResultats()
  }
})

btnRejouer.addEventListener("click", () => {
  indexCourant = 0
  score = 0
  afficher(ecranAccueil)
})