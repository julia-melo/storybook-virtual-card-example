import React from 'react';
import PropTypes from 'prop-types';
import PaymentCard from 'react-payment-card-component';

/**
- O cartão pode ser customizado escolhendo-se o banco e o tipo do cartão (gold, platinum, black)
- Nubank só tem type gold e platinum
- Demais bancos só tem type black
**/
const Cartao = (props) => {
  const {onClick, onMouseEnter, onMouseLeave} = props

  return (
    <div onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <PaymentCard {...props} />
    </div>
  )
}

Cartao.propTypes = {
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  bank: PropTypes.oneOf(['itau', 'santander', 'nubank']),
  model: PropTypes.oneOf(['normal', 'prime', 'personnalite']),
  type: PropTypes.oneOf(['gold', 'black', 'platinum']),
  brand: PropTypes.oneOf(['mastercard', 'visa']),
  number: PropTypes.string,
  holderName: PropTypes.string,
  cvv: PropTypes.string,
  expiration: PropTypes.string,
  flipped: PropTypes.bool,
}

Cartao.defaultProps = {
  bank: 'nubank',
  model: 'normal',
  type: 'gold',
  brand: 'mastercard',
  number: '',
  holderName: '',
  cvv: '',
  expiration: '',
  flipped: false,
}

export default Cartao;
