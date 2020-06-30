import React from 'react';

// Components
import Button from '../components/Button';

const Atoms = () => {
  return (
    <article className="systemContent">
      <div className="systemContent__information">
        <h1>Atomos</h1>
        <hr/>
        <p>Los atomos son los cimientos que nos permiten crear estructuras mas grandes, permitiendonos poco a poco a construir y transmitir los fundamentos y principios de <strong>NeoBit</strong>.</p>
      </div>

      <section className="systemContent__section">
        <h4>Encabezados</h4>
        <hr/>
        <p>Los encabezados son las etiquetas <code>h1...h6</code> que nos permetiran indicar cuando comienza una nueva seccion con nueva informacion en ella.</p>

        <div className="systemContent__section--components">
          <h1>Title H1</h1>
          <h2>Title H2</h2>
          <h3>Title H3</h3>
          <h4>Title H4</h4>
          <h5>Title H5</h5>
          <h6>Title H6</h6>
        </div>
      </section>
    </article>
  );
};

export default Atoms;