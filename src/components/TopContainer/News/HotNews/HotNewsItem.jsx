/**
 * Отображает новость
 */

export default function HotNewsItem(props) {
  return (
    <div className="news-item">
      <span className="news-agency-icon" style={{backgroundImage: `url(${props.icon})`}}></span>
      <a href={props.link}>{props.text}</a>
    </div>
  )
}
