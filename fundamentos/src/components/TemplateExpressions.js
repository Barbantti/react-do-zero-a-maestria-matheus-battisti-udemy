const TemplateExpressions = () => {

  const name = "Heitor"
  const data = {
    age: 4,
    dataNasc: "26/03/2023",
    sex: "Masculino",
    fullName: "Heitor Guimarães Barbanti",
    liveAt: "Sao Paulo, Brasil"
  };

  return (
    <div>
      <h1> Ola {name}, meu filho!</h1>
      <h1>Nome completo: {data.fullName}</h1>
      <h1>Data de nascimento: {data.dataNasc}</h1>
      <h1>Sexo: {data.sex}</h1>
      <h1>Idade: {data.age} meses</h1>
      <h1>Vive em: {data.liveAt}</h1>
    </div>
  )

} 

export default TemplateExpressions;