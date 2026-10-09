fetch("https://api.adviceslip.com/advice")
  .then(resposta => resposta.json())
  .then(dados => {
    document.getElementById("frase-api").textContent = dados.slip.advice;
  })
  .catch(erro => {
    document.getElementById("frase-api").textContent = "Não foi possível carregar a frase.";
    console.log("Erro ao acessar a API:", erro);
  });
