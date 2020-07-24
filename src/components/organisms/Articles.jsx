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
        <a target="_blank" href="https://open.spotify.com/episode/06djKfFquWTR2ZaenMnogQ?si=bYc7q34UQNq7iZYdlCEmmw" className="button button-secondaryBlue">Escuchar</a>
      </div>
      <hr/>
      <div className="articles-content">
        <Article 
          title="The Makers - Cosmos II" 
          author="Carolina Laverde Y  Maria Jose" 
          description="Las galaxias forman estrellas, las estrellas forman mundos y los mundos forman vidas. Parte 2."
        />
        <a target="_blank" href="https://open.spotify.com/episode/2cf77DOQlKLn53kc51bH1P?si=ybKuXLcTTiyWF9ZYG1kZEA" className="button button-secondaryBlue">Escuchar</a>
      </div>
    </article>
  )
}

export default Articles;
