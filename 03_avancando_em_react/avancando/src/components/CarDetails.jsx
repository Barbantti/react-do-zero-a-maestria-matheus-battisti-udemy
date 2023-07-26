/* eslint-disable react/prop-types */
const CarDetails = ({brand, model, km, color, carValue, newCar}) => {

  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>Modelo: {model}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
        <li>Valor R$ {carValue}</li>
      </ul>
      {newCar && <p>Este carro e novo!</p>}
    </div>
  )
}

export default CarDetails