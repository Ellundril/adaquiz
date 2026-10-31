# AdaQuiz Les sportifs français

By Violaine et Julien

Un quiz de 10 questions pour tester vos connaissances sur les sportives et sportifs français.

## Langages utilisés

- HTML
- CSS
- JavaScript

## Contenu

- un fichier [html](index.html)
- un fichier [css](style.css)
- deux fichiers js [script](script.js) et [questions](questions.js)
- un dossier [images](images) pour les illustrations des questions
- un dossier [wireframe](Wireframes) avec les wireframes réalisés sur penpot
- un dossier [gif](gifs) pour les gifs apparaissant à la fin

## Lancer le projet en local

1. Cloner le repo github en local :

```bash
git clone git@github.com:Ellundril/adaquiz.git
```

2. Se placer dans le dossier adaquiz

```bash
cd Adaquiz/
```

3. Taper la commande suivante dans le terminal

```bash
npx live-server
```

## Ajouter des questions

1. Ouvrir le fichier [questions.js](questions.js)
2. Ajouter un objet dans le tableau questions en suivant le modèle ci-dessous :

```js
    {
    id: "numéro de la question(type number)",
    question:
      "texte de la question",
    reponses: [
      "reponse1",
      "reponse2",
      "reponse3",
      "reponse4",
    ],
    bonne_reponse: "indice de la bonne réponse(type number)",
    image: "adresse de l'image d'illustration",
    altImage: "description de l'image pour l'accessibilité",
  }
```

## bonus réalisés

- mélange des questions à chaque début de quiz
- une image pour chaque question avec un alt pour l'accessibilité
- lorsque la réponse est fausse, la réponse juste est allumée aussi pour que le joueur apprenne.
- easter eggs :
  - des phrases personnalisées en fonction d'une série de (3, 6 ou 9) bonnes réponses
  - si on "chatouille" les boutons réponses on obtient un indice indiquant si la réponse est bonne ou mauvaise"
  - si on appuie sur les touches "php" à la suite on obtient un message d'alerte
  - un dispositif anti-triche (détection du changement d'écran, sortie de l'onglet ... mis en commentaire pour la démo)

## Ce qu'on ferait avec une semaine de plus

- On rajouterait des questions et à chaque début de quiz on en tirerait 10 au hasard parmi la base de questions
- On rajouterait des animations à l'apparition des boutons suivants, pour l'apparition de la nouvelle questions
