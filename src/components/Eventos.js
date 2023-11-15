export default function Evento() {
  function meuEvento() {
    console.log("Opá, o click foi disparado");
  }

  return (
    <div>
      <h2>Aperte para ativar o evento</h2>
      <button onClick={meuEvento}>Ativar!</button>
    </div>
  );
}
