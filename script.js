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

  function redirecionarParaCorteCabelo_Bruno(){
    window.location.href = 'Corte_cabelo_Bruno.html'
  }

  function redirecionarParaCorteMaquina_Bruno(){
    window.location.href = 'Corte_maquina_Bruno.html'
  }

  function redirecionarParaCorteBarba_Bruno(){
    window.location.href = 'Barba_completa_Bruno.html'
  }

  function redirecionarParaCorteCabelo_e_Barba_Bruno(){
    window.location.href = 'Barba_e_cabelo_Bruno.html'
  }

  function redirecionarParaCorteCabeloCrianca_Bruno(){
    window.location.href = 'Corte_crianca_Bruno.html'
  }



  function redirecionarParaCorteCabelo_Natan(){
    window.location.href = 'Corte_cabelo_Natan.html'
  }

  function redirecionarParaCorteMaquina_Natan(){
    window.location.href = 'Corte_maquina_Natan.html'
  }

  function redirecionarParaCorteBarba_Natan(){
    window.location.href = 'Barba_completa_Natan.html'
  }


  function redirecionarParaCorteCabelo_e_Barba_Natan(){
    window.location.href = 'Barba_e_cabelo_Natan.html'
  }


  function redirecionarParaCorteCabeloCrianca_Natan(){
    window.location.href = 'Corte_crianca_Natan.html'
  }

  window.onload = function () {
    var data = new Date();
    var hora = data.getHours();
    var redirecionado = document.cookie.includes("redirecionado=true");

    // Verifica se está entre 7 e 20 horas
    if (hora >= 7 && hora <= 21 && !redirecionado) {
        window.location.href = 'index.html';
        // Define o cookie "redirecionado" como true
        document.cookie = "redirecionado=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
    } else if (!redirecionado) {
        window.location.href = 'index_fechado.html';
        // Define o cookie "redirecionado" como true
        document.cookie = "redirecionado=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
    } else {
        // Se o cookie "redirecionado" já existir, redefine-o como false
        document.cookie = "redirecionado=false; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    }
}










