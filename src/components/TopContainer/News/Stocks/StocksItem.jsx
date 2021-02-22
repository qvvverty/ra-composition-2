/**
 * Отображает название валюты/ценной бумаги с ценой и процентом изменения цены
 */

export default function StocksItem(props) {
  return (
    <li className="stocks-item">
      <span className="stocks-item-currency">{props.currency}</span> {props.price}<span className="stocks-item-delta"> {props.delta}</span>
    </li>
  )
}
