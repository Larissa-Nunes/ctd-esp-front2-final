import * as L from "../styled"
import { ModalPremiumProps } from "./types";

export function ModalPremium({setModal, close, assinarImage}: ModalPremiumProps) {
    return (
        <L.ContainerModal>
            <L.CardModal>
                <L.CloseButton onClick={setModal}>
                    <img src={close} alt="close-button" />
                </L.CloseButton>
                <L.ImageModal src={assinarImage} alt="mr-burns-excelent" />
                <L.ContainerTexto>
                    <L.TituloModal>Assine a nossa newsletter</L.TituloModal>
                    <L.DescriptionModal>
                        Assine nossa newsletter e receba novidades de nossos
                        personagens favoritos
                    </L.DescriptionModal>
                    <L.BotaoAssinar
                        onClick={() =>  
                            setTimeout(() => {
                                alert("Suscripto!");
                                setModal()
                            }, 1000)
                        }
                    >
                        Assinar
                    </L.BotaoAssinar>
                </L.ContainerTexto>
            </L.CardModal>
        </L.ContainerModal>
    )
}