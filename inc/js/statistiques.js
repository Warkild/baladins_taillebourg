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

}

window.onload = init;