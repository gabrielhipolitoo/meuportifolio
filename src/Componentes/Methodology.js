import React from "react";

const Methodology = () => {
  return (
    <section className="section-methodology">
      <header className="section-header-methodology">
        <h2>Metodologia de <span>desenvolvimento</span></h2>
       
      
      </header>
      <article className="section-stages-methodology">
          <article className="stage-methodology">
            <h3>Imersão</h3>
            <p>
            Vamos compreender o projeto proposto, coletando informações e analisando requisitos, considerando objetivos e público-alvo, e debatendo quais tecnologias oferecem o melhor custo-benefício para sua execução
            </p>
          </article>
          <article className="stage-methodology">
            <p>
            Nesta fase, a equipe concebe o design do projeto através de brainstorming e esboços, gerando ideias inovadoras e definindo funcionalidades e características-chave para estabelecer um plano sólido para a implementação
            </p>
            <h3>Ideação</h3>
          </article>
          <article className="stage-methodology">
            <h3>Implementação</h3>
            <p>
            Nesta fase, o projeto é concretizado, traduzindo ideias e design em código e funcionalidades. Cada parte é desenvolvida e refinada para atender aos requisitos, transformando a visão em um produto final.
            </p>
          </article>
      </article>
    </section>
  );
};

export default Methodology;
