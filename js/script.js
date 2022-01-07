

// Apply style to div
function boton(){
    var div = document.getElementById('show-menu');
    var content = document.getElementById('move-content');

  content.classList.toggle('move-container-all');
  div.classList.toggle('menu-animate');
  //div.classList.toggle('move-container-all');
  //div.classList.replace('menu', 'menu-animate');
}

