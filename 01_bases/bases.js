

// -----------------------
// 1- Commentaires
// -----------------------

//  Pour écrire un commentaire sur une seule ligne.


/* 
Pour ecrire des commentaires sur plusieurs lignes.
*/


// ---------------------
// 2-Affichage
// ---------------------

// document.write('mon premier message');  // Affichache dans le navigateur

document.write('<h1>les bases du JavaScript </h1>');//On peut mettre des balises HTML , elles sont interpréter et donc insérer dans le HTML.

// Toutes les insctructions JavaScript se finissent par un ";".Elles se suivent et son éffectuées les unes à la suite des autres, du HAUT vers le BAS du script.

// ------

//  Les boites de dialogues :
/* alert('salut');  //affiche un message
confirm('Êtes-vous sûr?'); //message de confimation avec boutton "ok" ou "annuler"
prompt('quel votre code posatale ?'); //message avec champ à remplir
 */

//--------
//Afficher dans la console :
console.log('attention aux erreurs de syntaxes dans la console'); //message écrit dans la console de debugage (F12 + onglet Console)

//-------------------------
//3-Variables - déclaraion - affectation
//-------------------------
document.write('<h2> Variables - déclaration - affectation </h2>')
// Définition: une variable est un espace mémoire nommé dans lequel nous allons stocker une donnée, une valeur. Cette donnée peut être de n'importe quel type : chiffre chaîne de caractère , une balise HTML, etc.

// Déclaration d'une variable :
var maBoite;      //le mot clmé var permet de déclarer (=créer) la variable nommée maBoite.

// Règle de nommage des variables : caractère acceptés : a à z, A à Z, 0 à 9 (jamais au début), _ (jamais au début ou à la fin). Premier mot enminiscule, puis majuscule à la 1ère lettre de chaque mot.

//------
// Affectation d'une variable :
maBoite= 10; // on affecte une valeur à une variable avec le signe "=". maBoite contient donc 10

document.write(maBoite); //on affiche le contenu de la variable en ne mettant pas de côtes autour de son nom. Affiche 10.

var maBoite = 10; //on peut déclarer et affecter une variable en même temps (nous retiendrons cette écriture).

//------
monAutreVariable = 'bonjour'; //cette écriturer est (possible déclation sans le mots clé var), mais ce n'est pas conventuionnel. De plus, dans une fonction cela n'a pas la même signification (voire chapitre "portée des variables").

document.write('<br>');
// ------
// Déclarer et affecter plusieurs variables en même temps:
var prenom ='Sylvie';
    nom = "Robert";
    genre = 'féminin'; // un seul var en séparant chaque déclaration par une virgule, un saut de ligne et une indentation. On termine par un point virgule, un saut de ligne et une indentation. On termine par un ";".

    document.write(prenom); // affiche Sylvie
    document.write('<br>');
//------
//changer la valeur d'une variable :
prenom = 'Pierre'; // nous changeons la valeur initiale "Sylvie" pour la remplacer par "Pierre".

document.write(prenom); // affiche Pierre
document.write('<br>');

prenom = nom // nous affectons la valeur de la variable nom par la variable prenom, autrement dit on remplace "Pierre" par "Robert"

document.write(prenom); // affiche Robert
document.write('<br>');


//------
// Ajouter une valeur à la valeur deja existante d'une variable :
var fruit = 'pomme';
fruit += ' fraise'; //on ajoute la chaine de caractères " fraise" à "pomme" déjà existante dans la variable fruit avec l'opérateur += (sans espace)

document.write(fruit); // affiche Robert
document.write('<br>');

//---------
// Utiliser promt avec une variable :
var codePostal = prompt('Quel est votre code postal ?');

document.write(codePostal); // affiche le code posatl indiqué par l'internaute 
document.write('<br>');

// --------------------
// 4-Type de données
// --------------------
document.write('<h2>Type de données</h2>');

