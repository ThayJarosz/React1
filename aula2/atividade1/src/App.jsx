import Saudacao from "./Saudacao";

function App() {
  const nome = "Thayane";
  const curso = "Front End";
  const saudacao = GerarSaudacao();

  return (
    <>
      <Saudacao nome={nome} curso={curso} saudacao={saudacao}/>
    </>
  )
}

export default App

function GerarSaudacao() {
  let dataAtual = new Date();
  let horaAtual = dataAtual.getHours();

  if(horaAtual < 12) {
    return "Bom dia";
  } else if (horaAtual < 18) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }

}