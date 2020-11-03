

//Quand le visiteur arrive sur le site on vérrifie s'il est déjà venu
var nomCookie = readCookie('nom');
var prenomCookie = readCookie('prenom');

//si il est déjà venu on affiche son nom
if(nomCookie)
{
	document.getElementById("nomSpan").textContent = nomCookie;
	document.getElementById("prenomSpan").textContent = prenomCookie;
}

document.addEventListener("click", function(e){
    console.log(e.target.id);
});

//on récupère l'id de chaque page

identification = document.getElementById("identification");
page1 = document.getElementById("page1");
page2 = document.getElementById("page2");
page3 = document.getElementById("page3");
pageCommentaire = document.getElementById("pageCommentaire");
pageResultat = document.getElementById("pageResultat");

//Suivants

document.getElementById("suivant1").addEventListener("click", function(e){
	identification.style.display = "none";
	page1.style.display = "block";

	var nom = document.getElementById("nom");
	var nomCookie = readCookie('nom');
	
	if(nomCookie)
	{
		if(nom.value)
		{
			eraseCookie('nom');
			createCookie('nom', nom.value, 7);
			document.getElementById("nomSpan").textContent = nom.value;
		}else{

			document.getElementById("nomSpan").textContent = nomCookie;
		}

	}else{
		createCookie('nom', nom.value, 7);
		document.getElementById("nomSpan").textContent = nom.value;
	}

	
	console.log(readCookie('nom'));

	var prenom = document.getElementById("prenom");
	var prenomCookie = readCookie('prenom');
	
	if(prenomCookie)
	{
		if(prenom.value)
		{
			eraseCookie('prenom');
			createCookie('prenom', prenom.value, 7);
			document.getElementById("prenomSpan").textContent = prenom.value;
		}else{

			document.getElementById("prenomSpan").textContent = prenomCookie;
		}

	}else{
		createCookie('prenom', prenom.value, 7);
		document.getElementById("prenomSpan").textContent = prenom.value;
	}

	
	console.log(readCookie('prenom'));
	

});

document.getElementById("suivant2").addEventListener("click", function(e){
    page1.style.display = "none";
    page2.style.display = "block";
});

document.getElementById("suivant3").addEventListener("click", function(e){
    page2.style.display = "none";
    page3.style.display = "block";
});

document.getElementById("suivant4").addEventListener("click", function(e){
    page3.style.display = "none";
    pageCommentaire.style.display = "block";
});

document.getElementById("suivant5").addEventListener("click", function(e){
    pageCommentaire.style.display = "none";
    pageResultat.style.display = "block";
});


//Précédents

document.getElementById("precedent1").addEventListener("click", function(e){
    identification.style.display = "block";
    page1.style.display = "none";
});

document.getElementById("precedent2").addEventListener("click", function(e){
    page1.style.display = "block";
    page2.style.display = "none";
});

document.getElementById("precedent3").addEventListener("click", function(e){
    page2.style.display = "block";
    page3.style.display = "none";
});

document.getElementById("precedent4").addEventListener("click", function(e){
    page3.style.display = "block";
    pageCommentaire.style.display = "none";
});

document.getElementById("precedent5").addEventListener("click", function(e){
    pageCommentaire.style.display = "block";
    pageResultat.style.display = "none";
});





//Cookies

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.	toUTCString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}


createCookie('unNom','uneValeur',7);

console.log(readCookie('unNom'));

