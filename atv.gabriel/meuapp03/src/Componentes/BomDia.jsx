
function BomDia(){
    return BomDia(
        <>
        <h1>Boa Dia!</h1>
        </>
    )
}
function BoaNoite(){
    return BoaNoite(
        <>
        <h1>Boa Noite!</h1>
        </>
    )
}
function Hora(props){
    const queHora = props.queHora

    if (queHora){
        return <BomDia/>
    }else{
        return <BoaNoite/>
    }
 } 

 export default Hora