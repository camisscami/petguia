let dados = [];
let cat = '';

async function carregar() {
  let r = await fetch('http://localhost:8080/animais');
  dados = await r.json();
  mostrar();
}
function filtrarCat(c) { cat = c; mostrar(); }
function mostrar() {
  let t = document.getElementById('busca').value.toLowerCase();
  let html = '';
  let qtd = 0;
  for (let a of dados) {
    if (cat && a.categoria != cat) continue;
    if (t && !a.busca.includes(t) && !a.nome.toLowerCase().includes(t)) continue;
    qtd++;
    html += `<div class="card"><b>${a.emoji} ${a.nome}</b><p>${a.curta}</p>🍽️ ${a.alimentacao}<p>💛 ${a.cuidados}</p><p>🏠 ${a.ambiente}</p><p>✨ ${a.curiosidade}</p></div>`;
  }
  document.getElementById('lista').innerHTML = html || '<p>Nenhum pet encontrado.</p>';
  document.getElementById('contador').innerText = qtd + ' animal(is) encontrado(s)';
}
carregar();