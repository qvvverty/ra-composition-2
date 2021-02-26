/**
 * Отображает пункты меню и текущую дату
 */

import MenuItem from "./MenuItem";

export default function NewsMenu({ menuItems, displayDate }) {
  return (
    <ul className="news-menu">
      {menuItems.map(item => <MenuItem {...item} key={item.name} />)}
      {displayDate ? <div className="news-menu-item date">{new Date().toLocaleString('ru')}</div> : null}
    </ul>
  )
}
