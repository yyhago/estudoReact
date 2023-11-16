export default function SeuNome({ setNome }) {
  return (
    <>
      <h2>Digite seu Nome</h2>
      <input
        type="text"
        placeholder="Seu nome..."
        onChange={(e) => setNome(e.target.value)}
      />
    </>
  );
}
