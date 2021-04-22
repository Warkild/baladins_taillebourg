function init() {
    longueur_couvre_chefs = couvre_chef.length;

    ref_couvre_chefs(longueur_couvre_chefs);
    quantite_couvre_chefs();
    cartons_couvre_chefs();
}

///// Affichage nombres références couvre_chefs /////

function ref_couvre_chefs(longueur_couvre_chefs) {
    document.getElementById("nb_ref_coiffes").innerHTML = longueur_couvre_chefs
}

///// Affichage quantité couvre_chefs /////

function quantite_couvre_chefs() {
    var quantite_couvre_chefs = 0;
    var longueur = couvre_chef.length
    for (i=0; i<longueur; i++) {
        quantite_couvre_chefs += (couvre_chef[i]['quantite'])
    }
    document.getElementById("nb_coiffes").innerHTML = quantite_couvre_chefs
}

///// Affichage cartons couvre_chefs /////


function cartons_couvre_chefs() {

    // Création de la collection couvre_chefs

    var collection_couvre_chef = []

    for (var i=0; i<cartons.length; i++) {
        if(cartons[i]['type'] == "couvre_chef") {
            collection_couvre_chef.push(cartons[i]);
        }
    }

    // Création div général

    for (i=0;i<collection_couvre_chef.length;i++) {
        var newDiv       = document.createElement("div");
        newDiv.id        = "divGeneralBoxCartonsCouvreChefs" + (i);
        newDiv.className = "divGeneralBox";
        document.getElementById('couvre_chefs_cartons').appendChild(newDiv);
    }

    // Création infos nombre 

    for (i=0;i<collection_couvre_chef.length;i++) {
        var newDiv       = document.createElement("p");
        newDiv.id        = "NombreBoxCartonsCouvreChefs" + (i);
        newDiv.className = "nombreCartons";
        newDiv.innerHTML = collection_couvre_chef[i]['nombre']
        document.getElementById('divGeneralBoxCartonsCouvreChefs' + i).appendChild(newDiv);
    }

    // Création infos nom 

    for (i=0;i<collection_couvre_chef.length;i++) {
        var newDiv       = document.createElement("p");
        newDiv.id        = "NomBoxCartonsCouvreChefs" + (i);
        newDiv.className = "NomCartons";
        newDiv.innerHTML = collection_couvre_chef[i]['reference']
        document.getElementById('divGeneralBoxCartonsCouvreChefs' + i).appendChild(newDiv);
    }
}

window.onload = init;