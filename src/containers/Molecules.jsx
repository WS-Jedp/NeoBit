import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Componenets
import Loading from '../components/molecules/Loading';
import Menu from '../components/molecules/Menu';
import Footer from '../components/molecules/Footer';
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
          <div className="container-component">
            <h5>Menu normal</h5>
            <p>Componente</p>
            <Menu />
            <p>Código</p>
            <SyntaxHighlighter language="htmlbars" style={dark}>
              {`<Menu />`}
            </SyntaxHighlighter>
          </div>
          <div className="container-component">
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
          <div className="container-component">
            <h5>Loading</h5>
            <p>Componente</p>
            <Loading />
            <p>Código</p>
            <SyntaxHighlighter language="htmlbars" style={dark}>
              {`<Loading />`}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>

      <section className="systemContent--section">
        <h4>Footer</h4>
        <hr />
        <p>
          Está sección del sitio es el conocido footer que nos dará acceso a las redes sociales. 
        </p>

        <div className="systemContent--section--components">
          <div className="container-component">
            <h5>Footer</h5>
            <p>Componente</p>
            <Footer />
            <p>Código</p>
            <SyntaxHighlighter language="htmlbars" style={dark}>
              {`<Footer />`}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>

      <section className="systemContent--section">
        <h4>Label Card</h4>
        <hr />
        <p>
          Los labels son normalmente para dar el detalle de una característica de un elemento.
        </p>

        <div className="systemContent--section--components">
          <div className="container-component">
            <p>Componente</p>
            <LabelCard title={'Label'} description={'421.520km'} />
            <p>Código</p>
            <SyntaxHighlighter language="htmlbars" style={dark}>
              {`<LabelCard title={ Label } description={ 521.510 km }/>`}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Molecules;