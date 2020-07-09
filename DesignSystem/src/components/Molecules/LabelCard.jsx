import React from 'react'

const LabelCard = ({title, description}) => {
  return (
    <div className="labelCard">
      <strong className="labelCard-title">
        { title || 'Label' }
      </strong>
      <p className="labelCard-description">
        {description || '421.250 km'}
      </p>
    </div>
  )
}

export default LabelCard
