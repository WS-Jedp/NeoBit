import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Header from '../components/organisms/Header';

const Atoms = () => {
  return (
    <article className="systemContent">
      <div className="systemContent--information">
        <h1>
          Organismos
        </h1>
        <hr />
        <p>
          Las moleculas nos ayudaran a mantener una interacción activa con nuestros usuarios, son fundamentales para poder tener un sistema de diseño sostenible.
        </p>
      </div>

      <section className="systemContent--section">
        <h4>Header</h4>
        <hr />
        <p>
          Está sección va ayudar al usuario a navegar por el sitio.
        </p>

        <div className="systemContent--section--components">
          <div className="container-component">
            <h5>Header normal</h5>
            <p>Componente</p>
            <Header />
            <p>Código</p>
            <SyntaxHighlighter language="htmlbars" style={dark}>
              {`<Header />`}
            </SyntaxHighlighter>
          </div>
          <div className="container-component">
            <h5>Menu dark</h5>
            <p>Componente</p>
            <Header dark />
            <p>Código</p>
            <SyntaxHighlighter language="htmlbars" style={dark}>
              {`<Header dark />`}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Atoms;