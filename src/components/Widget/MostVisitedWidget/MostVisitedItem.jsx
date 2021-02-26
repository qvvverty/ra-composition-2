/**
 * Отображает элемент списка виджета Посещаемое
 */

export default function MostVisitedItem(props) {
  return (
    <li>
      <span className="most-visited-name">{props.name}</span> - {props.description}
    </li>
  )
}
