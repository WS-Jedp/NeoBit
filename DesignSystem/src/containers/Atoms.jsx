import React, { Fragment } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import components from './components';

const Atoms = () => {
  return (
    <article className="systemContent">
      <div className="systemContent--information">
        <h1>Atomos</h1>
        <hr />
        <p>
          Los atomos son los cimientos que nos permiten crear estructuras mas
          grandes, permitiendonos poco a poco a construir y transmitir los
          fundamentos y principios de <strong>NeoBit</strong>.
        </p>
      </div>

      <section className="systemContent--section">
        <h4>Encabezados</h4>
        <hr />
        <p>
          Los encabezados son las etiquetas <code>h1...h6</code> que nos
          permetiran indicar cuando comienza una nueva seccion con nueva
          informacion en ella.
        </p>

        <div className="systemContent--section--components">
          <h1>Title H1</h1>
          <h2>Title H2</h2>
          <h3>Title H3</h3>
          <h4>Title H4</h4>
          <h5>Title H5</h5>
        </div>
      </section>

      <section className="systemContent--section">
        <h4>Botones</h4>
        <hr />
        <p>
          Los botones son una parte fundamental de nuestro sistema de diseño,
          son los elementos que le indicaran al usuario que puede hacer y cuando
          lo puede hacer.
        </p>

        <div className="systemContent--section--components">
          {components.buttons.map((button, index) => (
            <div key={index}>
              <h5>{button.name}</h5>
              <p>Componente</p>
              <button className={button.className}>Type me</button>
              <p>Código</p>
              <SyntaxHighlighter language="htmlbars" style={dark}>
                {button.code}
              </SyntaxHighlighter>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default Atoms;