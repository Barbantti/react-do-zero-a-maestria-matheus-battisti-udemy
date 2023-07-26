// Renderização de lista;
// Faz-se com um tipo de array, utilizando método map e declarando em uma constante usando o useState e id (geralmente do database);

import {useState} from 'react'

const ListRender = () => {

  const [users, setUsers] = useState([
    {id: 1, name: "Leonardo", age: 28, temp: "anos"},
    {id: 2, name: "Heitor", age: 4, temp: "meses"},
    {id: 3, name: "Ana", age: 28, temp: "anos"},
    {id: 4, name: "Biscoito", age: 3, temp: "anos"},
    {id: 5, name: "Jully", age: 7, temp: "anos"},
    {id: 6, name: "Bolacha", age: 1, temp: "anos"},
    {id: 7, name: "Gilda", age: 62, temp: "anos"},
    {id: 8, name: "Dirceu", age: 62, temp: "anos"}
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 9);

    setUsers((prevUsers) => {
console.log("prevUsers: ", prevUsers)
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };


  return (
    <div>
        {/* Geralmente o método "map" e feito com abertura e fechamento de chaves {} por estar modificando algum dado no meio de alguma logica. Porem no jsx e um pouco diferente pois e considerado como um objeto, então quando retornar um objeto no "map" tem que colocar os parenteses () ao invés de chaves que pode vir dar algum erro de nao exibir os dados */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.age} - {user.temp}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender