import * as L from ".././styled"
import { ModalProps } from "./types"

export function Modal({setModal, close, image, titulo, description}: ModalProps) {
    return (
        <L.ContainerModal>
            <L.CardModal>
                <L.CloseButton onClick={setModal}>
                    <img src={close} alt="close-button" />
                </L.CloseButton>
                <L.ImageModal src={image} alt="news-image" />
                <L.ContainerTexto>
                    <L.TituloModal>{titulo}</L.TituloModal>
                    <L.DescriptionModal>{description}</L.DescriptionModal>
                </L.ContainerTexto>
            </L.CardModal>
        </L.ContainerModal>
    )
}