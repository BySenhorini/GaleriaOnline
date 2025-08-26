import "./Card.css"
import Caneta from "../../assets/img/caneta.svg"
import Lixo from "../../assets/img/Lixo.svg"

export const Card = ({ tituloCard, imgCard, funcaoEditar, funcaoDeletar }) => {
    return (
        <>
            <div className="cardDaImagem">
                <p>{tituloCard}</p>
                <img className="imgDoCard" src={imgCard} alt="Imagem relacionada ao card" />
                <div className="icons">
                    <img src={Caneta} onClick={funcaoEditar} alt="icone de uma caneta para realizar uma alteração" />
                    <img src={Lixo} onClick={funcaoDeletar} alt="icone de uma lixeira para realizar uma exclusão" />

                </div>
            </div>

        </>
    )
}