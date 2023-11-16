import { useState } from "react";

export default function () {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email);
  }

  function limparEmail() {
    setUserEmail("");
  }

  return (
    <>
      <h2>Cadastre o seu Email:</h2>
      <form>
        <input
          type="email"
          placeholder="Informe seu email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <button
        tipe="submit"
        onClick={enviarEmail}
      >
        Enviar Email
      </button>
      {userEmail && (
        <div>
          <p>O email do usuario é {userEmail}</p>
          <button onClick={limparEmail}>Limpar Email</button>
        </div>
      )}
    </>
  );
}
