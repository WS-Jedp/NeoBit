import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Menu from '../components/molecules/Menu';

// Componenets
import Loading from '../components/molecules/Loading';
import LabelCard from '../components/molecules/LabelCard';


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
        <h4>Menu</h4>
        <hr />
        <p>
          El menu es el conjunto de botones que van a ayudar al usuario a navegar por el sitio a sus diferentes secciones.
        </p>

        <div className="systemContent--section--components">
          <div>
            <h5>Menu normal</h5>
            <p>Componente</p>
            <Menu />
            <p>Código</p>
            <SyntaxHighlighter language="htmlbars" style={dark}>
              {`<Menu />`}
            </SyntaxHighlighter>
          </div>
          <div>
            <h5>Menu dark</h5>
            <p>Componente</p>
            <Menu dark />
            <p>Código</p>
            <SyntaxHighlighter language="htmlbars" style={dark}>
              {`<Menu dark />`}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>

    <section className="systemContent--section">
        <h4>Loading</h4>
        <hr />
        <p>
          El loading se usara cada vez que haya que avisar que el proceso realizado puede ser demorado.
        </p>

        <div className="systemContent--section--components">
         <Loading />
        </div>
        <p>Código</p>
        <SyntaxHighlighter language="htmlbars" style={dark}>
          {`<Loading />`}
        </SyntaxHighlighter>
      </section>

      <section className="systemContent--section">
        <h4>Label Card</h4>
        <hr />
        <p>
          Los labels son normalmente para dar el detalle de una característica de un elemento.
        </p>
        <div className="bg-primary-color systemContent--section--components">
          <LabelCard />
        </div>
        <p>Código</p>
        <SyntaxHighlighter language="htmlbars" style={dark}>
          {`<LabelCard title={ title } description={ value }/>`}
        </SyntaxHighlighter>
      </section>
    </article>
  );
};

export default Molecules;