// Nous commençons par les 3 principaux types de données dits primitifs :

// Les types numériques appelées NUMBER :
var chiffre = 20;    // les numbers s'écrivent sans quotes ni guillemets.
// Tous les types numériques sont possibles : entiers , décimaux, positifs , negatifs ...

//Les types chaînes de caractères appelés STRING :
var texte = "phrase enete guillemets";
var apostrophe = 'il faut utiliser le caractère d\'echappement pour les apostrophes dans des quotes'; // AltGR+8 pour le caractère d'échappement.
// Les quotes ou lmes guilllemets indiquent qu'il s'agit d'un type STRING.

var numero = '10'; // un chiffre dans des quotes ou des guillemets est interprété comme un STRING.

// Le type booléen (ou boolean) :
// Le type booléen ne prend que 2 valeurs : TRUE ou FALSE.
var choix = true; // il s'écrit SANS quote.

// -------
// typeof permet de verifier le type d'une variable :
document.write(typeof(chiffre)); // number
document.write('<br>');

document.write(typeof(numero)); //string
document.write('<br>');

document.write(typeof(choix)); //boolean
document.write('<br>');

// -----------------------------
// 5-Constante
// -----------------------------
document.write('<h2>Constante</h2>')

// Définition : les constantes sont comme des variables dont la valeur NE PEUT PAS être modifiée. Elles permettent de "protéger" cette valeur nécesaire au bon fonctionnement du script.

const CHANGE_PAS = 'ma consntante impossble à modifier'; // par convention entre développeurs on écrit les contantes en majuscules et avec un "_" si besoin.

document.write( CHANGE_PAS ); //affiche le contenu de la contante
document.write('<br>');

var salade = fruit + CHANGE_PAS;

document.write(salade); //affiche la variable composée de d'une contante et une variable.
document.write('<br>');

// CHANGE_PAS = 'autre valeur'; // erreur bloquante de type invalid assignment to const CHANGE_PAS

// -------------------
// 6-Concaténation
// -------------------
document.write('<h2>Concaténation</h2>');

// En JS, on fait suivre des variables et des strings avec le symbole "+". on parle de concaténation.

var prenom = 'Bruce',
    nom = 'Wayne';
   
document.write( prenom + ' ' + nom + '<br>'); //concatène la variable prenom avec un espace avec la variable nom avec une balise <br>

var personnage = prenom + ' ' + nom + '<br>'; //on peut concaténer des éléments au sein du variable.
document.write(personnage);

// -------------------------------
// 7-Opérateur arithmétiques
// -------------------------------
document.write('<h2>Opérateurs arithmetiques</h2>');

var resultat;

resultat = 10 + 5; // addition
resultat = 10 - 5; //soustraction 
resultat = 10 * 5; //division
resultat = 3 / 2; //modulo = reste d'une division euclidienne


// ----------
var chiffre1 = 10,
    chiffre2 = 5;


resultat = chiffre1 + chiffre2; //resultat vaut 15

var chiffre3 = 10;
chiffre2 = 5;resultat = chiffre1 + chiffre2; // resultat vaut 15var chiffre3 = 10;
chiffre3 = chiffre3 + 5; // 15
chiffre3 = chiffre3 + 5; // 20. Mais cette syntaxe n'est pas conventionnelle. on utilise la syntaxe suivante :
chiffre3 += 5;  // cette syntaxs fait la meme chose due la précédente, mais c'est elle que 'on retiendra. chiffre3 vaut ici 25.// fonctionne avec tous les opérateurs: +=, -=, *=, /= et %=.//-----------

// Incrémenter et Décrémenter
var i = 0;
i++; // Incrémenter i de +1. i vaut donc 1 :
i--; // décrémenter i de -1. i vaut donc 0

// i++ et ++i ont le meme résultat à la différence près :
// i++ retourne la valeur de i AVANT d'effectuer l'opération
//++i retourne la valeur de i APRES avoir

