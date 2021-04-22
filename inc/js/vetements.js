function init() {
    longueur = vetements.length
    console.log("Longueur : " + longueur)
    rechercher();
}

function rechercher() {
    vetements_recherche = vetements
    affichage();
}

function affichage() {

    // AFFICHAGE DIV GENERAL //

    for (var i=0; i<vetements_recherche.length; i++) {
        var content = document.getElementById("resultat");
		var newDiv       = document.createElement("a");
        newDiv.id        = "divGeneral" + (i);
		newDiv.className = "divGeneral";
        newDiv.innerHTML = "";
        newDiv.href      = "";
        content.appendChild(newDiv);
    }

    // AFFICHAGE DU LIEN //

    for (var i=0; i<vetements_recherche.length; i++) {
        var container = document.getElementById("divGeneral" + i);
        var title = vetements_recherche[i]['nomDuCostume'] + " - " + vetements_recherche[i]['lieu']
        var source = "<img class='photo' title='" + title + "' src='../img/vetements/" + vetements_recherche[i]['id'] + ".jpg' />"
        container.innerHTML = source
    }

    // AFFICHAGE DU LIEN //

    for (var i=0; i<vetements_recherche.length; i++) {
        var container = document.getElementById("divGeneral" + i);
			var newDiv       = document.createElement("p");
			newDiv.id        = "divInfos" + (i);
            newDiv.className = "divInfos";
			newDiv.innerHTML = vetements_recherche[i]['nomDuCostume'];
            container.appendChild(newDiv);
    }
}

vetements_recherche = []

window.onload = init;