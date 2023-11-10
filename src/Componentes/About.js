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
          <div></div>
          <div></div>
        </div>
          <p>
            Meu nome é Gabriel Hipólito, tenho 24 anos e sou estudante de
            Ciência da Computação. Sou apaixonado por <span>programação</span> e{" "}
            <span>design</span>.
            <br />
            <span>
              Meu objetivo é criar landing pages que convertam e proporcionem
              uma sensação de modernidade e alto desempenho aos clientes.
            </span>
          </p>
      </article>
    </section>
  );
};

export default About;
