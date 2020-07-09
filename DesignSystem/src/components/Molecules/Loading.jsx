import React from 'react'

// Atoms
import LogoLoading from '../atoms/LogoLoading';

const Loading = () => {
  return (
    <div className="loading">
      <LogoLoading />
      <h3>Cargando</h3>
    </div>
  )
}

export default Loading;
