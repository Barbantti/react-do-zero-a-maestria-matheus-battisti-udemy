import "./App.css";
import MyForms from "./Components/Forms/MyForms";

function App() {
  return (
    <div className='App'>
      <h2>Forms</h2>
      {/* passando via prop "user" para o componente filho "./Components/MyForms.jsx" com objeto {{name, email}} para MyForms.jsx */}
      <MyForms
        user={{
          name: "Heitor",
          email: "heitor.barbantti@gmail.com",
          bio: "Sou um programador",
          role: "developer",
        }}
      />
    </div>
  );
}

export default App;
