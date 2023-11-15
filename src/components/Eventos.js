import Button from "./evento/Button";

export default function Evento() {
  function meuEvento() {
    console.log("Ativando primeiro evento");
  }

  function segundoEvento(){
    console.log("Ativando segundo evento")
  }

  return (
    <div>
      <h2>Aperte para ativar o evento</h2>
      <Button event = {meuEvento} text = "Primeiro evento"/>
      <Button event = {segundoEvento} text = "Segundo evento"/>
    </div>
  );
}
