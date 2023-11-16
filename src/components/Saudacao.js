export default function Saudacao ({ nome }) {
    
    function gerarSaudacao (algumNome){
        return `Olá ${algumNome}, como esta?`
    }
    
    return <>
    { nome && <p>{gerarSaudacao(nome)}</p>}
    </>
}