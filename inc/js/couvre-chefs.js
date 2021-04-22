function init() {
    longueur = couvre_chef.length
    console.log("Longueur : " + longueur)
    rechercher();
}

function rechercher() {
    couvre_chef_recherche = couvre_chef
    affichage();
}

function affichage() {

    // AFFICHAGE DIV GENERAL //

    for (var i=0; i<couvre_chef_recherche.length; i++) {
        var content = document.getElementById("resultat");
		var newDiv       = document.createElement("a");
        newDiv.id        = "divGeneral" + (i);
		newDiv.className = "divGeneral";
        newDiv.innerHTML = "";
        newDiv.href      = "";
        content.appendChild(newDiv);
    }

    // AFFICHAGE DU LIEN //

    for (var i=0; i<couvre_chef_recherche.length; i++) {
        var container = document.getElementById("divGeneral" + i);
        var title = couvre_chef_recherche[i]['nomDuCostume'] + " - " + couvre_chef_recherche[i]['lieu']
        var source = "<img class='photo' title='" + title + "' src='../img/couvre_chefs/" + couvre_chef_recherche[i]['id'] + ".jpg' />"
        container.innerHTML = source
    }

    // AFFICHAGE DU LIEN //

    for (var i=0; i<couvre_chef_recherche.length; i++) {
        var container = document.getElementById("divGeneral" + i);
			var newDiv       = document.createElement("p");
			newDiv.id        = "divInfos" + (i);
            newDiv.className = "divInfos";
			newDiv.innerHTML = couvre_chef_recherche[i]['nomDuCostume'];
            container.appendChild(newDiv);
    }
}

couvre_chef_recherche = []

window.onload = init;