// ==UserScript==
// @name     UACloud Spam Filter
// @version  20190511
// @grant    none
// @include  https://cvnet.cpd.ua.es/*
// ==/UserScript==

//Si hubiera notificaciones de anuncios generales, las marca como leidas y recarga la pagina
if (document.getElementById("RESUMEN_ANUNCIOSGRAL") != null && window.XMLHttpRequest) {
            request = new XMLHttpRequest();
  					request.open('POST', '/apirestservices/api/privados/MarcarAnunciosGral', true);
						request.setRequestHeader("Content-type", "application/json");
						request.send(JSON.stringify({ Token: sessionStorage.getItem('token') }));
  					window.location.reload(false);
}

//Esconde los anuncios generales de la aplicacion de anuncios
var spans = document.getElementsByClassName("anunciocentro")
for(var i = 0; i < spans.length; i++) {
  spans[i].parentElement.parentElement.hidden = true;
}

//Esconde el panel de "Te interesa..."
var panels = document.getElementsByClassName("panel-azul")
for(var i = 0; i < panels.length; i++) {
  if(panels[i].innerHTML.includes("Te interesa")){
    panels[i].parentElement.hidden = true;
  }
}