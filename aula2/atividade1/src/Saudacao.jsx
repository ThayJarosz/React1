 function Saudacao({nome, curso, saudacao}) {
   
    return (
      <>
        <p>
        {saudacao} {nome} ao curso de {curso} ! 
        </p>
        <p>
           Você entrou no curso: {curso}
        </p>
      </>
    )
  }
  
  export default Saudacao