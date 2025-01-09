import React from "react";

const About = () => {
  return (
    <section className="section-about">
      <h1>
        Sobre <span>mim.</span>
      </h1>
      <article className="about-me">
        <div className="my-photo">
          <div></div>
        </div>
        <p>
          Sou um desenvolvedor front-end apaixonado por tecnologia e inovação,
          com experiência em criar soluções digitais eficientes, escaláveis e
          focadas na melhor experiência do usuário. Especialista em React,
          <span>#TypeScript</span> , <span>#Redux Toolkit</span> e{" "}
          <span>#React Query</span> , tenho habilidade em desenvolver interfaces
          modernas e organizadas, seguindo padrões como a arquitetura{" "}
          <span>Atomic Design</span>
        </p>
      </article>
    </section>
  );
};

export default About;
