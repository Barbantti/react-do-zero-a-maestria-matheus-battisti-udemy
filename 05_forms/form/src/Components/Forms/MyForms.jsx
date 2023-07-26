import { useState } from "react";
import PropTypes from "prop-types";
import "./MyForms.css";

// recebendo prop "user" do componente pai "App.jsx"
const MyForms = ({ user }) => {
  // 6 - controlled inputs
  // 3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, SetBio] = useState(user ? user.bio : "");
  const [role, SetRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value);
  };
  // console.log("name: ", name);
  // console.log("email:", email);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o form");
    console.log("name: ", name, "email:", email, "bio:", bio, "role:", role);

    // parte da validação
    // parte do envio
    // e por ultimo o setState("") vazio para limpar o form e o user realizar outro cadastro se necessário

    // 7 - limpar form
    setName("");
    setEmail("");
    SetBio("");
  };

  return (
    <div>
      {/* 5 - envio de form */}
      {/* 1 - criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Nome:</label>
          <input
            type='text'
            name='name'
            placeholder='Digite seu nome'
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2- label envolvendo input */}
        <label>
          <span>E-mail:</span>
          {/* 4- simplificação de manipulação de state */}
          <input
            type='email'
            name='email'
            placeholder='Digite o seu e-mail'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* 8 - textarea */}
        <label>
          <span>Bio:</span>
          <textarea
            name='bio'
            placeholder='Descrição do usuário'
            onChange={(e) => SetBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* 9 - select */}
        <label>
          <span>Função do sistema</span>
          <select
            name='role'
            onChange={(e) => SetRole(e.target.value)}
            value={role}
          >
            <option value='user'>Usuário</option>
            <option value='editor'>Editor</option>
            <option value='Developer'>Programador</option>
            <option value='admin'>Administrador</option>
          </select>
        </label>
        <input type='submit' value='Enviar' />
      </form>
    </div>
  );
};

MyForms.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
};

export default MyForms;
