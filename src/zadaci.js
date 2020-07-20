// Funkcija za kreiranje tabele pomocu innerhtml-a
function kreiranjeTabele1 (brojRedova, brojKolona) {
  let html = '<table>'

  for (let i = 0; i < brojRedova; i++) {
    html += '<tr>'
    for (let j = 0; j < brojKolona; j++) {
      html += '<td>' + Math.floor(Math.random() * 10) + '</td>'
    }
    html += '</tr>'
  }

  html += '</table>'

  return html
}

// Funkcija za Kreiranje tabele pomocu AppendChild
function kreiranjeTabele2 (brojRedova, brojKolona) {
  const tabela = document.createElement('table')

  for (let i = 0; i < brojRedova; i++) {
    const tr = document.createElement('tr')

    for (let j = 0; j < brojKolona; j++) {
      const td = document.createElement('td')
      td.innerHTML = Math.floor(Math.random() * 10)
      tr.appendChild(td)
    }

    tabela.appendChild(tr)
  }

  return document.getElementById('tabela2').appendChild(tabela)
}

// Unos broja redova i kolona i ispis tabela
function ispis () {
  const red = document.getElementById('red').value
  const kolona = document.getElementById('kolona').value
  document.getElementById('tabela1').innerHTML = kreiranjeTabele1(red, kolona)
  kreiranjeTabele2(red, kolona)
}

// Pozivanje pomocu EventListener-a
document.getElementById('unos_tabele').addEventListener('click', ispis, { once: true })
