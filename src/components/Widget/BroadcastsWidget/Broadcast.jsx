/**
 * Отображает элемент списка телепередач. Годится для отображения как телепередачи в эфире,
 * так и передачи из ТВ-программы
 */

export default function Broadcast(props) {
  return (
    <li>
      <span className="broadcasts-widget-time">{props.time ? props.time : '▶'}</span>
      <span>
        <a href={props.broadcastLink}>
          {props.name}
        </a>
      </span>
      <span className="broadcasts-widget-channel">
        <a href={props.channelLink}>
          {props.channel}
        </a>
      </span>
    </li>
  )
}
