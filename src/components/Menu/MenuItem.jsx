/**
 * Отображает пункт меню
 */

export default function MenuItem(props) {
  return (
    <div className="news-menu-item">
      <a href={props.link}>{props.name}</a>
    </div>
  )
}
