// commentaire JS sur une ligne
//<!-- --> commentaire html sur une ligne ou plusieurs

/* 
commentaire JS sur plusieurs ligne
*/

// Boite de dialogue 

//alert('Bonne annee les gars!!'); // permet d'afficher un message d'utilisateur
//confirm('Etes Vous Sur?'); //permet de recuperer une confirmation utilisateur
//prompt('Quel age avez vous'); //permet de recuperer une saisie utilisateur

//ces boites de dialogues sont utilisés pour delivrer une information de l'utilisateur

//const prenom = prompt('quel est votre prenom?'); //on va recuperer la saisir dans une variable
//document.write("Bonjour" + " " + prenom);

// Affichage dans la console du navigateur
// Outils de debuggage qui premettent de controler les donnee , le contenue d'une variable, d'un objet , d'un tableau, etc...
//console.log('Affichage dans la console');
//console.info('Attention au erreur de syntaxe');
//console.dir('attention aux erreurs de syntaxe');

/*
DOM: DOCUMENT OBJET MODEL
Le DOM est un programmme interne à notre navigateur qui fait en sorte que chaque element de notre document HTML
soit recuperable, manipulable par un langage de programmation
*/
document.write('<h1>Variables  : declaration / affectation </h1>');

//Declaration avec const ou VAR
// le mot cle VAR permet de declarer une variable, caractere autorises : 0-9, A-Z, a-z, $ et _
// Attention JAVASCRIPT est sensible a la casse : var A n'est pas la meme chose que var a
// il n'est pas possible de declarer une variable commencant par une chiffre

document.write('<h2>Affectation</h2>');

// le signe = : simple signe egal qui permet d'affecter une valeur a une variable
//const maBoite = 'Bonne Vacance!!!'; // affectation de la valeur numeriaue 10 dans la variable 'maBoite'
//console.log(maBoite);

//Declaration avec 'let'
/*
une variable declaree avec let n'existe que dans le bloc ou elle a ete declaree un bloc en javascript est a l'interieur des accolades {}
if(condition) {//bloc}
    function true() {//bloc}
        while(condition) {//bloc}
*/

// il est possible de declarer 2 variables du meme nom avec var 
var test1 = 123;
var test1 = 356;
console.log(test1);

// ce n'est pas possible avec let dans le meme bloc
// Il est plutot a la mode de dire qu'il faut utiliser let plutot que var
// ce sont deux outils du langage et c'est aux developpeurs de faire les bons choix


//DECLARATION avec CONST 
// Une constante tout comme une variable permet de conserver une valeur sauf aue nous ne pourrons pas modifier la valeur de la constante durant l'execution du code

document.write("<h4> La concatenation</h4>");

const prenom = "Mattéo"
nom = "Cotea";
// + : concatenation , que l'on peut traduire pas 'suivi de'
document.write(prenom + ' ' + "<strong>" + nom + "</strong>");
document.write("<br>");
document.write("<br>");
document.write("<br>");


let rouge = "rouge";
document.write("<font color = red>" + rouge + "</font>");
document.write("<br>");
let jaune = "jaune";
document.write("<font color = yellow>" + jaune + "</font>");
document.write("<br>");
let bleu = "bleu";
document.write("<font color = blue>" + bleu + "</font>");
document.write("<br>");
