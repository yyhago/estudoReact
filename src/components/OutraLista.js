export default function OutraLista({ itens }) {
  return (
    <>
      <h3>Itens de coisas boas:</h3>
      {itens.length > 0 ? (
        itens.map((item) => <p key={item}>{item}</p>)
      ) : (
        <p>Nao há itens na lista</p>
      )}
    </>
  );
}