var x = 5;
var y = x++; // y prend la valeur de 5 PUIS x passe à 6

document.write('y vaut ' +y + '<br>'); //5
document.write('x vaut '+x +'<br>');  //6 

//--------------------
//Exercice :
/* 
l'internaute a acheté 0.8kg de pommes et 0.7kg de poires.
Vous déclarez 4 variables, une qui contient "pommes, une qui contient "poires, une qui contient le poids des pommes et une contient le poids des poires.
Puis vous affichez la phrase "Vous avez achetés des pommmes et des poire pour un poids total de 1.5 kg." où les fruits et le poids total sont remplacés par les variables.
*/

var fruit1 = 0.7;
var fruit2 = 0.8;
var a = "pommes";
var b = "poires"; 

pt = fruit1 + fruit2; // pt = poids total en NUMBER

document.write('0.8 kg de pommes et 0.7 kg de poires. <br>');
document.write('Vous avez achetés des  <strong>' + a + '</strong>  et des <strong>' + b + ' </strong> pour un poids total de <strong>' + pt + ' kg </strong>.' + '<br>');


// -----------------------
// 8- Conditions
// -----------------------

document.write('<h2>les conditions</h2>');

var a = 10,
    b = 5,
    c = 2;

// -------------
// La condition if / else :
if ( a > b ) {
    // si la condition est évalué à true, on entre dans les accolades qui suivent :
    document.write('a est supérieur à b <br>');
} else {
    // si la condition est évalué à false , on éxécute l'accolade else:
    document.write('b est supérieur à a');
}

//-------------
//if avec AND :
if ( a > b && b >c ){
    // Si a est seperieur à  b ET que dans le même temps b est supérieur à c, on entre dans les accolades qui suivent : 
    document.write(' c\'est une suite qui est decroissante <br>');
}

//-----------
// if avec OR :
if ( a == 9 || b > c ) {
    // si a est égal (==) à 9 OU alors que b est supérieur à c, on entre dans les accolades qui suivent : 
    document.write( 'ok pour au moins une des deux conditions <br>');

}

//---------
// if ..... if else ...... else :
if( a == 8 ){
    //si a vaut 8, on éxecute ce qui suit :
    document.write('a est égal à 8.<br>');

} else if( a != 10) {
    // sinon si a est different de 10, on exécute ce qui suit :
    document.write('a est diferent de 10.<br>');

}else{
    //sinon, c'est que je ne suis pas tombé ni dans le if, ni dans le else if, je me trouve donc dans ce else :
    document.write('les deux conditions sont fausses<br>');
}
// Note : jamais de () un else. le else n'est pas obligatoire si il est vide. En revanche, après un if il ya toujours une condition.
// L'opérateur NOT :
//L'opérateur NOT qui s'écrit "!" permet d'inverser quelque chose de TRUE en FALSE, ou quelque chose de FALSE en TRUE. Il s'agit d'une négation.

var test = 3 < 1;
console.log('test vaut ' +  test); // pour vérifier que le test vaut false

if (!test) {
    
    document.write('On exécute ce code ... <br>');

}

//-------
//Difference entre le "==" et le "==="
var varA = 1,   //number
    varB = '1'; //string
    
//La comparaison avec le double "=="
if ( varA == varB){
    // varA et varB valent tous les deux en valeur : la condition avec "==" est donc vraie. on s'exécute les accolades qui suivent :
    document.write('Egalité en valeur uniquement <br>');
} else {
    document.write('Difference en valeur uniquement <br>');
}

//La comparaison avec le triple "==="
if ( varA === varB){
    // varA et varB valent tous les deux en valeur cependant pas en type  : la condition avec "===" est donc fausse. on va dans le else :
    document.write('Egalité en valeur ET en type <br>');
} else {
    document.write('Difference en valeur OU en  type <br>');
}

