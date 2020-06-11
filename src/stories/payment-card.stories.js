import React from 'react';
// import PaymentCard from 'react-payment-card-component'
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import Cartao from '../components/cartao'

export default {
  title: 'Payment card',
  component: Cartao,
  decorators: [withKnobs]
};

const bankOptions = [
  'default', 'itau', 'santander', 'nubank',
];

const modelOptions = [
  'normal', 'prime', 'personnalite',
];

const typeOptions = [
  'gold', 'black', 'platinum',
];

const brandOptions = [
  'mastercard', 'visa',
];

export const PaymentCardExample = () =>
  <Cartao
    onClick={action('clicked')}
    onMouseEnter={action('onMouseEnter')}
    onMouseLeave={action('onMouseLeave')}
    bank={select('bank', bankOptions, 'default')}
    model={select('model', modelOptions, modelOptions[0])}
    type={select('type', typeOptions, typeOptions[0])}
    brand={select('brand', brandOptions, brandOptions[0])}
    number={text('number', '0000000000000000')}
    holderName={text('holderName', '')}
    cvv={text('CVV', '558')}
    expiration={text('expiration', '')}
    flipped={boolean('flipped', false)}
  />
