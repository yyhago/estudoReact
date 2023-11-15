import { useState } from "react";

export default function Form() {

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(name);
    console.log(password);
    console.log("usuario cadastrado");
  }

  return (
    <div>
      <h1>Meu cadastro:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Informe seu nome"
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Informe sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="submit"
            value="Cadastrar"
          />
        </div>
      </form>
    </div>
  );
}