// -------------------------
// -------Jour -2-----------
// -------------------------
// -------------------------// Condition dite ternaire :
// La condition ternaire est une autre syntaxe de la conditionif....else.
 var voiture = "bmw";
 var origine = (voiture === "bmw") ? "origine allemande <br>" : "autre origine <br>";
//  La condition ternaire s'écrit avec un "?" qui remplace le if, et un ":" qui remplace le else.

document.write(origine);
// ------------

// isNaN : is Not a Number

// NaN pour Not a Number est une valeur utilisée pour représenter une "quantité" qui n'est pas un nombre en JavaScript.
console.log(2 * "azerty");
// Les opérateurs d'égalité (== ou ===) ne peuvent pas être utilisés pour tester si une valeur est Nan. Il faut utiliser isNan() :

var annee ='2018'; // string
if ( isNaN(annee )){ 
    document.write('Ce n\'est pas un number aprés conversion <br>');
} else {//  ici la condition est fausse, '2018' est bien un number aprés conversion, donc c le else qu'il s'éxécute.
    document.write('C\'est un number aprés conversion <br>');
}

//le contraire:
var annee ='juin 2018'; // string
if ( isNaN(annee )){ //ici la condition est vrai, 'juin 2018' n'est pas un number  , donc le if quis'éxécute
    document.write('Ce n\'est pas un number aprés conversion <br>');
} else {
    document.write('C\'est un number aprés conversion <br>');
}



//----------  EXERCICE

/* 
Demandez l'age de l'internaute dans un prompt.
si la reponse est vide (on compare avec des quotes vides SANS espace,
on affiche ""Vous n'avez pas répondu.
si la réponse n'est pas un nombre, on affiche "Vous n'avez pas indiqué un monbre."
Si la réponse est correcte, on affiche "Vous avez indiqué avoir X ans." ou X est l'age donné par l'internaute */
var age = prompt('Quel est votre age ?');

if (age ==''){
    document.write('Vous n\'avez pas répondu');
} else if ( isNaN( age )){
    document.write('Vous n\'avez pas indiqué un nombre');
} else {
    document.write('Vous avez indiqué <strong>' + age +'</strong> ans');
}


//-----------------------------
//9- Synthèse des opérateurs
//-----------------------------

document.write('<h2> Synthèse des opérateurs </h2>');

// Pour tester des varibales entre-elles:
/*
    == pour égal valeur
    != pour diférent de en valeur

    === strictement égal
    !== strictement différent en valeur OU en type

    > supérieur 
    < inferieur 
    >= supérieur ou égal 
    <= inférieur ou égal

 */

// Les opérateurs logiques :
/* 
    && AND
    || OR
    ! NOT (négation)

    Les opérations éffectuées avec les opérateurs logiques ne donnent que 2 résultats possibles : TRUE ou FALSE.

    Exemples :
        true && true  => true
        true && false => false
        false && => false

        true || true => true 
        true || false => true
        false|| false => false

        !TRUE => false
        !FALSE=> true

*/


//-------------------------
//10- Condition switch
//-------------------------
document.write('<h2>Condition switch</h2>');
//La condition switch est ubne autre syntaxe pour écrire ine condition if ... else if ... else, lorsque l'on veut comparer une variable à une multitude de valeurs.

var couleur = prompt('quel est votre couleur primaire préférée ?');

switch ( couleur) {
    case 'bleu' : // chaque case represente une valeur que peut prendre la variable. Si couleur contient 'bleu', on exécute le code qui suitce case:
        document.write('Vous aimez le bleu <br>');
    break;// obligatoire pour quitter la condition une fois le case exécuté
    case 'rouge' :
        document.write('Vous aimez le rouge <br>');
    break;
    case 'jaune' :
        document.write('Vous aimez le jaune <br>');
    break;
    default : // on tombe dans le default par défaut si on n'entre dans aucun des case précédents
    document.write('Vous n\'aimez aucune de ces couleurs <br>');
    break;
}

