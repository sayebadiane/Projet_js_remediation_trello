const header = document.getElementById("header")
const midle_left_icone = document.getElementById("midle_left_icone");
const colonne = document.getElementById("colonne");
const midle_right = document.getElementById("midle_right");
const notes = document.getElementById("notes");
const modale = document.getElementById("modale");
const ajouter = document.getElementById("ajouter")
const refresh = document.getElementById("refresh");
var modale_span = document.getElementById("modale_span");
const burger = document.getElementById("burger");
const corbeille = document.getElementById("corbeille");
const rset = document.getElementById("rset");
var taches_enregistrer = document.getElementById("taches_enregistrer");
var date = document.getElementById("date");
var date_heures_de_debut = document.getElementById("date_heures_de_debut");
var date_heures_de_fin = document.getElementById("date_heures_de_fin");
midle_left_icone.addEventListener("click", function () {
    header.classList.add("header1");
})
midle_left_icone.addEventListener("dblclick", function () {
    header.classList.remove("header1");
})
// midle_left_icone.addEventListener("click", function () {
//     header.classList.remove("header1");
// })
// const div_main = document.createElement("div1");

function getcolonne() {
    var tabcouleur = ["#E88EE9", "#f5a442", "#f56042", "#42ddf5", "#42adf5"];
    var i = 0;
    colonne.addEventListener("click", function () {
        if (i < 5) {
            const div1 = document.createElement("div1");
            div1.className = "col";
            div1.id = i;
            div1.style.backgroundColor = tabcouleur[i];
            const spane = document.createElement("span");
            spane.innerHTML = `X`;
            //creation de header a ecrire
            const divheader = document.createElement("div");
            divheader.className = "colheader";



            const p1 = document.createElement("p");
            p1.className = "p1";
            p1.innerText = `colonne${i+1}`
            const image = document.createElement("img");
            image.src = "./image/saye__1_-removebg-preview.png";

            const input1 = document.createElement("input");
            input1.className = "header_input";
            input1.style.display = "none";
            divheader.appendChild(p1);
            divheader.appendChild(input1);
            div1.appendChild(divheader);
            div1.appendChild(spane);

           // Display block de p1
            p1.addEventListener("dblclick", function () {
                p1.style.display = "none";
                input1.style.display = "block";
            })

            
            //     display none input
             input1.addEventListener("blur", function () {
                p1.style.display = "block";
                // console.log(input1.value);
                p1.innerText = input1.value;
                input1.style.display = "none";

            })

            //a la sorti





            //Ajouter des taches a la premierte colonne
            if ((i) == 0) {
                ajouter.addEventListener("click", function (e) {
                    e.preventDefault();

                    cretache(div1);
                   

                })
            }

            div1.appendChild(image);
            midle_right.appendChild(div1);
            i = i + 1;
            //suppression d ' une colonne et mis a jour
            spane.addEventListener("click", function (e) {
                if (e.target.parentElement.id != 0) {
                    e.target.parentElement.remove();
                    i--;
                    mis_a_jour();
                    //e.target.previousElementSibling.value == e.target.parentElement.nextElementSibling.value;
                    //console.log(e.target.parentElement.nextElementSibling);
                }
                if ((parseInt(e.target.parentElement.id) == 0) && (e.target.parentElement.nextElementSibling) == null) {
                    e.target.parentElement.remove();
                    i--;


                }
            })

        }
    })
    notes.addEventListener("click", function () {
        if (i > 0) {
            modale.classList.add("modale1");
        }


    })

   


}
modale_span.addEventListener("click", function () {
    modale.classList.remove("modale1");

})
function cretache(div1) {
    var taches_enregistrer = document.getElementById("taches_enregistrer");
    var date_heures_de_debut = document.getElementById("date_heures_de_debut");
    var date_heures_de_fin = document.getElementById("date_heures_de_fin");
    var date = document.getElementById("date");
    const taches = document.createElement("div")
    taches.className = "taches"
    const text = document.createElement("div");
    text.className = "text";
    var p = document.createElement("p");
    p.innerText = taches_enregistrer.value;
    const horaire = document.createElement("div");
    horaire.className = "horaire";
    var pdate = document.createElement("p")
    pdate.innerText = date.value;
    horaire.appendChild(pdate);
    var pdate_heures_de_debut = document.createElement("p")
    pdate_heures_de_debut.innerText = date_heures_de_debut.value;
    horaire.appendChild(pdate_heures_de_debut);
    var pdate_heures_de_fin = document.createElement("p")
    pdate_heures_de_fin.innerText = date_heures_de_fin.value;
    const btn_g = document.createElement("i");
    btn_g.className = "fa-solid fa-angles-left";
    btn_g.id = "btn_gauche"
    horaire.appendChild(pdate_heures_de_fin);
    const btn_d = document.createElement("i");
    const redirection = document.createElement("div")
    redirection.className = "redirection";
    btn_d.className = "fa-solid fa-angles-right";
    btn_d.id = "btn_droit";
    const supprime_tache = document.createElement("i");
    supprime_tache.className = "fa-solid fa-trash fa-0.01x";
    supprime_tache.id = "supprime_tache";
    redirection.appendChild(btn_g);
    redirection.appendChild(supprime_tache);     //<i class="fa-solid fa-trash"></i>
    redirection.appendChild(btn_d);
    text.appendChild(p);
    taches.appendChild(text);
    taches.appendChild(redirection);
    taches.appendChild(horaire);
    div1.appendChild(taches);

    taches.addEventListener("mouseover", function () {
        horaire.classList.add("horaire1");
    })
    taches.addEventListener("mouseleave", function () {
        horaire.classList.remove("horaire1");
    })

    //deplacement des taches

    btn_d.addEventListener("click", function () {
        taches.classList.add("ok");
        var a = taches.parentElement.id;
        var x = parseInt(a);
        deplace_taches(document.getElementById(x + 1));
        taches.classList.remove("ok");

    })

    btn_g.addEventListener("click", function () {
        taches.classList.add("ok");
        var a = taches.parentElement.id;
        var x = parseInt(a);
        deplace_taches(document.getElementById(x - 1));
        taches.classList.remove("ok");


    })


    //deplacer tous les taches a la colone 1
    refresh.addEventListener("click", function () {
        if (taches.parentElement.classList.contains("col") == true) {
            taches.classList.add("ok")
            deplace_taches(document.getElementById(0));
            taches.classList.remove("ok");
        }
    })

    //Deplacer vers la corbeille
    supprime_tache.addEventListener("click", function () {
        taches.classList.add("ok");
        deplace_taches(document.getElementById("corbeille"));
        taches.classList.remove("ok");

    })
    //restaurer
    supprime_tache.addEventListener("dblclick", function (e) {
        if(e.target.parentElement.classList.contains("redirection") == true){
            taches.classList.add("ok");
            deplace_taches(document.getElementById(0));
            taches.classList.remove("ok");
        }

    })

    //modifier une tache
    modifier_tache(taches);
   
    // reset_form();

}

function deplace_taches(divto) {
    var task = document.querySelectorAll(".taches");
    task.forEach(element => {
        if (element.classList.contains("ok")) {
            divto.appendChild(element);

        }


    });

}

// fonction de mise de jour
function mis_a_jour() {
    var p1s = document.querySelectorAll(".p1");
    p1s.forEach((p,i) => {
        p.innerText = "colonne" + (i + 1);
        
        
    });
    
}
burger.addEventListener("click", function () {
    corbeille.classList.add("corbeille_block");
})
burger.addEventListener("dblclick", function () {
    corbeille.classList.remove("corbeille_block");
})
function reset_form() {
    rset.reset();
}
function modifier_tache(taches) {
    taches.addEventListener("dblclick", function (e) {
        console.log(e.target.parentElement);
        var modifier_tache = document.getElementById("rset").querySelectorAll(".modifier_tache")
        //modale.parentElement.querySelector("textarea"));
        var pmodifier = e.target.parentElement.querySelectorAll("p")
        var j = 0;
        modifier_tache.forEach(element => {
            element.value = pmodifier[j].textContent;
            j++;

        });
        e.target.parentElement.remove();
        // console.log(e.target.p);
        alert("ok");
        modale.classList.add("modale1");
    })

    
}

getcolonne();




