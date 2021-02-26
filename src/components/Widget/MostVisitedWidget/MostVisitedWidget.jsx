/**
 * Отображает содержимое виджета Посещаемое
 */

import MostVisitedItem from "./MostVisitedItem";

export default function MostVisitedWidget({ mostVisited }) {
  return (
    <ul className="most-visited-widget">
      {mostVisited.map(item => <MostVisitedItem key={item.name} {...item} />)}
    </ul>
  )
}
