import Item from "./Item";

export default function List() {
  return (
    <>
      <h2>Minha lista</h2>
      <ul>
        <Item marca="BMW" ano_lancamento={4213}/>
        <Item marca="Fiat" ano_lancamento={4234}/>
        <Item marca={"dadada"}/>
      </ul>
    </>
  );
}

