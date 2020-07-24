import React from 'react'
import { Link } from 'react-router-dom';

// Image
import Moon from '../../../images/Moon.png';

const Hero = () => {
  return (
    <article className="hero">
      <section className="hero-text">
        <h2>Bienvenido a</h2>
        <h1 className="hero-title">NeoBit</h1>
        <h2>Una nueva forma de ver el espacio</h2>  
        <p className="hero-content">
          Somos la nueva plataforma web dedicada a la divulgación de los datos científicos de la NASA para el mundo. Comienza tu nueva aventura en los alrededores de nuestro planeta y disfruta una autentica experiencia cósmica. 
        </p>
        <Link to="/astheroids" className="button button-primaryBlack">
          Conocer Más
        </Link>
      </section>
      <figure className="hero-image">
        <img src={Moon} alt="The moon of NeoBit"/>
      </figure>
    </article>
  )
}

export default Hero;
