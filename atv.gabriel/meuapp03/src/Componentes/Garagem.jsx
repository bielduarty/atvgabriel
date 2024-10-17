import Carro from './Carro'

function Garagem() {

    const carro = ["Ford", "Fiat", "Honda"];
    return (
        <>
            <h1>Quais Carros eu almejo comprar:</h1>
            <ul>
                {carro.map((marcaCarro) => <Carro marca={marcaCarro} />)}
            </ul>


        </>
    );
}
export default Garagem 