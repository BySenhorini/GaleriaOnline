import "./Card.css"
import imgCard from "../../assets/img/Rawr 😏🌹.jpeg"
import Caneta from "../../assets/img/caneta.svg"
import Lixo from "../../assets/img/Lixo.svg"

export const Card = ({ tituloCard }) => {
    return (
        <>
            <div className="cardDaImagem">
                <p>{tituloCard}</p>
                <img className="imgDoCard" src={imgCard} alt="Imagem relacionada ao card" />
                <div className="icons">
                    <img src={Caneta} alt="icone de uma caneta para realizar uma alteração" />
                    <img src={Lixo} alt="icone de uma lixeira para realizar uma exclusão" />

                </div>
            </div>

        </>
    )
}