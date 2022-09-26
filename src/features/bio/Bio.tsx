import { useState } from "react";
import { NomesSimpsons, INFO_SIMPSONS } from "./constants";
import * as L from './styled';

const Bio = () => {
  const [bioActive, setBioActive] = useState(INFO_SIMPSONS[NomesSimpsons.BART]);

  const onClick: (nome: NomesSimpsons) => void = (nome) =>
    setBioActive(INFO_SIMPSONS[nome]);

  const criarBotoes = () => {
    return Object.keys(INFO_SIMPSONS).map((nome: string) => (
      bioActive.id === nome ?
      <L.botaoBioActive 
      key={nome as string}
      onClick={() => onClick(nome as NomesSimpsons)}>
        {nome}
      </L.botaoBioActive>
      :
      <L.botaoBioInactive 
      key={nome as string}
      onClick={() => onClick(nome as NomesSimpsons)}>
        {nome}
      </L.botaoBioInactive>
    ));
  };

  return (
    <L.BioContainer>
      <L.containerBotoes>{criarBotoes()}</L.containerBotoes>
          <L.bioImage 
            src={bioActive.image}
            alt={bioActive.nome}
          />
          <L.bioNome>{bioActive.nome}</L.bioNome>
          <L.bioDescription>{bioActive.description}</L.bioDescription>
    </L.BioContainer>
  );
};

export default Bio;