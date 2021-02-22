/**
 * Отображает список валют и ценных бумаг
 */

import StocksItem from "./StocksItem";

const stocks = [
  {
    currency: 'USD',
    price: '73.33',
    delta: '+3.11%'
  },
  {
    currency: 'EUR',
    price: '73.33',
    delta: '-0.11%'
  },
  {
    currency: 'Нефть',
    price: '64.33',
    delta: '+2.11%'
  }
];

export default function Stocks() {
  return (
    <ul className="stocks">
      {stocks.map(item => <StocksItem {...item} key={item.currency} />)}
      <span className="stocks-show-more">...</span>
    </ul>
  )
}
