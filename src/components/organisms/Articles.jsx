import React from 'react'

// Import
import Article from '../molecules/Article';

const Articles = () => {
  return (
    <article className="articles">
      <div className="articles-content">
        <Article 
          title="The Makers - Cosmos" 
          author="Carolina Laverde Y  Maria Jose" 
          description="Las galaxias forman estrellas, las estrellas forman mundos y los mundos forman vidas."
        />
        <a className="button button-secondaryBlue">Escuchar</a>
      </div>
      <hr/>
      <div className="articles-content">
        <Article 
          title="The Makers - Cosmos II" 
          author="Carolina Laverde Y  Maria Jose" 
          description="Las galaxias forman estrellas, las estrellas forman mundos y los mundos forman vidas. Parte 2."
        />
      <a className="button button-secondaryBlue">Escuchar</a>
      </div>
    </article>
  )
}

export default Articles;