//--------------------
//11- Les boucles
//--------------------
document.write('<h2>Les boucles</h2>');
//Les boucles sont destinées à répéter des lignes de codes de façons automatique.

//while:
var i = 0; //on initialise une variable à 0 pour compléter le nombre de tours de la boucle
while (i <=5 ){ // ici entre parenthèse se situe les conditions d'entrées dans la boucle while, ellle signifie " tant que i est inferieur ou superieur à 5"
    document.write(i + "--- ");
    //....
    i++;//on incrémente i de +1. on n'oublie pas d'incrémenté pour ne pas creér une boucle infinie.

}
document.write('<br>');
//-----------------
//Exercice: retirer les "---" devant le 5.
//exemple avec if ...

var i = 0; 
while (i <=5 ){
    if(i == 5){
        document.write( i + '' );
    } else {
        document.write( i + '--- ' );
    }
    i++;
}
document.write('<br>');
 
//exemple avec switch ...

var i = 0; 
while (i <=5 ){ 
    switch( i ){
        case 5:  // case ne prend pas de condition mais une valeur 
            document.write( i + '' );
            break;
        default : 
            document.write( i + '--- ' );
            break;
     }
    i++;
}

document.write('<br>');
//------------
// La boucle for :
// La boucle for est une autre syntaxe de la boucle while :
for ( var i = 0; i<=5; i++){ // dans les () du for: initialisation de la variable suivie d'un ";", puis la condition d'entrée dans la boucle suivie d'un ";", puis l'incrémentation (ou décrementation...) NON suivie d'un ";".
    document.write(i + "--- ");
}


document.write('<br>');
document.write('<hr>');
 
//Exercice : afficher un menu déroulant avec lannées 1900 à 2020. Utilisez une boucle FOR.

document.write('<select>');// ouverture select
for ( i = 1900 ; i<=2020; i++) {
     document.write('<option>' + i +'</option>');
    }
document.write('</select>');// fermeture select

document.write('<br>');
document.write('<hr>');

// alternative par declaration de variable "affichage" concatenant les balises HTML et la variable principale "i" .
var affichage = '';
affichage += '<select>';// ouverture select
for ( i = 1900 ; i<=2020; i++) {
     affichage += '<option>' + i +'</option>';
    }
affichage += '</select>';// fermeture select
// console.log(affichage);
document.write(  affichage );
document.write('<br>');

// ------------------------------------
//12- Les fonctions utilisateurs 
//-------------------------------------
document.write('<h2> Les fonctions utilisateurs</h2>')
//Des fonctions sont des morceaux de codes encapsuler dans des accolades et portant un nom. Elles sont appelées (par leur nom) quand on a besoin d'éxécuter tout le code qui s'y trouve. Il est d'usage de faire des fonctions simples qui réalise des actions unitaires 
// A chaque fois qu'on répète une action, voir s'il est pas possible de la mettre dans une fonction : cela s'appelle factoriser son code.

// Il existe deux facons de DECLARER une fonction en JS :
//1° avec le mot clé function : 
function maFonction() {
    // ici tout votre code
    document.write('<p>Nous avons une journée ensoleillé</p>');
}

//2° Avec le mont clé var :
var maFonction2 = function () {
    //ici tout votre code
    document.write('<p>Et trés chaude ...</p>');
}

//Pour qu'une fonction s'execute, il faut l'appeler:
maFonction(); //on appelle une fonction en écrivant son nom suivi d'une paire de parenthèses.
maFonction2(); 

// Par convention nous déclarons tooujours une fonction avant de l'exécuter.


//----------------
//Fonction avec paramètres :
function direBonjour(prenom, nom) { 
    document.write('<p>Bonjour ' + prenom + ' ' + nom + ', comment allez vous ? </p>');
}
direBonjour('Alice', 'Dupon');


function dwBr(x){
    document.write( x + ' <br>')
}
dwBr ('test concaténation document.write dans une fonction.') ;
dwBr('suite test ');


















