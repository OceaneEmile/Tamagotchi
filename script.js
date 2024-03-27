/* 
États de notre Tamastudi possibles :
- 🥚 : partie non lancée
- 🐣 : naissance pendant tant qu'il n'a pas fait son 1er caca
Ensuite il devient un "grand" avec une humeur variable
- 😢 : triste 0/5
- 🙁 : pas content 1/5
- 🙂 : normal 2/5
- 😄 : content 3/5
- 🤗 : heureux 4/5
- 🥰 : très heureux 5/5
- 👻 : mort 0/5
Ses envies :
- 😋 : faim, aléatoire minimum 30 sec et max 3 minutes
- 🥱 : jouer, aléatoire minimum 30 sec et max 3 minutes
- 💩 : caca, aléatoire minimum 30 sec et max 1.30 minutes uniquement après avoir mangé
*/

/* Demander le prénom */
const tamaName = prompt ("Quel est ton nom?");
//console.log(tamaName);

/* Faire eclore mon oeuf pour passer au poussin */
const character = document.querySelector(".js-character");

/*character a plusieurs propriétés dt text content pour changer la variable, je remplace le contenu"
*/
character.textContent="🐣";
//console.log(character);


/* Afficher mes vitals,  je dois retirer hidden du html dom , j'ajoute classe js dans html */
const vitals = document.querySelector(".js-vitals");
//console.log(vitals);
vitals.classList.remove("hidden");
// ici , je ne mets pas de . devant hidden car dans classlist , javascript sait deja que c'est une classe contrairement au queryselector

//Afficher le nom de mon Tama dans les vitals
// Sélectionne l'élément HTML ayant la classe "js-tamaName" et le stocke dans la variable nameDisplay
const nameDisplay = document.querySelector(".js-tamaName");
// Modifie le texte contenu dans l'élément nameDisplay avec la valeur de la variable tamaName ligne 20
// il faut decommenter console.log de TamanName ligne 20 pour voir si bien le resultat du prompt
nameDisplay.textContent = tamaName;


//5. Mettre les scores des vitals à 5
// je pourrai selectionner tous les scores chacun, mais je vais modifier les classes pour que js-score devient commun
//const eatScoreDisplay = document.querySelector
//const eatScoreDisplay = document.querySelector
// et mnt je peux utiliser queryselectorAll pour selectionner tous les elements classe js score
const scoresDisplay = document.querySelectorAll(".js-score");
console.log(scoresDisplay);// ca m'affiche bien 0
// la bocule itère chaque element 
scoresDisplay.forEach((score) =>{
//console.log(score);
score.textContent = 5;
});