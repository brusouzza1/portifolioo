fetch("https://api.adviceslip.com/advice")
  .then(resposta => resposta.json())
  .then(dados => {
    console.log(dados.slip.advice);
  })
  .catch(erro => {
    console.log("Erro ao acessar a API:", erro);
  });
