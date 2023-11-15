export default function ({foto, nome, idade, profissao}) {

    return(
        <div>
            <img src={foto} alt={nome}></img>
            <h1>Nome: {nome}</h1>
            <h2>Idade: {idade}</h2>
            <h2>Profissão: {profissao}</h2>
        </div>
    )

}