import "./App.css";
import CarsDetails from "./Components/CarsDetails";

function App() {
  const cars = [
    {
      id: 1,
      brand: "Fiat",
      model: "Fiorino",
      color: "Branca",
      age: 2006,
      km: 210000,
      carValue: 4500,
      newCar: false,
    },
    {
      id: 2,
      brand: "Nissan",
      model: "Versa",
      color: "Preta",
      age: 2023,
      km: 0,
      carValue: 110000,
      newCar: true,
    },
    {
      id: 3,
      brand: "Chevrolet",
      model: "Celta",
      color: "Cinza chumbo",
      age: 2014,
      km: 98000,
      carValue: 18900,
      newCar: false,
    },
    {
      id: 4,
      brand: "Nissan",
      model: "Kicks",
      color: "Azul",
      age: 2023,
      km: 0,
      carValue: 125000,
      newCar: true,
    },
    {
      id: 5,
      brand: "Ford",
      model: "Ranger",
      color: "Azul marinho",
      age: 1999,
      km: 187000,
      carValue: 22500,
      newCar: false,
    },
    {
      id: 6,
      brand: "VW",
      model: "Nivus",
      color: "Cinza",
      age: 2023,
      km: 0,
      carValue: 180000,
      newCar: true,
    },
  ];

  return (
    <div className="container">
      <div className='box_container'>
        <h1 className='h1_title'>Detalhes dos Veículos</h1>
        <div className='car_list'>
          {cars.map((car) => (
            <div key={car.id} className="car_box">
              <CarsDetails car={car} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
