document.getElementById('message1').innerHTML =
	'Votre Nom est ... Votre prénom est ...';

var Nom;
var Prenom;

document.getElementById('btChargerNoms').onclick = saisirNom;

function saisirNom() {
	Nom = prompt('Saisissez votre Nom : ');
	Prenom = prompt('Saisissez votre prénom : ');
	actualiserListe();
}

function actualiserListe() {
	document.getElementById('message1').innerHTML =
		'Votre Nom est ' + Nom + ' Votre prénom est ' + Prenom;
}
