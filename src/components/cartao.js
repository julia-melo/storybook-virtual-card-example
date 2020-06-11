import React from 'react';
import PaymentCard from 'react-payment-card-component';

const Cartao = (props) => {
  const {onClick, onMouseEnter, onMouseLeave} = props

  return (
    <div onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <PaymentCard {...props} />
    </div>
  )
}

export default Cartao;
