import React from "react";
import { Icon_web } from "../Assets/Images/Icon_web";
import { IconDesign } from "../Assets/Images/IconDesign";
const Services = () => {
  return (
    <section className="section-services">
      <h1>Meus <span>Serviços</span></h1>

      <section className="section-group-services">
        <article className="service landing-page">
          <h2>LANDING-PAGE</h2>
          <p>Desenvolvo landing pages atraentes com o objetivo de atrair e converter visitantes em compradores</p>
        </article>
        <article className="service site-insitucional">
          <h2>Site Insituicional</h2>
          <p>Criamos sites institucionais que destacam sua marca e contam sua história de forma impactante e profissional."</p>
        </article>
        <article className="service blog">
          <h2>Blog</h2>
          <p>
          Construímos blogs que informam, envolvem, inspiram e promovem conteúdo valioso, impulsionando o sucesso da sua presença online.
          </p>
        </article>
        <article className="service ui-ux-design">
          <h2>UI/UX Design</h2>
          <p>
          Criamos designs de interface do usuário que combinam estética e usabilidade para proporcionar experiências digitais excepcionais.
          </p>
          <p></p>
        </article>

        <article className="service seo">
          <h2>SEO</h2>
          <p>
          SEO envolve aprimorar a estrutura do site, a qualidade do conteúdo, a velocidade de carregamento e a criação de links de qualidade para obter melhores classificações nos motores de busca.
          </p>
          <p></p>
        </article>
      </section>
    </section>
  );
};

export default Services;
