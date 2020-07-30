import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Componenets
import Loading from '../components/molecules/Loading';
import Menu from '../components/molecules/Menu';
import Article from '../components/molecules/Article';
import CurosityFacts from '../components/molecules/CuriosityFacts';
import CardInfo from '../components/molecules/CardInfo';
import Footer from '../components/molecules/Footer';
import LabelCard from '../components/molecules/LabelCard';
import Hero from '../components/molecules/Hero';
import Card from '../components/molecules/Card';

//Manisfest
import { article, cardInfo, curosityFacts } from '../components/manifests/blockContentManifes.json';
import { astheroidManifest } from '../components/manifests/astheroidManifest.json';

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
        <nav>
          <ul>
            <li><a href="/ds/molecules/#menu">Menu</a></li>
            <li><a href="/ds/molecules/#loading">Loading</a></li>
            <li><a href="/ds/molecules/#footer">Footer</a></li>
            <li><a href="/ds/molecules/#labelCard">Label Card</a></li>
            <li><a href="/ds/molecules/#blockContents">Block Contents</a></li>
            <li><a href="/ds/molecules/#hero">Hero</a></li>
            <li><a href="/ds/molecules/#card">Card</a></li>
          </ul>
        </nav>
      </div>

      <section id="menu" className="systemContent--section">
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

      <section id="loading" className="systemContent--section">
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
      
      <section id="footer" className="systemContent--section">
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

      <section id="labelCard" className="systemContent--section">
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
      
      <section id="blockContents" className="systemContent--section">
        <h4>Block contents</h4>
        <hr />
        <p>
          Estos son los bloques que van a permitir contener información relevante.
        </p>

        <div className="systemContent--section--components">
          <div className="container-component">
            <h5>Article</h5>
            <p>Componente</p>
            <Article {...article} />
            <p>Código</p>
            <SyntaxHighlighter language="htmlbars" style={dark}>
              {`<Article title="some title" author="Carolina Laverde..." description="lorem..." />`}
            </SyntaxHighlighter>
          </div>
          <div className="container-component">
            <h5>Curiosity facts</h5>
            <p>Componente</p>
            <CurosityFacts {...curosityFacts} />
            <p>Código</p>
            <SyntaxHighlighter language="htmlbars" style={dark}>
              {`<CuriosityFacts title="some title" description="lorem..." />`}
            </SyntaxHighlighter>
          </div>
          <div className="container-component">
            <h5>Card info</h5>
            <p>Componente</p>
            <CardInfo {...cardInfo} />
            <p>Código</p>
            <SyntaxHighlighter language="htmlbars" style={dark}>
              {`<CardInfo title="some title" description="lorem..." />`}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>
      
      <section id="hero" className="systemContent--section">
        <h4>Hero</h4>
        <hr />
        <p>
          Este elemento va a contar de que va el proyecto al usuario y empezar a interactuar con el sitio.
        </p>
        <div className="systemContent--section--components">
          <div className="container-component">
            <Hero />
            <p>Código</p>
            <SyntaxHighlighter language="htmlbars" style={dark}>
              {`<Hero />`}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>

      <section id="card" className="systemContent--section">
        <h4>Card</h4>
        <hr />
        <p>
          Este elemento va ayudar al usuario a tener la percepción sobre que información va a querer ver a detalle.
        </p>
        <div className="systemContent--section--components">
          <div className="container-component">
            <Card astheroid={astheroidManifest} />
            <p>Código</p>
            <SyntaxHighlighter language="htmlbars" style={dark}>
              {`<Card ashteroid={astheroid} />`}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Molecules;