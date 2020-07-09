import React from 'react';

// Componenets
import Loading from '../components/molecules/Loading';


const Molecules = () => {
  return (
    <article className="systemContent">
      <div className="systemContent--information">
        <h1>
          Moleculas
        </h1>
        <hr/>
        <p>
          Las moleculas nos ayudaran a mantener una interacción activa con nuestros usuarios, son fundamentales para poder tener un sistema de diseño sostenible. 
        </p>
      </div>

    <section className="systemContent--section">
        <h4>Loading</h4>
        <hr />
        <p>
          El loading se usara cada vez que haya que avisar que el proceso realizado puede ser demorado.
        </p>

        <div className="systemContent--section--components">
         <Loading />
        </div>
      </section>
    </article>
  );
};

export default Molecules;