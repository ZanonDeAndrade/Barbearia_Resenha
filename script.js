// script.js

// Função para redirecionar para a página de Bruno
function redirecionarParaBruno() {
    window.location.href = 'bruno.html'; // Substitua 'pagina_bruno.html' pelo URL da página de Bruno
  }
  
  // Função para redirecionar para a página de Natan
  function redirecionarParaNatan() {
    window.location.href = 'natan.html'; // Substitua 'pagina_natan.html' pelo URL da página de Natan
  }
  
  function redirecionarParaInicio(){
    window.location.href = 'index.html'
  }

  function redirecionarescolha_horario_bruno(elemento){
    window.location.href = 'escolha_horario_bruno.html'
  }

  function redirecionarescolha_horario_natan(elemento){
    window.location.href = 'escolha_horario_natan.html'
  }


    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('.icon').onclick = function() {
            window.location.href = 'https://maps.app.goo.gl/DwMKgxPuMrdNUYZs6?g_st=com.google.maps.preview.copy';
        };
    });



  


 



















