import React, { Fragment } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import components from './components';

// Components
import LogoLoading from '../components/atoms/LogoLoading';

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
          <div className="container-component">
            <h1>Title</h1>
            <p>Código</p>
            <SyntaxHighlighter language="htmlbars" style={dark}>
              {`<h1>Title<h1/>`}
            </SyntaxHighlighter>
            <h2>Title</h2>
            <p>Código</p>
            <SyntaxHighlighter language="htmlbars" style={dark}>
              {`<h2>Title</h2>`}
            </SyntaxHighlighter>
            <h3>Title</h3>
            <p>Código</p>
            <SyntaxHighlighter language="htmlbars" style={dark}>
              {`<h3>Title</h3>`}
            </SyntaxHighlighter>
            <h4>Title</h4>
            <p>Código</p>
            <SyntaxHighlighter language="htmlbars" style={dark}>
              {`<h4>Title</h4>`}
            </SyntaxHighlighter>
            <h5>Title</h5>
            <p>Código</p>
            <SyntaxHighlighter language="htmlbars" style={dark}>
              {`<h5>Title<h5/>`}
            </SyntaxHighlighter>
          </div>
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
            <div key={index} className="container-component">
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

      <section className="systemContent--section">
        <h4>Logo Loading</h4>
        <hr />
        <p>
          El loading es el componente que nos ayudará a darle una respuesta al usuario cuando alguna acción se esté realizando y esta se demora en completar.
        </p>

        <div className="systemContent--section--components">
          <div className="container-component">
            <p>Componente</p>
            <LogoLoading />
            <p>Código</p>
            <SyntaxHighlighter language="htmlbars" style={dark}>
              {`<LogoLoading />`}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Atoms;