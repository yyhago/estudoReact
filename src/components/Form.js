import { useState } from "react";  //Importação useState

export default function Form() {

  const [name, setName] = useState();  //Chamando e setando os valores useState
  const [password, setPassword] = useState(); //Chamando e setando os valores useState

  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(name); //Apresentação console
    console.log(password); //Apresentação console
    console.log(`O usuário ${name} foi cadastrado com a senha ${password}.`) //Interpolação com string com concactenização de valor
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
            onChange={(e) => setName(e.target.value)} //Recebendo evento 'e' para setar o valor do input nome para o setName
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Informe sua senha"
            onChange={(e) => setPassword(e.target.value)} //Recebendo evento 'e' para setar o valor do input nome para o setPassword
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
