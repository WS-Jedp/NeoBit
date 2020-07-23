import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

class Home extends React.PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <section>
        <div className="systemContent--information">
          <h1>Bienvenido</h1>
          <hr />
          <p>
            Aquí encontraras los recursos necesarios para usar el sistema de diseño de <strong>NeoBit</strong>. Tanto Headers como cards. Este sistema de diseño fue hecho con atomic design por lo tanto están segmentados por atomos, moléculas y organismos.
          </p>
          <p>
            No olvides que para usar los componentes al principio del archivo debes importarlos así:
          </p>
          <SyntaxHighlighter style={dark}>
            {'import <Nombre del componente> from \'../components/<(atoms|molecules|organisms)>/<componente>\';'}
          </SyntaxHighlighter>
        </div>
      </section>
    );
  }
}

export default Home;