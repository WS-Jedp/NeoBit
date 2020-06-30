import React from 'react';

// Componenets
import Button from '../components/Button';

const Molecules = () => {
  return (
    <article className="systemContent">
      <div className="systemContent__information">
        <h1>
          Moleculas
        </h1>
        <hr/>
        <p>
          Las moleculas nos ayudaran a mantener una interacción activa con nuestros usuarios, son fundamentales para poder tener un sistema de diseño sostenible. 
        </p>
      </div>

      <section className="systemContent__section">
        <h4>Botones</h4>
        <hr/>
        <p>Los botones son una parte fundamental de nuestro sistema de diseño, son los elementos que le indicaran al usuario que puede hacer y cuando lo puede hacer.</p>

        <div className="systemContent__section--components">
          <Button title="Title Here!" />
          <Button title="Title Here!" style="secondary"/>
          <Button title="Title Here!" style="gray"/>
          <Button title="Title Here!" style="blue"/>
        </div>
      </section>
    </article>
  );
};

export default Molecules;