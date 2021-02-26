/**
 * Отображает список телепередач
 */

import Broadcast from "./Broadcast"

export default function BroadcastsWidget({ broadcasts }) {
  return (
    <ul className="broadcasts-widget">
      {broadcasts.map(broadcast => {
        return <Broadcast key={broadcast.name} {...broadcast} />
      })}
    </ul>
  )
}
