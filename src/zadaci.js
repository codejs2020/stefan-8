// Funkcija za kreiranje tabele pomocu innerhtml-a

function kreiranjeTabele1(brojRedova, brojKolona){
  let html = "<table>"

  for (let i=0; i<brojRedova; i++){
    html += "<tr>"
    for (let j=0; j<brojKolona; j++){
      html += "<td>" + Math.ceil(Math.random()*20) + "</td>"
    }
    html += "</tr>"
  }

  html += "</table>"

  document.getElementById("id_tabela1").innerHTML = html;
}



// Funkcija za Kreiranje tabele pomocu AppendChild

function kreiranjeTabele2(brojRedova, brojKolona){
  let newTR;
  let newTD;
  let tabela = document.createElement("table");

  for (let i=0; i<brojRedova; i++){
    newTD = document.createElement("td");

    for (let j=0; j<brojKolona; j++){
      newTR = document.createElement("tr");
      newTR.innerHTML = Math.ceil(Math.random()*10);
      newTD.appendChild(newTR);
    }

    tabela.appendChild(newTD);
  }

  document.getElementById("id_tabela2").appendChild(tabela);
}



// Unos broja redova i kolona i EventListener

let red = document.getElementById("id_red").value;
let kolona = document.getElementById("id_kolona").value;
let pozivTabele = document.getElementById("id_unos_tabele");

pozivTabele.addEventListener("click", kreiranjeTabele1(red, kolona));
pozivTabele.addEventListener("click", kreiranjeTabele2(red, kolona));
