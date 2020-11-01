page1 = document.getElementById("page1");
page2 = document.getElementById("page2");

suivant = document.getElementById("suivant");
precedant = document.getElementById("precedant");

document.getElementById("suivant").addEventListener("click", function(e){
    page1.style.display = "none";
    page2.style.display = "block";

    suivant.style.display = "none";
    precedant.style.display = "inline-block";
});

document.getElementById("precedant").addEventListener("click", function(e){
    page1.style.display = "block";
    page2.style.display = "none";

    suivant.style.display = "inline-block";
    precedant.style.display = "none";
});

//Cookies

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
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

