import { useState } from "react";
import { NomesSimpsons, INFO_SIMPSONS } from "./constants";
import * as L from "./styled"

const Bio = () => {
  const [bioActive, setBioActive] = useState(INFO_SIMPSONS[NomesSimpsons.BART]);

  const onClick: (nome: NomesSimpsons) => void = (nome) =>
    setBioActive(INFO_SIMPSONS[nome]);

  const criarBotoes = () => {
    return Object.keys(INFO_SIMPSONS).map((nome: string) => (
      <L.BioButton
        key={nome as string}
        onClick={() => onClick(nome as NomesSimpsons)}
        isActive={
          bioActive.id === nome
            ? true
            : false
        }
      >
        {nome}
      </L.BioButton>
    ));
  };

  return (
    <L.BioContainer>
      <L.ContainerBotoes>{criarBotoes()}</L.ContainerBotoes>
      <div>
        <div>
          <L.BioImage
            src={bioActive.image}
            alt={bioActive.nome}            
          />
        </div>
        <div>
          <L.BioNome>{bioActive.nome}</L.BioNome>
          <L.BioDescription>{bioActive.description}</L.BioDescription>
        </div>
      </div>
    </L.BioContainer>
  );
};

export default Bio;