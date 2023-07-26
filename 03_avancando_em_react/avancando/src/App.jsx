/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

// importando imagem de assets

import City from "./assets/city.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {
  const name = "Ana";
  const [userName] = useState("Jully");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "Audi", color: "Cinza", newCar: false, km: 3200 },
    { id: 3, brand: "Mercedes", color: "Cinza", newCar: true, km: 0 }
  ];

  function showMessage() {
    console.log("Evento do componente pai!")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  // desafio 4
  const users = [
    {id: 1, 
      name: "Leonardo", 
      age: 28, 
    job: "Programador"},
    {id: 2, 
      name: "Heitor", 
      age: 4, 
      job: "Estudante"},
    {id: 3, 
      name: "Ana", 
      age: 28, 
      job: "Empresaria"}
  ]



  return (
    <div className='App'>
      <h1>Avançando no React</h1>
      {/* Imagem em public */}
      <div>
        <p>Inserindo imagem pela pasta public: </p>
        <p>Utilizar tag (img src) e adicionar a imagem que deve estar dentro da pasta public. </p>
        <img src='/img1.jpg' alt='Paisagem' />
      </div>
      {/* Imagem em asset */}
      <div>
      <p>Inserindo imagem pela pasta asset: </p>
      <p>Deve realizar um import da pasta (assets) indicando a imagem e apos utilizar tag (img src).</p>
        <img src={City} alt='Cidade' />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="Nissan" model="Versa" km={59980} color="Preta" carValue={65000} newCar={false} />
      {/* reaproveitamento de dados */}
      <CarDetails brand="VW" model="Voyage" km={120000} color="Cinza" carValue={31000} newCar={false} />
      <CarDetails brand="Fiat" model="Cronos" km={0} color="Vermelho" carValue={84790} newCar={true} />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}
      {/* fragment */}
      <Fragment propFragment="teste" />
      {/* children */}
      <Container myValue="testing">
        <p>E este e o conteúdo</p>
      </Container>
      <Container myValue="testing-2">
        <h5>Testando o container</h5>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* desafio 4 */}
      {users.map((user) => (
        <UserDetails 
        key={user.id} 
        name={user.name} 
        age={user.age} 
        job={user.job}
      />
      ))}
    </div>
  );
}

export default App;
