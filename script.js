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
// var c = document.getElementById("c");
const corbeille = document.getElementById("corbeille");
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
    var tabcouleur = ["#E88EE9", "#f5a442", "#f56042", "#42ddf5","#42adf5"];
    var i = 0; 
    colonne.addEventListener("click", function () {
        if (i < 5) {
            const div1 = document.createElement("div1"); 
            div1.className = "col";
            div1.id = i;
            div1.style.backgroundColor = tabcouleur[i]; 
            const spane = document.createElement("span");
            spane.innerHTML = `X`;
            const input1 = document.createElement("input");
            input1.value = `Colonne${i+1}`;
            const image = document.createElement("img");
            image.src = "./image/saye__1_-removebg-preview.png";
            div1.appendChild(input1);
            div1.appendChild(spane);
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
            spane.addEventListener("click", function () {
                midle_right.innerHTML = ``;
                alert("ok");
                i = i - 1;
            })
            
        }    
    })
    notes.addEventListener("click", function () {
        if (i>0) {
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
    btn_g.className ="fa-solid fa-angles-left";
    horaire.appendChild(pdate_heures_de_fin);  
    const btn_d = document.createElement("i");
    const redirection = document.createElement("div")
    redirection.className = "redirection";
    btn_d.className = "fa-solid fa-angles-right";
    btn_d.id = "btn_droit";
    redirection.appendChild(btn_g);
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
        // btn_g.style.visibility = "visible";


    })


    //deplacer tous les taches a la colone 1
    refresh.addEventListener("click", function () {
        taches.classList.add("ok")
        deplace_taches(document.getElementById(0));
        taches.classList.remove("ok");
       
    })

    //Deplacer vers la corbeille
    taches.addEventListener("dblclick", function () {
        taches.classList.add("ok");
        deplace_taches(document.getElementById("corbeille"));
        taches.classList.remove("ok");
       
    })
     
    
   
}
function deplace_taches(divto) {
    var task = document.querySelectorAll(".taches");
    task.forEach(element => {
        if (element.classList.contains("ok")) {
            divto.appendChild(element);
           
        }
        
       
    });
    
}
burger.addEventListener("click", function () {
    corbeille.classList.add("corbeille_block");
})
burger.addEventListener("dblclick", function () {
    corbeille.classList.remove("corbeille_block");
})
getcolonne();                                                                                                         
    
    
    
    
 